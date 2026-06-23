"use client";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  "data-reveal"?: boolean;
}

const SPRING = { stiffness: 200, damping: 24, mass: 0.6 };
const MAX_TILT = 9;

export function TiltCard({ children, style, className, ...rest }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]),
    SPRING
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]),
    SPRING
  );

  // Gloss highlight follows mouse position
  const glossX = useTransform(mouseX, [-0.5, 0.5], [15, 85]);
  const glossY = useTransform(mouseY, [-0.5, 0.5], [15, 85]);
  const glossBg = useMotionTemplate`radial-gradient(circle at ${glossX}% ${glossY}%, rgba(255,255,255,0.14) 0%, transparent 60%)`;

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  if (reduced) {
    return (
      <div ref={cardRef} style={style} className={className} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        willChange: "transform",
        position: "relative",
        ...style,
      }}
      className={className}
      {...(rest as Record<string, unknown>)}
    >
      {/* Gloss highlight */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          background: glossBg,
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
      {children}
    </motion.div>
  );
}
