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

const SITE_URL = "https://www.steffenschuster.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Steffen Schuster — Lernen neu denken. Mit KI.",
  description:
    "Pädagoge, KI-Pionier und Gestalter aus Hamburg. Ich verbinde künstliche Intelligenz mit dem Lernen und entwickle die KI-Lernumgebung Nora-KI.",
  keywords: [
    "KI-Beratung",
    "KI-Training",
    "Bildung",
    "Pädagoge",
    "Künstliche Intelligenz",
    "Lernumgebung",
    "Hamburg",
    "Nora-KI",
    "next:classroom",
    "E-Learning",
    "Organisationsentwicklung",
  ],
  authors: [{ name: "Steffen Schuster", url: SITE_URL }],
  creator: "Steffen Schuster",
  publisher: "Steffen Schuster",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Steffen Schuster",
    title: "Steffen Schuster — Lernen neu denken. Mit KI.",
    description:
      "Pädagoge, KI-Pionier und Gestalter aus Hamburg. KI-Training, Lernumgebungen, Facilitation und Organisationsentwicklung.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Steffen Schuster — Lernen neu denken. Mit KI.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steffen Schuster — Lernen neu denken. Mit KI.",
    description:
      "Pädagoge, KI-Pionier und Gestalter aus Hamburg. KI-Training, Lernumgebungen, Facilitation und Organisationsentwicklung.",
    images: ["/opengraph-image"],
    creator: "@steffenschuster",
  },
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
      {/* Runs before first paint: prevents flash of wrong theme */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=(s==='dark'||(s===null&&d))?'dark':'light';}catch(e){}})();`,
        }}
      />
      <body style={{ margin: 0, WebkitFontSmoothing: "antialiased" }}>
        {children}
      </body>
    </html>
  );
}
