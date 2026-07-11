"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "cookie-consent";

export type CookieConsent = "accepted" | "rejected";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    window.dispatchEvent(new CustomEvent("cookieConsentAccepted"));
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      aria-modal="false"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "#0a1929",
        borderTop: "2px solid #ff9800",
        boxShadow: "0 -8px 40px rgba(0,0,0,0.45)",
        padding: "28px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "20px 48px",
          alignItems: "center",
        }}
      >
        {/* Text */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 20,
              fontWeight: 600,
              color: "#fff",
              margin: "0 0 8px",
              letterSpacing: "0.01em",
            }}
          >
            Diese Website verwendet Cookies
          </p>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.55)",
              margin: 0,
              maxWidth: 680,
            }}
          >
            Wir setzen technisch notwendige Cookies ein, die für den Betrieb der Website erforderlich sind.
            Zusätzlich möchten wir mit deiner Zustimmung anonyme Nutzungsstatistiken erheben, um die
            Website zu verbessern. Du kannst deine Entscheidung jederzeit in der{" "}
            <Link
              href="/datenschutz"
              style={{
                color: "#ff9800",
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              Datenschutzerklärung
            </Link>{" "}
            widerrufen.
          </p>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            flexShrink: 0,
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={reject}
            style={{
              padding: "12px 24px",
              borderRadius: 100,
              border: "1.5px solid rgba(255,255,255,0.25)",
              background: "transparent",
              color: "rgba(255,255,255,0.75)",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "inherit",
              whiteSpace: "nowrap",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.color = "rgba(255,255,255,0.75)";
            }}
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            style={{
              padding: "12px 24px",
              borderRadius: 100,
              border: "none",
              background: "#ff9800",
              color: "#16212e",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "inherit",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Alle akzeptieren
          </button>
        </div>
      </div>

      {/* Mobile stacked layout */}
      <style>{`
        @media (max-width: 680px) {
          [aria-label="Cookie-Einstellungen"] > div {
            grid-template-columns: 1fr !important;
          }
          [aria-label="Cookie-Einstellungen"] > div > div:last-child {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </div>
  );
}
