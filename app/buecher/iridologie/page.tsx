import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { TiltCard } from "@/components/TiltCard";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const INK = "#2f4538";
const GOLD = "#b68d40";
const PAPER = "#f7f5ef";
const SOFT = "#eee9dc";
const SITE_URL = "https://www.steffenschuster.de";
const PAGE_URL = `${SITE_URL}/buecher/iridologie`;
const AMAZON_URL = "https://www.amazon.de/Iridologie-Interpretation-Zeichen-Vistara-Haiduk-Kaplan/dp/3910544088";

export const metadata: Metadata = {
  title: "Iridologie – Interpretation der Zeichen des Auges | Fachbuch",
  description:
    "Iridologie – Interpretation der Zeichen des Auges: Fachbuch von Vistara Haiduk-Kaplan und Steffen Schuster (Co-Autor) über Konstitutionstypen, Irisdeutung und Selbstbeobachtung. Hardcover, 206 Seiten, erhältlich bei Amazon.",
  keywords: [
    "Iridologie",
    "Irisdiagnose",
    "Interpretation der Zeichen des Auges",
    "Vistara Haiduk-Kaplan",
    "Steffen Schuster Buch",
    "Iris Konstitutionstyp",
    "Naturheilkunde Fachbuch",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "book",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "Steffen Schuster",
    title: "Iridologie – Interpretation der Zeichen des Auges",
    description:
      "Fachbuch von Vistara Haiduk-Kaplan und Steffen Schuster (Co-Autor): über 60 Irisdeutungszeichen, Konstitutionstypen und praktische Anleitung zur Selbstbeobachtung.",
  },
  twitter: {
    card: "summary",
    title: "Iridologie – Interpretation der Zeichen des Auges",
    description: "Fachbuch von Vistara Haiduk-Kaplan und Steffen Schuster (Co-Autor). Erhältlich bei Amazon.",
  },
};

const faqItems = [
  {
    q: "Worum geht es in „Iridologie – Interpretation der Zeichen des Auges“?",
    a: "Das Buch führt in die Iridologie (Irisdiagnose) ein: eine ganzheitliche Betrachtungsweise, bei der sich Strukturen, Farben und Zeichen der Iris auf Konstitutionstypen, Dispositionen und psychosomatische Zusammenhänge deuten lassen. Es enthält über 60 erläuterte Irisdeutungszeichen, Interpretationsbeispiele mit Fotos, ein Kapitel zu spagyrischen Rezepturen sowie eine praktische Anleitung zur Selbstbeobachtung mit Lupe oder Smartphone.",
  },
  {
    q: "Wer hat das Buch geschrieben?",
    a: "Autorin ist die Heilpraktikerin und Dozentin Vistara Haiduk-Kaplan, die unter anderem die EyeCode® Kaplan-Methode mitentwickelt hat. Steffen Schuster hat das Werk als Co-Autor mitentwickelt.",
  },
  {
    q: "Für wen ist das Buch geeignet?",
    a: "Für gesundheitsbewusste Leser:innen, Therapeut:innen und Heilpraktiker:innen ebenso wie für Einsteiger:innen, die sich erstmals mit Iridologie beschäftigen möchten.",
  },
  {
    q: "Ersetzt Iridologie eine ärztliche Diagnose?",
    a: "Nein. Iridologie ist eine ergänzende, komplementäre Betrachtungsweise aus der Naturheilkunde und ersetzt keine ärztliche Untersuchung, Diagnose oder Behandlung.",
  },
  {
    q: "Wo ist das Buch erhältlich?",
    a: "„Iridologie – Interpretation der Zeichen des Auges“ ist als Hardcover mit 206 Seiten bei Amazon erhältlich.",
  },
];

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Iridologie – Interpretation der Zeichen des Auges",
  url: PAGE_URL,
  inLanguage: "de",
  bookFormat: "https://schema.org/Hardcover",
  numberOfPages: 206,
  datePublished: "2025",
  genre: ["Naturheilkunde", "Fachbuch", "Ratgeber"],
  author: [
    { "@type": "Person", name: "Vistara Haiduk-Kaplan" },
    { "@type": "Person", name: "Steffen Schuster", url: `${SITE_URL}/autor` },
  ],
  publisher: { "@type": "Organization", name: "edu:cube Verlag", url: SITE_URL },
  description:
    "Ein Fachbuch über die Interpretation der Zeichen des Auges: Konstitutionstypen, über 60 Irisdeutungszeichen, psychosomatische Betrachtung und praktische Anleitung zur Selbstbeobachtung.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function IrisMotif({ size = 320 }: { size?: number }) {
  return (
    <div
      aria-hidden
      style={{
        position: "relative",
        width: "100%",
        maxWidth: size,
        aspectRatio: "1/1",
        margin: "0 auto",
        borderRadius: "50%",
        background: `repeating-conic-gradient(from 0deg, ${GOLD}40 0deg 4deg, ${INK}28 4deg 8deg)`,
        boxShadow: `0 30px 70px rgba(47,69,56,0.35), inset 0 0 0 16px ${PAPER}, inset 0 0 0 19px ${GOLD}80, inset 0 0 0 58px ${PAPER}, inset 0 0 0 61px ${INK}55`,
      }}
    >
      <div style={{ position: "absolute", inset: "38%", borderRadius: "50%", background: INK, boxShadow: `inset 0 0 20px rgba(0,0,0,0.5)` }} />
    </div>
  );
}

