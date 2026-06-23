"use client";
import { useEffect, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  age: number; // frames since added
}

const TRAIL_MAX = 18;   // max stored points
const TRAIL_LIFE = 22;  // frames until fully faded
const TRAIL_RADIUS = 4; // max dot radius (px)
const COLOR = "255, 152, 0"; // #ff9800 as RGB

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Size canvas to viewport, handle resize
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const ctx = canvas.getContext("2d")!;
    const points: TrailPoint[] = [];
    const mouse = { x: -999, y: -999 };
    let lastX = -999, lastY = -999;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new point only when mouse has moved
      if (mouse.x !== lastX || mouse.y !== lastY) {
        if (points.length >= TRAIL_MAX) points.pop();
        points.unshift({ x: mouse.x, y: mouse.y, age: 0 });
        lastX = mouse.x;
        lastY = mouse.y;
      }

      // Draw and age each point
      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        p.age++;
        if (p.age > TRAIL_LIFE) {
          points.splice(i, 1);
          continue;
        }
        const progress = 1 - p.age / TRAIL_LIFE; // 1 → 0 as it ages
        const alpha = progress * 0.45;
        const radius = TRAIL_RADIUS * progress;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(radius, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLOR}, ${alpha})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9998, // just below custom cursor ring
      }}
      aria-hidden="true"
    />
  );
}
