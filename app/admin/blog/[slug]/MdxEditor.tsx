"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";

const ACCENT = "#ff9800";

interface Props {
  slug: string;
  initialContent: string;
}

type SaveState = "idle" | "saving" | "success" | "error";

export default function MdxEditor({ slug, initialContent }: Props) {
  const [content, setContent] = useState(initialContent);
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isDirty = content !== initialContent;

  const save = useCallback(async () => {
    setSaveState("saving");
    setMessage("");

    try {
      const res = await fetch(`/api/admin/articles/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      const data = await res.json();

      if (res.ok) {
        setSaveState("success");
        setMessage(data.message ?? "Gespeichert.");
      } else {
        setSaveState("error");
        setMessage(data.error ?? "Speichern fehlgeschlagen.");
      }
    } catch {
      setSaveState("error");
      setMessage("Netzwerkfehler — bitte erneut versuchen.");
    }
  }, [content, slug]);

  // Ctrl+S / Cmd+S
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        save();
      }
      // Tab → 2 Leerzeichen einsetzen
      if (e.key === "Tab") {
        e.preventDefault();
        const ta = textareaRef.current!;
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        const next = content.substring(0, start) + "  " + content.substring(end);
        setContent(next);
        requestAnimationFrame(() => {
          ta.selectionStart = ta.selectionEnd = start + 2;
        });
      }
    },
    [save, content]
  );

  const statusColor =
    saveState === "success"
      ? "#4ade80"
      : saveState === "error"
      ? "#f87171"
      : "rgba(255,255,255,0.4)";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100svh",
        overflow: "hidden",
      }}
    >
      {/* Toolbar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 20px",
          height: 56,
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          background: "#080f17",
          flexShrink: 0,
        }}
      >
        <Link
          href="/admin"
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.35)",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          ← Übersicht
        </Link>

        <div
          style={{
            flex: 1,
            fontSize: 14,
            fontWeight: 600,
            color: "rgba(255,255,255,0.8)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {slug}.mdx
        </div>

        {/* Status */}
        {message && (
          <span
            style={{
              fontSize: 13,
              color: statusColor,
              flexShrink: 0,
              maxWidth: 260,
              textAlign: "right",
            }}
          >
            {message}
          </span>
        )}

        {/* Unsaved indicator */}
        {isDirty && saveState !== "saving" && (
          <span
            title="Ungespeicherte Änderungen"
          style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: ACCENT,
              flexShrink: 0,
            }}
          />
        )}

        <button
          onClick={save}
          disabled={saveState === "saving" || !isDirty}
          style={{
            padding: "7px 20px",
            borderRadius: 100,
            background:
              saveState === "saving" || !isDirty
                ? "rgba(255,152,0,0.3)"
                : ACCENT,
            color:
              saveState === "saving" || !isDirty
                ? "rgba(255,255,255,0.4)"
                : "#16212e",
            fontSize: 13,
            fontWeight: 700,
            border: "none",
            cursor:
              saveState === "saving" || !isDirty ? "not-allowed" : "pointer",
            fontFamily: "inherit",
            flexShrink: 0,
            transition: "background 0.2s",
          }}
        >
          {saveState === "saving" ? "Speichert…" : "Speichern"}
        </button>
      </div>

      {/* Editor */}
      <textarea
        ref={textareaRef}
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          setSaveState("idle");
          setMessage("");
        }}
        onKeyDown={handleKeyDown}
        spellCheck={false}
        style={{
          flex: 1,
          resize: "none",
          border: "none",
          outline: "none",
          background: "#0a1725",
          color: "#c9d8e8",
          fontSize: 14,
          lineHeight: 1.7,
          fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace",
          padding: "28px 32px",
          tabSize: 2,
        }}
      />

      {/* Footer */}
      <div
        style={{
          height: 28,
          background: "#080f17",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          paddingInline: 20,
          gap: 20,
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
          {content.length} Zeichen · {content.split("\n").length} Zeilen
        </span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
          Cmd+S zum Speichern
        </span>
        <Link
          href={`/blog/${slug}`}
          target="_blank"
          style={{
            marginLeft: "auto",
            fontSize: 11,
            color: "rgba(255,255,255,0.2)",
            textDecoration: "none",
          }}
        >
          Vorschau öffnen ↗
        </Link>
      </div>
    </div>
  );
}
