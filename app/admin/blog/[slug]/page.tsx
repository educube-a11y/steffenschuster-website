import { notFound } from "next/navigation";
import { EditorClient } from "./EditorClient";
import fs from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

async function getContent(slug: string): Promise<string | null> {
  // ── Netlify Blobs zuerst (enthält von Admin gespeicherte Versionen) ────────
  if (process.env.NETLIFY) {
    try {
      const { getStore } = await import("@netlify/blobs");
      const store = getStore("blog-content");
      const content = await store.get(slug);
      if (content) return content;
    } catch (err) {
      console.error("Blobs Lesefehler:", err);
    }
  }

  // ── Fallback: Dateisystem ─────────────────────────────────────────────────
  try {
    const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
    return await fs.readFile(filePath, "utf-8");
  } catch {
    return null;
  }
}

export default async function AdminEditorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!/^[a-z0-9-]+$/.test(slug)) notFound();

  const content = await getContent(slug);
  if (content === null) notFound();

  return <EditorClient slug={slug} initialContent={content} />;
}
