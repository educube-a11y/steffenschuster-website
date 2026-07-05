"use client";

const ACCENT = "#ff9800";
const PRIMARY = "#345f85";

const inputStyle = {
  width: "100%",
  padding: "14px 18px",
  borderRadius: 10,
  border: "1.5px solid var(--card-border)",
  background: "var(--card-bg)",
  color: "var(--text-primary)",
  fontSize: 16,
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box" as const,
  transition: "border-color 0.2s",
};

export function KontaktForm() {
  return (
    <form
      name="kontakt"
      method="POST"
      data-netlify="true"
      action="/kontakt/danke"
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
          style={{
            ...inputStyle,
            resize: "vertical",
          }}
          onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
          onBlur={(e) => (e.target.style.borderColor = "var(--card-border)")}
        />
      </div>

      <p
        style={{
          fontSize: 13,
          color: "var(--text-secondary)",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        Mit dem Absenden stimmst du zu, dass deine Daten zur Bearbeitung deiner Anfrage genutzt werden.
      </p>

      <div>
        <button
          type="submit"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "16px 40px",
            borderRadius: 100,
            background: ACCENT,
            color: "#16212e",
            fontSize: 16,
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.2px",
            fontFamily: "inherit",
          }}
        >
          Nachricht senden →
        </button>
      </div>
    </form>
  );
}
