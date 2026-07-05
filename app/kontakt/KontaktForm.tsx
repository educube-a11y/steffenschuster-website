"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ACCENT = "#ff9800";
const PRIMARY = "#345f85";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 18px",
  borderRadius: 10,
  border: "1.5px solid var(--card-border)",
  background: "var(--card-bg)",
  color: "var(--text-primary)",
  fontSize: 16,
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

export function KontaktForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const formData = new FormData(e.currentTarget);
    try {
      const resp = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (resp.ok) {
        router.push("/kontakt/danke");
      } else {
        setError(true);
        setLoading(false);
      }
    } catch {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <form
      name="kontakt"
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 24 }}
    >
      <input type="hidden" name="form-name" value="kontakt" />

      {/* Name */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label
          htmlFor="name"
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
          }}
        >
          Name <span style={{ color: ACCENT }}>*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Vorname Nachname"
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
          onBlur={(e) => (e.target.style.borderColor = "var(--card-border)")}
        />
      </div>

      {/* E-Mail */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label
          htmlFor="email"
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
          }}
        >
          E-Mail <span style={{ color: ACCENT }}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="deine@email.de"
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
          onBlur={(e) => (e.target.style.borderColor = "var(--card-border)")}
        />
      </div>

      {/* Nachricht */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label
          htmlFor="nachricht"
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
          }}
        >
          Nachricht <span style={{ color: ACCENT }}>*</span>
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          rows={6}
          placeholder="Was beschäftigt dich? Worum geht es?"
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
          onBlur={(e) => (e.target.style.borderColor = "var(--card-border)")}
        />
      </div>

      <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
        Mit dem Absenden stimmst du zu, dass deine Daten zur Bearbeitung deiner Anfrage genutzt werden.
      </p>

      {error && (
        <p style={{ fontSize: 14, color: "#e53e3e", margin: 0 }}>
          Beim Senden ist ein Fehler aufgetreten. Bitte versuche es nochmal oder schreibe direkt an{" "}
          <a href="mailto:steffen@educube.de" style={{ color: "#e53e3e" }}>steffen@educube.de</a>.
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={loading}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "16px 40px",
            borderRadius: 100,
            background: loading ? "rgba(255,152,0,0.6)" : ACCENT,
            color: "#16212e",
            fontSize: 16,
            fontWeight: 700,
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
            letterSpacing: "0.2px",
            fontFamily: "inherit",
            transition: "background 0.2s",
          }}
        >
          {loading ? "Wird gesendet…" : "Nachricht senden →"}
        </button>
      </div>
    </form>
  );
}
