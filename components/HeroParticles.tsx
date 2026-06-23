"use client";
import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";

const HeroParticlesCanvas = dynamic(
  () =>
    import("./HeroParticlesCanvas").then((m) => ({
      default: m.HeroParticlesCanvas,
    })),
  { ssr: false }
);

export function HeroParticles() {
  const [active, setActive] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = divRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={divRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {active && <HeroParticlesCanvas />}
    </div>
  );
}
