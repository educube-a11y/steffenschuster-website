import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { CustomCursor } from "@/components/CustomCursor";

const ACCENT = "#ff9800";
const PRIMARY = "#345f85";
const DARK_BG = "#0f1f2e";

export const metadata: Metadata = {
  title: "Impressum — Steffen Schuster",
  description: "Impressum von steffenschuster.de gemäß § 5 TMG. Anbieter: educube GmbH, Steffen Schuster, Hamburg.",
  robots: { index: false, follow: false },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: 24,
          fontWeight: 600,
          margin: "0 0 20px",
          color: "var(--text-primary)",
          borderBottom: "1px solid var(--card-border)",
          paddingBottom: 12,
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "180px 1fr",
        gap: 16,
        padding: "10px 0",
        borderBottom: "1px solid var(--card-border)",
        fontSize: 15,
      }}
    >
      <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>{label}</span>
      <span style={{ color: "var(--text-primary)" }}>{value}</span>
    </div>
  );
}

export default function ImpressumPage() {
  return (
    <div style={{ background: "var(--page-bg)", color: "var(--text-primary)", minHeight: "100svh" }}>
      <CustomCursor />
      <Nav />

      {/* Hero */}
      <section
        style={{
          background: DARK_BG,
          padding: "140px 40px 80px",
        }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol style={{ display: "flex", gap: 8, listStyle: "none", padding: 0, margin: 0, fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
              <li><a href="/" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Steffen Schuster</a></li>
              <li aria-hidden>·</li>
              <li style={{ color: ACCENT }}>Impressum</li>
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
              margin: 0,
            }}
          >
            Impressum
          </h1>
        </div>
      </section>

      {/* Content */}
      <section
        data-light-section
        style={{ background: "var(--section-alt-bg)", padding: "80px 40px 120px" }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 48 }}>
            Angaben gemäß § 5 TMG
          </p>

          <Section title="Anbieter & Verantwortlicher">
            <Row label="Unternehmen" value="educube GmbH" />
            <Row label="Geschäftsführer" value="Steffen Schuster" />
            <Row label="Straße & Nr." value="Stiller Weg 15" />
            <Row label="PLZ & Ort" value="22607 Hamburg" />
            <Row label="Land" value="Deutschland" />
          </Section>

          <Section title="Kontakt">
            <Row label="Telefon" value="+49 (0)160 97 95 16 00" />
            <Row label="E-Mail" value="info@educube.de" />
            <Row label="Website" value="https://www.steffenschuster.de" />
          </Section>

          <Section title="Handelsregister">
            <Row label="Registergericht" value="Amtsgericht Hamburg" />
            <Row label="Registernummer" value="HRB 137560" />
            <Row label="USt-IdNr." value="DE 301140906" />
          </Section>

          <Section title="Inhaltlich verantwortlich gem. § 55 Abs. 2 RStV">
            <Row label="Person" value="Steffen Schuster" />
            <Row label="Anschrift" value="Stiller Weg 15, 22607 Hamburg" />
          </Section>

          <Section title="Streitschlichtung & Online-Streitbeilegung">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text-secondary)", marginBottom: 16 }}>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr/" style={{ color: PRIMARY }}>
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text-secondary)" }}>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </Section>

          <Section title="Haftung für Inhalte">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text-secondary)", marginBottom: 16 }}>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text-secondary)" }}>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </Section>

          <Section title="Haftung für Links">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text-secondary)", marginBottom: 16 }}>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text-secondary)" }}>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </Section>

          <Section title="Urheberrecht">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text-secondary)", marginBottom: 16 }}>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text-secondary)" }}>
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
            </p>
          </Section>
        </div>
      </section>
    </div>
  );
}
