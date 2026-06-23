import Image from "next/image";
import { Nav } from "@/components/Nav";
import { LogoMark } from "@/components/LogoMark";
import { NetworkField } from "@/components/NetworkField";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { HeroParticles } from "@/components/HeroParticles";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const ACCENT = "#ff9800";
const PRIMARY = "#345f85";

const milestones = [
  {
    year: "2006",
    title: "edu:cube GmbH",
    body: "Gründung des Unternehmens für digitale Lernumgebungen — der Startpunkt von 20 Jahren konsequenter Innovation in der Bildung.",
  },
  {
    year: "2016",
    title: "next:classroom",
    body: "Erfindung des next:classroom — eine digitale Lernumgebung, die den analogen Raum aktiv in den Lernprozess einbezieht. Lernen in Bewegung, mobil, selbstgesteuert im eigenen Tempo.",
  },
  {
    year: "2019–20",
    title: "Weltweit ausgezeichnet",
    body: "hundrED Innovation Summit Zürich: Top 100 weltweit. delina Innovationspreis, eLearning Award, ILIAS Award, Comenius EduMedia Medaille — 30 Jahre Engagement in einem.",
  },
  {
    year: "2026",
    title: "nora-ki.de",
    body: "KI fließt folgerichtig in das Lernen ein. Nora-KI stellt diverse KI-basierte Apps zum Lernen und zur Ausbildung bereit — der nächste logische Schritt.",
  },
];

const awards = [
  { label: "delina Innovationspreis", year: "2019" },
  { label: "eLearning Award", year: "2020" },
  { label: "ILIAS Award", year: "2014" },
  { label: "Comenius EduMedia Medaille", year: "2020" },
  { label: "hundrED Top 100", year: "2019" },
];

const offers = [
  {
    no: "01",
    title: "KI-Training",
    body: "Praxisnahe Begleitung für Menschen und Teams, die KI nicht fürchten, sondern verstehen und nutzen lernen wollen.",
  },
  {
    no: "02",
    title: "Lernumgebungen",
    body: "Konzeption und Gestaltung digitaler Lernwelten, die analoge Erfahrung verlängern statt ersetzen — wie next.classroom und Nora-KI.",
  },
  {
    no: "03",
    title: "Facilitation & Workshops",
    body: "Räume, in denen gemeinsam gedacht wird. Moderation, die Beteiligung ernst nimmt und Bewegung erzeugt.",
  },
  {
    no: "04",
    title: "Organisationsentwicklung",
    body: "Transformation von innen heraus — aus Jahren der Beratung bei TBF + Partner und im Aufbau von edu:cube.",
  },
];

