import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const { content } = (await req.json()) as { content: string };

  if (!content || typeof content !== "string") {
    return NextResponse.json({ error: "Kein Inhalt angegeben." }, { status: 400 });
  }

  // Slug validieren (nur Buchstaben, Zahlen, Bindestriche)
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return NextResponse.json({ error: "Ungültiger Slug." }, { status: 400 });
  }

  // ── Netlify Blobs (Produktion) ─────────────────────────────────────────────
  // @netlify/blobs ist in der Netlify-Laufzeit verfügbar und speichert Inhalte
  // persistent ohne einen neuen Deploy auszulösen → Änderungen sind sofort live.
  if (process.env.NETLIFY) {
    try {
      const { getStore } = await import("@netlify/blobs");
      const store = getStore("blog-content");
      await store.set(slug, content);
      return NextResponse.json({ ok: true, storage: "netlify-blobs" });
    } catch (err) {
      console.error("Netlify Blobs Fehler:", err);
      return NextResponse.json({ error: "Speichern fehlgeschlagen." }, { status: 500 });
    }
  }

  // ── Fallback: Dateisystem (lokale Entwicklung) ─────────────────────────────
  try {
    const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
    await fs.writeFile(filePath, content, "utf-8");
    return NextResponse.json({ ok: true, storage: "filesystem" });
  } catch (err) {
    console.error("Dateisystem Fehler:", err);
    return NextResponse.json({ error: "Speichern fehlgeschlagen." }, { status: 500 });
  }
}
