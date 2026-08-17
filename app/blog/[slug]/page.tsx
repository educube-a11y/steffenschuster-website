import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Nav } from "@/components/Nav";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import "../blog.css";

export const dynamic = "force-dynamic";




const ACCENT = "#ff9800";
const PRIMARY = "#345f85";
const DARK_BG = "#0f1f2e";
const SITE_URL = "https://steffenschuster.de";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Steffen Schuster`,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      style={{
        fontFamily: "var(--font-cormorant), serif",
        fontSize: "clamp(32px, 4vw, 48px)",
        fontWeight: 500,
        lineHeight: 1.15,
        color: "var(--text-primary)",
        margin: "48px 0 20px",
      }}
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      style={{
        fontFamily: "var(--font-cormorant), serif",
        fontSize: "clamp(24px, 3vw, 34px)",
        fontWeight: 500,
        lineHeight: 1.2,
        color: "var(--text-primary)",
        margin: "40px 0 16px",
      }}
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      style={{
        fontSize: 18,
        fontWeight: 600,
        color: "var(--text-primary)",
        margin: "32px 0 12px",
      }}
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      style={{
        fontSize: 17,
        lineHeight: 1.8,
        color: "var(--text-secondary)",
        margin: "0 0 20px",
      }}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      style={{
        margin: "0 0 20px",
        paddingLeft: 24,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      style={{
        margin: "0 0 20px",
        paddingLeft: 24,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-secondary)" }}
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong style={{ color: "var(--text-primary)", fontWeight: 600 }} {...props} />
  ),
  a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        style={{ color: PRIMARY, textDecoration: "underline", textUnderlineOffset: 3 }}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      />
    );
  },
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      style={{
        margin: "32px 0",
        padding: "20px 28px",
        borderLeft: `3px solid ${ACCENT}`,
        background: "var(--card-bg)",
        borderRadius: "0 10px 10px 0",
        fontFamily: "var(--font-cormorant), serif",
        fontSize: "clamp(18px, 2.5vw, 22px)",
        fontStyle: "italic",
        color: "var(--text-primary)",
        lineHeight: 1.55,
      }}
      {...props}
    />
  ),
  hr: () => (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid var(--card-border)",
        margin: "40px 0",
      }}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      style={{
        fontFamily: "var(--font-jetbrains), monospace",
        fontSize: "0.875em",
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: 4,
        padding: "2px 6px",
        color: ACCENT,
      }}
      {...props}
    />
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE_URL}/blog/${slug}`,
    author: {
      "@type": "Person",
      name: post.author.name,
      url: `${SITE_URL}/ueber`,
      sameAs: [
        "https://www.linkedin.com/in/steffen-schuster-7297088b/",
        "https://www.wikidata.org/wiki/Q140520910",
      ],
    },
    publisher: {
      "@type": "Person",
      name: "Steffen Schuster",
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
  };

  const faqJsonLd =
    post.faq && post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  return (
    <div
      style={{
        background: "var(--page-bg)",
        color: "var(--text-primary)",
        minHeight: "100svh",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <ScrollRevealInit />
      <ScrollAnimations />
      <CustomCursor />
      <Nav />

      {/* ── HERO ── */}
      <section
        className="blog-hero"
        style={{
          background: DARK_BG,
          padding: "160px 40px 80px",
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
              "radial-gradient(ellipse 60% 60% at 25% 50%, rgba(52,95,133,0.18) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 760,
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
                flexWrap: "wrap",
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
              <li>
                <Link
                  href="/blog"
                  style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
                >
                  Blog
                </Link>
              </li>
              <li aria-hidden>·</li>
              <li style={{ color: ACCENT }}>{post.title}</li>
            </ol>
          </nav>

          <p
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              letterSpacing: "0.18em",
              color: ACCENT,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            {formatDate(post.date)}
          </p>

          <h1
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 500,
              fontSize: "clamp(36px, 5.5vw, 68px)",
              lineHeight: 1.05,
              color: "#fff",
              margin: "0 0 28px",
            }}
          >
            {post.title}
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.6)",
              margin: "0 0 40px",
            }}
          >
            {post.description}
          </p>

          {/* Autor-Chip */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 16px",
              borderRadius: 100,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            {post.author.avatar && (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={32}
                height={32}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
            )}
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#fff",
                  lineHeight: 1.3,
                }}
              >
                {post.author.name}
              </p>
              {post.author.bio && (
                <p
                  style={{
                    margin: 0,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.3,
                  }}
                >
                  {post.author.bio}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTIKEL-BODY ── */}
      <section
        data-light-section
        style={{
          background: "var(--section-alt-bg)",
          padding: "72px 40px 120px",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <MDXRemote source={post.content} components={mdxComponents} />

          {/* ── BACK LINK ── */}
          <div
            style={{
              marginTop: 72,
              paddingTop: 40,
              borderTop: "1px solid var(--card-border)",
            }}
          >
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 15,
                color: PRIMARY,
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              ← Zurück zum Blog
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      {post.faq && post.faq.length > 0 && (
        <section
          data-light-section
          style={{
            background: "var(--page-bg)",
            padding: "80px 40px 100px",
            borderTop: "1px solid var(--card-border)",
          }}
        >
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11,
                letterSpacing: "0.18em",
                color: ACCENT,
                textTransform: "uppercase",
                marginBottom: 32,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 28,
                  height: 1.5,
                  background: ACCENT,
                }}
              />
              Häufige Fragen
            </p>
            <div>
              {post.faq.map((item, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary>{item.question}</summary>
                  <div className="faq-answer">{item.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
