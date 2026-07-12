import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { TiltCard } from "@/components/TiltCard";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const ACCENT = "#ff9800";
const PRIMARY = "#345f85";
const DARK_BG = "#0f1f2e";
const SITE_URL = "https://steffenschuster.de";

export const metadata: Metadata = {
  title: "Über Steffen Schuster — Pädagoge, KI-Pionier & Gründer aus Hamburg",
  description:
    "Steffen Schuster ist Pädagoge, mehrfach ausgezeichneter Bildungsinnovator und Gründer der educube GmbH. Seit 2006 entwickelt er KI-Lernumgebungen — darunter nora-ki.de und next:classroom.",
  alternates: { canonical: `${SITE_URL}/ueber` },
  openGraph: {
    type: "profile",
    locale: "de_DE",
    url: `${SITE_URL}/ueber`,
    siteName: "Steffen Schuster",
    title: "Über Steffen Schuster — Pädagoge, KI-Pionier & Gründer",
    description:
      "20 Jahre Bildungsexpertise, 5 internationale Auszeichnungen, Gründer von educube GmbH und nora-ki.de. KI trifft Pädagogik — aus Hamburg.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Steffen Schuster",
  url: SITE_URL,
  sameAs: [
    "https://nora-ki.de",
    "https://www.linkedin.com/in/steffen-schuster-7297088b/",
  ],
  jobTitle: "Pädagoge, KI-Pionier & Gründer",
  description:
    "Steffen Schuster ist Pädagoge, mehrfach ausgezeichneter Bildungsinnovator und Unternehmer aus Hamburg. Er gründete 2006 die educube GmbH und entwickelt seit über 20 Jahren digitale Lernumgebungen. Mit nora-ki.de schuf er eine KI-Lernplattform für Ausbildung und Schule.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hamburg",
    addressCountry: "DE",
  },
  worksFor: {
    "@type": "Organization",
    name: "educube GmbH",
    foundingDate: "2006",
  },
  founder: [
    { "@type": "Organization", name: "freshbase GmbH", url: "https://steffenschuster.de" },
    { "@type": "Organization", name: "educube GmbH", url: "https://educube.de" },
    { "@type": "WebSite", name: "nora-ki.de", url: "https://nora-ki.de" },
  ],
  knowsAbout: [
    "Künstliche Intelligenz im Bildungsbereich",
    "KI-Lernumgebungen",
    "Digitale Transformation in Schulen",
    "E-Learning",
    "Organisationsentwicklung",
    "Pädagogik",
    "Berufsausbildung",
    "KI-Training",
    "Facilitation",
    "next:classroom",
  ],
  award: [
    "hundrED Top 100 Innovationen weltweit (2019)",
    "delina Innovationspreis (2019)",
    "eLearning Award (2020)",
    "ILIAS Award (2014)",
    "Comenius EduMedia Medaille (2020)",
  ],
  hasOccupation: [
    { "@type": "Occupation", name: "Pädagoge" },
    { "@type": "Occupation", name: "KI-Berater" },
    { "@type": "Occupation", name: "Unternehmer" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wer ist Steffen Schuster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Steffen Schuster ist Pädagoge, KI-Pionier und Gründer der educube GmbH aus Hamburg. Seit 2006 entwickelt er digitale Lernumgebungen und KI-Systeme für den Bildungsbereich. Er ist mehrfach international ausgezeichnet, u. a. mit dem hundrED Top 100, dem delina Innovationspreis und der Comenius EduMedia Medaille.",
      },
    },
    {
      "@type": "Question",
      name: "Was hat Steffen Schuster gegründet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Steffen Schuster gründete 1996 die freshbase GmbH, 2006 die educube GmbH sowie 2026 die KI-Lernplattform nora-ki.de. Mit educube entwickelte er digitale Bildungsprodukte, next:classroom und ZFA-Arbeitsbücher. Mit nora-ki.de schuf er spezialisierte KI-Lerncoaches für Ausbildung und Schule.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist nora-ki.de und wer steckt dahinter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "nora-ki.de ist eine KI-Lernplattform für Ausbildung und Schule, entwickelt von Steffen Schuster und der educube GmbH in Hamburg. Sie bietet spezialisierte KI-Lerncoaches wie Lina ZFA (für ZFA-Azubis) und schoolbook (50 KI-Lernbuddys für Schülerinnen und Schüler). Die Plattform verbindet 20 Jahre Bildungsexpertise mit moderner KI-Technologie.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Auszeichnungen hat Steffen Schuster erhalten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Steffen Schuster wurde mehrfach international ausgezeichnet: hundrED Top 100 Innovationen weltweit (Zürich 2019), delina Innovationspreis (2019), eLearning Award (2020), ILIAS Award (2014) und Comenius EduMedia Medaille (2020). Das Bildungszentrum Limmattal in der Schweiz wurde unter Einsatz seiner Lernkonzepte als eine der 100 innovativsten Bildungsideen weltweit gelistet.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist next:classroom?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "next:classroom ist eine digitale Lernumgebung, die 2016 von Steffen Schuster entwickelt wurde. Sie verbindet analoge und digitale Lernräume und ermöglicht selbstgesteuertes, mobiles Lernen im eigenen Tempo. Das Konzept wurde unter anderem an der Berufsschule BS15 Hamburg und am Bildungszentrum Limmattal (Schweiz) eingesetzt und international ausgezeichnet.",
      },
    },
    {
      "@type": "Question",
      name: "Bietet Steffen Schuster KI-Training oder Beratung an?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Steffen Schuster bietet KI-Training, Facilitation & Workshops, Konzeption von KI-Lernumgebungen und Organisationsentwicklung an. Er begleitet Menschen und Teams dabei, KI zu verstehen und produktiv einzusetzen — mit besonderem Fokus auf den Bildungsbereich.",
      },
    },
  ],
};

