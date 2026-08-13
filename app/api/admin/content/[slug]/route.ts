import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  if (!/^[a-z0-9-]+$/.test(slug)) {
    return NextResponse.json({ error: "Ungültiger Slug." }, { status: 400 });
  }

  // ── Netlify Blobs zuerst (Produktion) ─────────────────────────────────────
  if (process.env.NETLIFY) {
    try {
      const { getStore } = await import("@netlify/blobs");
      const store = getStore("blog-content");
      const content = await store.get(slug);
      if (content) {
        return new NextResponse(content, {
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
      }
    } catch (err) {
      console.error("Blobs Lesefehler:", err);
    }
  }

  // ── Fallback: Dateisystem ─────────────────────────────────────────────────
  try {
    const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
    const content = await fs.readFile(filePath, "utf-8");
    return new NextResponse(content, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch {
    return NextResponse.json({ error: "Artikel nicht gefunden." }, { status: 404 });
  }
}
