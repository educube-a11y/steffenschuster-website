import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function getArticles() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: (data.title as string) ?? slug,
      date: (data.date as string) ?? null,
    };
  }).sort((a, b) => (a.date && b.date ? b.date.localeCompare(a.date) : 0));
}

const ACCENT = "#ff9800";
const CARD_BG = "rgba(255,255,255,0.04)";
const BORDER = "rgba(255,255,255,0.08)";

export default function AdminDashboard() {
  const articles = getArticles();

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "60px 24px" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 48 }}>
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Blog-Artikel
          </h1>
          <p style={{ margin: "6px 0 0", color: "rgba(255,255,255,0.4)", fontSize: 14 }}>
            {articles.length} Artikel · zum Bearbeiten klicken
          </p>
        </div>
        <LogoutButton />
      </div>

      {/* Artikel-Liste */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/admin/blog/${a.slug}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 24px",
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderRadius: 12,
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: 4,
                }}
              >
                {a.title}
              </div>
              {a.date && (
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
                  {a.date}
                </div>
              )}
            </div>
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: ACCENT,
                flexShrink: 0,
                marginLeft: 16,
              }}
            >
              Bearbeiten →
            </span>
          </Link>
        ))}
      </div>

      {/* Link zur Website */}
      <div style={{ marginTop: 48, textAlign: "center" }}>
        <Link
          href="/blog"
          style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}
          target="_blank"
        >
          ← zur Website
        </Link>
      </div>
    </div>
  );
}

function LogoutButton() {
  return (
    <form action="/api/admin/logout" method="POST">
      <button
        type="submit"
        style={{
          padding: "9px 18px",
          borderRadius: 100,
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "rgba(255,255,255,0.7)",
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        Abmelden
      </button>
    </form>
  );
}
