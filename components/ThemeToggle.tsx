"use client";
import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

const DARK_BG = "#0f1f2e";
const LIGHT_BG = "#fafafa";

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const busyRef = useRef(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored ? stored === "dark" : prefersDark;
    setIsDark(dark);
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, []);

  const toggle = () => {
    if (busyRef.current) return;
    busyRef.current = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const newDark = !isDark;

    const commit = () => {
      setIsDark(newDark);
      document.documentElement.dataset.theme = newDark ? "dark" : "light";
      localStorage.setItem("theme", newDark ? "dark" : "light");
    };

    if (reduced) {
      commit();
      busyRef.current = false;
      return;
    }

    const btn = btnRef.current!;
    const overlay = overlayRef.current!;
    const rect = btn.getBoundingClientRect();
    const cx = Math.round(rect.left + rect.width / 2);
    const cy = Math.round(rect.top + rect.height / 2);

    overlay.style.background = newDark ? DARK_BG : LIGHT_BG;
    overlay.style.display = "block";

    animate(
      overlay,
      { clipPath: [`circle(0% at ${cx}px ${cy}px)`, `circle(150% at ${cx}px ${cy}px)`] },
      { duration: 0.52, ease: [0.4, 0, 0.2, 1] }
    ).then(() => {
      commit();
      // Collapse reveals the newly-themed page
      animate(
        overlay,
        { clipPath: [`circle(150% at ${cx}px ${cy}px)`, `circle(0% at ${cx}px ${cy}px)`] },
        { duration: 0.42, ease: [0.4, 0, 0.2, 1] }
      ).then(() => {
        overlay.style.display = "none";
        busyRef.current = false;
      });
    });
  };

  return (
    <>
      {/* Full-viewport wipe overlay — sits above content, below cursor */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        style={{
          display: "none",
          position: "fixed",
          inset: 0,
          zIndex: 9990,
          pointerEvents: "none",
        }}
      />
      <button
        ref={btnRef}
        onClick={toggle}
        aria-label={isDark ? "Zum hellen Modus wechseln" : "Zum dunklen Modus wechseln"}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.22)",
          background: "rgba(255,255,255,0.08)",
          cursor: "pointer",
          color: "#fff",
          padding: 0,
          flexShrink: 0,
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </>
  );
}
