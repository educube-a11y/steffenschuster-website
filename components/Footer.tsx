export function Footer() {
  return (
    <footer
      style={{
        background: "#080f17",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "24px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
        © {new Date().getFullYear()} educube GmbH · Steffen Schuster
      </span>
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        <a
          href="/impressum"
          style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
        >
          Impressum
        </a>
        <a
          href="/datenschutz"
          style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
        >
          Datenschutz
        </a>
        <a
          href="https://nora-ki.de"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
        >
          nora-ki.de
        </a>
      </div>
    </footer>
  );
}
