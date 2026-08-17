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
const GOLD = "#b68d40";
const IRIS_INK = "#2f4538";
const ZFA_NAVY = "#213e70";
const ZFA_ACCENT = "#e0781a";
const SITE_URL = "https://www.steffenschuster.de";

export const metadata: Metadata = {
  title: "Steffen Schuster als Autor — Clara & Äffchen, Iridologie & mehr",
  description:
    "Steffen Schuster verbindet Pädagogik, Anthroposophie und jahrzehntelange Erfahrung mit kindlicher Entwicklung in seinen Büchern — von der Kinderbuchreihe Clara & Äffchen bis zum Fachbuch Iridologie. Erhältlich bei Amazon.",
  alternates: { canonical: `${SITE_URL}/autor` },
  openGraph: {
    type: "profile",
    locale: "de_DE",
    url: `${SITE_URL}/autor`,
    siteName: "Steffen Schuster",
    title: "Steffen Schuster als Autor — Clara & Äffchen, Iridologie & mehr",
    description:
      "Ein vielfältiges Leben zwischen Technik, Anthroposophie und kindlicher Entwicklung — im Zentrum steht das Lernen in all seiner Umfänglichkeit. Autor und Co-Autor mehrerer Bücher.",
    images: [{ url: "/autor/og-steffen-schuster-autor.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steffen Schuster als Autor — Clara & Äffchen, Iridologie & mehr",
    description:
      "Autor der Kinderbuchreihe Clara & Äffchen und Co-Autor des Fachbuchs Iridologie — geprägt von Pädagogik, Anthroposophie und dem Lernen als rotem Faden.",
    images: ["/autor/og-steffen-schuster-autor.jpg"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Steffen Schuster",
  url: `${SITE_URL}/autor`,
  image: `${SITE_URL}/autor/steffen-schuster-autorenfoto.jpg`,
  sameAs: [SITE_URL, `${SITE_URL}/ueber`],
  jobTitle: ["Autor", "Kinderbuchautor", "Pädagoge"],
  description:
    "Steffen Schuster ist Autor und Pädagoge. Mit der Reihe Clara & Äffchen verbindet er kindnahe Erzählkunst mit langjähriger Beschäftigung mit kindlicher Entwicklung und Anthroposophie; als Co-Autor wirkte er zudem am Fachbuch Iridologie – Interpretation der Zeichen des Auges mit. Als Autor und Herausgeber der #ZFA Arbeitsbuch-Reihe begleitet er zudem Auszubildende zur Zahnmedizinischen Fachangestellten.",
  knowsAbout: [
    "Kindliche Entwicklung",
    "Anthroposophie",
    "Pädagogik",
    "Lernen und Persönlichkeitsentwicklung",
    "Familienthemen in der Kinderliteratur",
    "Iridologie",
    "ZFA-Ausbildung",
  ],
  hasOccupation: [
    { "@type": "Occupation", name: "Autor" },
    { "@type": "Occupation", name: "Pädagoge" },
  ],
  author: [
    {
      "@type": "CreativeWorkSeries",
      name: "Clara & Äffchen",
      url: `${SITE_URL}/buecher/clara-und-aeffchen`,
    },
    {
      "@type": "Book",
      name: "Iridologie – Interpretation der Zeichen des Auges",
      url: `${SITE_URL}/buecher/iridologie`,
    },
    {
      "@type": "Book",
      name: "Friedas fröhliches Abenteuer in der Zahnarztpraxis",
      url: `${SITE_URL}/buecher/frieda-malbuch`,
    },
    {
      "@type": "BookSeries",
      name: "#ZFA — Eine crossmediale Ausbildung zur Zahnmedizinischen Fachangestellten",
      url: `${SITE_URL}/buecher/zfa-arbeitsbuch`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wer ist Steffen Schuster als Kinderbuchautor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Steffen Schuster ist Autor der Kinderbuchreihe Clara & Äffchen. Er blickt auf ein vielfältiges Leben mit vielen Ausbildungen und Lernerfahrungen zurück und hat sich neben Technik, IT und Künstlicher Intelligenz immer wieder mit Anthroposophie, kindlicher Entwicklung und Therapieansätzen unterschiedlicher Kulturen beschäftigt.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Buchreihe hat Steffen Schuster geschrieben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Steffen Schuster schreibt die Kinderbuchreihe Clara & Äffchen, die Clara vom fünften bis zum 18. Lebensjahr zwischen zwei Elternhäusern begleitet. Die Reihe ist auf 14 Bände angelegt, aktuell sind vier Bände erhältlich beziehungsweise angekündigt.",
      },
    },
    {
      "@type": "Question",
      name: "Wo sind die Bücher von Steffen Schuster erhältlich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Bücher von Steffen Schuster werden ausschließlich über Amazon vertrieben, als Taschenbuch und E-Book.",
      },
    },
    {
      "@type": "Question",
      name: "Was prägt das Schreiben von Steffen Schuster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Roter Faden seines gesamten Schaffens ist das Lernen in all seiner Umfänglichkeit — als Pädagoge, als Gestalter digitaler Lernwelten und als Autor. In Clara & Äffchen verbindet er diesen Blick mit langjähriger Beschäftigung mit kindlicher Entwicklung, äußeren Einflüssen auf das Aufwachsen von Kindern und Therapieansätzen unterschiedlicher Kulturen.",
      },
    },
    {
      "@type": "Question",
      name: "An welchen weiteren Büchern hat Steffen Schuster mitgewirkt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Als Co-Autor wirkte Steffen Schuster gemeinsam mit Vistara Haiduk-Kaplan am Fachbuch „Iridologie – Interpretation der Zeichen des Auges“ mit. Außerdem schrieb er das Malbuch „Friedas fröhliches Abenteuer in der Zahnarztpraxis“, den ersten Band der Frieda-Malbuchserie, die Kinder spielerisch in verschiedene Berufswelten einführt.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist die #ZFA Arbeitsbuch-Reihe von Steffen Schuster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Steffen Schuster hat die dreibändige Arbeitsbuch-Reihe „#ZFA — Eine crossmediale Ausbildung zur Zahnmedizinischen Fachangestellten“ als Autor und Herausgeber gemeinsam mit einem Autorinnen-Team aus drei Kolleginnen entwickelt. Die Reihe deckt alle 13 Lernfelder der ZFA-Ausbildung ab und ist die analoge Übungsergänzung zum KI-Lerncoach lina-zfa auf seiner Lernplattform nora-ki.de.",
      },
    },
  ],
};