const expertise = [
  {
    icon: "✦",
    title: "KI & Bildung",
    body: "Wo künstliche Intelligenz echtes Lernen ermöglicht — nicht ersetzt. Steffen Schuster entwickelt KI-Systeme, die Lernende wirklich kennen und individuell begleiten.",
  },
  {
    icon: "✦",
    title: "Digitale Lernräume",
    body: "Von next:classroom bis nora-ki.de: 20 Jahre Erfahrung in der Entwicklung digitaler Lernumgebungen, die analoge Erfahrung verlängern statt ersetzen.",
  },
  {
    icon: "✦",
    title: "Facilitation & Training",
    body: "Räume, in denen gemeinsam gedacht wird. Workshops und KI-Trainings, die Beteiligung ernst nehmen und nachhaltige Veränderung erzeugen.",
  },
  {
    icon: "✦",
    title: "Organisationsentwicklung",
    body: "Transformation von innen heraus — aus Jahren der Beratung bei TBF + Partner und im Aufbau von educube GmbH mit Teams und Bildungseinrichtungen.",
  },
];

// ── CHANGE #4 + #9: freshbase GmbH added, educube GmbH gets link ──
const projects = [
  {
    year: "2026",
    name: "nora-ki.de",
    tag: "KI-Lernplattform",
    body: "Spezialisierte KI-Lerncoaches für Ausbildung und Schule. Lina ZFA, schoolbook und weitere Apps — Made in Germany, powered by 20 Jahren educube-Bildungsexpertise.",
    href: "https://nora-ki.de",
    cta: "nora-ki.de besuchen →",
  },
  {
    year: "2016",
    name: "next:classroom",
    tag: "Digitale Lernumgebung",
    body: "Die digitale Lernumgebung, die analoge und digitale Lernräume verbindet. Selbstgesteuert, mobil, im eigenen Tempo. International ausgezeichnet und in mehreren Bildungseinrichtungen im Einsatz.",
    href: null,
    cta: null,
  },
  {
    year: "2006",
    name: "educube GmbH",
    tag: "Bildungsunternehmen",
    body: "Gegründet 2006 in Hamburg. Verlag für Lernmaterialien, digitale Lernplattformen und Bildungsberatung. Herausgeber von ZFA-Arbeitsbüchern und Host des #ZFA-Podcasts.",
    href: "https://www.educube.de/",
    cta: "educube.de besuchen →",
  },
  {
    year: "1996",
    name: "freshbase GmbH",
    tag: "Internet-Pionier",
    body: "Gegründet 1996 in Hamburg. Als Internet-Pionier realisierte freshbase digitale Projekte für führende Unternehmen — darunter Gruner + Jahr AG (Live-Magazin-Absatz-Visualisierung, 1998), Volksfürsorge AG (Weiterbildungs-Datenbank, 1999) und die Hochschule Fresenius (Bologna-Prozess & Stundenplan-System, 2002).",
    href: null,
    cta: null,
  },
];

