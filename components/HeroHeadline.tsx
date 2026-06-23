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

export function HeroHeadline({ style }: { style?: React.CSSProperties }) {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!h1Ref.current) return;
    const chars = [...h1Ref.current.querySelectorAll<HTMLElement>(".hero-char")];

    // Reduced-motion: reveal instantly, no animation
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      chars.forEach((c) => { c.style.opacity = "1"; });
      return;
    }

    // Scatter chars to random starting positions (synchronous, before paint)
    gsap.set(chars, {
      y: () => gsap.utils.random(-30, 30),
      x: () => gsap.utils.random(-18, 18),
      rotation: () => gsap.utils.random(-14, 14),
      filter: "blur(5px)",
      opacity: 0,
    });

    // Animate each char into place with stagger
    gsap.to(chars, {
      y: 0,
      x: 0,
      rotation: 0,
      filter: "blur(0px)",
      opacity: 1,
      duration: 0.62,
      ease: "power3.out",
      stagger: 0.023,
      // Slight delay so hero canvas is already visible
      delay: 0.15,
    });
  }, []);

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
        maxWidth: "14ch",
        ...style,
      }}
    >
      {LINE1.split("").map((ch, i) => (
        <CharSpan key={`l1-${i}`} ch={ch} />
      ))}
      <br />
      <span style={{ fontStyle: "italic", color: ACCENT }}>
        {LINE2.split("").map((ch, i) => (
          <CharSpan key={`l2-${i}`} ch={ch} />
        ))}
      </span>
    </h1>
  );
}
