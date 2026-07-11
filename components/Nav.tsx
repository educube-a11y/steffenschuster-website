"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LogoMark } from "./LogoMark";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const base = isHome ? "" : "/";
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const mainLinks: [string, string][] = [
    [`${base}#nora`, "Nora-KI"],
    [`${base}#meilensteine`, "Meilensteine"],
    [`${base}#auszeichnungen`, "Auszeichnungen"],
    [`${base}#angebot`, "Angebot"],
  ];

  const allLinks: [string, string][] = [
    ...mainLinks,
    ["/ueber", "Über mich"],
    ["/blog", "Blog"],
    ["/kontakt", "Kontakt"],
  ];

  return (
    <>
      <nav
        className="site-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
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
        {/* Logo */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <LogoMark size={34} />
          <span
            className="nav-logo-text"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 22,
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "0.5px",
              whiteSpace: "nowrap",
            }}
          >
            Steffen Schuster
          </span>
        </a>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {mainLinks.map(([href, label]) => (
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
          <a
            href="/ueber"
            style={{
              color: pathname === "/ueber" ? "#ff9800" : "rgba(255,255,255,0.78)",
              textDecoration: "none",
              fontSize: 14.5,
              fontWeight: pathname === "/ueber" ? 600 : 500,
              letterSpacing: "0.2px",
            }}
          >
            Über mich
          </a>
          <a
            href="/blog"
            style={{
              color: pathname?.startsWith("/blog") ? "#ff9800" : "rgba(255,255,255,0.78)",
              textDecoration: "none",
              fontSize: 14.5,
              fontWeight: pathname?.startsWith("/blog") ? 600 : 500,
              letterSpacing: "0.2px",
            }}
          >
            Blog
          </a>
          <ThemeToggle />
          <a
            href="/kontakt#formular"
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

        {/* Mobile: theme toggle + hamburger */}
        <div className="nav-mobile" style={{ display: "none", alignItems: "center", gap: 14 }}>
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px 4px",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
            }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#fff",
                borderRadius: 2,
                transition: "transform 0.25s, opacity 0.25s",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#fff",
                borderRadius: 2,
                transition: "opacity 0.2s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#fff",
                borderRadius: 2,
                transition: "transform 0.25s, opacity 0.25s",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className="nav-overlay"
        aria-hidden={!menuOpen}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 199,
          background: "rgba(8,15,23,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 32px 48px",
          gap: 0,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.25s",
        }}
      >
        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {allLinks.map(([href, label]) => {
            const active =
              pathname === href ||
              (href.startsWith("/blog") && pathname?.startsWith("/blog"));
            return (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: 38,
                  fontWeight: 500,
                  color: active ? "#ff9800" : "#fff",
                  textDecoration: "none",
                  lineHeight: 1.25,
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {label}
              </a>
            );
          })}
        </nav>
        <a
          href="/kontakt#formular"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: 32,
            display: "inline-flex",
            alignItems: "center",
            alignSelf: "flex-start",
            padding: "14px 28px",
            borderRadius: 100,
            background: "#ff9800",
            color: "#16212e",
            textDecoration: "none",
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          Gespräch starten →
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .site-nav { padding: 14px 20px !important; }
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
