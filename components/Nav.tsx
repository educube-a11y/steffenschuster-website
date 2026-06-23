"use client";
import { LogoMark } from "./LogoMark";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 40px",
        background: "rgba(20,40,58,0.55)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <a
        href="#hero"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          textDecoration: "none",
        }}
      >
        <LogoMark size={34} />
        <span
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 22,
            fontWeight: 600,
            color: "#fff",
            letterSpacing: "0.5px",
          }}
        >
          Steffen Schuster
        </span>
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        {(
          [
            ["#nora", "Nora-KI"],
            ["#meilensteine", "Meilensteine"],
            ["#auszeichnungen", "Auszeichnungen"],
            ["#angebot", "Angebot"],
          ] as const
        ).map(([href, label]) => (
          <a
            key={href}
            href={href}
            style={{
              color: "rgba(255,255,255,0.78)",
              textDecoration: "none",
              fontSize: 14.5,
              fontWeight: 500,
              letterSpacing: "0.2px",
            }}
          >
            {label}
          </a>
        ))}
        <ThemeToggle />
        <a
          href="#kontakt"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "9px 20px",
            borderRadius: 100,
            background: "#ff9800",
            color: "#16212e",
            textDecoration: "none",
            fontSize: 14.5,
            fontWeight: 600,
          }}
        >
          Gespräch starten
        </a>
      </div>
    </nav>
  );
}
