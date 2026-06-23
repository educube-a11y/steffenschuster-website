"use client";
import { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

const NODE_COUNT = 28;
const CONNECT_DIST = 110; // px
const NOISE_AMP = 22;     // px movement amplitude
const PULSE_SPEED = 0.0009;
const MOVE_SPEED = 0.00035;
const COLOR = "255, 152, 0"; // #ff9800

interface Node {
  ox: number; // origin x (0–1 relative)
  oy: number; // origin y
  x: number;  // current x (px)
  y: number;
  phase: number; // noise phase offset
}

function initNodes(w: number, h: number): Node[] {
  const nodes: Node[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const ox = Math.random();
    const oy = Math.random();
    nodes.push({ ox, oy, x: ox * w, y: oy * h, phase: Math.random() * 100 });
  }
  return nodes;
}

function NeuralCanvasInner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const noise3D = createNoise3D();

    const w = canvas.width;
    const h = canvas.height;
    const nodes = initNodes(w, h);
    let rafId: number;
    let startTime = performance.now();

    const tick = (now: number) => {
      const t = (now - startTime) * MOVE_SPEED;
      const pulse = (now - startTime) * PULSE_SPEED;

      ctx.clearRect(0, 0, w, h);

      // Update node positions via noise
      for (const n of nodes) {
        const nx = noise3D(n.ox * 2, n.oy * 2, t) * NOISE_AMP;
        const ny = noise3D(n.ox * 2 + 50, n.oy * 2 + 50, t) * NOISE_AMP;
        n.x = n.ox * w + nx;
        n.y = n.oy * h + ny;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const proximity = 1 - dist / CONNECT_DIST;
            // Pulse opacity slightly over time per edge
            const edgePulse = 0.5 + 0.5 * Math.sin(pulse + nodes[i].phase + nodes[j].phase);
            const alpha = proximity * proximity * 0.35 * edgePulse;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${COLOR}, ${alpha})`;
            ctx.lineWidth = proximity * 1.2;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const nodePulse = 0.6 + 0.4 * Math.sin(pulse * 1.3 + n.phase);
        const alpha = 0.55 * nodePulse;
        const radius = 2 + 1.5 * nodePulse;
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLOR}, ${alpha})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={300}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}

// Lazy wrapper — mounts canvas only when section enters viewport
export function NeuralCanvas() {
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
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={divRef} style={{ width: "100%", height: "100%", background: "#0a1929" }}>
      {active && <NeuralCanvasInner />}
    </div>
  );
}
