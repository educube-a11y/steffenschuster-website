"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// SVG path: analog (organic curves) → digital (straightens) — fixed overlay
// viewBox 0 0 100 100, draws across viewport as user scrolls the content
const PATH_D =
  "M 8 5 C 12 18, 4 28, 9 42 C 14 56, 3 65, 8 78 C 13 88, 6 93, 8 98";

export function ScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // ── 1. SVG journey path: stroke-dashoffset scrubbed with scroll ──────
      const path = document.getElementById(
        "ss-journey-path"
      ) as SVGPathElement | null;
      if (path) {
        const len = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: len,
          strokeDashoffset: len,
          visibility: "visible",
        });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#nora",
            start: "top 70%",
            endTrigger: "#referenzen",
            end: "bottom 40%",
            scrub: 1.5,
          },
        });
      }

      // ── 2. Portrait parallax (image moves inside overflow:hidden container) ─
      const portraitImg = document.querySelector<HTMLElement>(
        "[data-parallax-portrait] img"
      );
      if (portraitImg) {
        gsap.set(portraitImg, { scale: 1.12, transformOrigin: "center top" });
        gsap.to(portraitImg, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: "#philosophie",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // ── 3. nextclassroom image parallax ────────────────────────────────────
      const classroomImg = document.querySelector<HTMLElement>(
        "[data-parallax-classroom] img"
      );
      if (classroomImg) {
        gsap.set(classroomImg, { scale: 1.1, transformOrigin: "center center" });
        gsap.to(classroomImg, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: "#meilensteine",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // ── 4. Award hero panorama: slower scroll speed ─────────────────────────
      const awardImg = document.querySelector<HTMLElement>(
        "[data-parallax-award] img"
      );
      if (awardImg) {
        gsap.set(awardImg, { scale: 1.08, transformOrigin: "center 30%" });
        gsap.to(awardImg, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-parallax-award]",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // ── 5. Milestone cards: staggered entry (y + opacity via GSAP autoAlpha) ─
      const milestoneGrid = document.querySelector("[data-milestone-grid]");
      const milestoneCards = document.querySelectorAll<HTMLElement>(
        "[data-milestone-card]"
      );
      if (milestoneGrid && milestoneCards.length) {
        // Pre-hide with autoAlpha so there's no flash before GSAP init
        gsap.set(milestoneCards, { autoAlpha: 0, y: 28 });
        gsap.to(milestoneCards, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.13,
          ease: "power2.out",
          scrollTrigger: {
            trigger: milestoneGrid,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  // Decorative journey path SVG (fixed, behind content)
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 5,
        overflow: "visible",
      }}
      aria-hidden="true"
    >
      <path
        id="ss-journey-path"
        d={PATH_D}
        fill="none"
        stroke="#ff9800"
        strokeWidth="0.22"
        strokeLinecap="round"
        opacity="0.45"
        style={{ visibility: "hidden" }}
      />
    </svg>
  );
}
