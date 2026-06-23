import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { CustomCursor } from "@/components/CustomCursor";

const ACCENT = "#ff9800";
const PRIMARY = "#345f85";
const DARK_BG = "#0f1f2e";

export const metadata: Metadata = {
  title: "Datenschutz — Steffen Schuster",
  description: "Datenschutzerklärung für steffenschuster.de gemäß DSGVO. Anbieter: educube GmbH, Hamburg.",
  robots: { index: false, follow: false },
};

function Section({ no, title, children }: { no: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 56 }}>
      <h2
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: 26,
          fontWeight: 600,
          margin: "0 0 20px",
          color: "var(--text-primary)",
          display: "flex",
          gap: 16,
          alignItems: "baseline",
        }}
      >
        <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 14, color: ACCENT, fontWeight: 400 }}>{no}</span>
        {title}
      </h2>
      <div style={{ borderLeft: "2px solid var(--card-border)", paddingLeft: 24 }}>
        {children}
      </div>
    </div>
  );
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 10px", color: "var(--text-primary)" }}>{title}</h3>
      {children}
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text-secondary)", margin: "0 0 14px" }}>{children}</p>;
}

export default function DatenschutzPage() {
  return (
    <div style={{ background: "var(--page-bg)", color: "var(--text-primary)", minHeight: "100svh" }}>
      <CustomCursor />
      <Nav />

      {/* Hero */}
      <section style={{ background: DARK_BG, padding: "140px 40px 80px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol style={{ display: "flex", gap: 8, listStyle: "none", padding: 0, margin: 0, fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
              <li><a href="/" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Steffen Schuster</a></li>
              <li aria-hidden>·</li>
              <li style={{ color: ACCENT }}>Datenschutz</li>
            </ol>
          </nav>
          <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.18em", color: ACCENT, textTransform: "uppercase", marginBottom: 20 }}>
            Rechtliches
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 500,
              fontSize: "clamp(40px, 5vw, 72px)",
              lineHeight: 1,
              color: "#fff",
              margin: "0 0 24px",
            }}
          >
            Datenschutzerklärung
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)" }}>Stand: Juni 2026</p>
        </div>
      </section>

      {/* Content */}
      <section
        data-light-section
        style={{ background: "var(--section-alt-bg)", padding: "80px 40px 120px" }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>

          <Section no="1." title="Verantwortlicher">
            <P>Verantwortlicher für die Datenverarbeitung auf steffenschuster.de im Sinne der DSGVO ist:</P>
            <div style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: 12, padding: "20px 24px", fontSize: 15, lineHeight: 1.8, color: "var(--text-primary)" }}>
              <strong>educube GmbH</strong><br />
              Geschäftsführer: Steffen Schuster<br />
              Stiller Weg 15, 22607 Hamburg<br />
              E-Mail: <a href="mailto:info@educube.de" style={{ color: PRIMARY }}>info@educube.de</a><br />
              Telefon: +49 (0)160 97 95 16 00
            </div>
          </Section>

          <Section no="2." title="Datenerhebung auf dieser Website">
            <Sub title="Server-Logfiles">
              <P>Beim Aufruf unserer Website übermittelt Ihr Browser automatisch Daten an unseren Hosting-Anbieter. Diese sogenannten Server-Logfiles enthalten:</P>
              <ul style={{ fontSize: 15, lineHeight: 1.8, color: "var(--text-secondary)", paddingLeft: 20, marginBottom: 14 }}>
                <li>IP-Adresse des anfragenden Geräts (anonymisiert)</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Aufgerufene URL</li>
                <li>Übertragene Datenmenge</li>
                <li>Browser-Typ und -Version sowie Betriebssystem</li>
                <li>Referrer-URL (zuvor besuchte Seite)</li>
              </ul>
              <P>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technisch fehlerfreien Bereitstellung). Die Daten werden nach spätestens 30 Tagen gelöscht.</P>
            </Sub>

            <Sub title="Kontaktaufnahme per E-Mail">
              <P>Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre E-Mail-Adresse sowie alle von Ihnen mitgeteilten Informationen zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. lit. f DSGVO (berechtigtes Interesse). Die Daten werden nach Abschluss der Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</P>
            </Sub>
          </Section>

          <Section no="3." title="Lokaler Speicher (localStorage)">
            <P>Diese Website speichert Ihre gewählte Darstellungs-Präferenz (helles oder dunkles Design) im localStorage Ihres Browsers. Dabei wird kein personenbezogenes Datum an uns übertragen — der Wert verbleibt ausschließlich auf Ihrem Gerät. Sie können ihn jederzeit über die Entwicklertools Ihres Browsers löschen.</P>
            <P>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an nutzerfreundlicher Darstellung).</P>
          </Section>

          <Section no="4." title="Hosting">
            <Sub title="Netlify">
              <P>Diese Website wird gehostet bei Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA. Netlify ist unter dem EU-US Data Privacy Framework zertifiziert. Es besteht ein Data Processing Agreement gemäß Art. 28 DSGVO.</P>
              <P>Weitere Informationen: <a href="https://www.netlify.com/privacy/" style={{ color: PRIMARY }}>netlify.com/privacy</a></P>
            </Sub>
          </Section>

          <Section no="5." title="Cookies & Tracking">
            <P>Diese Website verwendet keine Analyse- oder Marketing-Cookies und kein Tracking durch Dritte. Es werden keine personenbezogenen Daten zu Analysezwecken erhoben oder an externe Dienste übermittelt.</P>
            <P>Technisch notwendige Cookies (z. B. für die ordnungsgemäße Funktion der Website) werden auf Basis von Art. 6 Abs. 1 lit. f DSGVO gesetzt.</P>
          </Section>

          <Section no="6." title="Ihre Rechte als betroffene Person">
            <P>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</P>
            {[
              ["Auskunft (Art. 15 DSGVO)", "Recht auf Auskunft über Ihre bei uns gespeicherten Daten."],
              ["Berichtigung (Art. 16 DSGVO)", "Recht auf Korrektur unrichtiger oder unvollständiger Daten."],
              ["Löschung (Art. 17 DSGVO)", "Recht auf Löschung Ihrer Daten, sofern keine Aufbewahrungspflicht besteht."],
              ["Einschränkung (Art. 18 DSGVO)", "Recht auf Einschränkung der Verarbeitung unter bestimmten Voraussetzungen."],
              ["Datenübertragbarkeit (Art. 20 DSGVO)", "Recht, Ihre Daten in strukturiertem, gängigem Format zu erhalten."],
              ["Widerspruch (Art. 21 DSGVO)", "Recht auf Widerspruch gegen Verarbeitung auf Basis berechtigter Interessen."],
            ].map(([right, desc]) => (
              <div key={right} style={{ padding: "12px 0", borderBottom: "1px solid var(--card-border)" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>{right}</div>
                <div style={{ fontSize: 14, color: "var(--text-secondary)" }}>{desc}</div>
              </div>
            ))}
            <div style={{ marginTop: 20, fontSize: 15, lineHeight: 1.75, color: "var(--text-secondary)" }}>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a href="mailto:info@educube.de" style={{ color: PRIMARY }}>info@educube.de</a>
            </div>
            <P>Sie haben zudem das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige Behörde richtet sich nach Ihrem Wohnsitz-Bundesland.</P>
          </Section>

          <Section no="7." title="Speicherdauer">
            {[
              ["E-Mail-Kontakt-Daten", "Bis zum Abschluss der Anfrage, danach gelöscht (außer gesetzliche Aufbewahrungspflichten)"],
              ["Server-Logfiles", "Maximal 30 Tage"],
              ["localStorage (Theme-Einstellung)", "Verbleibt auf Ihrem Gerät; jederzeit löschbar"],
            ].map(([type, duration]) => (
              <div key={type} style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 16, padding: "12px 0", borderBottom: "1px solid var(--card-border)", fontSize: 14 }}>
                <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>{type}</span>
                <span style={{ color: "var(--text-secondary)" }}>{duration}</span>
              </div>
            ))}
          </Section>

          <Section no="8." title="Änderungen dieser Datenschutzerklärung">
            <P>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren, um sie an geänderte Rechtslagen oder Änderungen unserer Website anzupassen. Die jeweils aktuelle Version ist unter steffenschuster.de/datenschutz abrufbar.</P>
          </Section>

        </div>
      </section>
    </div>
  );
}
