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

  // Menü bei Route-Wechsel schließen
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Body-Scroll sperren wenn Menü offen
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

  return (
    <>
      <nav
        className="site-nav"
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

        {/* Desktop-Links */}
        <div className="nav-desktop-links" style={{ display: "flex", alignItems: "center", gap: 28 }}>
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
            href="/autor"
            style={{
              color: pathname === "/autor" || pathname.startsWith("/buecher") ? "#ff9800" : "rgba(255,255,255,0.78)",
              textDecoration: "none",
              fontSize: 14.5,
              fontWeight: pathname === "/autor" || pathname.startsWith("/buecher") ? 600 : 500,
              letterSpacing: "0.2px",
            }}
          >
            Bücher
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

        {/* Mobile-Steuerung: ThemeToggle + Hamburger */}
        <div className="nav-mobile-controls" style={{ display: "none", alignItems: "center", gap: 12 }}>
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: 40,
              height: 40,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
              gap: 5,
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
                transition: "opacity 0.25s",
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

      {/* Mobile Menü-Drawer */}
      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        >
          <div
            className="mobile-menu-drawer"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              background: "rgba(9,18,30,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              padding: "84px 24px 36px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {mainLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  fontSize: 22,
                  fontWeight: 500,
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  fontFamily: "var(--font-cormorant), serif",
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="/ueber"
              onClick={() => setMenuOpen(false)}
              style={{
                color: pathname === "/ueber" ? "#ff9800" : "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontSize: 22,
                fontWeight: pathname === "/ueber" ? 600 : 500,
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                fontFamily: "var(--font-cormorant), serif",
              }}
            >
              Über mich
            </a>
            <a
              href="/autor"
              onClick={() => setMenuOpen(false)}
              style={{
                color: pathname === "/autor" || pathname.startsWith("/buecher") ? "#ff9800" : "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontSize: 22,
                fontWeight: pathname === "/autor" || pathname.startsWith("/buecher") ? 600 : 500,
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                fontFamily: "var(--font-cormorant), serif",
              }}
            >
              Bücher
            </a>
            <div style={{ paddingTop: 24 }}>
              <a
                href="/kontakt#formular"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "15px 24px",
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
          </div>
        </div>
      )}
    </>
  );
}
