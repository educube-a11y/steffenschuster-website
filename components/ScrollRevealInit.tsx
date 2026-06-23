"use client";
import { useEffect } from "react";

export function ScrollRevealInit() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(52px)";
      el.style.filter = "blur(3px)";
      el.style.transition =
        "opacity 0.9s cubic-bezier(0.2,0.7,0.2,1), transform 0.9s cubic-bezier(0.2,0.7,0.2,1), filter 0.9s cubic-bezier(0.2,0.7,0.2,1)";
      el.style.willChange = "opacity, transform, filter";
    });

    const io = new IntersectionObserver(
      (entries) => {
        // Stagger elements that enter viewport in the same batch
        const intersecting = entries.filter((e) => e.isIntersecting);
        intersecting.forEach((entry, idx) => {
          const el = entry.target as HTMLElement;
          // 80ms stagger per element within a batch
          const delay = idx * 0.08;
          el.style.transitionDelay = `${delay}s`;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          el.style.filter = "blur(0px)";
          io.unobserve(el);
          // Remove delay after transition so future re-use is clean
          setTimeout(() => {
            el.style.transitionDelay = "";
            el.style.willChange = "auto";
          }, (delay + 0.9) * 1000);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
