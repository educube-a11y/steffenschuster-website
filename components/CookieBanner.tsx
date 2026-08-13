"use client";

import { useState, useEffect } from "react";

const ACCENT = "#ff9800";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Kleine Verzögerung, damit der Banner nicht sofort beim Laden aufblitzt
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    // Analytics-Skripte hier einbinden, sobald verfügbar:
    // window.dispatchEvent(new CustomEvent("cookieConsent", { detail: "accepted" }));
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(700px, calc(100vw - 48px))",
        zIndex: 9999,
        background: "rgba(12,26,40,0.94)",
        backdropFilter: "saturate(180%) blur(24px)",
        WebkitBackdropFilter: "saturate(180%) blur(24px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 16,
        padding: "24px 28px",
        boxShadow:
          "0 24px 64px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.07) inset",
        display: "flex",
        alignItems: "center",
        gap: 24,
        flexWrap: "wrap",
      }}
      // CSS-Klasse für Mobile-Override
      className="cookie-banner-inner"
    >
      {/* Text */}
      <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: 6 }}>
        <p
          style={{
            margin: 0,
            fontSize: 14.5,
            fontWeight: 600,
            color: "#fff",
            letterSpacing: "0.1px",
          }}
        >
          Diese Website verwendet Cookies
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 13.5,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          Wir nutzen Cookies zur Analyse und Verbesserung. Nicht-essentielle Cookies
          werden nur mit deiner Zustimmung geladen.{" "}
          <a
            href="/datenschutz"
            style={{
              color: ACCENT,
              textDecoration: "underline",
              textDecorationColor: "rgba(255,152,0,0.35)",
              textUnderlineOffset: 2,
              whiteSpace: "nowrap",
            }}
          >
            Datenschutzerklärung
          </a>
        </p>
      </div>

      {/* Buttons */}
      <div
        className="cookie-banner-buttons"
        style={{
          display: "flex",
          gap: 10,
          flexShrink: 0,
          flexWrap: "wrap",
        }}
      >
        {/* Ablehnen — gleiche Größe wie Akzeptieren (DSGVO: gleichwertige Option) */}
        <button
          onClick={handleDecline}
          style={{
            padding: "10px 20px",
            borderRadius: 100,
            border: "1.5px solid rgba(255,255,255,0.22)",
            background: "transparent",
            color: "rgba(255,255,255,0.72)",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "inherit",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            const btn = e.currentTarget;
            btn.style.borderColor = "rgba(255,255,255,0.5)";
            btn.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            const btn = e.currentTarget;
            btn.style.borderColor = "rgba(255,255,255,0.22)";
            btn.style.color = "rgba(255,255,255,0.72)";
          }}
        >
          Ablehnen
        </button>

        {/* Akzeptieren */}
        <button
          onClick={handleAccept}
          style={{
            padding: "10px 20px",
            borderRadius: 100,
            border: "none",
            background: ACCENT,
            color: "#16212e",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "inherit",
            whiteSpace: "nowrap",
          }}
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
}
