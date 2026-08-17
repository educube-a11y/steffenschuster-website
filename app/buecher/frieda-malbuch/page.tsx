import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { TiltCard } from "@/components/TiltCard";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const INK = "#1f3a5f";
const RED = "#d6293f";
const PAPER = "#fffaf6";
const SOFT = "#eaf2fb";
const SITE_URL = "https://www.steffenschuster.de";
const PAGE_URL = `${SITE_URL}/buecher/frieda-malbuch`;
const AMAZON_URL = "https://www.amazon.de/dp/3910544053";
const YT_ID = "f66p54LOXd4";

export const metadata: Metadata = {
  title: "Friedas fröhliches Abenteuer in der Zahnarztpraxis | Malbuch",
  description:
    "Friedas fröhliches Abenteuer in der Zahnarztpraxis: ein Malbuch mit Geschichte von Steffen Schuster — zum Malen, Anhören und Lesen. Erster Band der Frieda-Malbuchserie, erhältlich bei Amazon.",
  keywords: [
    "Friedas fröhliches Abenteuer in der Zahnarztpraxis",
    "Malbuch Zahnarztpraxis Kinder",
    "Kinder Malbuch ZFA",
    "Steffen Schuster Malbuch",
    "Frieda Malbuchserie",
    "Zahn Mandala Kinder",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "book",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "Steffen Schuster",
    title: "Friedas fröhliches Abenteuer in der Zahnarztpraxis",
    description:
      "Ein Malbuch mit Geschichte von Steffen Schuster — zum Malen, Anhören und Lesen. Erster Band der Frieda-Malbuchserie.",
    images: [{ url: "/buecher/frieda-malbuch/og-frieda-malbuch.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Friedas fröhliches Abenteuer in der Zahnarztpraxis",
    description: "Ein Malbuch mit Geschichte von Steffen Schuster. Erhältlich bei Amazon.",
    images: ["/buecher/frieda-malbuch/og-frieda-malbuch.jpg"],
  },
};

const faqItems = [
  {
    q: "Worum geht es in „Friedas fröhliches Abenteuer in der Zahnarztpraxis“?",
    a: "Frieda begleitet ihren Papa zu einem Zahnarztbesuch und lernt dabei Antonia kennen, eine Zahnmedizinische Fachangestellte (ZFA). Antonia zeigt Frieda das Behandlungszimmer und erklärt kindgerecht, was zu ihrem Berufsalltag gehört. Die Geschichte ist mit Ausmalbildern, Zahn-Mandalas und kleinen Rätseln rund um das Thema Zahngesundheit verbunden.",
  },
  {
    q: "Für wen ist das Malbuch geeignet?",
    a: "Für kleine Entdecker:innen, die gerade den Umgang mit Stiften lernen. Die klaren Linien und großzügigen Flächen der Illustrationen sind auf kleine Hände abgestimmt und fördern Feinmotorik und Konzentration.",
  },
  {
    q: "Kann man die Geschichte auch anhören?",
    a: "Ja. Zum Buch gibt es ein Video, in dem die Geschichte vorgelesen wird — verlinkt auf dieser Seite.",
  },
  {
    q: "Ist es der erste Band einer Reihe?",
    a: "Ja. „Friedas fröhliches Abenteuer in der Zahnarztpraxis“ ist der erste Band der Frieda-Malbuchserie, die Kinder spielerisch in verschiedene Berufswelten einführt.",
  },
  {
    q: "Wo ist das Malbuch erhältlich?",
    a: "Als Taschenbuch bei Amazon.",
  },
];

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Friedas fröhliches Abenteuer in der Zahnarztpraxis",
  alternateName: "Ein Malbuch mit Geschichte",
  url: PAGE_URL,
  inLanguage: "de",
  bookFormat: "https://schema.org/Paperback",
  isbn: "9783910544055",
  genre: ["Malbuch", "Kinderbuch", "Bilderbuch"],
  audience: { "@type": "PeopleAudience", suggestedMinAge: 3, suggestedMaxAge: 7 },
  author: { "@type": "Person", name: "Steffen Schuster", url: `${SITE_URL}/autor` },
  publisher: { "@type": "Organization", name: "edu:cube Verlag", url: SITE_URL },
  isPartOf: { "@type": "BookSeries", name: "Frieda-Malbuchserie" },
  position: 1,
  description:
    "Ein Malbuch mit Geschichte: Frieda besucht mit ihrem Papa eine Zahnarztpraxis und lernt von der Zahnmedizinischen Fachangestellten Antonia spielerisch den Praxisalltag kennen — mit Ausmalbildern, Zahn-Mandalas und Rätseln.",
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Friedas fröhliches Abenteuer in der Zahnarztpraxis — Vorlesevideo",
  description: "Die Geschichte aus dem Malbuch „Friedas fröhliches Abenteuer in der Zahnarztpraxis“ zum Anhören.",
  thumbnailUrl: [`https://img.youtube.com/vi/${YT_ID}/hqdefault.jpg`],
  embedUrl: `https://www.youtube.com/embed/${YT_ID}`,
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

export default function FriedaMalbuchPage() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
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
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 60, alignItems: "center" }}>
            <div data-reveal>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: "0.18em", color: RED, textTransform: "uppercase", marginBottom: 22 }}>
                Malbuch mit Geschichte · Frieda-Malbuchserie, Band 1
              </p>
              <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(36px, 5vw, 58px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: INK, margin: "0 0 22px" }}>
                Friedas fröhliches Abenteuer in der Zahnarztpraxis
              </h1>
              <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.65, color: "#3e4c5c", maxWidth: 540, marginBottom: 26 }}>
                Zum Malen, Anhören und Lesen: Frieda begleitet ihren Papa zum
                Zahnarzt und entdeckt gemeinsam mit Antonia, der
                Zahnmedizinischen Fachangestellten, spielerisch die Welt der
                Zahnpflege.
              </p>
              <div data-reveal style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
                {["Taschenbuch", "Von Steffen Schuster", "edu:cube Verlag"].map((tag) => (
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
                <a href="#vorlesen" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 30px", borderRadius: 100, border: `1px solid ${INK}40`, color: INK, textDecoration: "none", fontSize: 16, fontWeight: 500 }}>
                  ▶ Vorlesevideo ansehen
                </a>
              </div>
            </div>
            <div data-reveal style={{ position: "relative", maxWidth: 380, margin: "0 auto", width: "100%" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", boxShadow: "0 30px 70px rgba(31,58,95,0.28)", aspectRatio: "700/1068" }}>
                <Image src="/buecher/frieda-malbuch/cover.jpg" alt="Cover: Friedas fröhliches Abenteuer in der Zahnarztpraxis" fill style={{ objectFit: "cover" }} priority sizes="380px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORUM ES GEHT ── */}
      <section data-light-section className="section-px" style={{ background: PAPER, padding: "100px 40px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }} data-reveal>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(28px, 3.2vw, 42px)", fontWeight: 500, lineHeight: 1.15, margin: "0 0 24px", color: INK }}>
            Das kreative Malbuch für kleine Entdecker:innen
          </h2>
          <p style={{ fontSize: 17.5, lineHeight: 1.85, color: "#3e4c5c", margin: "0 0 20px" }}>
            Dieses liebevoll gestaltete Malbuch verbindet Spaß am Ausmalen mit
            einer kleinen Geschichte rund um das Thema Zahngesundheit. Kinder
            lernen spielerisch, wie wichtig gesunde Zähne und richtige
            Zahnpflege sind — und können dabei ihre Kreativität ausleben.
          </p>
          <p style={{ fontSize: 17.5, lineHeight: 1.85, color: "#3e4c5c", margin: 0 }}>
            Mit einfachen, kindgerechten Aufgaben wird die Feinmotorik
            gefördert, während Zahn-Mandalas und kleine Rätsel die Fantasie
            anregen — ideal für gemeinsame kreative Stunden und einen ersten
            spielerischen Einblick in den Beruf der Zahnmedizinischen
            Fachangestellten.
          </p>
        </div>
      </section>

      {/* ── WAS DAS BUCH BIETET ── */}
      <section className="section-px" style={{ background: SOFT, padding: "90px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 data-reveal style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 500, margin: "0 0 40px", color: INK }}>
            Was das Buch bietet
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {[
              { t: "Geschichte zum Vorlesen", d: "Zum Malen, Anhören und Lesen — inklusive Vorlesevideo." },
              { t: "Ausmalbilder", d: "Klare Linien und großzügige Flächen für kleine Hände." },
              { t: "Zahn-Mandalas & Rätsel", d: "Spielerische Aufgaben rund um Zahngesundheit." },
              { t: "Feinmotorik-Förderung", d: "Unterstützt Konzentration und den Umgang mit Stiften." },
              { t: "Berufe zum Entdecken", d: "Erster Band einer Reihe, die Kinder in Berufswelten einführt." },
            ].map((item) => (
              <div key={item.t} data-reveal style={{ background: "#fff", border: `1px solid ${INK}1a`, borderRadius: 16, padding: "26px 24px" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 20, fontWeight: 600, margin: "0 0 8px", color: INK }}>{item.t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#3e4c5c", margin: 0 }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIGUREN ── */}
      <section data-light-section className="section-px" style={{ background: PAPER, padding: "90px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 data-reveal style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 500, margin: "0 0 40px", color: INK }}>
            Figuren
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            <div data-reveal style={{ background: SOFT, borderRadius: 16, padding: "26px 24px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: RED, margin: "0 0 8px" }}>Die Entdeckerin</p>
              <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 22, fontWeight: 600, margin: "0 0 10px", color: INK }}>Frieda</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#3e4c5c", margin: 0 }}>
                Fröhlich und neugierig begleitet Frieda ihren Papa zum
                Zahnarzt und stellt unterwegs jede Menge Fragen.
              </p>
            </div>
            <div data-reveal style={{ background: SOFT, borderRadius: 16, padding: "26px 24px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: RED, margin: "0 0 8px" }}>Die ZFA</p>
              <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 22, fontWeight: 600, margin: "0 0 10px", color: INK }}>Antonia</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#3e4c5c", margin: 0 }}>
                Die freundliche Zahnmedizinische Fachangestellte zeigt Frieda
                das Behandlungszimmer und erklärt geduldig, was zu ihrem
                Berufsalltag gehört.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLICK INS BUCH ── */}
      <section className="section-px" style={{ background: SOFT, padding: "90px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 data-reveal style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 500, margin: "0 0 36px", color: INK }}>
            Blick ins Buch
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { src: "/buecher/frieda-malbuch/preview/preview-2.jpg", alt: "Frieda macht sich mit ihrem Papa auf den Weg zum Zahnarzt." },
              { src: "/buecher/frieda-malbuch/preview/preview-3.jpg", alt: "Antonia begrüßt Frieda vor der Zahnarztpraxis." },
              { src: "/buecher/frieda-malbuch/preview/preview-1.jpg", alt: "Ausmalbild: Zahn-Mandala mit Zahnbürsten-Motiv." },
            ].map((img) => (
              <div key={img.src} data-reveal style={{ position: "relative", aspectRatio: "800/1218", borderRadius: 14, overflow: "hidden", background: "#fff", border: `1px solid ${INK}1a` }}>
                <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 700px) 90vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VORLESEN & ANHÖREN ── */}
      <section id="vorlesen" data-light-section className="section-px" style={{ background: PAPER, padding: "100px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div data-reveal style={{ marginBottom: 30 }}>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 500, margin: "0 0 14px", color: INK }}>
              Vorlesen &amp; Anhören
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#3e4c5c", margin: 0 }}>
              Zum Buch gibt es ein Video, in dem die Geschichte vorgelesen wird.
            </p>
          </div>
          <div data-reveal style={{ position: "relative", aspectRatio: "16/9", borderRadius: 18, overflow: "hidden", boxShadow: "0 30px 60px rgba(31,58,95,0.18)" }}>
            <iframe
              src={`https://www.youtube.com/embed/${YT_ID}`}
              title="Friedas fröhliches Abenteuer in der Zahnarztpraxis — Vorlesevideo"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── AUTOR ── */}
      <section className="section-px" style={{ background: SOFT, padding: "90px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <TiltCard>
            <div
              data-reveal
              className="werk-card-grid"
              style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 32, alignItems: "center", background: "#fff", border: `1px solid ${INK}1a`, borderRadius: 20, padding: "32px 36px" }}
            >
              <div style={{ position: "relative", width: 140, height: 140, borderRadius: "50%", overflow: "hidden", border: `3px solid ${PAPER}` }}>
                <Image src="/autor/steffen-schuster-autorenfoto.jpg" alt="Steffen Schuster, Autor" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: RED, margin: "0 0 8px" }}>Der Autor</p>
                <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 26, fontWeight: 600, margin: "0 0 10px", color: INK }}>Steffen Schuster</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "#3e4c5c", margin: "0 0 16px" }}>
                  Pädagoge und Autor aus Hamburg, der mit der
                  Frieda-Malbuchserie Kinder spielerisch an Berufswelten
                  heranführt — mit demselben Blick für kindgerechtes Lernen,
                  der sein gesamtes Schaffen prägt.
                </p>
                <a href="/autor" style={{ fontSize: 14.5, fontWeight: 600, color: INK, textDecoration: "none", borderBottom: `1px solid ${RED}`, paddingBottom: 2 }}>
                  Mehr über den Autor →
                </a>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section data-light-section className="section-px" style={{ background: PAPER, padding: "110px 40px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div data-reveal style={{ marginBottom: 48 }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.15em", color: RED, textTransform: "uppercase", marginBottom: 18 }}>
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
                  <span style={{ fontSize: 20, color: RED, flexShrink: 0, fontWeight: 300 }}>+</span>
                </summary>
                <div style={{ padding: "0 26px 22px", fontSize: 15, lineHeight: 1.7, color: "#3e4c5c" }}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABSCHLUSS-CTA ── */}
      <section className="section-px" style={{ position: "relative", padding: "140px 40px", background: `radial-gradient(120% 100% at 50% 0%, #2a4a72 0%, ${INK} 55%, #14243a 100%)`, textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }} data-reveal>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(30px, 4vw, 50px)", lineHeight: 1.15, color: "#fff", margin: "0 0 24px" }}>
            Malen, staunen, entdecken — mit Frieda.
          </h2>
          <div className="cta-group" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "17px 34px", borderRadius: 100, background: RED, color: "#fff", textDecoration: "none", fontSize: 16.5, fontWeight: 600 }}
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
              { label: "Iridologie", href: "/buecher/iridologie" },
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
