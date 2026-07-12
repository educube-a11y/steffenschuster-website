import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { CustomCursor } from "@/components/CustomCursor";
import { KontaktForm } from "./KontaktForm";

const ACCENT = "#ff9800";
const PRIMARY = "#345f85";
const DARK_BG = "#0f1f2e";
const SITE_URL = "https://steffenschuster.de";

export const metadata: Metadata = {
  title: "Kontakt — Steffen Schuster",
  description:
    "KI-Training, Lernumgebungen, Facilitation oder einfach ein Gespräch — schreib Steffen Schuster direkt an.",
  alternates: { canonical: `${SITE_URL}/kontakt` },
};

export default function KontaktPage() {
  return (
    <div style={{ background: "var(--page-bg)", color: "var(--text-primary)", minHeight: "100svh" }}>
      <ScrollRevealInit />
      <ScrollAnimations />
      <CustomCursor />
      <Nav />

      {/* ── HERO ── */}
      <section
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
              "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(52,95,133,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p
            data-reveal
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 12,
              letterSpacing: "0.18em",
              color: ACCENT,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Kontakt
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
            Lass uns{" "}
            <em style={{ color: ACCENT, fontStyle: "italic" }}>reden.</em>
          </h1>
          <p
            data-reveal
            style={{
              fontSize: 18,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.65)",
              margin: 0,
            }}
          >
            KI-Training, Lernumgebungen, Facilitation oder einfach ein erstes Gespräch
            darüber, was möglich ist — ich freue mich von dir zu hören.
          </p>
        </div>
      </section>

      {/* ── FORMULAR ── */}
      <section
        id="formular"
        data-light-section
        style={{
          background: "var(--section-alt-bg)",
          padding: "100px 40px 120px",
        }}
      >
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            display: "grid",
            gap: 60,
          }}
        >
          {/* Netlify-Form (Client Component) */}
          <div data-reveal>
            <KontaktForm />
          </div>

          {/* Direktkontakt */}
          <div data-reveal style={{ borderTop: "1px solid var(--card-border)", paddingTop: 48 }}>
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: PRIMARY,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Direktkontakt
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="mailto:steffen@educube.de"
                style={{
                  fontSize: 16,
                  color: ACCENT,
                  textDecoration: "underline",
                  textDecorationColor: "rgba(255,152,0,0.4)",
                  textUnderlineOffset: 3,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                ✉ steffen@educube.de
              </a>
              <address style={{ fontStyle: "normal", fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                educube GmbH<br />
                Steffen Schuster<br />
                Stiller Weg 15<br />
                22607 Hamburg
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER / NAP ── */}
      <footer
        style={{
          background: "#080f17",
          padding: "40px 40px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: 18,
                color: "rgba(255,255,255,0.85)",
                fontWeight: 500,
              }}
            >
              Steffen Schuster
            </span>
            <address
              style={{
                fontStyle: "normal",
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
              }}
            >
              educube GmbH · Steffen Schuster · Stiller Weg 15 · 22607 Hamburg ·{" "}
              <a
                href="mailto:steffen@educube.de"
                style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
              >
                steffen@educube.de
              </a>
            </address>
          </div>
          <nav style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { label: "Startseite", href: "/" },
              { label: "Über mich", href: "/ueber" },
              { label: "nora-ki.de", href: "https://nora-ki.de" },
              { label: "educube.de", href: "https://www.educube.de/" },
              { label: "Kontakt", href: "/kontakt" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