export default function IridologiePage() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ScrollRevealInit />
      <ScrollAnimations />
      <CustomCursor />
      <Nav />

      {/* ── HERO ── */}
      <section
        id="hero"
        className="hero-section section-px"
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          padding: "150px 40px 90px",
          background: `radial-gradient(120% 90% at 50% 0%, ${SOFT} 0%, ${PAPER} 55%)`,
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto", width: "100%" }}>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 60, alignItems: "center" }}>
            <div data-reveal>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: 22 }}>
                Fachbuch · Naturheilkunde
              </p>
              <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(38px, 5vw, 62px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: INK, margin: "0 0 22px" }}>
                Iridologie — Interpretation der Zeichen des Auges
              </h1>
              <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.65, color: "#4a544c", maxWidth: 560, marginBottom: 26 }}>
                Was die feinen Strukturen, Farben und Zeichen der Iris über
                Konstitution und Wohlbefinden erzählen können — anschaulich
                erklärt von <strong>Vistara Haiduk-Kaplan</strong>, gemeinsam
                mit <strong>Steffen Schuster</strong> als Co-Autor entwickelt.
              </p>
              <div data-reveal style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
                {["Hardcover · 206 Seiten", "60+ Irisdeutungszeichen", "edu:cube Verlag, 2025"].map((tag) => (
                  <span key={tag} style={{ padding: "8px 16px", borderRadius: 100, background: "#fff", border: `1px solid ${INK}26`, fontSize: 13.5, fontWeight: 600, color: INK }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div data-reveal className="hero-cta-group" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <a
                  href={AMAZON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 30px", borderRadius: 100, background: "#232f3e", color: "#fff", textDecoration: "none", fontSize: 16, fontWeight: 600 }}
                >
                  Bei Amazon ansehen <span>→</span>
                </a>
                <a href="#inhalt" style={{ display: "inline-flex", alignItems: "center", padding: "16px 30px", borderRadius: 100, border: `1px solid ${INK}40`, color: INK, textDecoration: "none", fontSize: 16, fontWeight: 500 }}>
                  Worum es geht
                </a>
              </div>
            </div>
            <div data-reveal>
              <IrisMotif />
            </div>
          </div>
        </div>
      </section>

      {/* ── WORUM ES GEHT ── */}
      <section id="inhalt" data-light-section className="section-px" style={{ background: PAPER, padding: "100px 40px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }} data-reveal>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(28px, 3.2vw, 42px)", fontWeight: 500, lineHeight: 1.15, margin: "0 0 24px", color: INK }}>
            Die Geheimnisse der Iris entschlüsseln
          </h2>
          <p style={{ fontSize: 17.5, lineHeight: 1.85, color: "#4a544c", margin: "0 0 20px" }}>
            Kein Auge gleicht dem anderen. Als Einführung in die
            Irisinterpretation eröffnet das Buch die Methode der Iridologie —
            einen ganzheitlichen Betrachtungsansatz, mit dem sich körperliche
            und seelische Zusammenhänge im Auge ablesen lassen: feine
            Strukturen, Farben und Zeichen geben Hinweise auf Konstitution,
            Wohlbefinden und individuelle Muster.
          </p>
          <p style={{ fontSize: 17.5, lineHeight: 1.85, color: "#4a544c", margin: 0 }}>
            Jahrhundertealtes Wissen wird anschaulich aufbereitet — mit
            praxisnahen Beispielen, Interpretationsfotos und sofort
            anwendbaren Hinweisen für die eigene Beobachtung.
          </p>
        </div>
      </section>

      {/* ── WAS SIE ERWARTET ── */}
      <section className="section-px" style={{ background: SOFT, padding: "90px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 data-reveal style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 500, margin: "0 0 40px", color: INK }}>
            Was das Buch bietet
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 20 }}>
            {[
              { t: "60+ Irisdeutungszeichen", d: "Anschaulich erklärt mit Interpretationsbeispielen und Fotos." },
              { t: "Konstitutionstypen", d: "Dispositionen und Diathesen verständlich eingeordnet." },
              { t: "Psychosomatische Betrachtung", d: "Verbindung körperlicher und seelischer Zusammenhänge." },
              { t: "Praxisanleitung", d: "Selbstbeobachtung mit Lupe oder Smartphone." },
              { t: "Spagyrisches Rezepturenkapitel", d: "Ergänzende naturheilkundliche Zubereitungen." },
            ].map((item) => (
              <div key={item.t} data-reveal style={{ background: "#fff", border: `1px solid ${INK}1a`, borderRadius: 16, padding: "26px 24px" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 20, fontWeight: 600, margin: "0 0 8px", color: INK }}>{item.t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4a544c", margin: 0 }}>{item.d}</p>
              </div>
            ))}
          </div>
          <p data-reveal style={{ marginTop: 30, fontSize: 13.5, lineHeight: 1.7, color: "#6b7268", maxWidth: 700 }}>
            Iridologie ist eine ergänzende, komplementäre Betrachtungsweise aus
            der Naturheilkunde und ersetzt keine ärztliche Untersuchung,
            Diagnose oder Behandlung.
          </p>
        </div>
      </section>

      {/* ── AUTORINNEN ── */}
      <section data-light-section className="section-px" style={{ background: PAPER, padding: "100px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 data-reveal style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 500, margin: "0 0 36px", color: INK }}>
            Autorin &amp; Co-Autor
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            <div data-reveal style={{ background: SOFT, borderRadius: 18, padding: "30px 28px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: GOLD, margin: "0 0 8px" }}>Autorin</p>
              <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 22, fontWeight: 600, margin: "0 0 10px", color: INK }}>Vistara Haiduk-Kaplan</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#4a544c", margin: 0 }}>
                Heilpraktikerin, Dozentin und Autorin mit langjähriger
                Erfahrung in der ganzheitlichen Gesundheitslehre. Ihre
                Schwerpunkte liegen unter anderem in der Irisdiagnose
                (Iridologie) und der von ihr mitentwickelten EyeCode® Kaplan-Methode.
              </p>
            </div>
            <TiltCard>
              <div data-reveal style={{ background: SOFT, borderRadius: 18, padding: "30px 28px", height: "100%" }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: GOLD, margin: "0 0 8px" }}>Co-Autor</p>
                <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 22, fontWeight: 600, margin: "0 0 10px", color: INK }}>Steffen Schuster</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#4a544c", margin: "0 0 16px" }}>
                  Pädagoge und Autor aus Hamburg, der das Werk als Co-Autor
                  mitentwickelt hat. Mehr zu seiner Arbeit als Autor und
                  Pädagoge auf seiner Autorenseite.
                </p>
                <a href="/autor" style={{ fontSize: 14, fontWeight: 600, color: INK, textDecoration: "none", borderBottom: `1px solid ${GOLD}`, paddingBottom: 2 }}>
                  Zur Autorenseite →
                </a>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-px" style={{ background: SOFT, padding: "110px 40px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div data-reveal style={{ marginBottom: 48 }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.15em", color: GOLD, textTransform: "uppercase", marginBottom: 18 }}>
              Häufige Fragen
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(28px, 3.2vw, 42px)", fontWeight: 500, margin: 0, color: INK }}>
              Kurz beantwortet.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {faqItems.map((f, i) => (
              <details key={i} data-reveal style={{ background: "#fff", border: `1px solid ${INK}1a`, borderRadius: 14, overflow: "hidden" }}>
                <summary style={{ padding: "22px 26px", fontSize: 16, fontWeight: 600, color: INK, cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                  {f.q}
                  <span style={{ fontSize: 20, color: GOLD, flexShrink: 0, fontWeight: 300 }}>+</span>
                </summary>
                <div style={{ padding: "0 26px 22px", fontSize: 15, lineHeight: 1.7, color: "#4a544c" }}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABSCHLUSS-CTA ── */}
      <section className="section-px" style={{ position: "relative", padding: "140px 40px", background: `radial-gradient(120% 100% at 50% 0%, #3c5646 0%, ${INK} 55%, #1d2c22 100%)`, textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }} data-reveal>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(30px, 4vw, 50px)", lineHeight: 1.15, color: "#fff", margin: "0 0 24px" }}>
            Ein neuer Blick auf Gesundheit und Persönlichkeit.
          </h2>
          <div className="cta-group" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "17px 34px", borderRadius: 100, background: GOLD, color: "#fff", textDecoration: "none", fontSize: 16.5, fontWeight: 600 }}
            >
              Jetzt bei Amazon entdecken <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER / NAP ── */}
      <footer style={{ background: "#080f17", padding: "40px 40px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 18, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
              Steffen Schuster
            </span>
            <address style={{ fontStyle: "normal", fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
              educube GmbH · Steffen Schuster · Stiller Weg 15 · 22607 Hamburg ·{" "}
              <a href="mailto:steffen@educube.de" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
                steffen@educube.de
              </a>
            </address>
          </div>
          <nav style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { label: "Startseite", href: "/" },
              { label: "Autor", href: "/autor" },
              { label: "Clara & Äffchen", href: "/buecher/clara-und-aeffchen" },
              { label: "Friedas Abenteuer", href: "/buecher/frieda-malbuch" },
              { label: "Kontakt", href: "/kontakt" },
            ].map((l) => (
              <a key={l.label} href={l.href} style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
