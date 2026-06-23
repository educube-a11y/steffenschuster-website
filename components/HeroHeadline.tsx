"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const LINE1 = "Lernen neu denken.";
const LINE2 = "Mit KI.";
const ACCENT = "#ff9800";

function CharSpan({ ch }: { ch: string }) {
  return (
    <span
      className="hero-char"
      style={{ display: "inline-block", whiteSpace: "pre" }}
    >
      {ch}
    </span>
  );
}

// Wraps a word's chars in a nowrap container so words never break mid-character
function WordGroup({ word }: { word: string }) {
  return (
    <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
      {word.split("").map((ch, i) => (
        <CharSpan key={i} ch={ch} />
      ))}
    </span>
  );
}

export function HeroHeadline({ style }: { style?: React.CSSProperties }) {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!h1Ref.current) return;
    const chars = [...h1Ref.current.querySelectorAll<HTMLElement>(".hero-char")];

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      chars.forEach((c) => { c.style.opacity = "1"; });
      return;
    }

    // Scatter more dramatically so the build-up is clearly visible
    gsap.set(chars, {
      y: () => gsap.utils.random(-50, 50),
      x: () => gsap.utils.random(-30, 30),
      rotation: () => gsap.utils.random(-20, 20),
      filter: "blur(8px)",
      opacity: 0,
    });

    // Slow stagger (0.065s/char × 25 chars ≈ 1.6s sweep) — total ~2.3s
    gsap.to(chars, {
      y: 0,
      x: 0,
      rotation: 0,
      filter: "blur(0px)",
      opacity: 1,
      duration: 0.45,
      ease: "power3.out",
      stagger: 0.065,
      delay: 0.3,
    });
  }, []);

  const line1Words = LINE1.split(" ");

  return (
    <h1
      ref={h1Ref}
      style={{
        fontFamily: "var(--font-cormorant), serif",
        fontWeight: 500,
        fontSize: "clamp(48px, 8vw, 104px)",
        lineHeight: 0.98,
        letterSpacing: "-1px",
        color: "#fff",
        margin: "0 0 28px",
        maxWidth: "none",
        ...style,
      }}
    >
      {/* Each word is a nowrap group — spaces are separate CharSpans */}
      {line1Words.flatMap((word, wi) => {
        const items: React.ReactNode[] = [
          <WordGroup key={`w-${wi}`} word={word} />,
        ];
        if (wi < line1Words.length - 1) {
          items.push(<CharSpan key={`sp-${wi}`} ch=" " />);
        }
        return items;
      })}
      <br />
      <span style={{ fontStyle: "italic", color: ACCENT }}>
        {LINE2.split("").map((ch, i) => (
          <CharSpan key={`l2-${i}`} ch={ch} />
        ))}
      </span>
    </h1>
  );
}
