"use client";
import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createNoise3D } from "simplex-noise";

const COUNT = 1000;
const REPULSE_R = 1.6;
const REPULSE_R2 = REPULSE_R * REPULSE_R;
const NOISE_AMP = 0.52;
const LERP = 0.055;

function ParticleField() {
  const mouseNorm = useRef({ x: 9999, y: 9999 });
  const noise3D = useMemo(() => createNoise3D(), []);

  const { geo, home } = useMemo(() => {
    const w = 13, h = 8;
    const cur = new Float32Array(COUNT * 3);
    const home = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const x = (Math.random() - 0.5) * w;
      const y = (Math.random() - 0.5) * h;
      const z = (Math.random() - 0.5) * 1.5;
      cur[i * 3] = home[i * 3] = x;
      cur[i * 3 + 1] = home[i * 3 + 1] = y;
      cur[i * 3 + 2] = home[i * 3 + 2] = z;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(cur, 3));
    return { geo: g, home };
  }, []);

  useEffect(() => () => geo.dispose(), [geo]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseNorm.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseNorm.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(({ clock, viewport }) => {
    const t = clock.elapsedTime * 0.11;
    const pos = geo.attributes.position.array as Float32Array;
    const mx = mouseNorm.current.x * viewport.width * 0.5;
    const my = mouseNorm.current.y * viewport.height * 0.5;

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      const hx = home[i3];
      const hy = home[i3 + 1];

      const nx = noise3D(hx * 0.2, hy * 0.2, t) * NOISE_AMP;
      const ny = noise3D(hx * 0.2 + 100, hy * 0.2 + 100, t) * NOISE_AMP;
      let tx = hx + nx;
      let ty = hy + ny;

      const dx = pos[i3] - mx;
      const dy = pos[i3 + 1] - my;
      const dSq = dx * dx + dy * dy;
      if (dSq < REPULSE_R2) {
        const d = Math.sqrt(dSq) + 0.001;
        const f = (1 - d / REPULSE_R) * 3.2;
        tx += (dx / d) * f;
        ty += (dy / d) * f;
      }

      pos[i3] += (tx - pos[i3]) * LERP;
      pos[i3 + 1] += (ty - pos[i3 + 1]) * LERP;
    }

    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points geometry={geo}>
      <pointsMaterial
        size={0.055}
        color="#ff9800"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export function HeroParticlesCanvas() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 7], fov: 50 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <ParticleField />
    </Canvas>
  );
}
