import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export const dynamic = "force-dynamic";

const ACCENT = "#ff9800";
const PRIMARY = "#345f85";

interface PostMeta {
  slug: string;
  title: string;
  date?: string;
  description?: string;
}

async function listPosts(): Promise<PostMeta[]> {
  try {
    const dir = path.join(process.cwd(), "content/blog");
    const files = await fs.readdir(dir);
    const posts = await Promise.all(
      files
        .filter((f) => f.endsWith(".mdx"))
        .map(async (f) => {
          const slug = f.replace(/\.mdx$/, "");
          try {
            const raw = await fs.readFile(path.join(dir, f), "utf-8");
            const { data } = matter(raw);
            return {
              slug,
              title: data.title ?? slug,
              date: data.date ? String(data.date).slice(0, 10) : undefined,
              description: data.description ?? undefined,
            } as PostMeta;
          } catch {
            return { slug, title: slug };
          }
        })
    );
    return posts.sort((a, b) =>
      (b.date ?? "").localeCompare(a.date ?? "")
    );
  } catch {
    return [];
  }
}

export default async function AdminDashboard() {
  const posts = await listPosts();

  return (
    <div
      style={{
        minHeight: "100svh",
        background: "#080f17",
        fontFamily: "var(--font-dm-sans), -apple-system, sans-serif",
        color: "#fff",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 22,
              fontWeight: 600,
              color: "#fff",
            }}
          >
            Steffen Schuster
          </span>
          <span
            style={{
              fontSize: 12,
              fontFamily: "var(--font-jetbrains), monospace",
              letterSpacing: "0.12em",
              color: ACCENT,
              textTransform: "uppercase",
              background: "rgba(255,152,0,0.12)",
              padding: "3px 8px",
              borderRadius: 4,
            }}
          >
            Admin
          </span>
        </div>

        <form action="/api/admin/logout" method="POST">
          <button
            type="submit"
            style={{
              padding: "8px 18px",
              borderRadius: 100,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "transparent",
              color: "rgba(255,255,255,0.6)",
              fontSize: 13,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Abmelden
          </button>
        </form>
      </header>

      {/* Content */}
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px" }}>
        <h1
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 38,
            fontWeight: 500,
            margin: "0 0 8px",
          }}
        >
          Blog-Artikel
        </h1>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 40 }}>
          {posts.length} {posts.length === 1 ? "Artikel" : "Artikel"} vorhanden · Änderungen sind sofort live
        </p>

        {posts.length === 0 ? (
          <div
            style={{
              padding: "40px 24px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.08)",
              textAlign: "center",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Keine Blog-Artikel gefunden in <code style={{ fontSize: 13 }}>content/blog/</code>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/admin/blog/${post.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 24px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  textDecoration: "none",
                  color: "#fff",
                  transition: "background 0.15s, border-color 0.15s",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: 20,
                      fontWeight: 500,
                      marginBottom: 4,
                    }}
                  >
                    {post.title}
                  </div>
                  {post.description && (
                    <div
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.45)",
                        marginBottom: 4,
                      }}
                    >
                      {post.description}
                    </div>
                  )}
                  <div
                    style={{
                      fontSize: 12,
                      fontFamily: "var(--font-jetbrains), monospace",
                      color: "rgba(255,255,255,0.3)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {post.slug}{post.date && ` · ${post.date}`}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: ACCENT,
                    whiteSpace: "nowrap",
                    marginLeft: 16,
                  }}
                >
                  Bearbeiten →
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Hinweis */}
        <div
          style={{
            marginTop: 48,
            padding: "16px 20px",
            background: `rgba(52,95,133,0.15)`,
            border: `1px solid ${PRIMARY}44`,
            borderRadius: 10,
            fontSize: 13,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: "rgba(255,255,255,0.75)" }}>Hinweis:</strong> Gespeicherte Änderungen werden über Netlify Blobs
          übertragen und sind sofort live — ohne neuen Deploy.
        </div>
      </main>
    </div>
  );
}
