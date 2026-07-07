import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { CustomCursor } from "@/components/CustomCursor";

const ACCENT = "#ff9800";
const PRIMARY = "#345f85";
const DARK_BG = "#0f1f2e";

export const metadata: Metadata = {
  title: "Impressum — Steffen Schuster",
  description:
    "Impressum von steffenschuster.de gemäß § 5 TMG. Anbieter: educube GmbH, Steffen Schuster, Stiller Weg 15, 22607 Hamburg.",
  robots: { index: false, follow: false },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 52 }}>
      <h2
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: 22,
          fontWeight: 600,
          margin: "0 0 18px",
          color: "var(--text-primary)",
          borderBottom: "1px solid var(--card-border)",
          paddingBottom: 12,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        gap: 16,
        padding: "11px 0",
        borderBottom: "1px solid var(--card-border)",
        fontSize: 15,
      }}
    >
      <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>
        {label}
      </span>
      <span style={{ color: "var(--text-primary)" }}>{value}</span>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 15,
        lineHeight: 1.75,
        color: "var(--text-secondary)",
        margin: "0 0 16px",
      }}
    >
      {children}
    </p>
  );
}

export default function ImpressumPage() {
  return (
    <div
      style={{
        background: "var(--page-bg)",
        color: "var(--text-primary)",
        minHeight: "100svh",
      }}
    >
      <CustomCursor />
      <Nav />

      {/* ── Hero ── */}
      <section style={{ background: DARK_BG, padding: "140px 40px 80px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol
              style={{
                display: "flex",
                gap: 8,
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
              }}
            >
              <li>
                <a
                  href="/"
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                  }}
                >
                  Steffen Schuster
                </a>
              </li>
              <li aria-hidden>·</li>
              <li style={{ color: ACCENT }}>Impressum</li>
            </ol>
          </nav>
          <p
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              letterSpacing: "0.18em",
              color: ACCENT,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
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

      {/* ── Content ── */}
      <section
        data-light-section
        style={{
          background: "var(--section-alt-bg)",
          padding: "80px 40px 120px",
        }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              marginBottom: 52,
            }}
          >
            Angaben gemäß § 5 Telemediengesetz (TMG) und § 18 Abs. 2
            Medienstaatsvertrag (MStV)
          </p>

          {/* Anbieter */}
          <Section title="Anbieter & Betreiber">
            <P>
              Diese Website ist das persönliche Profil von Steffen Schuster und
              wird betrieben von:
            </P>
            <Row label="Unternehmen" value="educube GmbH" />
            <Row label="Geschäftsführer" value="Steffen Schuster" />
            <Row label="Anschrift" value="Stiller Weg 15, 22607 Hamburg" />
            <Row label="Land" value="Deutschland" />
          </Section>

          {/* Kontakt */}
          <Section title="Kontakt">
            <Row label="Telefon" value="+49 (0)160 97 95 16 00" />
            <Row
              label="E-Mail"
              value={
                <a
                  href="mailto:info@educube.de"
                  style={{ color: PRIMARY, textDecoration: "none" }}
                >
                  info@educube.de
                </a>
              }
            />
            <Row
              label="Website"
              value={
                <a
                  href="https://www.steffenschuster.de"
                  style={{ color: PRIMARY, textDecoration: "none" }}
                >
                  www.steffenschuster.de
                </a>
              }
            />
          </Section>

          {/* Handelsregister */}
          <Section title="Registereintrag">
            <Row label="Registergericht" value="Amtsgericht Hamburg" />
            <Row label="Registernummer" value="HRB 137560" />
            <Row label="USt-IdNr." value="DE 301140906" />
          </Section>

          {/* MStV */}
          <Section title="Inhaltlich verantwortlich gem. § 18 Abs. 2 MStV">
            <Row label="Person" value="Steffen Schuster" />
            <Row label="Anschrift" value="Stiller Weg 15, 22607 Hamburg" />
          </Section>

          {/* Streitschlichtung */}
          <Section title="Streitschlichtung">
            <P>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: PRIMARY }}
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </P>
            <P>
              Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind
              nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </P>
          </Section>

          {/* Haftung Inhalte */}
          <Section title="Haftung für Inhalte">
            <P>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen.
            </P>
            <P>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
              wir diese Inhalte umgehend entfernen.
            </P>
          </Section>

          {/* Haftung Links */}
          <Section title="Haftung für Links">
            <P>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </P>
            <P>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
              mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
              zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
              inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
              konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
              Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
              Links umgehend entfernen.
            </P>
          </Section>

          {/* Urheberrecht */}
          <Section title="Urheberrecht">
            <P>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten,
              nicht kommerziellen Gebrauch gestattet.
            </P>
            <P>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
              werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
              von Rechtsverletzungen werden wir derartige Inhalte umgehend
              entfernen.
            </P>
          </Section>

          {/* Bildnachweise */}
          <Section title="Bildnachweise">
            <P>
              Die auf dieser Website verwendeten Fotografien (Portrait, Bühnen-
              und Veranstaltungsaufnahmen) wurden mit ausdrücklicher Genehmigung
              des Abgebildeten verwendet. Alle Bildrechte liegen bei den
              jeweiligen Fotografen bzw. der educube GmbH.
            </P>
          </Section>
        </div>
      </section>
    </div>
  );
}
