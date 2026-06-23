import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { CustomCursor } from "@/components/CustomCursor";

const ACCENT = "#ff9800";
const PRIMARY = "#345f85";
const DARK_BG = "#0f1f2e";
const SITE_URL = "https://www.steffenschuster.de";

export const metadata: Metadata = {
  title: "KI im Unterricht — Definition, Chancen & Perspektiven | Steffen Schuster",
  description:
    "Was bedeutet KI im Unterricht wirklich? Steffen Schuster erklärt, wie künstliche Intelligenz Lernprozesse verändert — mit 20 Jahren Bildungsexpertise und konkreten Beispielen aus der Praxis.",
  alternates: { canonical: `${SITE_URL}/ki-im-unterricht` },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: `${SITE_URL}/ki-im-unterricht`,
    siteName: "Steffen Schuster",
    title: "KI im Unterricht — Definition, Chancen & Perspektiven",
    description:
      "Was KI im Unterricht kann — und was nicht. Einschätzungen eines Bildungsinnovators mit 20 Jahren Praxiserfahrung.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "KI im Unterricht: Definition, Chancen und Perspektiven aus der Praxis",
  description:
    "Steffen Schuster erklärt, was KI im Unterricht bedeutet, welche konkreten Möglichkeiten sie schafft und warum Technologie allein nie ausreicht.",
  author: {
    "@type": "Person",
    name: "Steffen Schuster",
    url: `${SITE_URL}/ueber`,
    jobTitle: "Pädagoge & KI-Pionier",
  },
  publisher: {
    "@type": "Organization",
    name: "Steffen Schuster",
    url: SITE_URL,
  },
  datePublished: "2026-06-23",
  dateModified: "2026-06-23",
  about: [
    { "@type": "Thing", name: "Künstliche Intelligenz im Bildungsbereich" },
    { "@type": "Thing", name: "KI-Lernumgebungen" },
    { "@type": "Thing", name: "Digitale Bildung" },
  ],
  mentions: [
    { "@type": "WebSite", name: "nora-ki.de", url: "https://nora-ki.de" },
    {
      "@type": "SoftwareApplication",
      name: "next:classroom",
      description: "Digitale Lernumgebung von Steffen Schuster",
    },
  ],
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/ki-im-unterricht` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist KI im Unterricht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KI im Unterricht bezeichnet den Einsatz von Algorithmen und Large Language Models (LLMs) zur Unterstützung von Lehr- und Lernprozessen. Das Spektrum reicht von adaptiven Lernsystemen, die den Lernstand erkennen und Inhalte anpassen, über KI-Tutoren, die individuell auf Fragen eingehen, bis hin zu Werkzeugen, die Lehrkräften bei Vorbereitung und Auswertung helfen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie verändert KI den Unterricht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KI im Unterricht macht erstmals echte Individualisierung im großen Maßstab möglich: Jede lernende Person bekommt Inhalte, Tempo und Methode, die zu ihr passen — ohne dass Lehrkräfte dafür 30 verschiedene Stunden vorbereiten müssen. Gleichzeitig verschiebt KI die Rolle der Lehrenden: vom Wissensvermittler zum Lernbegleiter und Gestalter von Lernerfahrungen.",
      },
    },
    {
      "@type": "Question",
      name: "Was kann KI im Unterricht leisten — und was nicht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KI kann Lerninhalte erklären, Aufgaben generieren, Wissenslücken erkennen, Feedback geben und Lernende motivieren. Was KI nicht kann: Beziehungen aufbauen, die menschliche Dimension des Lernens ersetzen oder den pädagogischen Urteilsvermögen einer erfahrenen Lehrkraft übernehmen. KI ist ein Werkzeug — kein Ersatz für guten Unterricht.",
      },
    },
    {
      "@type": "Question",
      name: "Welche KI-Lernumgebungen gibt es für den Unterricht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es gibt generische KI-Tools wie ChatGPT, die für viele Zwecke genutzt werden können, und spezialisierte KI-Lernumgebungen, die tief in einen Lernkontext eingebettet sind. nora-ki.de beispielsweise bietet spezialisierte KI-Coaches für ZFA-Azubis (Lina ZFA) und Schülerinnen und Schüler (schoolbook) — mit Kenntnis der Lernfelder, Prüfungstermine und des individuellen Lernstands.",
      },
    },
    {
      "@type": "Question",
      name: "Ist KI im Unterricht sinnvoll?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja — wenn sie didaktisch durchdacht eingesetzt wird. KI-Werkzeuge, die ohne pädagogisches Konzept in Klassenzimmer gebracht werden, können Lernende überfordern oder zu oberflächlichem Lernen verleiten. Sinnvoll eingesetzt erhöht KI die Motivation, gibt sofortiges Feedback und ermöglicht es jedem Lernenden, im eigenen Tempo zu arbeiten.",
      },
    },
    {
      "@type": "Question",
      name: "Wie können Schulen KI erfolgreich einführen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Erfolgreiche KI-Einführung an Schulen beginnt nicht mit der Technologie, sondern mit der Frage: Was soll sich für Lernende verbessern? Daraus folgt die Auswahl passender Werkzeuge, die Schulung der Lehrkräfte und ein klarer Rahmen für den Einsatz. Bewährt hat sich ein schrittweises Vorgehen: Pilotklassen, Reflexion, Anpassung — bevor die ganze Schule umgestellt wird.",
      },
    },
  ],
};

const dimensions = [
  {
    no: "01",
    title: "Adaptives Lernen",
    body: "KI-Systeme erkennen, wo eine lernende Person steht — und passen Tempo, Schwierigkeit und Methode in Echtzeit an. Was früher nur im Einzelunterricht möglich war, wird so für alle zugänglich.",
  },
  {
    no: "02",
    title: "KI-Tutoren & Lerncoaches",
    body: "Spezialisierte KI-Tutoren wie Lina ZFA kennen den Lernstoff, die Prüfungsordnung und den individuellen Fortschritt. Sie antworten auf Fragen, erklären Konzepte und bleiben dabei immer geduldig.",
  },
  {
    no: "03",
    title: "Werkzeuge für Lehrkräfte",
    body: "KI entlastet Lehrkräfte bei repetitiven Aufgaben: Aufgaben erstellen, Texte korrigieren, Differenzierung vorbereiten. Das schafft Zeit für das Wesentliche — die Beziehung zum Lernenden.",
  },
];

export default function KiImUnterrichtPage() {
  return (
    <div style={{ background: "var(--page-bg)", color: "var(--text-primary)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ScrollRevealInit />
      <CustomCursor />
      <Nav />

      {/* ── HERO ── */}
      <section
        id="hero"
        style={{
          background: DARK_BG,
          minHeight: "72svh",
          display: "flex",
          alignItems: "center",
          padding: "140px 40px 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 50% 70% at 20% 60%, rgba(52,95,133,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Breadcrumb */}
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
                  style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                >
                  Steffen Schuster
                </a>
              </li>
              <li aria-hidden>·</li>
              <li style={{ color: ACCENT }}>KI im Unterricht</li>
            </ol>
          </nav>

          <p
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              letterSpacing: "0.18em",
              color: ACCENT,
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Artikel · Bildung & KI
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 500,
              fontSize: "clamp(44px, 6.5vw, 88px)",
              lineHeight: 0.97,
              letterSpacing: "-1px",
              color: "#fff",
              margin: "0 0 32px",
              maxWidth: 800,
            }}
          >
            KI im{" "}
            <em style={{ color: ACCENT, fontStyle: "italic" }}>Unterricht.</em>
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 1.4vw, 20px)",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.68)",
              maxWidth: 640,
              marginBottom: 40,
            }}
          >
            Was es bedeutet, wenn KI wirklich in Lernprozesse eingebettet
            wird — und nicht nur als Chatbot daneben steht.
          </p>
          {/* Author chip */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              padding: "10px 18px",
              borderRadius: 100,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: PRIMARY,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 700,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              SS
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>
                Steffen Schuster
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>
                Pädagoge & KI-Pionier · Juni 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEFINITION ── */}
      <section
        id="definition"
        data-light-section
        style={{
          background: "var(--section-alt-bg)",
          padding: "100px 40px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div data-reveal>
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: PRIMARY,
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Definition
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(30px, 3.5vw, 50px)",
                fontWeight: 500,
                lineHeight: 1.1,
                margin: "0 0 32px",
                color: "var(--text-primary)",
              }}
            >
              Was ist KI im Unterricht?
            </h2>
            <div
              style={{
                fontSize: "clamp(17px, 1.3vw, 20px)",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                display: "flex",
                flexDirection: "column",
                gap: 22,
                maxWidth: 780,
              }}
            >
              <p>
                <strong style={{ color: "var(--text-primary)" }}>
                  KI im Unterricht
                </strong>{" "}
                bezeichnet den Einsatz von Algorithmen und Large Language
                Models (LLMs) zur Unterstützung von Lehr- und Lernprozessen.
                Das Spektrum reicht von adaptiven Lernsystemen, die den
                Lernstand erkennen und Inhalte anpassen, über KI-Tutoren, die
                individuell auf Fragen eingehen, bis hin zu Werkzeugen, die
                Lehrkräften bei Vorbereitung und Auswertung helfen.
              </p>
              <p>
                Der entscheidende Unterschied zu früheren Digitalisierungswellen
                im Bildungsbereich: Moderne KI-Systeme reagieren auf den
                einzelnen Menschen — nicht auf einen durchschnittlichen
                Lernenden. Sie können erklären, Rückfragen stellen,
                Missverständnisse erkennen und Schritt für Schritt begleiten.
                Das macht erstmals{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  echte Individualisierung im großen Maßstab
                </strong>{" "}
                möglich.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote
              style={{
                margin: "48px 0 0",
                padding: "28px 36px",
                borderLeft: `4px solid ${ACCENT}`,
                background: "var(--card-bg)",
                borderRadius: "0 14px 14px 0",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(20px, 2vw, 28px)",
                  fontStyle: "italic",
                  lineHeight: 1.4,
                  color: "var(--text-primary)",
                  margin: "0 0 12px",
                }}
              >
                „Der Unterschied zwischen Scheitern und Bestehen liegt oft
                nicht am Können, sondern an der richtigen Unterstützung zum
                richtigen Zeitpunkt."
              </p>
              <cite
                style={{
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  fontStyle: "normal",
                }}
              >
                — Steffen Schuster, Pädagoge & KI-Pionier
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── DREI DIMENSIONEN ── */}
      <section
        id="dimensionen"
        data-light-section
        style={{ background: "var(--page-bg)", padding: "100px 40px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div data-reveal style={{ marginBottom: 60 }}>
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: PRIMARY,
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Wie KI wirkt
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(30px, 3.5vw, 50px)",
                fontWeight: 500,
                lineHeight: 1.1,
                margin: 0,
                color: "var(--text-primary)",
              }}
            >
              Drei Dimensionen des Einsatzes.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {dimensions.map((d) => (
              <div
                key={d.no}
                data-reveal
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: 20,
                  padding: "36px 32px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 52,
                    fontWeight: 600,
                    color: "var(--card-border)",
                    lineHeight: 1,
                    marginBottom: 20,
                  }}
                >
                  {d.no}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 24,
                    fontWeight: 600,
                    margin: "0 0 14px",
                    color: "var(--text-primary)",
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHANCEN & GRENZEN ── */}
      <section
        id="chancen"
        style={{ background: DARK_BG, padding: "100px 40px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div data-reveal style={{ marginBottom: 60 }}>
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: ACCENT,
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Einschätzung
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(30px, 3.5vw, 50px)",
                fontWeight: 500,
                lineHeight: 1.1,
                margin: 0,
                color: "#fff",
              }}
            >
              Was KI kann — und was nicht.
            </h2>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            {/* Kann KI */}
            <div
              data-reveal
              style={{
                background: "rgba(255,152,0,0.07)",
                border: "1px solid rgba(255,152,0,0.2)",
                borderRadius: 20,
                padding: "36px 32px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: ACCENT,
                  marginBottom: 24,
                }}
              >
                KI kann
              </div>
              {[
                "Lerninhalte individuell erklären",
                "Aufgaben und Tests generieren",
                "Wissenslücken erkennen und benennen",
                "Sofortiges, geduldiges Feedback geben",
                "Rund um die Uhr verfügbar sein",
                "Lernende motivieren und begleiten",
                "Lehrkräfte von Routinearbeit entlasten",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    marginBottom: 12,
                  }}
                >
                  <span style={{ color: ACCENT, fontSize: 16, lineHeight: 1.5 }}>
                    ✓
                  </span>
                  <span
                    style={{
                      fontSize: 15,
                      lineHeight: 1.55,
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Kann KI nicht */}
            <div
              data-reveal
              style={{
                background: "rgba(52,95,133,0.08)",
                border: "1px solid rgba(52,95,133,0.25)",
                borderRadius: 20,
                padding: "36px 32px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: 24,
                }}
              >
                KI kann nicht
              </div>
              {[
                "Echte Beziehungen zu Lernenden aufbauen",
                "Pädagogisches Urteilsvermögen ersetzen",
                "Den Kontext eines Lebens verstehen",
                "Emotionale Unterstützung in Krisen geben",
                "Den Wert guter Lehrkräfte ersetzen",
                "Eigenständiges Denken trainieren (ohne Konzept)",
                "Sinn und Motivation von außen herstellen",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      color: "rgba(255,255,255,0.3)",
                      fontSize: 16,
                      lineHeight: 1.5,
                    }}
                  >
                    ×
                  </span>
                  <span
                    style={{
                      fontSize: 15,
                      lineHeight: 1.55,
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PERSPEKTIVE (E-E-A-T) ── */}
      <section
        id="perspektive"
        data-light-section
        style={{ background: "var(--section-alt-bg)", padding: "100px 40px" }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div data-reveal>
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: PRIMARY,
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Meine Perspektive · Steffen Schuster
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(30px, 3.5vw, 50px)",
                fontWeight: 500,
                lineHeight: 1.1,
                margin: "0 0 36px",
                color: "var(--text-primary)",
              }}
            >
              Was ich nach 20 Jahren gelernt habe.
            </h2>
            <div
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: "var(--text-secondary)",
                display: "flex",
                flexDirection: "column",
                gap: 22,
              }}
            >
              <p>
                Ich entwickle seit 2006 Lernumgebungen. Ich habe erlebt, wie
                digitale Tafeln kamen und wieder in Schränken verschwanden. Ich
                habe erlebt, wie Tablets das Lernen „revolutionieren" sollten —
                und dann vor allem für YouTube genutzt wurden.
              </p>
              <p>
                Was ich in dieser Zeit gelernt habe: Technologie verändert
                Lernen nur dann, wenn sie didaktisch durchdacht eingesetzt wird.
                Nicht die App entscheidet. Die Frage entscheidet:{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  Was soll sich für diese lernende Person verbessern?
                </strong>
              </p>
              <p>
                KI ist das erste Werkzeug, das auf diese Frage wirklich
                reagieren kann — weil es nicht starr ist, sondern adaptiv. Es
                kennt den Lernstand, es passt sich an, es wird nicht ungeduldig.
                Deshalb bin ich überzeugt: KI ist nicht eine weitere
                Digitalisierungswelle. Es ist ein Paradigmenwechsel.
              </p>
              <p>
                Mit{" "}
                <a
                  href="https://nora-ki.de"
                  style={{
                    color: PRIMARY,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  nora-ki.de
                </a>{" "}
                versuche ich, diesen Paradigmenwechsel konkret zu machen: KI,
                die den Lernstoff einer Ausbildung wirklich kennt. KI, die den
                Lernstand einer Person verfolgt. KI, die nie aufgibt.
              </p>
            </div>

            {/* Author signature */}
            <div
              style={{
                marginTop: 48,
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: PRIMARY,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                SS
              </div>
              <div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  Steffen Schuster
                </div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
                  Pädagoge, KI-Pionier & Gründer educube GmbH · Hamburg
                </div>
                <a
                  href="/ueber"
                  style={{
                    fontSize: 12,
                    color: PRIMARY,
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Mehr über Steffen →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        id="faq"
        data-light-section
        style={{ background: "var(--page-bg)", padding: "100px 40px" }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div data-reveal style={{ marginBottom: 60 }}>
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: PRIMARY,
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Häufige Fragen
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(30px, 3.5vw, 50px)",
                fontWeight: 500,
                lineHeight: 1.1,
                margin: 0,
                color: "var(--text-primary)",
              }}
            >
              KI im Unterricht — die wichtigsten Fragen.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {faqSchema.mainEntity.map((q, i) => (
              <details
                key={i}
                data-reveal
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: 14,
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    padding: "22px 28px",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  {q.name}
                  <span
                    style={{
                      fontSize: 20,
                      color: ACCENT,
                      flexShrink: 0,
                      fontWeight: 300,
                    }}
                  >
                    +
                  </span>
                </summary>
                <div
                  style={{
                    padding: "0 28px 24px",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--text-secondary)",
                  }}
                >
                  {q.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── NORA-KI CTA ── */}
      <section
        id="nora-ki"
        style={{ background: DARK_BG, padding: "100px 40px" }}
      >
        <div
          style={{ maxWidth: 900, margin: "0 auto" }}
          data-reveal
        >
          <div
            style={{
              background: "rgba(255,152,0,0.06)",
              border: "1px solid rgba(255,152,0,0.18)",
              borderRadius: 28,
              padding: "60px 64px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 48,
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  color: ACCENT,
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                KI im Unterricht — konkret
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(28px, 3vw, 44px)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  margin: "0 0 20px",
                  color: "#fff",
                }}
              >
                nora-ki.de — KI, die den{" "}
                <em style={{ color: ACCENT, fontStyle: "italic" }}>
                  Lernstoff wirklich kennt.
                </em>
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.62)",
                  margin: 0,
                  maxWidth: 500,
                }}
              >
                Spezialisierte KI-Lerncoaches für ZFA-Azubis und Schülerinnen
                und Schüler — nicht generisch, sondern tief in jeden Lernkontext
                eingebettet.
              </p>
            </div>
            <a
              href="https://nora-ki.de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "14px 32px",
                borderRadius: 100,
                background: ACCENT,
                color: "#16212e",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 700,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              nora-ki.de →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
