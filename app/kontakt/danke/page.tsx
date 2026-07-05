import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { CustomCursor } from "@/components/CustomCursor";

const ACCENT = "#ff9800";
const DARK_BG = "#0f1f2e";

export const metadata: Metadata = {
  title: "Danke! — Steffen Schuster",
  robots: { index: false },
};

export default function DankePage() {
  return (
    <div style={{ background: DARK_BG, color: "#fff", minHeight: "100svh", display: "flex", flexDirection: "column" }}>
      <CustomCursor />
      <Nav />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 40px",
        }}
      >
        <div
          style={{
            fontSize: 56,
            marginBottom: 24,
          }}
        >
          ✓
        </div>
        <h1
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 500,
            fontSize: "clamp(40px, 6vw, 72px)",
            lineHeight: 1.05,
            color: "#fff",
            margin: "0 0 20px",
          }}
        >
          Danke für{" "}
          <em style={{ color: ACCENT, fontStyle: "italic" }}>deine Nachricht.</em>
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.65)",
            maxWidth: 480,
            marginBottom: 48,
          }}
        >
          Ich melde mich so bald wie möglich — meistens innerhalb eines Werktages.
        </p>
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "14px 32px",
            borderRadius: 100,
            border: "1px solid rgba(255,255,255,0.28)",
            color: "#fff",
            textDecoration: "none",
            fontSize: 15,
            fontWeight: 500,
          }}
        >
          ← Zurück zur Startseite
        </a>
      </div>
    </div>
  );
}