const refs = [
  {
    name: "Bildungszentrum Limmattal",
    body: "Implementierung des kiss-U Konzepts (kompetenzorientiert, individualisiert, selbstgesteuert, selbstwirksam) mit der digitalen Lernumgebung next.classroom. Ausgezeichnet unter den Top 100 innovativsten Bildungsideen weltweit beim hundrED Summit in Zürich.",
    tag: "Bildung CH",
    photo: "/bzlt.jpg",
  },
  {
    name: "Berufsschule BS15 Hamburg",
    body: "Verbindung analoger und digitaler Lernräume für medizinische Fachberufe — mit Erfolg: 2019 als „Beste Berufliche Schule im digitalen Wandel Hamburgs“ ausgezeichnet.",
    tag: "Gesundheit",
    photo: "/bs15-lernraum.png",
  },
];

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "var(--font-dm-sans), -apple-system, BlinkMacSystemFont, sans-serif",
        color: "#16212e",
        background: "#fafafa",
        overflowX: "hidden",
      }}
    >
      <ScrollRevealInit />
      <ScrollAnimations />
      <Nav />

      {/* ── HERO ── */}
      <section
        id="hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "160px 40px 100px",
          background: "radial-gradient(120% 90% at 80% 0%, #3a6892 0%, #2b5274 45%, #1b3953 100%)",
          overflow: "hidden",
        }}
      >
        <HeroParticles />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(80% 60% at 50% 110%, rgba(0,0,0,0.35), transparent)", zIndex: 1 }} />
        <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", width: "100%", zIndex: 2 }}>
          <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "7px 16px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.22)", background: "rgba(255,255,255,0.06)", marginBottom: 34 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: ACCENT, display: "inline-block" }} />
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase" }}>
              Pädagoge · KI-Pionier · Gestalter
            </span>
          </div>
          <h1 data-reveal style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(48px, 8vw, 104px)", lineHeight: 0.98, letterSpacing: "-1px", color: "#fff", margin: "0 0 28px", maxWidth: "14ch" }}>
            Lernen neu denken.<br />
            <span style={{ fontStyle: "italic", color: ACCENT }}>Mit KI.</span>
          </h1>
          <p data-reveal style={{ fontSize: "clamp(17px, 2vw, 21px)", lineHeight: 1.6, color: "rgba(255,255,255,0.82)", maxWidth: "52ch", margin: "0 0 42px", fontWeight: 400 }}>
            Ich verbinde künstliche Intelligenz mit dem Lernen — und erweitere analoge Lernerfahrungen um das, was KI möglich macht. Lernen ist nicht mein Beruf. Es ist meine Identität.
          </p>
          <div data-reveal style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
            <a href="#nora" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 30px", borderRadius: 100, background: ACCENT, color: "#16212e", textDecoration: "none", fontSize: 16, fontWeight: 600, boxShadow: "0 8px 30px rgba(255,152,0,0.35)" }}>
              Nora-KI entdecken <span style={{ fontSize: 18 }}>→</span>
            </a>
            <a href="#philosophie" style={{ display: "inline-flex", alignItems: "center", padding: "16px 30px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.28)", color: "#fff", textDecoration: "none", fontSize: 16, fontWeight: 500 }}>
              Meine Haltung
            </a>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 34, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.5)", zIndex: 2 }}>
          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "2px" }}>SCROLL</span>
          <span style={{ width: 1, height: 38, background: "linear-gradient(rgba(255,255,255,0.5), transparent)", display: "block" }} />
        </div>
      </section>

      {/* ── NORA-KI ── */}
      <section id="nora" style={{ position: "relative", padding: "130px 40px", background: "#0f1f2e", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-10%", right: "-8%", width: "50%", opacity: 0.16, pointerEvents: "none" }}>
          <NetworkField seed={31} count={22} color={ACCENT} opacity={0.7} />
        </div>
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 70, alignItems: "center" }}>
            <div>
              <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 26 }}>
                <span style={{ width: 28, height: 1, background: ACCENT, display: "block" }} />
                <span style={{ color: ACCENT, fontSize: 13, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>Mein Herzensprojekt</span>
              </div>
              <h2 data-reveal style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.02, letterSpacing: "-0.5px", color: "#fff", margin: "0 0 24px" }}>
                Nora&#8209;KI<span style={{ color: ACCENT }}>.</span>de
              </h2>
              <p data-reveal style={{ fontSize: 19, lineHeight: 1.65, color: "rgba(255,255,255,0.8)", margin: "0 0 22px" }}>
                Eine KI-gestützte Lernumgebung, die analoges und digitales Lernen miteinander verbindet. Nora denkt nicht für die Lernenden — sie lernt mit ihnen.
              </p>
              <p data-reveal style={{ fontSize: 16.5, lineHeight: 1.7, color: "rgba(255,255,255,0.58)", margin: "0 0 36px" }}>
                Aus Jahrzehnten im Bau digitaler Lernwelten entstanden, stellt Nora-KI diverse KI-basierte Apps zum Lernen und zur Ausbildung bereit. Technologie soll das Menschliche im Lernen stärken, nicht ersetzen.
              </p>
              <div data-reveal style={{ display: "flex", gap: 40, flexWrap: "wrap", marginBottom: 38 }}>
                {[{ value: "∞", label: "adaptive Lernpfade", a: true }, { value: "2", label: "Welten, eine Brücke", a: false }, { value: "∂", label: "menschzentriert", a: false }].map(({ value, label, a }) => (
                  <div key={label}>
                    <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 40, color: a ? ACCENT : "#fff", lineHeight: 1 }}>{value}</div>
                    <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.55)", marginTop: 6 }}>{label}</div>
                  </div>
                ))}
              </div>
              <a data-reveal href="https://www.nora-ki.de" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 28px", borderRadius: 100, background: ACCENT, color: "#16212e", textDecoration: "none", fontSize: 15.5, fontWeight: 600 }}>
                Plattform ansehen <span>→</span>
              </a>
            </div>
            <div data-reveal style={{ position: "relative" }}>
              <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "13px 16px", background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, display: "inline-block" }} />
                  ))}
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11.5, color: "rgba(255,255,255,0.4)", marginLeft: 12 }}>nora-ki.de</span>
                </div>
                <div style={{ aspectRatio: "4/3", background: "repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 14px, rgba(255,255,255,0.015) 14px 28px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
                  <LogoMark size={60} />
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: "1px" }}>[ nora-ki.de ]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHIE ── */}
      <section id="philosophie" style={{ padding: "130px 40px", background: "#fafafa" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 70, alignItems: "center" }}>
            <div data-reveal data-parallax-portrait style={{ position: "relative", borderRadius: 18, overflow: "hidden", boxShadow: "0 30px 60px rgba(20,40,60,0.18)", aspectRatio: "4/5" }}>
              <Image src="/portrait.png" alt="Steffen Schuster im Gespräch" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div>
              <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 26 }}>
                <span style={{ width: 28, height: 1, background: ACCENT, display: "block" }} />
                <span style={{ color: PRIMARY, fontSize: 13, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>Haltung</span>
              </div>
              <h2 data-reveal style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(34px, 4.5vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: "#16212e", margin: "0 0 28px" }}>
                Die Verbindung von Lernen und KI ist die wichtigste Aufgabe unserer Zeit.
              </h2>
              <p data-reveal style={{ fontSize: 18, lineHeight: 1.7, color: "#45525f", margin: "0 0 20px" }}>
                Seit 30 Jahren gestalte ich Bildung — als Pädagoge, Gründer, Erfinder und Autor. Was mich antreibt, ist konstant geblieben: die Frage, wie Menschen wachsen.
              </p>
              <p data-reveal style={{ fontSize: 18, lineHeight: 1.7, color: "#45525f", margin: "0 0 34px" }}>
                KI verändert alles am Lernen — aber nicht das Wesentliche. Sie ist Werkzeug, nicht Ziel. Mensch zuerst, Technologie danach.
              </p>
              <div data-reveal style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                {["Herzlichkeit", "Neugier", "Radikale Offenheit"].map((v) => (
                  <span key={v} style={{ padding: "9px 18px", borderRadius: 100, border: "1px solid #d6dde4", fontSize: 14, fontWeight: 500, color: PRIMARY }}>{v}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEILENSTEINE ── */}
      <section id="meilensteine" style={{ position: "relative", padding: "130px 40px", background: "#0f1f2e", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: "40%", opacity: 0.12, pointerEvents: "none" }}>
          <NetworkField seed={17} count={20} color="#ffffff" opacity={0.5} />
        </div>
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative" }}>
          <div style={{ maxWidth: 680, marginBottom: 70 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 22 }}>
              <span style={{ width: 28, height: 1, background: ACCENT, display: "block" }} />
              <span style={{ color: ACCENT, fontSize: 13, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>30 Jahre Innovation</span>
            </div>
            <h2 data-reveal style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(34px, 4.5vw, 58px)", lineHeight: 1.05, letterSpacing: "-0.5px", color: "#fff", margin: 0 }}>
              Eine konsequente Reise — von der digitalen Lernumgebung zur KI.
            </h2>
          </div>

          <div data-milestone-grid style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, marginBottom: 70 }}>
            {milestones.map((m, i) => (
              <div key={m.year} data-milestone-card style={{ position: "relative", padding: "32px 28px", background: i % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)", borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: ACCENT, letterSpacing: "2px", marginBottom: 16 }}>{m.year}</div>
                <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600, fontSize: 24, color: "#fff", margin: "0 0 12px", lineHeight: 1.1 }}>{m.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "rgba(255,255,255,0.55)", margin: 0 }}>{m.body}</p>
              </div>
            ))}
          </div>

          {/* next.classroom Bild + kiss-U */}
          <div style={{ display: "grid", gridTemplateColumns: "0.6fr 1fr", gap: 50, alignItems: "center" }}>
            <div data-reveal data-parallax-classroom style={{ position: "relative", borderRadius: 18, overflow: "hidden", aspectRatio: "3/4", boxShadow: "0 30px 60px rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <Image src="/nextclassroom.png" alt="Steffen Schuster beim next.classroom" fill style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
            <div>
              <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 22 }}>
                <span style={{ width: 28, height: 1, background: ACCENT, display: "block" }} />
                <span style={{ color: ACCENT, fontSize: 13, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>Das kiss-U Konzept</span>
              </div>
              <h3 data-reveal style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.3px", color: "#fff", margin: "0 0 22px" }}>
                Kompetenzorientiert. Individualisiert. Selbstgesteuert. Selbstwirksam.
              </h3>
              <p data-reveal style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: "0 0 20px" }}>
                Das kiss-U Konzept verbindet pädagogische Überzeugung mit digitaler Infrastruktur. Am Bildungszentrum Limmattal in Zürich — gemeinsam mit Claudia Hug (Rektorin BZLT), Andreas Sägesser und Hanna Hardeland — wurde es unter die 100 innovativsten Bildungsideen weltweit gewählt.
              </p>
              <p data-reveal style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: 0 }}>
                Lernen in Bewegung, mobil auf dem Endgerät, selbstgesteuert im eigenen Tempo — das ist mehr als eine Methode. Es ist eine Haltung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUSZEICHNUNGEN ── */}
      <section id="auszeichnungen" style={{ padding: "130px 40px", background: "#f1f4f7" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 70, alignItems: "center", marginBottom: 60 }}>
            <div>
              <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 22 }}>
                <span style={{ width: 28, height: 1, background: ACCENT, display: "block" }} />
                <span style={{ color: PRIMARY, fontSize: 13, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>Auszeichnungen</span>
              </div>
              <h2 data-reveal style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(34px, 4.5vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: "#16212e", margin: "0 0 24px" }}>
                Mehrfach international ausgezeichnet.
              </h2>
              <p data-reveal style={{ fontSize: 18, lineHeight: 1.7, color: "#45525f", margin: "0 0 36px" }}>
                30 Jahre Engagement für Innovation in der Bildung wurden vielfach gewürdigt — von der delina über den eLearning Award bis zur Comenius EduMedia Medaille. Auf dem Innovation Summit hundrED in Zürich wurde das Lernkonzept BZLT unter den 100 innovativsten Bildungsideen weltweit geführt.
              </p>
              <div data-reveal style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {awards.map((a) => (
                  <div key={a.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderRadius: 12, background: "#fff", border: "1px solid #e4e9ee" }}>
                    <span style={{ fontSize: 15, fontWeight: 500, color: "#16212e" }}>{a.label}</span>
                    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: ACCENT }}>{a.year}</span>
                  </div>
                ))}
              </div>
            </div>
            <div data-reveal style={{ position: "relative", borderRadius: 18, overflow: "hidden", boxShadow: "0 30px 60px rgba(20,40,60,0.18)", aspectRatio: "3/4" }}>
              <Image src="/award-comenius.jpg" alt="Steffen Schuster mit der Comenius EduMedia Medaille" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
          </div>

          {/* Award-Foto BZLT */}
          <div data-reveal data-parallax-award style={{ position: "relative", borderRadius: 18, overflow: "hidden", boxShadow: "0 20px 50px rgba(20,40,60,0.12)", aspectRatio: "21/9" }}>
            <Image src="/award-elearning.jpg" alt="eLearning Award 2019 — next.classroom, edu:cube GmbH" fill style={{ objectFit: "cover", objectPosition: "center 30%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,31,46,0.85) 0%, rgba(15,31,46,0.3) 60%, transparent 100%)" }} />
            <div style={{ position: "absolute", inset: 0, padding: "48px 56px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: ACCENT, letterSpacing: "2px", marginBottom: 12 }}>eLearning Award 2019</div>
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(22px, 3vw, 36px)", color: "#fff", margin: 0, lineHeight: 1.2, maxWidth: "40ch" }}>
                „next:classroom Cross Media eLearning" — Projekt des Jahres, Platz 2
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANGEBOT ── */}
      <section id="angebot" style={{ position: "relative", padding: "130px 40px", background: "#fafafa", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: "-15%", left: "-5%", width: "42%", opacity: 0.4, pointerEvents: "none" }}>
          <NetworkField seed={53} count={24} color={PRIMARY} opacity={0.5} />
        </div>
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative" }}>
          <div style={{ maxWidth: 640, marginBottom: 64 }}>
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 22 }}>
              <span style={{ width: 28, height: 1, background: ACCENT, display: "block" }} />
              <span style={{ color: PRIMARY, fontSize: 13, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>Was ich anbiete</span>
            </div>
            <h2 data-reveal style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(34px, 4.5vw, 58px)", lineHeight: 1.05, letterSpacing: "-0.5px", color: "#16212e", margin: 0 }}>
              Vier Wege, an denen ich mit Menschen und Organisationen arbeite.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {offers.map((offer) => (
              <div key={offer.no} data-reveal className="offer-card" style={{ position: "relative", padding: "38px 34px", borderRadius: 18, background: "#fff", border: "1px solid #e4e9ee", boxShadow: "0 2px 14px rgba(20,40,60,0.04)" }}>
                <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 13, color: ACCENT, marginBottom: 24 }}>{offer.no}</div>
                <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600, fontSize: 28, color: "#16212e", margin: "0 0 12px" }}>{offer.title}</h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#56636f", margin: 0 }}>{offer.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFERENZEN ── */}
      <section id="referenzen" style={{ padding: "130px 40px", background: "#f1f4f7" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 70, alignItems: "center", marginBottom: 70 }}>
            <div>
              <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 26 }}>
                <span style={{ width: 28, height: 1, background: ACCENT, display: "block" }} />
                <span style={{ color: PRIMARY, fontSize: 13, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>AI Training Institute</span>
              </div>
              <h2 data-reveal style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: "#16212e", margin: "0 0 24px" }}>
                Auf der Bühne wie im Gespräch — verbunden mit dem AITI.
              </h2>
              <p data-reveal style={{ fontSize: 18, lineHeight: 1.7, color: "#45525f", margin: 0 }}>
                Dem AI Training Institute eng verbunden, dessen Werte — Herzlichkeit, Neugier und radikale Offenheit — auch die meinen sind. Hier wird KI nicht doziert, sondern erlebbar gemacht.
              </p>
            </div>
            <div data-reveal style={{ position: "relative", borderRadius: 18, overflow: "hidden", boxShadow: "0 30px 60px rgba(20,40,60,0.18)", aspectRatio: "4/3" }}>
              <Image src="/stage.png" alt="Steffen Schuster beim AI Training Institute" fill style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div data-reveal style={{ fontSize: 13, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#8a97a6", marginBottom: 22 }}>
            Ausgewählte Referenzen
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {refs.map((ref) => (
              <div key={ref.name} data-reveal style={{ borderRadius: 18, background: "#fff", border: "1px solid #e4e9ee", overflow: "hidden" }}>
                {ref.photo && (
                  <div style={{ position: "relative", aspectRatio: "16/7", overflow: "hidden" }}>
                    <Image src={ref.photo} alt={ref.name} fill style={{ objectFit: "cover", objectPosition: "center 30%" }} />
                  </div>
                )}
                <div style={{ padding: 34, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20 }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600, fontSize: 26, color: "#16212e", margin: "0 0 8px" }}>{ref.name}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.6, color: "#56636f", margin: 0 }}>{ref.body}</p>
                  </div>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: ACCENT, whiteSpace: "nowrap" }}>{ref.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KONTAKT ── */}
      <section id="kontakt" style={{ position: "relative", padding: "150px 40px", background: "radial-gradient(120% 100% at 50% 0%, #3a6892 0%, #2b5274 50%, #1b3953 100%)", overflow: "hidden", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }}>
          <NetworkField seed={7} count={26} color="#ffffff" opacity={0.5} />
        </div>
        <div style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
          <div data-reveal style={{ display: "inline-flex", marginBottom: 30 }}>
            <LogoMark size={56} />
          </div>
          <h2 data-reveal style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(38px, 5.5vw, 72px)", lineHeight: 1.04, letterSpacing: "-0.5px", color: "#fff", margin: "0 0 24px" }}>
            Lassen Sie uns das Lernen{" "}
            <span style={{ fontStyle: "italic", color: ACCENT }}>neu denken.</span>
          </h2>
          <p data-reveal style={{ fontSize: 19, lineHeight: 1.6, color: "rgba(255,255,255,0.78)", margin: "0 0 42px" }}>
            Ein Gespräch ist der beste Anfang. Über KI, über Lernen, über das, was dazwischen entsteht.
          </p>
          <div data-reveal style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="mailto:info@steffenschuster.de" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "17px 34px", borderRadius: 100, background: ACCENT, color: "#16212e", textDecoration: "none", fontSize: 16.5, fontWeight: 600, boxShadow: "0 10px 34px rgba(255,152,0,0.35)" }}>
              Gespräch starten <span>→</span>
            </a>
            <a href="https://www.linkedin.com/in/steffen-schuster-7297088b/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", padding: "17px 34px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.28)", color: "#fff", textDecoration: "none", fontSize: 16.5, fontWeight: 500 }}>
              LinkedIn
            </a>
          </div>
          <div data-reveal style={{ marginTop: 70, paddingTop: 30, borderTop: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
            <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 19, color: "rgba(255,255,255,0.85)" }}>Steffen Schuster</span>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: "1px" }}>info@steffenschuster.de</span>
          </div>
        </div>
      </section>
    </div>
  );
}
