"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

export function MainChrome() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return (
    <>
      <Footer />
      <CookieBanner />
    </>
  );
}