export default function AutorPage() {
  return (
    <div style={{ background: PAPER, color: INK }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ScrollRevealInit />
      <ScrollAnimations />
      <CustomCursor />
      <Nav />

      {/* ── HERO ── */}
      <section
        id="hero"
        className="hero-section section-px"
        style={{
          background: `linear-gradient(180deg, ${INK} 0%, #1b3a42 100%)`,
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          padding: "120px 40px 80px",
        }}
      >
        <div
          className="grid-2"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 400px",
            gap: 70,
            alignItems: "center",
          }}
        >
          <div data-reveal>
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 12,
                letterSpacing: "0.18em",
                color: WARM,
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Kinderbuchautor · Autor von Clara &amp; Äffchen
            </p>
            <h1
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 500,
                fontSize: "clamp(44px, 6vw, 78px)",
                lineHeight: 1.02,
                letterSpacing: "-0.5px",
                color: "#fff",
                margin: "0 0 28px",
              }}
            >
              Geschichten, die aus{" "}
              <em style={{ fontStyle: "italic", color: WARM }}>echtem Lernen</em>{" "}
              entstehen.
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 1.4vw, 19px)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.78)",
                maxWidth: 540,
                marginBottom: 40,
              }}
            >
              Steffen Schuster blickt auf ein vielfältiges Leben mit vielen
              Ausbildungen und Lernerfahrungen zurück. Neben Technik, IT und
              Künstlicher Intelligenz hat ihn ein zweites Thema nie
              losgelassen: die kindliche Entwicklung.
            </p>
            <div
              data-reveal
              className="hero-cta-group"
              style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}
            >
              <a
                href="/buecher/clara-und-aeffchen"
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
                Clara &amp; Äffchen entdecken <span style={{ fontSize: 18 }}>→</span>
              </a>
              <a
                href="#biografie"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "16px 30px",
                  borderRadius: 100,
                  border: "1px solid rgba(255,255,255,0.28)",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                Zur Biografie
              </a>
            </div>
          </div>

          <div
            data-reveal
            style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              aspectRatio: "4/5",
              boxShadow: "0 40px 80px rgba(0,0,0,0.45)",
            }}
          >
            <Image
              src="/autor/steffen-schuster-autorenfoto.jpg"
              alt="Steffen Schuster, Autor der Kinderbuchreihe Clara & Äffchen"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
              sizes="400px"
            />
          </div>
        </div>
      </section>

      {/* ── BIOGRAFIE ── */}
      <section
        id="biografie"
        data-light-section
        className="section-px"
        style={{ background: PAPER, padding: "110px 40px" }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div data-reveal style={{ marginBottom: 40 }}>
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: WARM,
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Kurzabriss
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(30px, 3.5vw, 46px)",
                fontWeight: 500,
                lineHeight: 1.12,
                margin: 0,
                color: INK,
              }}
            >
              Ein roter Faden durch viele Stationen: das Lernen.
            </h2>
          </div>
          <div
            data-reveal
            style={{
              fontSize: 17.5,
              lineHeight: 1.85,
              color: "#3a4a4d",
              display: "flex",
              flexDirection: "column",
              gap: 22,
            }}
          >
            <p>
              Steffen Schuster blickt auf ein vielfältiges Leben mit vielen
              Ausbildungen und Lernerfahrungen zurück. Neben Technik, IT und
              Künstlicher Intelligenz hat ihn schon immer ein zweites Thema
              begleitet: die Anthroposophie und mit ihr der Blick auf die
              kindliche Entwicklung.
            </p>
            <p>
              Wie wirken äußere Einflüsse auf das Aufwachsen von Kindern? Und
              welche Persönlichkeitsaspekte entstehen daraus? Diesen Fragen ist
              er über viele Jahre nachgegangen — und dabei immer wieder mit
              Therapieansätzen unterschiedlicher Kulturen in Kontakt gekommen.
            </p>
            <p>
              Was sich durch all diese Stationen zieht, ist ein roter Faden:{" "}
              <strong style={{ color: INK }}>
                das Lernen in all seiner Umfänglichkeit.
              </strong>{" "}
              Ob als Pädagoge, als Gestalter digitaler Lernwelten oder heute
              als Autor — im Zentrum steht immer die Frage, wie Menschen
              wachsen, sich entwickeln und ihren eigenen Weg finden.
            </p>
            <p>
              Mit der Kinderbuchreihe{" "}
              <strong style={{ color: INK }}>Clara &amp; Äffchen</strong> bringt
              Steffen diese Perspektiven erstmals in eine eigene Geschichte:
              warmherzig, kindnah und mit einem geschulten Blick dafür, was im
              Inneren eines Kindes vorgeht, wenn sich draußen die Welt
              verändert.
            </p>
          </div>
          <div data-reveal style={{ marginTop: 36 }}>
            <a
              href="/ueber"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 15,
                fontWeight: 600,
                color: INK,
                textDecoration: "none",
                borderBottom: `1px solid ${WARM}`,
                paddingBottom: 2,
              }}
            >
              Mehr über seine berufliche Arbeit als Pädagoge und KI-Berater →
            </a>
          </div>
        </div>
      </section>

      {/* ── WERK ── */}
      <section
        id="werk"
        className="section-px"
        style={{ background: SOFT, padding: "110px 40px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 640, marginBottom: 56 }}>
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: WARM,
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Das Werk
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(30px, 3.5vw, 46px)",
                fontWeight: 500,
                lineHeight: 1.12,
                margin: 0,
                color: INK,
              }}
            >
              Bücher von Steffen Schuster.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: 28 }}>
            {/* Clara & Äffchen */}
            <TiltCard>
              <div
                data-reveal
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 32,
                  alignItems: "center",
                  background: "#fff",
                  borderRadius: 22,
                  border: "1px solid #e2d9c8",
                  padding: "36px 36px",
                  height: "100%",
                }}
                className="werk-card-grid"
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "3/4" }}>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      transform: "rotate(-6deg)",
                      borderRadius: 10,
                      overflow: "hidden",
                      boxShadow: "0 14px 30px rgba(36,79,89,0.25)",
                      width: "78%",
                    }}
                  >
                    <Image
                      src="/buecher/clara-und-aeffchen/covers/cover-band-1.jpg"
                      alt="Cover Band 1: Der Plan mit den zwei Stühlen"
                      width={200}
                      height={320}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      transform: "rotate(5deg) translateX(22%)",
                      borderRadius: 10,
                      overflow: "hidden",
                      boxShadow: "0 14px 30px rgba(36,79,89,0.3)",
                      width: "78%",
                    }}
                  >
                    <Image
                      src="/buecher/clara-und-aeffchen/covers/cover-band-4.jpg"
                      alt="Cover Band 4: Clara und die zwei Wochen"
                      width={200}
                      height={320}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: WARM, margin: "0 0 8px" }}>
                    Kinderbuchreihe
                  </p>
                  <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 26, fontWeight: 600, margin: "0 0 10px", color: INK }}>
                    Clara &amp; Äffchen
                  </h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#4a5a5d", margin: "0 0 18px" }}>
                    Zwei Zuhause, viele Gefühle, ein eigener Weg: Clara wächst
                    zwischen zwei Elternhäusern auf — begleitet von Äffchen, der
                    Stimme ihrer Gedanken. Eine auf 14 Bände angelegte Reihe.
                  </p>
                  <a
                    href="/buecher/clara-und-aeffchen"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14.5, fontWeight: 600, color: INK, textDecoration: "none", borderBottom: `1px solid ${WARM}`, paddingBottom: 2 }}
                  >
                    Zur Serie entdecken →
                  </a>
                </div>
              </div>
            </TiltCard>

            {/* Iridologie */}
            <TiltCard>
              <div
                data-reveal
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: 32,
                  alignItems: "center",
                  background: "#fff",
                  borderRadius: 22,
                  border: "1px solid #e2d9c8",
                  padding: "36px 36px",
                  height: "100%",
                }}
                className="werk-card-grid"
              >
                <div
                  aria-hidden
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1/1",
                    borderRadius: "50%",
                    background: `repeating-conic-gradient(from 0deg, ${GOLD}33 0deg 4deg, ${IRIS_INK}22 4deg 8deg)`,
                    boxShadow: `inset 0 0 0 10px #fff, inset 0 0 0 12px ${GOLD}66, inset 0 0 0 34px #fff, inset 0 0 0 36px ${IRIS_INK}44`,
                  }}
                >
                  <div style={{ position: "absolute", inset: "40%", borderRadius: "50%", background: IRIS_INK }} />
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: GOLD, margin: "0 0 8px" }}>
                    Fachbuch · Co-Autor
                  </p>
                  <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 26, fontWeight: 600, margin: "0 0 10px", color: INK }}>
                    Iridologie
                  </h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#4a5a5d", margin: "0 0 18px" }}>
                    Gemeinsam mit Vistara Haiduk-Kaplan als Co-Autor entwickelt:
                    ein Fachbuch über die Interpretation der Zeichen des Auges —
                    Konstitutionstypen, Zeichen und Selbstbeobachtung.
                  </p>
                  <a
                    href="/buecher/iridologie"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14.5, fontWeight: 600, color: INK, textDecoration: "none", borderBottom: `1px solid ${GOLD}`, paddingBottom: 2 }}
                  >
                    Zum Buch →
                  </a>
                </div>
              </div>
            </TiltCard>

            {/* Frieda-Malbuch */}
            <TiltCard>
              <div
                data-reveal
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: 32,
                  alignItems: "center",
                  background: "#fff",
                  borderRadius: 22,
                  border: "1px solid #e2d9c8",
                  padding: "36px 36px",
                  height: "100%",
                }}
                className="werk-card-grid"
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", borderRadius: 10, overflow: "hidden", boxShadow: "0 14px 30px rgba(36,79,89,0.25)" }}>
                  <Image
                    src="/buecher/frieda-malbuch/cover.jpg"
                    alt="Cover: Friedas fröhliches Abenteuer in der Zahnarztpraxis"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#d6293f", margin: "0 0 8px" }}>
                    Malbuch mit Geschichte
                  </p>
                  <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 26, fontWeight: 600, margin: "0 0 10px", color: INK }}>
                    Friedas Abenteuer
                  </h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#4a5a5d", margin: "0 0 18px" }}>
                    Frieda besucht die Zahnarztpraxis und entdeckt mit
                    Antonia, der Zahnmedizinischen Fachangestellten,
                    spielerisch die Welt der Zahnpflege. Erster Band der
                    Frieda-Malbuchserie.
                  </p>
                  <a
                    href="/buecher/frieda-malbuch"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14.5, fontWeight: 600, color: INK, textDecoration: "none", borderBottom: "1px solid #d6293f", paddingBottom: 2 }}
                  >
                    Zum Buch →
                  </a>
                </div>
              </div>
            </TiltCard>

            {/* #ZFA Arbeitsbuch */}
            <TiltCard>
              <div
                data-reveal
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 32,
                  alignItems: "center",
                  background: "#fff",
                  borderRadius: 22,
                  border: "1px solid #e2d9c8",
                  padding: "36px 36px",
                  height: "100%",
                }}
                className="werk-card-grid"
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "3/4" }}>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      transform: "rotate(-6deg)",
                      borderRadius: 10,
                      overflow: "hidden",
                      boxShadow: "0 14px 30px rgba(36,79,89,0.25)",
                      width: "78%",
                    }}
                  >
                    <Image
                      src="/buecher/zfa-arbeitsbuch/covers/cover-lf01-04.jpg"
                      alt="Cover: #ZFA Arbeitsbuch, Lernfelder 01–04"
                      width={200}
                      height={300}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      transform: "rotate(5deg) translateX(22%)",
                      borderRadius: 10,
                      overflow: "hidden",
                      boxShadow: "0 14px 30px rgba(36,79,89,0.3)",
                      width: "78%",
                    }}
                  >
                    <Image
                      src="/buecher/zfa-arbeitsbuch/covers/cover-lf10-13.jpg"
                      alt="Cover: #ZFA Arbeitsbuch, Lernfelder 10–13"
                      width={200}
                      height={300}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: ZFA_ACCENT, margin: "0 0 8px" }}>
                    Arbeitsbuch-Reihe · Autor &amp; Herausgeber
                  </p>
                  <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 26, fontWeight: 600, margin: "0 0 10px", color: INK }}>
                    #ZFA Arbeitsbuch
                  </h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#4a5a5d", margin: "0 0 18px" }}>
                    Dreibändige Arbeitsbuch-Reihe für die ZFA-Ausbildung —
                    entwickelt im Autorinnen-Team, als analoge Ergänzung zum
                    KI-Lerncoach lina-zfa.
                  </p>
                  <a
                    href="/buecher/zfa-arbeitsbuch"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14.5, fontWeight: 600, color: INK, textDecoration: "none", borderBottom: `1px solid ${ZFA_NAVY}`, paddingBottom: 2 }}
                  >
                    Zur Reihe →
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ── FAQ (GEO) ── */}
      <section
        id="faq"
        data-light-section
        className="section-px"
        style={{ background: PAPER, padding: "110px 40px" }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div data-reveal style={{ marginBottom: 48 }}>
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: WARM,
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Häufige Fragen
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(28px, 3.2vw, 42px)",
                fontWeight: 500,
                lineHeight: 1.15,
                margin: 0,
                color: INK,
              }}
            >
              Kurz beantwortet.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {faqSchema.mainEntity.map((q, i) => (
              <details
                key={i}
                data-reveal
                style={{
                  background: "#fff",
                  border: "1px solid #e2d9c8",
                  borderRadius: 14,
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    padding: "22px 26px",
                    fontSize: 16,
                    fontWeight: 600,
                    color: INK,
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  {q.name}
                  <span style={{ fontSize: 20, color: WARM, flexShrink: 0, fontWeight: 300 }}>+</span>
                </summary>
                <div style={{ padding: "0 26px 22px", fontSize: 15, lineHeight: 1.7, color: "#4a5a5d" }}>
                  {q.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER / NAP ── */}
      <footer style={{ background: "#080f17", padding: "40px 40px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
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
              { label: "Über mich", href: "/ueber" },
              { label: "Clara & Äffchen", href: "/buecher/clara-und-aeffchen" },
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
