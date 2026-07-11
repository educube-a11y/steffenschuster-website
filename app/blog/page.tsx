import type { Metadata } from "next";
import Link from "next/link";
import "./blog.css";
import { Nav } from "@/components/Nav";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { getAllPosts, formatDate } from "@/lib/blog";

const ACCENT = "#ff9800";
const PRIMARY = "#345f85";
const DARK_BG = "#0f1f2e";
const SITE_URL = "https://www.steffenschuster.de";

export const metadata: Metadata = {
  title: "Blog — Steffen Schuster",
  description:
    "Gedanken zu KI in Bildung, Pädagogik und dem Wandel des Lernens — direkt, persönlich und praxisnah von Steffen Schuster.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog — Steffen Schuster",
    description:
      "Gedanken zu KI in Bildung, Pädagogik und dem Wandel des Lernens.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div
      style={{
        background: "var(--page-bg)",
        color: "var(--text-primary)",
        minHeight: "100svh",
      }}
    >
      <ScrollRevealInit />
      <ScrollAnimations />
      <CustomCursor />
      <Nav />

      {/* ── HERO ── */}
      <section
        className="blog-hero"
        style={{
          background: DARK_BG,
          padding: "160px 40px 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 70% at 20% 60%, rgba(52,95,133,0.18) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol
              style={{
                display: "flex",
                gap: 8,
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
                >
                  Steffen Schuster
                </Link>
              </li>
              <li aria-hidden>·</li>
              <li style={{ color: ACCENT }}>Blog</li>
            </ol>
          </nav>

          <p
            data-reveal
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              letterSpacing: "0.18em",
              color: ACCENT,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Perspektiven & Praxis
          </p>
          <h1
            data-reveal
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 500,
              fontSize: "clamp(44px, 6vw, 80px)",
              lineHeight: 1.0,
              color: "#fff",
              margin: "0 0 28px",
            }}
          >
            Blog
          </h1>
          <p
            data-reveal
            style={{
              fontSize: 18,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 560,
              margin: 0,
            }}
          >
            Gedanken zu KI in Bildung, Unterricht und dem Wandel des Lernens —
            direkt aus der Praxis.
          </p>
        </div>
      </section>

      {/* ── ARTIKEL-LISTE ── */}
      <section
        data-light-section
        style={{
          background: "var(--section-alt-bg)",
          padding: "80px 40px 120px",
        }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {posts.length === 0 ? (
            <p style={{ color: "var(--text-secondary)", fontSize: 16 }}>
              Noch keine Artikel veröffentlicht.
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {posts.map((post, i) => (
                <article key={post.slug} data-reveal>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <div className="blog-card-row">
                      <div>
                        {i === 0 && (
                          <span
                            style={{
                              display: "inline-block",
                              marginBottom: 12,
                              padding: "3px 10px",
                              borderRadius: 100,
                              background: ACCENT,
                              color: "#16212e",
                              fontSize: 11,
                              fontWeight: 700,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              fontFamily: "var(--font-jetbrains), monospace",
                            }}
                          >
                            Neuester Artikel
                          </span>
                        )}
                        <h2
                          style={{
                            fontFamily: "var(--font-cormorant), serif",
                            fontSize: "clamp(22px, 3vw, 30px)",
                            fontWeight: 500,
                            color: "var(--text-primary)",
                            margin: "0 0 10px",
                            lineHeight: 1.2,
                          }}
                        >
                          {post.title}
                        </h2>
                        <p
                          style={{
                            fontSize: 15,
                            color: "var(--text-secondary)",
                            lineHeight: 1.65,
                            margin: "0 0 16px",
                            maxWidth: 560,
                          }}
                        >
                          {post.description}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 16,
                            flexWrap: "wrap",
                          }}
                        >
                          <span
                            style={{
                              fontSize: 13,
                              color: "var(--text-secondary)",
                              fontFamily: "var(--font-jetbrains), monospace",
                            }}
                          >
                            {formatDate(post.date)}
                          </span>
                          <span
                            style={{
                              fontSize: 13,
                              color: PRIMARY,
                              fontWeight: 500,
                            }}
                          >
                            {post.author.name}
                          </span>
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: 22,
                          color: ACCENT,
                          alignSelf: "center",
                          flexShrink: 0,
                        }}
                        aria-hidden
                      >
                        →
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
