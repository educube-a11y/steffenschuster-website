import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { TiltCard } from "@/components/TiltCard";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const INK = "#244f59";
const WARM = "#c76b42";
const PAPER = "#fffaf0";
const SOFT = "#eaf3f5";
const SITE_URL = "https://www.steffenschuster.de";
const PAGE_URL = `${SITE_URL}/buecher/clara-und-aeffchen`;

export const metadata: Metadata = {
  title: "Clara & Äffchen — Kinderbuchreihe über Trennung & zwei Zuhause | Steffen Schuster",
  description:
    "Clara & Äffchen: eine warmherzige 14-teilige Kinderbuchreihe über das Aufwachsen zwischen zwei Elternhäusern. 4 Bände erhältlich, ab 5 Jahren, exklusiv bei Amazon. Jetzt entdecken.",
  keywords: [
    "Clara und Äffchen",
    "Kinderbuch Trennung Eltern",
    "Buch für Trennungskinder",
    "Kinderbuchreihe Scheidung",
    "Steffen Schuster Kinderbuch",
    "Wechselmodell Kinderbuch",
    "Buch zwei Zuhause",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "Steffen Schuster",
    title: "Clara & Äffchen — Zwei Zuhause. Viele Gefühle. Ein eigener Weg.",
    description:
      "Eine warmherzige, spannende Kinderbuchreihe über das Aufwachsen zwischen zwei Elternhäusern. 4 von 14 Bänden erhältlich — exklusiv bei Amazon.",
    images: [{ url: "/buecher/clara-und-aeffchen/og-clara-und-aeffchen.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clara & Äffchen — Zwei Zuhause. Viele Gefühle. Ein eigener Weg.",
    description:
      "Eine warmherzige Kinderbuchreihe über das Aufwachsen zwischen zwei Elternhäusern. Ab 5 Jahren, exklusiv bei Amazon.",
    images: ["/buecher/clara-und-aeffchen/og-clara-und-aeffchen.jpg"],
  },
};

const AMAZON = {
  band1: "https://www.amazon.de/dp/B0HDHZQ596",
  band2: "https://www.amazon.de/dp/B0HDLDNLXD",
  band3: "https://www.amazon.de/dp/B0HDNTP6TP",
  band4: "https://www.amazon.de/dp/B0HFK7Y5FH",
};

type BandStatus = "erhaeltlich" | "in_vorbereitung" | "geplant";

type Band = {
  nr: number;
  alter: number;
  titel: string;
  untertitel: string;
  teaser: string;
  kaufimpuls: string;
  cover: string;
  status: BandStatus;
  link: string | null;
};

const baende: Band[] = [
  {
    nr: 1,
    alter: 5,
    titel: "Der Plan mit den zwei Stühlen",
    untertitel: "Wenn aus einem Zuhause zwei werden",
    teaser:
      "Als Claras Papa Kartons packt, möchte Clara nur eines: Alles soll wieder so werden wie früher. Ihr geheimer Plan mit zwei Stühlen führt zu einem wichtigen ersten Schritt — und zu der Erkenntnis, dass sie beide Eltern lieben darf, ohne ihre Beziehung reparieren zu müssen.",
    kaufimpuls: "Ein warmherziger Einstieg in die Reihe für Kinder, die sich zwischen zwei Zuhause wiederfinden.",
    cover: "/buecher/clara-und-aeffchen/covers/cover-band-1.jpg",
    status: "erhaeltlich",
    link: AMAZON.band1,
  },
  {
    nr: 2,
    alter: 6,
    titel: "Clara und die zwei Kalender",
    untertitel: "Ein Schulanfang mit zwei Zuhause",
    teaser:
      "Schultüte, neuer Ranzen und Grete auf dem Schulhof: Clara freut sich auf ihren großen Tag. Doch Mama und Papa sitzen weit auseinander. Mit Äffchen, Grete und Tante Carina findet Clara einen eigenen Rhythmus zwischen zwei Kalendern.",
    kaufimpuls: "Für Familien, die Einschulung und Trennung gemeinsam, kindgerecht und ohne Schuldzuweisungen besprechen möchten.",
    cover: "/buecher/clara-und-aeffchen/covers/cover-band-2.jpg",
    status: "erhaeltlich",
    link: AMAZON.band2,
  },
  {
    nr: 3,
    alter: 7,
    titel: "Clara und der leere Kalender",
    untertitel: "Wenn ein Papa-Wochenende ausfällt",
    teaser:
      "Im Kalender fehlt plötzlich der Samstagstern. Clara vermisst Papa und möchte Mama nicht enttäuschen. In der Schule findet sie bei Grete und Frau Grün Worte für das, was passiert — und entdeckt, dass Hilfeholen kein Petzen ist.",
    kaufimpuls: "Eine stärkende Geschichte für Kinder, die mit ausgefallenen Besuchen, Vermissen und Loyalitätsdruck umgehen müssen.",
    cover: "/buecher/clara-und-aeffchen/covers/cover-band-3.jpg",
    status: "erhaeltlich",
    link: AMAZON.band3,
  },
  {
    nr: 4,
    alter: 8,
    titel: "Clara und die zwei Wochen",
    untertitel: "Wenn ein neuer Alltag beginnt",
    teaser:
      "Clara probiert eine ganze Woche bei Mama und eine ganze Woche bei Papa. Dann kommt Sven in Petras Leben. Clara fasst Vertrauen, erlebt einen Abschied und lernt: Eine Beziehung kann echt gewesen sein, auch wenn sie endet.",
    kaufimpuls: "Der wichtige Band über Wochenwechsel, neue Partner, Vertrauen und Abschied.",
    cover: "/buecher/clara-und-aeffchen/covers/cover-band-4.jpg",
    status: "erhaeltlich",
    link: AMAZON.band4,
  },
];

const figuren = [
  { name: "Clara", rolle: "Die Hauptfigur", text: "Clara beobachtet genau, fühlt intensiv und findet kreative Wege, ohne die Verantwortung der Erwachsenen zu übernehmen." },
  { name: "Äffchen", rolle: "Claras Kuscheltier", text: "Äffchen ist ein gewöhnliches Kuscheltier. Seine „Stimme“ ist Claras Gedankensprache und macht innere Gespräche sichtbar." },
  { name: "Grete", rolle: "Beste Freundin", text: "Grete ist Claras gleichaltrige Freundin und wächst mit ihr bis ins junge Erwachsenenalter." },
  { name: "Carina", rolle: "Claras Tante", text: "Carina ist eine verlässliche Erwachsene außerhalb des Elternkonflikts." },
  { name: "Petra & Michael", rolle: "Claras Eltern", text: "Petra und Michael bleiben Claras Eltern. Neue Partner ersetzen keinen Elternteil." },
];

const bildwelten = [
  { src: "/buecher/clara-und-aeffchen/teaser/band1-zwei-stuehle.jpg", alt: "Zwei besondere Stühle stehen als Claras Plan nebeneinander.", band: "Band 1" },
  { src: "/buecher/clara-und-aeffchen/teaser/band1-froher-schluss.jpg", alt: "Clara und Äffchen erleben einen freundlichen Moment voller Zuversicht.", band: "Band 1" },
  { src: "/buecher/clara-und-aeffchen/teaser/band2-einschulung.jpg", alt: "Clara erlebt ihre Einschulungsfeier, während die Erwachsenen Abstand halten.", band: "Band 2" },
  { src: "/buecher/clara-und-aeffchen/teaser/band2-papa-tag.jpg", alt: "Clara verbringt mit Papa einen warmen, humorvollen Pfannkuchenmoment.", band: "Band 2" },
  { src: "/buecher/clara-und-aeffchen/teaser/band3-grete-geburtstag.jpg", alt: "Clara und Grete feiern gemeinsam einen Kindergeburtstag.", band: "Band 3" },
  { src: "/buecher/clara-und-aeffchen/teaser/band3-beratung.jpg", alt: "Clara sitzt mit einer erwachsenen Beratungsfachkraft in einem ruhigen Gespräch.", band: "Band 3" },
  { src: "/buecher/clara-und-aeffchen/teaser/band4-regenwechsel.jpg", alt: "Clara steht im Regen vor Papas Tür und hält Äffchen fest.", band: "Band 4" },
  { src: "/buecher/clara-und-aeffchen/teaser/band4-sven-backen.jpg", alt: "Clara und Sven backen gemeinsam, während Äffchen zusieht.", band: "Band 4" },
];

const faqItems = [
  {
    q: "Ab welchem Alter eignet sich Clara & Äffchen?",
    a: "Die Reihe ist ab 5 Jahren zum Vorlesen geeignet und wächst inhaltlich mit ihren Leserinnen mit: Clara ist im ersten Band 5 Jahre alt und wird in jedem weiteren Band ein Jahr älter.",
  },
  {
    q: "Wie viele Bände wird es geben?",
    a: "Clara & Äffchen ist auf 14 Bände angelegt und begleitet Clara von der Kita bis zum Abitur und dem Auszug mit 18 Jahren. Aktuell sind die Bände 1 bis 4 erhältlich.",
  },
  {
    q: "Wann erscheint Band 5?",
    a: "Ein Erscheinungstermin für Band 5 steht noch nicht fest. Sobald ein neuer Band angekündigt ist, wird diese Seite aktualisiert.",
  },
  {
    q: "Wo kann ich Clara & Äffchen kaufen?",
    a: "Die Bände werden ausschließlich über Amazon vertrieben, als Taschenbuch und E-Book. Die Kauflinks zu jedem Band finden Sie direkt auf dieser Seite.",
  },
  {
    q: "Ersetzt Clara & Äffchen eine Therapie oder Familienberatung?",
    a: "Nein. Die Bücher versprechen keine Therapie und keine garantierte Heilung. Sie können Kindern Worte, Identifikation und Zuversicht geben und Erwachsenen helfen, ein Gespräch zu beginnen.",
  },
  {
    q: "Ist die Reihe auch für Kinder ohne Trennungserfahrung geeignet?",
    a: "Ja. Clara & Äffchen ist in erster Linie eine warmherzige, humorvolle und spannende Geschichte über das Erwachsenwerden. Kinder mit eigener Trennungserfahrung finden zusätzlich Identifikation, Kinder ohne diese Erfahrung gewinnen Verständnis für Mitschülerinnen und Freundinnen in dieser Situation.",
  },
  {
    q: "Wer schreibt Clara & Äffchen?",
    a: "Autor der Reihe ist Steffen Schuster, der seit vielen Jahren mit kindlicher Entwicklung, Anthroposophie und Therapieansätzen unterschiedlicher Kulturen in Berührung steht.",
  },
];

const bookSeriesSchema = {
  "@context": "https://schema.org",
  "@type": "BookSeries",
  name: "Clara & Äffchen",
  url: PAGE_URL,
  inLanguage: "de",
  genre: ["Kinderbuch", "Familienthema", "Bilderbuchreihe"],
  numberOfItems: 14,
  audience: { "@type": "PeopleAudience", suggestedMinAge: 5 },
  description:
    "Eine 14-bändige Kinderbuchreihe, die Clara vom fünften bis zum 18. Lebensjahr zwischen zwei Elternhäusern begleitet — warmherzig, humorvoll und stärkend erzählt.",
  author: { "@type": "Person", name: "Steffen Schuster", url: `${SITE_URL}/autor` },
  publisher: { "@type": "Organization", name: "educube GmbH", url: SITE_URL },
  hasPart: baende.map((b) => ({
    "@type": "Book",
    name: b.titel,
    alternateName: `Clara & Äffchen · Band ${b.nr}`,
    position: b.nr,
    bookFormat: "https://schema.org/Paperback",
    inLanguage: "de",
    description: b.teaser,
    author: { "@type": "Person", name: "Steffen Schuster", url: `${SITE_URL}/autor` },
    isPartOf: { "@type": "BookSeries", name: "Clara & Äffchen", url: PAGE_URL },
    ...(b.link ? { url: b.link } : {}),
  })),
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

export default function ClaraUndAeffchenPage() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSeriesSchema) }} />
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
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto", width: "100%", position: "relative" }}>
          <div
            className="grid-2"
            style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 60, alignItems: "center" }}
          >
            <div data-reveal>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  color: WARM,
                  textTransform: "uppercase",
                  marginBottom: 22,
                }}
              >
                Kinderbuchreihe von Steffen Schuster
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 500,
                  fontSize: "clamp(40px, 5.5vw, 70px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.5px",
                  color: INK,
                  margin: "0 0 26px",
                }}
              >
                Zwei Zuhause.
                <br />
                Viele Gefühle.
                <br />
                <em style={{ fontStyle: "italic", color: WARM }}>Ein eigener Weg.</em>
              </h1>
              <p style={{ fontSize: "clamp(17px, 1.6vw, 20px)", lineHeight: 1.65, color: "#3a4a4d", maxWidth: 540, marginBottom: 30 }}>
                <strong>Clara &amp; Äffchen</strong> erzählt warmherzig, humorvoll
                und spannend vom Aufwachsen zwischen zwei Elternhäusern — eine
                Buchreihe für Mädchen in jeder Lebensphase und eine
                Gesprächsbrücke für Familien.
              </p>
              <div data-reveal style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 34 }}>
                {["4 von 14 Bänden erhältlich", "Ab 5 Jahren", "Exklusiv bei Amazon"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "8px 16px",
                      borderRadius: 100,
                      background: "#fff",
                      border: `1px solid ${INK}26`,
                      fontSize: 13.5,
                      fontWeight: 600,
                      color: INK,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div data-reveal className="hero-cta-group" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <a
                  href="#baende"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "16px 30px",
                    borderRadius: 100,
                    background: WARM,
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: 16,
                    fontWeight: 600,
                    boxShadow: "0 8px 30px rgba(199,107,66,0.35)",
                  }}
                >
                  Bände entdecken <span style={{ fontSize: 18 }}>→</span>
                </a>
                <a
                  href="#eltern"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "16px 30px",
                    borderRadius: 100,
                    border: `1px solid ${INK}40`,
                    color: INK,
                    textDecoration: "none",
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  Für ein Trennungskind schenken
                </a>
              </div>
            </div>

            <div data-reveal style={{ position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "center", position: "relative", height: "clamp(320px, 40vw, 460px)" }}>
                {baende.slice(0, 3).map((b, i) => (
                  <div
                    key={b.nr}
                    style={{
                      position: "absolute",
                      width: "58%",
                      aspectRatio: "5/8",
                      left: `${i * 21}%`,
                      top: `${i * 6}%`,
                      transform: `rotate(${(i - 1) * 7}deg)`,
                      borderRadius: 12,
                      overflow: "hidden",
                      boxShadow: "0 20px 44px rgba(36,79,89,0.28)",
                      border: "1px solid rgba(255,255,255,0.6)",
                      zIndex: i,
                    }}
                  >
                    <Image src={b.cover} alt={`Cover Band ${b.nr}: ${b.titel}`} fill style={{ objectFit: "cover" }} priority={i === 2} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORUM ES GEHT ── */}
      <section data-light-section className="section-px" style={{ background: PAPER, padding: "100px 40px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }} data-reveal>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(28px, 3.2vw, 42px)",
              fontWeight: 500,
              lineHeight: 1.15,
              margin: "0 0 24px",
              color: INK,
            }}
          >
            Worum es geht
          </h2>
          <p style={{ fontSize: 17.5, lineHeight: 1.85, color: "#3a4a4d", margin: "0 0 20px" }}>
            Wenn Eltern sich trennen, verändert sich für Kinder fast alles:
            Wohnorte, Wochenpläne, Feste, Gespräche und manchmal auch die
            Menschen, die neu in ihr Leben kommen. Clara darf traurig, wütend,
            erleichtert und fröhlich zugleich sein. Sie lernt, Gefühle zu
            benennen, Verantwortung bei den Erwachsenen zu lassen und ihren
            eigenen Platz zu schützen.
          </p>
          <p style={{ fontSize: 17.5, lineHeight: 1.85, color: "#3a4a4d", margin: 0 }}>
            Die Bücher erklären Trennung nicht von oben herab. Sie erzählen aus
            Claras Nähe, mit Humor, Spannung und kleinen Lösungen, die zu ihrem
            Alter passen.
          </p>
        </div>
      </section>

      {/* ── FÜR WEN ── */}
      <section className="section-px" style={{ background: SOFT, padding: "90px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            data-reveal
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(26px, 3vw, 38px)",
              fontWeight: 500,
              margin: "0 0 40px",
              color: INK,
            }}
          >
            Für wen die Reihe gedacht ist
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 20 }}>
            {[
              "Für Mädchen nahe Claras jeweiligem Alter",
              "Für Kinder, die zwischen zwei Zuhause leben oder eine Trennung nachträglich verarbeiten",
              "Für Eltern, Großeltern, Tanten, Onkel und pädagogische Bezugspersonen",
              "Zum Vorlesen, gemeinsamen Lesen und als behutsamer Gesprächsanlass",
            ].map((t) => (
              <div
                key={t}
                data-reveal
                style={{ background: "#fff", border: "1px solid #dfe8e6", borderRadius: 16, padding: "26px 24px", fontSize: 15, lineHeight: 1.6, color: "#3a4a4d" }}
              >
                {t}
              </div>
            ))}
          </div>
          <p data-reveal style={{ marginTop: 30, fontSize: 14.5, lineHeight: 1.7, color: "#5a6a6d", maxWidth: 700 }}>
            Die Bücher versprechen keine Therapie und keine garantierte
            Heilung. Sie können Kindern Worte, Identifikation und Zuversicht
            geben und Erwachsenen helfen, ein Gespräch zu beginnen.
          </p>
        </div>
      </section>

      {/* ── DIE REIHE IM ÜBERBLICK ── */}
      <section className="section-px" style={{ background: INK, padding: "100px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 680, marginBottom: 48 }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.15em", color: WARM, textTransform: "uppercase", marginBottom: 18 }}>
              Die Reihe im Überblick
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(28px, 3.2vw, 42px)", fontWeight: 500, lineHeight: 1.15, margin: 0, color: "#fff" }}>
              Von der Kita bis zum Abitur — Clara wächst mit ihren Leserinnen.
            </h2>
          </div>
          <p data-reveal style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", maxWidth: 720, marginBottom: 44 }}>
            Clara ist im ersten Band fünf Jahre alt. Mit jedem Band wird sie
            ein Jahr älter. Die Reihe führt von der Kita über Grundschule,
            Sport, neue Familienstrukturen, Pubertät und erste Liebe bis zum
            Abitur und zum eigenen Haushalt mit 18.
          </p>

          <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {Array.from({ length: 14 }, (_, i) => i + 1).map((nr) => {
              const status = nr <= 4 ? "erhaeltlich" : "geplant";
              const bg = status === "erhaeltlich" ? WARM : "rgba(255,255,255,0.07)";
              const color = status === "geplant" ? "rgba(255,255,255,0.4)" : "#fff";
              return (
                <div
                  key={nr}
                  title={`Band ${nr} · Clara ist ${nr + 4} Jahre alt`}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 10,
                    background: bg,
                    color,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 700,
                    border: status === "geplant" ? "1px dashed rgba(255,255,255,0.18)" : "none",
                  }}
                >
                  <span style={{ fontSize: 15 }}>{nr}</span>
                  <span style={{ fontSize: 9, opacity: 0.8 }}>{nr + 4}J</span>
                </div>
              );
            })}
          </div>
          <div data-reveal style={{ display: "flex", gap: 22, flexWrap: "wrap", marginTop: 22, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, background: WARM, display: "inline-block" }} /> erhältlich
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, border: "1px dashed rgba(255,255,255,0.3)", display: "inline-block" }} /> geplant
            </span>
          </div>
        </div>
      </section>

      {/* ── BÄNDE ── */}
      <section id="baende" data-light-section className="section-px" style={{ background: PAPER, padding: "110px 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 640, marginBottom: 54 }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.15em", color: WARM, textTransform: "uppercase", marginBottom: 18 }}>
              Die Bände
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(28px, 3.2vw, 42px)", fontWeight: 500, lineHeight: 1.15, margin: 0, color: INK }}>
              Jeder Band ein Lebensjahr, jeder Band eine eigene Geschichte.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 26 }}>
            {baende.map((b) => (
              <TiltCard key={b.nr}>
                <div
                  data-reveal
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    border: "1px solid #e2d9c8",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 14px 34px rgba(36,79,89,0.08)",
                  }}
                >
                  <div style={{ position: "relative", aspectRatio: "5/8", background: SOFT }}>
                    <Image
                      src={b.cover}
                      alt={`Cover Band ${b.nr}: ${b.titel}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    {b.status === "in_vorbereitung" && (
                      <div
                        style={{
                          position: "absolute",
                          top: 14,
                          right: 14,
                          background: "rgba(36,79,89,0.9)",
                          color: "#fff",
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                          padding: "6px 12px",
                          borderRadius: 100,
                        }}
                      >
                        Vorschau · Cover folgt
                      </div>
                    )}
                    <div
                      style={{
                        position: "absolute",
                        top: 14,
                        left: 14,
                        background: WARM,
                        color: "#fff",
                        fontSize: 12,
                        fontWeight: 700,
                        padding: "5px 11px",
                        borderRadius: 100,
                      }}
                    >
                      Band {b.nr} · {b.alter} Jahre
                    </div>
                  </div>
                  <div style={{ padding: "24px 24px 26px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 22, fontWeight: 600, margin: "0 0 4px", color: INK, lineHeight: 1.2 }}>
                      {b.titel}
                    </h3>
                    <p style={{ fontSize: 12.5, fontWeight: 600, color: WARM, margin: "0 0 14px", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                      {b.untertitel}
                    </p>
                    <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#4a5a5d", margin: "0 0 14px", flex: 1 }}>
                      {b.teaser}
                    </p>
                    <p style={{ fontSize: 13, lineHeight: 1.6, color: "#7a8a8d", fontStyle: "italic", margin: "0 0 20px" }}>
                      {b.kaufimpuls}
                    </p>
                    {b.link ? (
                      <a
                        href={b.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                          padding: "13px 20px",
                          borderRadius: 100,
                          background: "#232f3e",
                          color: "#fff",
                          textDecoration: "none",
                          fontSize: 14.5,
                          fontWeight: 600,
                        }}
                      >
                        Bei Amazon ansehen <span>→</span>
                      </a>
                    ) : (
                      <a
                        href="/kontakt"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                          padding: "13px 20px",
                          borderRadius: 100,
                          border: `1px solid ${INK}40`,
                          color: INK,
                          textDecoration: "none",
                          fontSize: 14.5,
                          fontWeight: 600,
                        }}
                      >
                        Erscheint in Kürze — benachrichtigen lassen
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIGUREN ── */}
      <section className="section-px" style={{ background: SOFT, padding: "100px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 data-reveal style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(28px, 3.2vw, 42px)", fontWeight: 500, margin: "0 0 40px", color: INK }}>
            Figuren
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 20 }}>
            {figuren.map((f) => (
              <div key={f.name} data-reveal style={{ background: "#fff", border: "1px solid #dfe8e6", borderRadius: 16, padding: "26px 22px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: WARM, margin: "0 0 8px" }}>
                  {f.rolle}
                </p>
                <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 22, fontWeight: 600, margin: "0 0 10px", color: INK }}>
                  {f.name}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4a5a5d", margin: 0 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BILDWELTEN ── */}
      <section data-light-section className="section-px" style={{ background: PAPER, padding: "100px 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 640, marginBottom: 40 }}>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(28px, 3.2vw, 42px)", fontWeight: 500, margin: "0 0 16px", color: INK }}>
              Bildwelten
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4a5a5d", margin: 0 }}>
              Jeder Band erhält eigene Illustrationen. Sie zeigen keine
              Ratgeberthesen, sondern Claras konkrete Momente.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {bildwelten.map((img) => (
              <div key={img.src} data-reveal style={{ position: "relative", aspectRatio: "3/2", borderRadius: 14, overflow: "hidden" }}>
                <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 700px) 50vw, 25vw" />
                <div
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    background: "rgba(36,79,89,0.85)",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: 100,
                  }}
                >
                  {img.band}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRÜCKE FÜR ERWACHSENE ── */}
      <section id="eltern" className="section-px" style={{ background: INK, padding: "110px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div data-reveal>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.15em", color: WARM, textTransform: "uppercase", marginBottom: 18 }}>
                Für Eltern & Bezugspersonen
              </p>
              <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(28px, 3.2vw, 42px)", fontWeight: 500, lineHeight: 1.15, margin: "0 0 22px", color: "#fff" }}>
                Eine Brücke für Erwachsene.
              </h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", margin: "0 0 20px" }}>
                Die Kinderbücher gehören ganz Clara und ihren Leserinnen. Sie
                können Familien helfen, über zwei Zuhause, neue Partner,
                Vermissen und eigene Grenzen zu sprechen.
              </p>
              <p style={{ fontSize: 16.5, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", margin: 0 }}>
                Ein eigenständiger Begleitband für Erwachsene ist nach
                Abschluss der 14-bändigen Reihe geplant — mit eigenen
                Hintergrundinformationen, Reflexionsfragen und praktischen
                Gesprächsimpulsen.
              </p>
            </div>
            <div data-reveal style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 18, padding: "34px 32px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: WARM, margin: "0 0 18px" }}>
                Was helfen kann
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Gefühle anerkennen, ohne sie sofort lösen zu wollen",
                  "Erwachsenenfragen direkt zwischen Erwachsenen klären",
                  "Dem Kind sagen: „Du bist nicht schuld. Du musst das nicht reparieren.“",
                  "Verlässliche kleine Rituale in beiden Zuhause schaffen",
                ].map((t) => (
                  <li key={t} style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.82)" }}>
                    <span style={{ color: WARM, flexShrink: 0 }}>✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUTOR ── */}
      <section data-light-section className="section-px" style={{ background: PAPER, padding: "90px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <TiltCard>
            <div
              data-reveal
              className="werk-card-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: 32,
                alignItems: "center",
                background: "#fff",
                border: "1px solid #e2d9c8",
                borderRadius: 20,
                padding: "32px 36px",
              }}
            >
              <div style={{ position: "relative", width: 140, height: 140, borderRadius: "50%", overflow: "hidden", border: `3px solid ${SOFT}` }}>
                <Image src="/autor/steffen-schuster-autorenfoto.jpg" alt="Steffen Schuster, Autor von Clara & Äffchen" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: WARM, margin: "0 0 8px" }}>
                  Der Autor
                </p>
                <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 26, fontWeight: 600, margin: "0 0 10px", color: INK }}>
                  Steffen Schuster
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "#4a5a5d", margin: "0 0 16px" }}>
                  Geprägt von Technik, Pädagogik und einem langjährigen Blick
                  auf Anthroposophie und kindliche Entwicklung — bei Steffen
                  Schuster zieht sich das Lernen in all seiner Umfänglichkeit
                  als roter Faden durch sein Schaffen.
                </p>
                <a href="/autor" style={{ fontSize: 14.5, fontWeight: 600, color: INK, textDecoration: "none", borderBottom: `1px solid ${WARM}`, paddingBottom: 2 }}>
                  Mehr über den Autor →
                </a>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-px" style={{ background: SOFT, padding: "110px 40px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div data-reveal style={{ marginBottom: 48 }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.15em", color: WARM, textTransform: "uppercase", marginBottom: 18 }}>
              Häufige Fragen
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(28px, 3.2vw, 42px)", fontWeight: 500, margin: 0, color: INK }}>
              Kurz beantwortet.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {faqItems.map((f, i) => (
              <details key={i} data-reveal style={{ background: "#fff", border: "1px solid #dfe8e6", borderRadius: 14, overflow: "hidden" }}>
                <summary style={{ padding: "22px 26px", fontSize: 16, fontWeight: 600, color: INK, cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                  {f.q}
                  <span style={{ fontSize: 20, color: WARM, flexShrink: 0, fontWeight: 300 }}>+</span>
                </summary>
                <div style={{ padding: "0 26px 22px", fontSize: 15, lineHeight: 1.7, color: "#4a5a5d" }}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABSCHLUSS-CTA ── */}
      <section
        className="section-px"
        style={{
          position: "relative",
          padding: "140px 40px",
          background: `radial-gradient(120% 100% at 50% 0%, #2d5a63 0%, ${INK} 55%, #16323a 100%)`,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }} data-reveal>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.1, color: "#fff", margin: "0 0 24px" }}>
            Schenken Sie einem Mädchen eine Geschichte, in der ihre Gefühle
            zählen.
          </h2>
          <p style={{ fontSize: 17.5, lineHeight: 1.7, color: "rgba(255,255,255,0.78)", margin: "0 0 40px" }}>
            Und die sie nicht zwischen den Erwachsenen vermitteln muss.
          </p>
          <div className="cta-group" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a
              href={AMAZON.band1}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "17px 34px", borderRadius: 100, background: WARM, color: "#fff", textDecoration: "none", fontSize: 16.5, fontWeight: 600, boxShadow: "0 10px 34px rgba(199,107,66,0.4)" }}
            >
              Band 1 jetzt bei Amazon <span>→</span>
            </a>
            <a href="#baende" style={{ display: "inline-flex", alignItems: "center", padding: "17px 34px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.28)", color: "#fff", textDecoration: "none", fontSize: 16.5, fontWeight: 500 }}>
              Alle Bände ansehen
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
              { label: "Iridologie", href: "/buecher/iridologie" },
              { label: "Friedas Abenteuer", href: "/buecher/frieda-malbuch" },
              { label: "#ZFA Arbeitsbuch", href: "/buecher/zfa-arbeitsbuch" },
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
