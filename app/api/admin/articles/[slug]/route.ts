import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

// GET: MDX-Inhalt laden
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Artikel nicht gefunden." }, { status: 404 });
  }

  const content = fs.readFileSync(filePath, "utf-8");
  return NextResponse.json({ content });
}

// PUT: MDX-Inhalt speichern
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const { content } = await request.json();

  if (!content || typeof content !== "string") {
    return NextResponse.json({ error: "Ungültiger Inhalt." }, { status: 400 });
  }

  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Artikel nicht gefunden." }, { status: 404 });
  }

  // Produktion: GitHub API (Netlify-Deploy wird automatisch ausgelöst)
  if (process.env.GITHUB_TOKEN) {
    return saveViaGitHub(slug, content);
  }

  // Lokale Entwicklung: direkt auf Dateisystem schreiben
  try {
    fs.writeFileSync(filePath, content, "utf-8");
    return NextResponse.json({
      ok: true,
      message: "Lokal gespeichert. (Kein GITHUB_TOKEN gesetzt.)",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Speichern fehlgeschlagen." }, { status: 500 });
  }
}

async function saveViaGitHub(slug: string, content: string): Promise<NextResponse> {
  const token = process.env.GITHUB_TOKEN!;
  const owner = process.env.GITHUB_OWNER!;
  const repo = process.env.GITHUB_REPO ?? "steffenschuster-website";
  const filePath = `content/blog/${slug}.mdx`;
  const apiBase = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github.v3+json",
    "Content-Type": "application/json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  // Aktuellen SHA der Datei abrufen (für den Update-Commit nötig)
  const getRes = await fetch(apiBase, { headers });
  if (!getRes.ok) {
    return NextResponse.json(
      { error: "GitHub: Datei konnte nicht geladen werden." },
      { status: 500 }
    );
  }
  const fileData = await getRes.json();
  const sha: string = fileData.sha;

  // Datei via GitHub API aktualisieren
  const putRes = await fetch(apiBase, {
    method: "PUT",
    headers,
    body: JSON.stringify({
      message: `content: update blog/${slug}`,
      content: Buffer.from(content).toString("base64"),
      sha,
    }),
  });

  if (!putRes.ok) {
    const err = await putRes.text();
    console.error("GitHub PUT error:", err);
    return NextResponse.json(
      { error: "GitHub: Speichern fehlgeschlagen." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Auf GitHub gespeichert — Netlify-Deploy läuft (~1–2 Min).",
  });
}