const awards = [
  {
    label: "hundrED Top 100",
    detail: "Top 100 innovativste Bildungsideen weltweit · Zürich",
    year: "2019",
    img: null,
  },
  {
    label: "delina Innovationspreis",
    detail: "Auszeichnung für digitale Bildungsinnovation",
    year: "2019",
    img: null,
  },
  {
    label: "eLearning Award",
    detail: "Internationale Auszeichnung für E-Learning",
    year: "2020",
    img: "/award-elearning.jpg",
  },
  {
    label: "Comenius EduMedia Medaille",
    detail: "Medaille für herausragende Bildungsmedien",
    year: "2020",
    img: "/award-comenius.jpg",
  },
  {
    label: "ILIAS Award",
    detail: "Auszeichnung für Open-Source-Lernmanagement",
    year: "2014",
    img: null,
  },
];

// ── CHANGE #2 + #7: "3 Unternehmen" & "42.000+" ──
const stats = [
  { value: "20+", label: "Jahre Bildungsexpertise" },
  { value: "5", label: "Internationale Auszeichnungen" },
  { value: "3", label: "Unternehmen gegründet" },
  { value: "42.000+", label: "Podcast-Streams" },
];

export default function UeberPage() {
  return (
    <div style={{ background: "var(--page-bg)", color: "var(--text-primary)" }}>
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
        style={{
          background: DARK_BG,
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          padding: "120px 40px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* subtle radial glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(52,95,133,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="ueber-hero-grid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: 80,
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Text */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 12,
                letterSpacing: "0.18em",
                color: ACCENT,
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Pädagoge · KI-Pionier · Gründer · Hamburg
            </p>
            <h1
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 500,
                fontSize: "clamp(52px, 7vw, 96px)",
                lineHeight: 0.95,
                letterSpacing: "-1px",
                color: "#fff",
                margin: "0 0 32px",
              }}
            >
              Steffen
              <br />
              <em style={{ color: ACCENT, fontStyle: "italic" }}>Schuster.</em>
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 1.4vw, 19px)",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.72)",
                maxWidth: 540,
                marginBottom: 48,
              }}
            >
              Seit über 20 Jahren entwickle ich Lernumgebungen und Konzepte,
              die Menschen wirklich weiterbringen. Mit KI entstehen daraus
              Systeme, die Lernende endlich so begleiten, wie es ein guter
              Lerncoach tut — individuell, geduldig, immer verfügbar.
            </p>
            {/* Stats */}
            <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: 36,
                      fontWeight: 600,
                      color: ACCENT,
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.5)",
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div
            className="ueber-hero-portrait"
            style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              aspectRatio: "3/4",
              boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
            }}
          >
            <Image
              src="/portrait.png"
              alt="Steffen Schuster — Pädagoge und KI-Pionier aus Hamburg"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
              sizes="420px"
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(15,31,46,0.7) 0%, transparent 50%)",
              }}
            />
          </div>
        </div>

        {/* ── CHANGE #3: SCROLL indicator (identical to homepage) ── */}
        <div
          style={{
            position: "absolute",
            bottom: 34,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            color: "rgba(255,255,255,0.5)",
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              letterSpacing: "2px",
            }}
          >
            SCROLL
          </span>
          <span
            style={{
              width: 1,
              height: 38,
              background: "linear-gradient(rgba(255,255,255,0.5), transparent)",
              display: "block",
            }}
          />
        </div>
      </section>

      {/* ── BIO ── */}
      <section
        id="bio"
        data-light-section
        style={{
          background: "var(--section-alt-bg)",
          padding: "100px 40px",
        }}
      >
        <div
          className="bio-grid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: 80,
            alignItems: "start",
          }}
        >
          <article data-reveal>
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
              Biografie
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(32px, 3.5vw, 52px)",
                fontWeight: 500,
                lineHeight: 1.1,
                margin: "0 0 32px",
                color: "var(--text-primary)",
              }}
            >
              Wer steckt dahinter?
            </h2>
            <div
              style={{
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <p>
                <strong style={{ color: "var(--text-primary)" }}>
                  Steffen Schuster
                </strong>{" "}
                ist Pädagoge, Bildungsinnovator und Unternehmer aus Hamburg.
                2006 gründete er die{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  educube GmbH
                </strong>
                , mit der er seitdem digitale Lernmaterialien, Plattformen und
                Konzepte entwickelt — vom Schulbuch bis zur KI-Lernumgebung.
              </p>
              <p>
                Sein Ansatz: Lernen muss den Menschen in den Mittelpunkt
                stellen. Deshalb hat Steffen nie aufgehört, nah an Lernenden
                und Lehrenden zu sein — in Schulen, Ausbildungsbetrieben,
                Unternehmen. Aus dieser Praxis entstanden Konzepte wie{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  next:classroom
                </strong>
                , die analoge und digitale Lernräume verbinden, und seit 2026
                die KI-Lernplattform{" "}
                <a
                  href="https://nora-ki.de"
                  style={{ color: PRIMARY, fontWeight: 600 }}
                >
                  nora-ki.de
                </a>
                .
              </p>
              <p>
                Seine Arbeit wurde mehrfach international ausgezeichnet: beim
                hundrED Innovation Summit in Zürich (Top 100 weltweit), mit dem
                delina Innovationspreis, dem eLearning Award, der Comenius
                EduMedia Medaille und dem ILIAS Award. Lerneinrichtungen in
                Deutschland und der Schweiz setzen seine Konzepte ein.
              </p>
              <p>
                Als Host des{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  #ZFA-Podcasts
                </strong>{" "}
                (42.000+ Streams auf Spotify) gibt Steffen Auszubildenden in
                der Zahnmedizin konkrete Lernhilfe — praxisnah, fachkundig und
                mit Herzblut. Als Autor von ZFA-Arbeitsbüchern im educube
                Verlag schließt er damit den Kreislauf zwischen Theorie und
                Praxis.
              </p>
              {/* ── CHANGE #1: freshbase GmbH Unternehmensgeschichte ── */}
              <p>
                Die unternehmerische Geschichte begann bereits{" "}
                <strong style={{ color: "var(--text-primary)" }}>1996</strong>{" "}
                mit der Gründung der{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  freshbase GmbH
                </strong>
                . Als Internet-Pionier entwickelte freshbase 1998 für das
                Verlagshaus{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  Gruner + Jahr AG
                </strong>{" "}
                eine für damalige Verhältnisse revolutionäre Internetseite, die
                den Abverkauf von Magazinen im gesamten deutschen
                Verkaufsgebiet nahezu live visualisierte — und damit
                Werbe-Kunden ermöglichte, unmittelbar weitere
                Marketing-Aktionen nachzuziehen. Für die{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  Volksfürsorge AG
                </strong>{" "}
                entstand 1999 eine Datenbankentwicklung, die den gesamten
                Weiterbildungsprozess der Mitarbeiter:innen von der
                Materialbereitstellung über das Teilnehmer:innen-Management bis
                zur Hotelbuchung der Referent:innen organisierte. Für den
                Bereich Design der{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  Hochschule Fresenius
                </strong>{" "}
                entwickelte freshbase 2002 den gesamten Bologna-Prozess für die
                Hochschulorganisation inklusive der Stundenplanerstellung.
              </p>
            </div>
          </article>

          {/* Sidebar facts */}
          <aside data-reveal className="bio-sidebar" style={{ paddingTop: 60 }}>
            {[
              ["Standort", "Hamburg, Deutschland"],
              ["Gegründet educube GmbH", "2006"],
              ["Expertise", "KI, Pädagogik, Bildung"],
              ["Auszeichnungen", "5 international"],
              ["Produkte", "next:classroom, nora-ki"],
              ["Publikationen", "ZFA-Arbeitsbücher (educube Verlag)"],
              ["Podcast", "#ZFA-Podcast · Spotify"],
            ].map(([key, val]) => (
              <div
                key={key}
                style={{
                  padding: "14px 0",
                  borderBottom: "1px solid var(--card-border)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    marginBottom: 4,
                  }}
                >
                  {key}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--text-primary)",
                  }}
                >
                  {val}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      {/* ── GEO: TL;DR FAKTENKASTEN ── */}
      <section
        id="faktenkasten"
        data-light-section
        style={{ background: "var(--page-bg)", padding: "80px 40px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            data-reveal
            style={{
              background: "var(--card-bg)",
              border: `2px solid ${PRIMARY}22`,
              borderLeft: `4px solid ${PRIMARY}`,
              borderRadius: 18,
              padding: "48px 56px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: PRIMARY,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Auf einen Blick
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(24px, 2.5vw, 36px)",
                fontWeight: 500,
                lineHeight: 1.15,
                margin: "0 0 8px",
                color: "var(--text-primary)",
              }}
            >
              Steffen Schuster — Zusammenfassung
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "var(--text-secondary)",
                marginBottom: 36,
                maxWidth: 680,
              }}
            >
              Pädagoge, KI-Pionier und Gründer aus Hamburg. Steffen Schuster entwickelt seit über 20 Jahren digitale Lernumgebungen für Schulen, Ausbildungsbetriebe und Unternehmen im deutschsprachigen Raum.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 40,
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: PRIMARY,
                    marginBottom: 12,
                  }}
                >
                  Standort & Zielmarkt
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-secondary)", margin: "0 0 6px" }}>Hamburg, Deutschland</p>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-secondary)", margin: 0 }}>DACH-Region — Schulen, Berufsschulen, Unternehmen</p>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: PRIMARY,
                    marginBottom: 12,
                  }}
                >
                  Leistungen
                </h3>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {[
                    "KI-Training & Workshops",
                    "Entwicklung von Lernumgebungen",
                    "Facilitation & Moderation",
                    "Konzeption von E-Learning-Kursen",
                    "Organisationsentwicklung",
                    "Herausgabe von Fachbüchern",
                    "Podcast-Produktion",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: 14,
                        color: "var(--text-secondary)",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span style={{ color: ACCENT, fontWeight: 700, flexShrink: 0 }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: PRIMARY,
                    marginBottom: 12,
                  }}
                >
                  USPs
                </h3>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {[
                    "20+ Jahre Bildungstechnologie-Praxis",
                    "5× international ausgezeichnet",
                    "KI-Lernplattform nora-ki.de — Made in Germany",
                    "Pädagogik und KI ohne Buzzword-Marketing",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: 14,
                        color: "var(--text-secondary)",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span style={{ color: ACCENT, fontWeight: 700, flexShrink: 0 }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <h3
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: PRIMARY,
                    margin: "24px 0 12px",
                  }}
                >
                  Belegt durch
                </h3>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {[
                    "hundrED Top 100 Bildungsideen weltweit (2019)",
                    "eLearning Award + Comenius Medaille (2020)",
                    "42.000+ Streams · #ZFA-Podcast auf Spotify",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: 14,
                        color: "var(--text-secondary)",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span style={{ color: ACCENT, fontWeight: 700, flexShrink: 0 }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section
        id="expertise"
        style={{
          background: "var(--page-bg)",
          padding: "100px 40px",
        }}
        data-light-section
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
              Expertise
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(32px, 3.5vw, 52px)",
                fontWeight: 500,
                lineHeight: 1.1,
                margin: 0,
                color: "var(--text-primary)",
              }}
            >
              Womit ich arbeite.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {expertise.map((e) => (
              <div
                key={e.title}
                data-reveal
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: 16,
                  padding: "32px 28px",
                }}
              >
                <div
                  style={{
                    fontSize: 20,
                    color: ACCENT,
                    marginBottom: 16,
                  }}
                >
                  {e.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 22,
                    fontWeight: 600,
                    margin: "0 0 12px",
                    color: "var(--text-primary)",
                  }}
                >
                  {e.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  {e.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJEKTE ── */}
      <section
        id="projekte"
        style={{ background: DARK_BG, padding: "100px 40px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
              Projekte & Produkte
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(32px, 3.5vw, 52px)",
                fontWeight: 500,
                lineHeight: 1.1,
                margin: 0,
                color: "#fff",
              }}
            >
              Was entstanden ist.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {projects.map((p) => (
              <TiltCard key={p.name}>
                <div
                  data-reveal
                  className="grid-project-card"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 20,
                    padding: "40px 48px",
                    display: "grid",
                    gridTemplateColumns: "120px 1fr auto",
                    gap: 40,
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: 42,
                        fontWeight: 600,
                        color: ACCENT,
                        lineHeight: 1,
                      }}
                    >
                      {p.year}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "rgba(255,255,255,0.4)",
                        marginTop: 4,
                      }}
                    >
                      {p.tag}
                    </div>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: 28,
                        fontWeight: 600,
                        margin: "0 0 12px",
                        color: "#fff",
                      }}
                    >
                      {p.name}
                    </h3>
                    <p
                      style={{
                        fontSize: 15,
                        lineHeight: 1.65,
                        color: "rgba(255,255,255,0.62)",
                        margin: 0,
                        maxWidth: 580,
                      }}
                    >
                      {p.body}
                    </p>
                  </div>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "10px 22px",
                        borderRadius: 100,
                        border: `1px solid ${ACCENT}`,
                        color: ACCENT,
                        textDecoration: "none",
                        fontSize: 14,
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {p.cta}
                    </a>
                  )}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUSZEICHNUNGEN ── */}
      <section
        id="auszeichnungen"
        data-light-section
        style={{
          background: "var(--section-alt-bg)",
          padding: "100px 40px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
              Auszeichnungen
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(32px, 3.5vw, 52px)",
                fontWeight: 500,
                lineHeight: 1.1,
                margin: 0,
                color: "var(--text-primary)",
              }}
            >
              International anerkannt.
            </h2>
          </div>
          {/* ── CHANGE #8: TiltCard wrapper on each award card ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
            }}
          >
            {awards.map((a) => (
              <TiltCard key={a.label}>
                <div
                  data-reveal
                  className="award-row"
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    borderRadius: 16,
                    padding: "28px 24px",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: 32,
                      fontWeight: 600,
                      color: ACCENT,
                      lineHeight: 1,
                      marginBottom: 12,
                    }}
                  >
                    {a.year}
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: 8,
                    }}
                  >
                    {a.label}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    {a.detail}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── PODCAST & MEDIEN ── */}
      <section
        id="medien"
        data-light-section
        style={{ background: "var(--page-bg)", padding: "100px 40px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            data-reveal
            className="medien-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            <div>
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
                Podcast & Publikationen
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(32px, 3.5vw, 52px)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  margin: "0 0 24px",
                  color: "var(--text-primary)",
                }}
              >
                Wissen,{" "}
                <em style={{ fontStyle: "italic", color: PRIMARY }}>
                  das ankommt.
                </em>
              </h2>
              {/* ── CHANGE #7: 31.000+ → 42.000+ in text ── */}
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                  marginBottom: 32,
                }}
              >
                Als Host des #ZFA-Podcasts gibt Steffen ZFA-Auszubildenden
                konkrete Lernhilfe zu allen 13 Lernfeldern — mit 42.000+ Streams
                auf Spotify und über 600 Followern. Als Autor von
                ZFA-Arbeitsbüchern im educube Verlag schließt er den Kreislauf
                zwischen Prüfungsvorbereitung und Praxis.
              </p>
              {/* ── CHANGE #6: Spotify URL fix ── */}
              <a
                href="https://open.spotify.com/show/2PpODDEvzNqWP1Y7sdbjjY"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 24px",
                  borderRadius: 100,
                  background: "#1db954",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                #ZFA-Podcast auf Spotify
              </a>
            </div>
            {/* ── CHANGE #5: data-reveal + TiltCard on each stat card, 42.000+ ── */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {[
                { value: "42.000+", label: "Streams & Downloads" },
                { value: "600+", label: "Spotify-Follower" },
                { value: "13", label: "Lernfelder abgedeckt" },
                { value: "04001", label: "Erfolgreichste Episode" },
              ].map((s) => (
                <TiltCard key={s.label}>
                  <div
                    data-reveal
                    style={{
                      background: "var(--card-bg)",
                      border: "1px solid var(--card-border)",
                      borderRadius: 14,
                      padding: "24px 20px",
                      textAlign: "center",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: 36,
                        fontWeight: 600,
                        color: PRIMARY,
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--text-secondary)",
                        marginTop: 6,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (GEO-Kern) ── */}
      <section
        id="faq"
        data-light-section
        style={{
          background: "var(--section-alt-bg)",
          padding: "100px 40px",
        }}
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
                fontSize: "clamp(32px, 3.5vw, 52px)",
                fontWeight: 500,
                lineHeight: 1.1,
                margin: 0,
                color: "var(--text-primary)",
              }}
            >
              Was du wissen willst.
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

      {/* ── CTA ── */}
      <section
        id="cta"
        style={{
          background: DARK_BG,
          padding: "120px 40px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }} data-reveal>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 500,
              lineHeight: 1.05,
              color: "#fff",
              margin: "0 0 24px",
            }}
          >
            Lass uns{" "}
            <em style={{ color: ACCENT, fontStyle: "italic" }}>reden.</em>
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.65)",
              marginBottom: 48,
            }}
          >
            KI-Training, Lernumgebungen, Facilitation oder einfach ein Gespräch
            darüber, was möglich ist — ich freue mich davon zu hören.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/kontakt"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "16px 40px",
                borderRadius: 100,
                background: ACCENT,
                color: "#16212e",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: "0.2px",
              }}
            >
              Gespräch starten →
            </a>
            <a
              href="mailto:steffen@educube.de"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "16px 40px",
                borderRadius: 100,
                border: "1px solid rgba(255,255,255,0.28)",
                color: "#fff",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              steffen@educube.de
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER / NAP ── */}
      <footer
        style={{
          background: "#080f17",
          padding: "40px 40px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: 18,
                color: "rgba(255,255,255,0.85)",
                fontWeight: 500,
              }}
            >
              Steffen Schuster
            </span>
            <address
              style={{
                fontStyle: "normal",
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
              }}
            >
              educube GmbH · Steffen Schuster · Stiller Weg 15 · 22607 Hamburg ·{" "}
              <a
                href="mailto:steffen@educube.de"
                style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
              >
                steffen@educube.de
              </a>
            </address>
          </div>
          <nav style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { label: "Startseite", href: "/" },
              { label: "Über mich", href: "/ueber" },
              { label: "nora-ki.de", href: "https://nora-ki.de" },
              { label: "educube.de", href: "https://www.educube.de/" },
              { label: "Kontakt", href: "/kontakt" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
