"use client";
import { useEffect, useRef, useState } from "react";

type CursorState = "default" | "hover" | "image";

export function CustomCursor() {
  const [ready, setReady] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>("default");

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -300, y: -300 });
  const ring = useRef({ x: -300, y: -300 });
  const rafId = useRef<number>(0);
  const stateRef = useRef<CursorState>("default");

  useEffect(() => {
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouch || prefersReduced) return;

    setReady(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      const el = e.target as HTMLElement;
      let next: CursorState = "default";
      if (el.closest("a, button, [data-cursor-hover]")) next = "hover";
      else if (el.closest("img, [data-cursor-image]")) next = "image";

      if (next !== stateRef.current) {
        stateRef.current = next;
        setCursorState(next);
      }
    };

    const LERP = 0.11;
    const tick = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * LERP;
      ring.current.y += (mouse.current.y - ring.current.y) * LERP;

      dotRef.current?.style.setProperty(
        "transform",
        `translate(${mouse.current.x}px,${mouse.current.y}px)`
      );
      ringRef.current?.style.setProperty(
        "transform",
        `translate(${ring.current.x}px,${ring.current.y}px)`
      );

      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!ready) return null;

  const isHover = cursorState === "hover";
  const isImage = cursorState === "image";
  const ringSize = isHover ? 44 : isImage ? 52 : 28;
  const ringColor = isHover ? "#ff9800" : "rgba(255,255,255,0.75)";

  return (
    <>
      {/* Dot — snaps to exact mouse position, hidden on hover */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 10000,
          willChange: "transform",
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#ff9800",
            transform: "translate(-50%,-50%)",
            opacity: isHover || isImage ? 0 : 1,
            transition: "opacity 0.18s ease",
          }}
        />
      </div>

      {/* Ring — lagged, changes size/color with state */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      >
        <div
          style={{
            width: ringSize,
            height: ringSize,
            borderRadius: "50%",
            border: `1.5px solid ${ringColor}`,
            background: isHover ? "rgba(255,152,0,0.07)" : "transparent",
            transform: "translate(-50%,-50%)",
            transition:
              "width 0.28s cubic-bezier(0.2,0.7,0.2,1), height 0.28s cubic-bezier(0.2,0.7,0.2,1), border-color 0.22s ease, background-color 0.22s ease, opacity 0.22s ease",
            boxShadow: "0 0 0 1px rgba(0,0,0,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isImage && (
            <span
              style={{
                fontSize: 11,
                color: "#ff9800",
                fontFamily: "var(--font-jetbrains, monospace)",
                letterSpacing: "0.5px",
              }}
            >
              ↗
            </span>
          )}
        </div>
      </div>
    </>
  );
}
