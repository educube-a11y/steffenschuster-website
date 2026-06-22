import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Steffen Schuster — Lernen neu denken. Mit KI.",
  description:
    "Pädagoge, KI-Pionier und Gestalter. Ich verbinde künstliche Intelligenz mit dem Lernen und entwickle die KI-Lernumgebung Nora-KI.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${dmSans.variable} ${jetbrains.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body style={{ margin: 0, WebkitFontSmoothing: "antialiased" }}>
        {children}
      </body>
    </html>
  );
}
