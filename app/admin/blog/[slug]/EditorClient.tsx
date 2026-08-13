"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

const ACCENT = "#ff9800";

interface EditorClientProps {
  slug: string;
  initialContent: string;
}

export function EditorClient({ slug, initialContent }: EditorClientProps) {
  const router = useRouter();
  const [content, setContent] = useState(initialContent);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const isDirty = content !== initialContent;

  const handleSave = useCallback(async () => {
    setStatus("saving");
    setErrorMsg("");

    try {
      const res = await fetch(`/api/admin/save/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      if (res.ok) {
        setStatus("saved");
        // Nach 3s zurück zu "idle"
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        const data = await res.json();
        setErrorMsg(data.error ?? "Speichern fehlgeschlagen.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Netzwerkfehler beim Speichern.");
      setStatus("error");
    }
  }, [slug, content]);

  // Ctrl/Cmd+S shortcut
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        if (status !== "saving") handleSave();
      }
    },
    [handleSave, status]
  );

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  };

  return (
    <div
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        background: "#080f17",
        fontFamily: "var(--font-dm-sans), -apple-system, sans-serif",
        color: "#fff",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a
            href="/admin/dashboard"
            style={{
              color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
              fontSize: 13,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            ← Dashboard
          </a>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 13,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.05em",
            }}
          >
            {slug}.mdx
          </span>
          {isDirty && (
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: ACCENT,
                display: "inline-block",
                flexShrink: 0,
              }}
              title="Ungespeicherte Änderungen"
            />
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Status-Feedback */}
          {status === "saved" && (
            <span style={{ fontSize: 13, color: "#68d391" }}>✓ Gespeichert & live</span>
          )}
          {status === "error" && (
            <span style={{ fontSize: 13, color: "#f56565" }}>{errorMsg}</span>
          )}

          <a
            href={`/blog/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "8px 16px",
              borderRadius: 100,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "transparent",
              color: "rgba(255,255,255,0.65)",
              fontSize: 13,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            Artikel ansehen ↗
          </a>

          <button
            onClick={handleSave}
            disabled={status === "saving" || !isDirty}
            style={{
              padding: "9px 22px",
              borderRadius: 100,
              border: "none",
              background:
                status === "saving" || !isDirty
                  ? "rgba(255,152,0,0.35)"
                  : ACCENT,
              color: "#16212e",
              fontSize: 14,
              fontWeight: 700,
              cursor: status === "saving" || !isDirty ? "not-allowed" : "pointer",
              fontFamily: "inherit",
              transition: "background 0.2s",
            }}
          >
            {status === "saving" ? "Speichert…" : "Speichern"}
          </button>

          <button
            onClick={handleLogout}
            style={{
              padding: "8px 14px",
              borderRadius: 100,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "transparent",
              color: "rgba(255,255,255,0.4)",
              fontSize: 12,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Abmelden
          </button>
        </div>
      </header>

      {/* Hinweis */}
      <div
        style={{
          padding: "10px 24px",
          background: "rgba(255,152,0,0.07)",
          borderBottom: "1px solid rgba(255,152,0,0.15)",
          fontSize: 12,
          color: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }}
      >
        MDX-Editor · Tipp: <kbd style={{ background: "rgba(255,255,255,0.1)", padding: "1px 5px", borderRadius: 3 }}>⌘S</kbd> speichert direkt · Änderungen sind sofort live ohne Deploy
      </div>

      {/* Editor */}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        style={{
          flex: 1,
          width: "100%",
          padding: "32px 40px",
          background: "#0a1520",
          color: "#d4e4f5",
          border: "none",
          outline: "none",
          resize: "none",
          fontSize: 14,
          lineHeight: 1.75,
          fontFamily: "var(--font-jetbrains), 'Fira Code', 'Cascadia Code', Consolas, monospace",
          boxSizing: "border-box",
          tabSize: 2,
        }}
        placeholder="MDX-Inhalt hier eingeben…"
      />

      {/* Footer-Leiste */}
      <div
        style={{
          padding: "8px 24px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.02)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 11,
          color: "rgba(255,255,255,0.25)",
          flexShrink: 0,
        }}
      >
        <span>
          {content.length.toLocaleString("de")} Zeichen ·{" "}
          {content.split(/\n/).length.toLocaleString("de")} Zeilen ·{" "}
          {content.split(/\s+/).filter(Boolean).length.toLocaleString("de")} Wörter
        </span>
        <span>steffenschuster.de/blog/{slug}</span>
      </div>
    </div>
  );
}
