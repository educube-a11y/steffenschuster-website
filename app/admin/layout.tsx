import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Steffen Schuster",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        minHeight: "100svh",
        background: "#080f17",
        color: "#dde8f2",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {children}
    </div>
  );
}
