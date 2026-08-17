import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { TiltCard } from "@/components/TiltCard";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const INK = "#1c3357";
const NAVY = "#213e70";
const ACCENT = "#e0781a";
const PAPER = "#f5f7fb";
const SOFT = "#e8edf5";
const PURPLE = "#7d3893";
const TEAL = "#03a099";
const ORANGE = "#e37c13";

const SITE_URL = "https://www.steffenschuster.de";
const PAGE_URL = `${SITE_URL}/buecher/zfa-arbeitsbuch`;
const AMAZON_URL = "https://www.amazon.de/ZFA-Arbeitsbuch-Bundle-Band/dp/3910544037";
const NORA_KI_URL = "https://nora-ki.de";
const PODCAST_URL = "https://open.spotify.com/show/2PpODDEvzNqWP1Y7sdbjjY";

export const metadata: Metadata = {
  title: "#ZFA Arbeitsbuch – Die crossmediale ZFA-Ausbildungsreihe + lina-zfa",
  description:
    "#ZFA Arbeitsbuch: die dreibändige Arbeitsbuch-Reihe für die Ausbildung zur Zahnmedizinischen Fachangestellten (Lernfelder 01–13), ausgezeichnet mit der Comenius EduMedia Medaille 2021 — als analoge Ergänzung zum KI-Lerncoach lina-zfa auf nora-ki.de. Von Steffen Schuster als Autor und Herausgeber im Autorinnen-Team.",
  keywords: [
    "#ZFA Arbeitsbuch",
    "ZFA Ausbildung",
    "Zahnmedizinische Fachangestellte Arbeitsbuch",
    "lina-zfa",
    "nora-ki",
    "ZFA Lernfelder",
    "Rahmenlehrplan ZFA 2022",
    "s:e:c Verlag",
    "Steffen Schuster",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "book",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "Steffen Schuster",
    title: "#ZFA Arbeitsbuch – Die crossmediale ZFA-Ausbildungsreihe",
    description:
      "Die dreibändige Arbeitsbuch-Reihe für die ZFA-Ausbildung (Lernfelder 01–13) — analoge Ergänzung zum KI-Lerncoach lina-zfa auf nora-ki.de. Ausgezeichnet mit der Comenius EduMedia Medaille 2021.",
    images: [{ url: "/buecher/zfa-arbeitsbuch/og-zfa-arbeitsbuch.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "#ZFA Arbeitsbuch – Die crossmediale ZFA-Ausbildungsreihe",
    description: "Arbeitsbuch-Reihe für die ZFA-Ausbildung + KI-Lerncoach lina-zfa auf nora-ki.de.",
    images: ["/buecher/zfa-arbeitsbuch/og-zfa-arbeitsbuch.jpg"],
  },
};

type Band = {
  titel: string;
  lernfelder: string;
  isbn: string;
  cover: string;
  farbe: string;
};

const baende: Band[] = [
  {
    titel: "#ZFA Arbeitsbuch — Lernfelder 01–04",
    lernfelder: "01–04",
    isbn: "978-3-906171-40-1",
    cover: "/buecher/zfa-arbeitsbuch/covers/cover-lf01-04.jpg",
    farbe: PURPLE,
  },
  {
    titel: "#ZFA Arbeitsbuch — Lernfelder 05–09",
    lernfelder: "05–09",
    isbn: "978-3-906171-41-8",
    cover: "/buecher/zfa-arbeitsbuch/covers/cover-lf05-09.jpg",
    farbe: TEAL,
  },
  {
    titel: "#ZFA Arbeitsbuch — Lernfelder 10–13",
    lernfelder: "10–13",
    isbn: "978-3-906171-42-5",
    cover: "/buecher/zfa-arbeitsbuch/covers/cover-lf10-13.jpg",
    farbe: ORANGE,
  },
];

const faqItems = [
  {
    q: "Was ist die #ZFA Arbeitsbuch-Reihe?",
    a: "„#ZFA — Eine crossmediale Ausbildung zur Zahnmedizinischen Fachangestellten“ ist eine dreibändige Arbeitsbuch-Reihe, die alle 13 Lernfelder der ZFA-Ausbildung nach dem Rahmenlehrplan 2022 abdeckt: Band 1 die Lernfelder 01–04, Band 2 die Lernfelder 05–09, Band 3 die Lernfelder 10–13. Erschienen im s:e:c Verlag, ausgezeichnet mit der Comenius EduMedia Medaille 2021 für crossmediale Lernarrangements.",
  },
  {
    q: "Wie hängen das Arbeitsbuch und lina-zfa zusammen?",
    a: "Die Reihe ist bewusst crossmedial angelegt: Das gedruckte Arbeitsbuch begleitet Auszubildende analog durch den Berufsschulunterricht — zum Reinschreiben, Ausschneiden und Nachschlagen. lina-zfa ist die digitale Ergänzung dazu: ein KI-Lerncoach speziell für ZFA-Azubis, verfügbar über die Lernplattform nora-ki.de. Beide Formate ergänzen sich, ersetzen sich aber nicht.",
  },
  {
    q: "Wer hat die Reihe geschrieben und herausgegeben?",
    a: "Steffen Schuster hat die Reihe als Autor und Herausgeber gemeinsam mit einem Autorinnen-Team aus drei Kolleginnen entwickelt.",
  },
  {
    q: "Welcher Band deckt welche Lernfelder ab?",
    a: "Band 1 (ISBN 978-3-906171-40-1): Lernfelder 01–04. Band 2 (ISBN 978-3-906171-41-8): Lernfelder 05–09. Band 3 (ISBN 978-3-906171-42-5): Lernfelder 10–13.",
  },
  {
    q: "Was ist das Online Trainingscenter?",
    a: "Zusätzlich zum Arbeitsbuch gibt es einen digitalen Zugang mit ergänzenden Informationen und Übungen. Die Zugangswege sind über die Verlagsseite www.sec-verlag.ch/faq erklärt.",
  },
  {
    q: "Ersetzt lina-zfa den Berufsschulunterricht?",
    a: "Nein. lina-zfa ist ein ergänzender KI-Lerncoach für das selbstständige Üben und ersetzt weder den Berufsschulunterricht noch die praktische Ausbildung im Betrieb.",
  },
  {
    q: "Wo ist die #ZFA Arbeitsbuch-Reihe erhältlich?",
    a: "Die Bände der Reihe sind bei Amazon erhältlich.",
  },
];

const bookSeriesSchema = {
  "@context": "https://schema.org",
  "@type": "BookSeries",
  name: "#ZFA — Eine crossmediale Ausbildung zur Zahnmedizinischen Fachangestellten",
  url: PAGE_URL,
  inLanguage: "de",
  genre: ["Ausbildung", "Berufsschule", "Arbeitsbuch"],
  publisher: { "@type": "Organization", name: "s:e:c Verlag" },
  editor: [{ "@type": "Person", name: "Steffen Schuster", url: `${SITE_URL}/autor` }],
  author: [{ "@type": "Person", name: "Steffen Schuster", url: `${SITE_URL}/autor` }],
  description:
    "Dreibändige Arbeitsbuch-Reihe für die Ausbildung zur Zahnmedizinischen Fachangestellten, alle 13 Lernfelder nach Rahmenlehrplan 2022, ausgezeichnet mit der Comenius EduMedia Medaille 2021.",
  award: "Comenius EduMedia Medaille 2021",
  hasPart: baende.map((b, i) => ({
    "@type": "Book",
    name: b.titel,
    isbn: b.isbn,
    position: i + 1,
    bookFormat: "https://schema.org/Paperback",
    isPartOf: { "@type": "BookSeries", name: "#ZFA Arbeitsbuch" },
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

export default function ZfaArbeitsbuchPage() {
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
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto", width: "100%" }}>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 60, alignItems: "center" }}>
            <div data-reveal>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: "0.18em", color: ACCENT, textTransform: "uppercase", marginBottom: 22 }}>
                Arbeitsbuch-Reihe · ZFA-Ausbildung
              </p>
              <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(36px, 4.8vw, 58px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: INK, margin: "0 0 22px" }}>
                #ZFA — analog lernen, digital vertiefen mit lina-zfa
              </h1>
              <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.65, color: "#455065", maxWidth: 580, marginBottom: 26 }}>
                Die dreibändige Arbeitsbuch-Reihe begleitet Auszubildende durch
                alle 13 Lernfelder der ZFA-Ausbildung — und ist die analoge
                Übungsergänzung zu <strong>lina-zfa</strong>, dem
                KI-Lerncoach auf <strong>nora-ki.de</strong>. Entwickelt von{" "}
                <strong>Steffen Schuster</strong> als Autor und Herausgeber
                im Autorinnen-Team.
              </p>
              <div data-reveal style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
                {["3 Bände · Lernfelder 01–13", "Comenius EduMedia Medaille 2021", "s:e:c Verlag"].map((tag) => (
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
                <a
                  href={NORA_KI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 30px", borderRadius: 100, background: ACCENT, color: "#fff", textDecoration: "none", fontSize: 16, fontWeight: 600 }}
                >
                  lina-zfa entdecken <span>→</span>
                </a>
              </div>
            </div>

            <div data-reveal style={{ position: "relative", height: 420 }}>
              {baende.map((b, i) => {
                const angle = (i - 1) * 9;
                const left = 18 + i * 22;
                return (
                  <div
                    key={b.isbn}
                    style={{
                      position: "absolute",
                      top: 10,
                      left: `${left}%`,
                      width: "44%",
                      maxWidth: 210,
                      transform: `rotate(${angle}deg)`,
                      zIndex: i === 1 ? 3 : i,
                      borderRadius: 12,
                      overflow: "hidden",
                      boxShadow: "0 24px 55px rgba(28,51,87,0.32)",
                      aspectRatio: "700/1046",
                    }}
                  >
                    <Image
                      src={b.cover}
                      alt={`Buchcover: ${b.titel}`}
                      fill
                      style={{ objectFit: "cover" }}
                      priority={i === 1}
                      sizes="210px"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── ANALOG + DIGITAL ── */}
      <section id="konzept" data-light-section className="section-px" style={{ background: PAPER, padding: "100px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div data-reveal style={{ maxWidth: 700, marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(28px, 3.2vw, 42px)", fontWeight: 500, lineHeight: 1.15, margin: "0 0 24px", color: INK }}>
              Ein Konzept, zwei Formate
            </h2>
            <p style={{ fontSize: 17.5, lineHeight: 1.85, color: "#455065", margin: 0 }}>
              #ZFA ist von Anfang an crossmedial gedacht: Das Arbeitsbuch
              bringt die Inhalte aufs Papier, lina-zfa bringt sie aufs
              Smartphone. Zusammen begleiten sie Auszubildende durch die
              gesamte ZFA-Ausbildung — vom ersten Lerntag bis zur Prüfung.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            <div data-reveal style={{ background: "#fff", border: `1px solid ${INK}1a`, borderRadius: 20, padding: "34px 30px" }}>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: NAVY, margin: "0 0 10px" }}>
                Analog
              </p>
              <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 26, fontWeight: 600, margin: "0 0 14px", color: INK }}>
                Das #ZFA Arbeitsbuch
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Zum Reinschreiben, Ausschneiden, Kleben und Falten",
                  "Platz für eigene Notizen und Fragen an Lehrerin oder Zahnärztin",
                  "„Erledigt?“-Ecken machen den eigenen Fortschritt sichtbar",
                  "Handliches Format, das in jede Tasche passt",
                ].map((t) => (
                  <li key={t} style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.6, color: "#455065" }}>
                    <span style={{ color: NAVY, flexShrink: 0 }}>—</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <TiltCard>
              <div data-reveal style={{ background: INK, borderRadius: 20, padding: "34px 30px", height: "100%", color: "#fff" }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: ACCENT, margin: "0 0 10px" }}>
                  Digital · KI-Lerncoach
                </p>
                <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 26, fontWeight: 600, margin: "0 0 14px", color: "#fff" }}>
                  lina-zfa auf nora-ki.de
                </h3>
                <ul style={{ margin: "0 0 22px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "KI-Lerncoach speziell für ZFA-Azubis",
                    "Teil der Lernplattform nora-ki.de",
                    "Entwickelt von educube — 20 Jahre Bildungsexpertise",
                    "Ergänzt das Arbeitsbuch um digitales Üben",
                  ].map((t) => (
                    <li key={t} style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,0.82)" }}>
                      <span style={{ color: ACCENT, flexShrink: 0 }}>—</span>
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={NORA_KI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14.5, fontWeight: 600, color: "#fff", textDecoration: "none", borderBottom: `1px solid ${ACCENT}`, paddingBottom: 2 }}
                >
                  lina-zfa auf nora-ki.de entdecken →
                </a>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ── SERIENÜBERSICHT ── */}
      <section data-light-section className="section-px" style={{ background: SOFT, padding: "100px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div data-reveal style={{ marginBottom: 40 }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: 16 }}>
              Die Reihe
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(28px, 3.2vw, 42px)", fontWeight: 500, margin: 0, color: INK }}>
              Drei Bände, 13 Lernfelder
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {baende.map((b) => (
              <div key={b.isbn} data-reveal style={{ background: "#fff", borderRadius: 18, overflow: "hidden", border: `1px solid ${INK}14` }}>
                <div style={{ position: "relative", aspectRatio: "700/1046", background: NAVY }}>
                  <Image src={b.cover} alt={`Buchcover: ${b.titel}`} fill style={{ objectFit: "cover" }} sizes="(max-width: 700px) 90vw, 320px" />
                </div>
                <div style={{ padding: "22px 22px 26px" }}>
                  <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: 100, background: `${b.farbe}1a`, color: b.farbe, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>
                    Lernfelder {b.lernfelder}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 19, fontWeight: 600, margin: "0 0 6px", color: INK, lineHeight: 1.3 }}>
                    {b.titel}
                  </h3>
                  <p style={{ fontSize: 12.5, color: "#7c8598", margin: 0 }}>ISBN {b.isbn}</p>
                </div>
              </div>
            ))}
          </div>
          <div data-reveal style={{ marginTop: 36, textAlign: "center" }}>
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 32px", borderRadius: 100, background: "#232f3e", color: "#fff", textDecoration: "none", fontSize: 16, fontWeight: 600 }}
            >
              Bände bei Amazon ansehen <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── WAS DAS ARBEITSBUCH BIETET ── */}
      <section data-light-section className="section-px" style={{ background: PAPER, padding: "100px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 data-reveal style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 500, margin: "0 0 40px", color: INK }}>
            Was das Arbeitsbuch bietet
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 20 }}>
            {[
              { t: "13 Lernfelder, 3 Bände", d: "Aufbau nach dem Rahmenlehrplan 2022 — Schritt für Schritt durch die Ausbildung." },
              { t: "Zum Mitarbeiten gemacht", d: "Aufgaben zum Ausschneiden, Kleben und Falten statt reinem Lesen." },
              { t: "„Erledigt?“-Ecken", d: "Abtrennbare Ecken machen den eigenen Lernfortschritt sichtbar." },
              { t: "Online Trainingscenter", d: "Digitaler Zugang mit ergänzenden Informationen und Übungen." },
              { t: "Geschlechtersensible Sprache", d: "Bewusst in weiblicher Form geschrieben — alle Geschlechter eingeschlossen." },
              { t: "Comenius EduMedia Medaille 2021", d: "Ausgezeichnet für das crossmediale Lernarrangement aus Buch und digitalem Angebot." },
            ].map((item) => (
              <div key={item.t} data-reveal style={{ background: "#fff", border: `1px solid ${INK}1a`, borderRadius: 16, padding: "26px 24px" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 20, fontWeight: 600, margin: "0 0 8px", color: INK }}>{item.t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#455065", margin: 0 }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÖKOSYSTEM: PODCAST ── */}
      <section data-light-section className="section-px" style={{ background: SOFT, padding: "90px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center", justifyContent: "space-between" }}>
          <div data-reveal style={{ maxWidth: 560 }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: 14 }}>
              Das #ZFA-Ökosystem
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(24px, 2.8vw, 32px)", fontWeight: 500, margin: "0 0 14px", color: INK }}>
              Arbeitsbuch, lina-zfa und der #ZFA-Podcast
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "#455065", margin: 0 }}>
              Als Host des #ZFA-Podcasts (42.000+ Streams auf Spotify) gibt
              Steffen Schuster ZFA-Auszubildenden schon seit Jahren konkrete
              Lernhilfe zu allen 13 Lernfeldern. Das Arbeitsbuch und lina-zfa
              führen diesen Ansatz analog und digital weiter.
            </p>
          </div>
          <a
            href={PODCAST_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 28px", borderRadius: 100, border: `1px solid ${INK}30`, color: INK, textDecoration: "none", fontSize: 15, fontWeight: 600, whiteSpace: "nowrap" }}
          >
            #ZFA-Podcast auf Spotify <span>→</span>
          </a>
        </div>
      </section>

      {/* ── AUTOR & HERAUSGEBER ── */}
      <section data-light-section className="section-px" style={{ background: PAPER, padding: "100px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 data-reveal style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 500, margin: "0 0 36px", color: INK }}>
            Autor &amp; Herausgeber
          </h2>
          <TiltCard>
            <div data-reveal style={{ background: SOFT, borderRadius: 18, padding: "34px 30px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: ACCENT, margin: "0 0 8px" }}>
                Autor &amp; Herausgeber
              </p>
              <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 22, fontWeight: 600, margin: "0 0 10px", color: INK }}>
                Steffen Schuster
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#455065", margin: "0 0 16px", maxWidth: 640 }}>
                Pädagoge und Bildungsinnovator aus Hamburg, Host des
                #ZFA-Podcasts und Gründer der educube GmbH. Die #ZFA
                Arbeitsbuch-Reihe hat er als Autor und Herausgeber gemeinsam
                mit einem Autorinnen-Team aus drei Kolleginnen entwickelt —
                begleitet von lina-zfa, dem KI-Lerncoach auf seiner
                Lernplattform nora-ki.de.
              </p>
              <a href="/autor" style={{ fontSize: 14, fontWeight: 600, color: INK, textDecoration: "none", borderBottom: `1px solid ${ACCENT}`, paddingBottom: 2 }}>
                Zur Autorenseite →
              </a>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-px" style={{ background: SOFT, padding: "110px 40px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div data-reveal style={{ marginBottom: 48 }}>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: 18 }}>
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
                  <span style={{ fontSize: 20, color: ACCENT, flexShrink: 0, fontWeight: 300 }}>+</span>
                </summary>
                <div style={{ padding: "0 26px 22px", fontSize: 15, lineHeight: 1.7, color: "#455065" }}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABSCHLUSS-CTA ── */}
      <section className="section-px" style={{ position: "relative", padding: "140px 40px", background: `radial-gradient(120% 100% at 50% 0%, #2c4a7d 0%, ${INK} 55%, #101d34 100%)`, textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }} data-reveal>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(30px, 4vw, 50px)", lineHeight: 1.15, color: "#fff", margin: "0 0 24px" }}>
            Bereit für die ZFA-Ausbildung — analog und digital.
          </h2>
          <div className="cta-group" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "17px 34px", borderRadius: 100, background: ACCENT, color: "#fff", textDecoration: "none", fontSize: 16.5, fontWeight: 600 }}
            >
              Arbeitsbuch bei Amazon <span>→</span>
            </a>
            <a
              href={NORA_KI_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "17px 34px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.35)", color: "#fff", textDecoration: "none", fontSize: 16.5, fontWeight: 600 }}
            >
              lina-zfa auf nora-ki.de <span>→</span>
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
