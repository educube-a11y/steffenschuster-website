import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { CustomCursor } from "@/components/CustomCursor";

const ACCENT = "#ff9800";
const PRIMARY = "#345f85";
const DARK_BG = "#0f1f2e";

export const metadata: Metadata = {
  title: "Datenschutz — Steffen Schuster",
  description:
    "Datenschutzerklärung für steffenschuster.de gemäß DSGVO. Verantwortlicher: educube GmbH, Steffen Schuster, Hamburg.",
  robots: { index: false, follow: false },
};

function Section({
  no,
  title,
  children,
}: {
  no: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 60 }}>
      <h2
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: 24,
          fontWeight: 600,
          margin: "0 0 20px",
          color: "var(--text-primary)",
          display: "flex",
          gap: 14,
          alignItems: "baseline",
          borderBottom: "1px solid var(--card-border)",
          paddingBottom: 14,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 12,
            color: ACCENT,
            fontWeight: 400,
            flexShrink: 0,
          }}
        >
          {no}
        </span>
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3
        style={{
          fontSize: 16,
          fontWeight: 700,
          margin: "0 0 12px",
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 15,
        lineHeight: 1.78,
        color: "var(--text-secondary)",
        margin: "0 0 14px",
      }}
    >
      {children}
    </p>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: 12,
        padding: "20px 24px",
        fontSize: 15,
        lineHeight: 1.8,
        color: "var(--text-primary)",
        marginBottom: 20,
      }}
    >
      {children}
    </div>
  );
}

export default function DatenschutzPage() {
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
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
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
              <li style={{ color: ACCENT }}>Datenschutz</li>
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
              margin: "0 0 24px",
            }}
          >
            Datenschutzerklärung
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>
            Stand: Juli 2026
          </p>
        </div>
      </section>

      {/* ── Auf einen Blick ── */}
      <section
        style={{ background: DARK_BG, padding: "0 40px 80px" }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            padding: "40px 48px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 26,
              fontWeight: 600,
              color: "#fff",
              margin: "0 0 24px",
            }}
          >
            Datenschutz auf einen Blick
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
            }}
          >
            {[
              {
                q: "Wer ist verantwortlich?",
                a: "educube GmbH, vertreten durch Steffen Schuster, Stiller Weg 15, 22607 Hamburg.",
              },
              {
                q: "Welche Daten werden erhoben?",
                a: "Technische Zugriffsdaten (Server-Logfiles) durch unseren Hosting-Anbieter Netlify, sowie Daten die Sie uns per E-Mail mitteilen.",
              },
              {
                q: "Gibt es Cookies oder Tracking?",
                a: "Nein. Wir verwenden keine Analyse- oder Marketing-Cookies und kein Tracking-Tool von Drittanbietern.",
              },
              {
                q: "Welche Rechte haben Sie?",
                a: "Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch jederzeit möglich.",
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: ACCENT,
                    marginBottom: 6,
                    letterSpacing: "0.03em",
                  }}
                >
                  {q}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ausführliche Erklärung ── */}
      <section
        data-light-section
        style={{
          background: "var(--section-alt-bg)",
          padding: "80px 40px 120px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>

          {/* 1. Allgemeine Hinweise */}
          <Section no="1." title="Allgemeine Hinweise und Pflichtinformationen">

            <Sub title="Datenschutz">
              <P>
                Als Betreiber dieser Seiten nehmen wir den Schutz Ihrer
                persönlichen Daten sehr ernst. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend der
                gesetzlichen Datenschutzvorschriften sowie dieser
                Datenschutzerklärung.
              </P>
              <P>
                Wenn Sie diese Website besuchen, werden verschiedene
                personenbezogene Daten erhoben. Personenbezogene Daten sind
                Daten, mit denen Sie persönlich identifiziert werden können.
                Diese Datenschutzerklärung erläutert, welche Daten erhoben
                werden und wofür sie genutzt werden.
              </P>
              <P>
                Wir weisen darauf hin, dass die Datenübertragung im Internet
                (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
                aufweisen kann. Ein lückenloser Schutz der Daten vor dem
                Zugriff durch Dritte ist nach dem aktuellen Stand der Technik
                nicht möglich.
              </P>
            </Sub>

            <Sub title="Verantwortliche Stelle">
              <P>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </P>
              <InfoBox>
                <strong>educube GmbH</strong>
                <br />
                Geschäftsführer: Steffen Schuster
                <br />
                Stiller Weg 15
                <br />
                22607 Hamburg
                <br />
                <br />
                Telefon:{" "}
                <a
                  href="tel:+4916097951600"
                  style={{ color: PRIMARY, textDecoration: "none" }}
                >
                  +49 (0)160 97 95 16 00
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@educube.de"
                  style={{ color: PRIMARY, textDecoration: "none" }}
                >
                  info@educube.de
                </a>
              </InfoBox>
              <P>
                Verantwortliche Stelle ist die natürliche oder juristische
                Person, die allein oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von personenbezogenen Daten
                entscheidet.
              </P>
            </Sub>

            <Sub title="SSL- bzw. TLS-Verschlüsselung">
              <P>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte eine SSL- bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                Sie daran, dass die Adresszeile des Browsers von „http://" auf
                „https://" wechselt und an dem Schloss-Symbol in der
                Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert
                ist, können die Daten, die Sie an uns übermitteln, nicht von
                Dritten mitgelesen werden.
              </P>
            </Sub>

            <Sub title="Widerruf Ihrer Einwilligung zur Datenverarbeitung">
              <P>
                Einige Datenverarbeitungsvorgänge sind nur mit Ihrer
                ausdrücklichen Einwilligung möglich. Sie können eine bereits
                erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine
                formlose Mitteilung per E-Mail an{" "}
                <a
                  href="mailto:info@educube.de"
                  style={{ color: PRIMARY, textDecoration: "none" }}
                >
                  info@educube.de
                </a>
                . Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                Datenverarbeitung bleibt vom Widerruf unberührt.
              </P>
            </Sub>

            <Sub title="Beschwerderecht bei der zuständigen Aufsichtsbehörde">
              <P>
                Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein
                Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Da
                die educube GmbH ihren Sitz in Hamburg hat, ist zuständig:
              </P>
              <InfoBox>
                <strong>
                  Der Hamburgische Beauftragte für Datenschutz und
                  Informationsfreiheit (HmbBfDI)
                </strong>
                <br />
                Ludwig-Erhard-Str. 22, 7. OG
                <br />
                20459 Hamburg
                <br />
                <br />
                Website:{" "}
                <a
                  href="https://datenschutz.hamburg.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: PRIMARY, textDecoration: "none" }}
                >
                  datenschutz.hamburg.de
                </a>
              </InfoBox>
              <P>
                Eine Liste aller Datenschutzbehörden finden Sie unter:{" "}
                <a
                  href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: PRIMARY, textDecoration: "none" }}
                >
                  bfdi.bund.de
                </a>
              </P>
            </Sub>

            <Sub title="Recht auf Datenübertragbarkeit">
              <P>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erfüllung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem gängigen,
                maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
                direkte Übertragung der Daten an einen anderen Verantwortlichen
                verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </P>
            </Sub>

            <Sub title="Auskunft, Berichtigung, Sperrung, Löschung">
              <P>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger und den Zweck der Datenverarbeitung sowie ein Recht
                auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu
                sowie zu weiteren Fragen zum Thema personenbezogene Daten
                können Sie sich jederzeit unter der im Impressum angegebenen
                Adresse an uns wenden.
              </P>
            </Sub>

            <Sub title="Widerspruch gegen Werbe-E-Mails">
              <P>
                Der Nutzung von im Rahmen der Impressumspflicht
                veröffentlichten Kontaktdaten zur Übersendung von nicht
                ausdrücklich angeforderter Werbung und Informationsmaterialien
                wird hiermit widersprochen. Die Betreiber der Seiten behalten
                sich ausdrücklich rechtliche Schritte im Falle der unverlangten
                Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
              </P>
            </Sub>
          </Section>

          {/* 2. Datenerfassung */}
          <Section no="2." title="Datenerfassung auf dieser Website">

            <Sub title="Server-Log-Dateien">
              <P>
                Der Hosting-Anbieter dieser Website erhebt und speichert
                automatisch Informationen in sogenannten Server-Log-Dateien,
                die Ihr Browser automatisch übermittelt. Dies sind:
              </P>
              <ul
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                  paddingLeft: 22,
                  marginBottom: 14,
                }}
              >
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer-URL (zuvor besuchte Seite)</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (nach spätestens 30 Tagen anonymisiert)</li>
              </ul>
              <P>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
                nicht vorgenommen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
                DSGVO (berechtigtes Interesse an der technisch fehlerfreien
                Bereitstellung der Website).
              </P>
            </Sub>

            <Sub title="Kontaktaufnahme per E-Mail">
              <P>
                Wenn Sie uns per E-Mail kontaktieren, werden Ihre E-Mail-Adresse
                sowie alle von Ihnen mitgeteilten Informationen zur Bearbeitung
                Ihrer Anfrage gespeichert. Diese Daten geben wir nicht ohne
                Ihre Einwilligung weiter.
              </P>
              <P>
                Die von Ihnen per E-Mail übermittelten Daten verbleiben bei
                uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
                Speicherung widerrufen oder der Zweck für die Datenspeicherung
                entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
                Zwingende gesetzliche Bestimmungen — insbesondere gesetzliche
                Aufbewahrungsfristen — bleiben unberührt.
              </P>
              <P>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
                Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse an der Bearbeitung von Anfragen).
              </P>
            </Sub>

            <Sub title="Lokale Speicherung: Theme-Einstellung (localStorage)">
              <P>
                Um Ihre bevorzugte Darstellung dieser Website (helles oder
                dunkles Design) auch nach einem erneuten Besuch beizubehalten,
                wird Ihre Auswahl im{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  localStorage
                </strong>{" "}
                Ihres Browsers gespeichert (Schlüssel: <code>theme</code>, Wert:{" "}
                <code>light</code> oder <code>dark</code>).
              </P>
              <P>
                Der localStorage unterscheidet sich von Cookies: Die Daten
                werden ausschließlich lokal auf Ihrem Gerät abgelegt und{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  nicht an unsere Server übertragen
                </strong>
                . Wir haben keinen Zugriff auf diese Information. Sie können
                den Eintrag jederzeit über die Entwicklertools Ihres Browsers
                (Anwendung → Lokaler Speicher) löschen.
              </P>
              <P>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse an einer nutzerfreundlichen Darstellung).
              </P>
            </Sub>

            <Sub title="Cookies und Einwilligung (Cookie-Banner)">
              <P>
                Diese Website zeigt beim ersten Besuch einen Cookie-Banner, über den
                Sie Ihre Einwilligung zur Verwendung nicht notwendiger Cookies erteilen
                oder verweigern können. Rechtsgrundlage für die Verarbeitung nach
                erteilter Einwilligung ist Art. 6 Abs. 1 lit. a DSGVO.
              </P>
              <P>
                Ihre Entscheidung wird lokal in Ihrem Browser gespeichert
                (localStorage, Schlüssel: <code>cookie-consent</code>, Wert:{" "}
                <code>accepted</code> oder <code>rejected</code>). Diese Information
                wird nicht an Server übertragen.
              </P>
              <P>
                <strong>Technisch notwendige Cookies</strong> werden unabhängig von
                Ihrer Entscheidung gesetzt, soweit sie für den Betrieb der Website
                erforderlich sind (Art. 6 Abs. 1 lit. f DSGVO).
              </P>
              <P>
                <strong>Nicht notwendige Cookies</strong> (z.B. Analyse- oder
                Marketing-Cookies) werden derzeit nicht eingesetzt. Sollten sie in
                Zukunft verwendet werden, erfolgt dies ausschließlich nach Ihrer
                ausdrücklichen Einwilligung über den Cookie-Banner.
              </P>
              <P>
                <strong>Widerruf:</strong> Sie können Ihre Einwilligung jederzeit
                widerrufen, indem Sie den Eintrag <code>cookie-consent</code> in den
                Browser-Einstellungen unter „Website-Daten" / „localStorage" löschen.
                Der Cookie-Banner erscheint daraufhin beim nächsten Besuch erneut.
              </P>
            </Sub>
          </Section>

          {/* 3. Hosting */}
          <Section no="3." title="Hosting">
            <Sub title="Netlify">
              <P>
                Diese Website wird gehostet bei{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  Netlify, Inc.
                </strong>
                , 512 2nd Street, Suite 200, San Francisco, CA 94107, USA.
                Netlify ist unter dem EU-US Data Privacy Framework zertifiziert.
                Mit Netlify besteht ein Auftragsverarbeitungsvertrag (Data
                Processing Agreement) gemäß Art. 28 DSGVO.
              </P>
              <P>
                Beim Aufruf unserer Website werden die oben beschriebenen
                Server-Log-Dateien auf den Servern von Netlify verarbeitet.
                Weitere Informationen zum Datenschutz bei Netlify:{" "}
                <a
                  href="https://www.netlify.com/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: PRIMARY, textDecoration: "none" }}
                >
                  netlify.com/privacy
                </a>
              </P>
              <P>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO sowie Art. 28
                DSGVO (Auftragsverarbeitung).
              </P>
            </Sub>
          </Section>

          {/* 4. Schriften */}
          <Section no="4." title="Schriftarten">
            <Sub title="Self-hosted Google Fonts via next/font">
              <P>
                Diese Website verwendet Schriftarten aus dem Google Fonts
                Katalog (Cormorant Garamond, DM Sans, JetBrains Mono). Im
                Gegensatz zur direkten Einbindung von Google Fonts werden die
                Schriftdateien jedoch{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  beim Build-Prozess heruntergeladen und auf unseren eigenen
                  Servern gehostet
                </strong>{" "}
                (via Next.js{" "}
                <code style={{ fontSize: 13 }}>next/font/google</code>). Es
                findet beim Besuch dieser Website{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  keine Verbindung zu Google-Servern
                </strong>{" "}
                statt. Ihre IP-Adresse wird nicht an Google übermittelt.
              </P>
            </Sub>
          </Section>

          {/* 5. Externe Links */}
          <Section no="5." title="Externe Links und Drittanbieter">
            <P>
              Diese Website enthält Links zu externen Diensten, u.a. zu{" "}
              <a
                href="https://nora-ki.de"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: PRIMARY, textDecoration: "none" }}
              >
                nora-ki.de
              </a>{" "}
              und Spotify. Wenn Sie diese Links anklicken, verlassen Sie unsere
              Website und es gelten die Datenschutzbestimmungen des jeweiligen
              Anbieters. Wir haben keinen Einfluss auf die Datenverarbeitung
              durch diese Drittanbieter.
            </P>
            <P>
              Durch das bloße Laden dieser Website werden keine Daten an
              Drittanbieter (Social Media, Analytics o.ä.) übertragen. Eine
              Verbindung zu Drittdiensten wird nur durch aktives Klicken auf
              entsprechende Links hergestellt.
            </P>
          </Section>

          {/* 6. Betroffenenrechte */}
          <Section no="6." title="Ihre Rechte als betroffene Person">
            <P>
              Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer
              personenbezogenen Daten:
            </P>
            <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 24 }}>
              {[
                [
                  "Auskunft (Art. 15 DSGVO)",
                  "Recht auf Auskunft über die bei uns gespeicherten Daten, deren Herkunft, Empfänger und Verarbeitungszweck.",
                ],
                [
                  "Berichtigung (Art. 16 DSGVO)",
                  "Recht auf Korrektur unrichtiger oder Vervollständigung unvollständiger personenbezogener Daten.",
                ],
                [
                  "Löschung (Art. 17 DSGVO)",
                  "Recht auf Löschung Ihrer personenbezogenen Daten, sofern keine Aufbewahrungspflicht besteht.",
                ],
                [
                  "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                  "Recht auf Einschränkung der Verarbeitung unter bestimmten Voraussetzungen.",
                ],
                [
                  "Datenübertragbarkeit (Art. 20 DSGVO)",
                  "Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.",
                ],
                [
                  "Widerspruch (Art. 21 DSGVO)",
                  "Recht auf Widerspruch gegen die Verarbeitung auf Basis berechtigter Interessen.",
                ],
              ].map(([right, desc]) => (
                <div
                  key={right}
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    borderRadius: 10,
                    padding: "14px 20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: 4,
                    }}
                  >
                    {right}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </div>
                </div>
              ))}
            </div>
            <P>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a
                href="mailto:info@educube.de"
                style={{ color: PRIMARY, textDecoration: "none" }}
              >
                info@educube.de
              </a>
            </P>
          </Section>

          {/* 7. Speicherdauer */}
          <Section no="7." title="Speicherdauer">
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                ["Server-Logfiles", "Maximal 30 Tage, danach automatisch gelöscht"],
                ["E-Mail-Kontaktdaten", "Bis zum Abschluss der Anfrage; bei laufender Geschäftsbeziehung gemäß gesetzlicher Aufbewahrungspflichten (i.d.R. 6–10 Jahre)"],
                ["localStorage (Theme)", "Auf Ihrem Gerät; wird nicht übertragen; jederzeit löschbar"],
              ].map(([type, duration]) => (
                <div
                  key={type}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "240px 1fr",
                    gap: 16,
                    padding: "14px 0",
                    borderBottom: "1px solid var(--card-border)",
                    fontSize: 14,
                  }}
                >
                  <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>
                    {type}
                  </span>
                  <span style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {duration}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          {/* 8. Änderungen */}
          <Section no="8." title="Änderungen dieser Datenschutzerklärung">
            <P>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um
              sie an geänderte Rechtslagen oder Änderungen unserer Website
              anzupassen. Die jeweils aktuelle Version ist unter{" "}
              <a
                href="/datenschutz"
                style={{ color: PRIMARY, textDecoration: "none" }}
              >
                steffenschuster.de/datenschutz
              </a>{" "}
              abrufbar. Stand der aktuellen Version: Juli 2026.
            </P>
          </Section>

        </div>
      </section>
    </div>
  );
}
