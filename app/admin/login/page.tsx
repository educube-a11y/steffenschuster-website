"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { LogoMark } from "@/components/LogoMark";

const ACCENT = "#ff9800";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error ?? "Login fehlgeschlagen.");
      }
    } catch {
      setError("Netzwerkfehler — bitte erneut versuchen.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 380 }}>
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 40,
            justifyContent: "center",
          }}
        >
          <LogoMark size={32} />
          <span
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: 20,
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "0.5px",
            }}
          >
            Admin
          </span>
        </div>

        {/* Formular */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: "36px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: 22,
              fontWeight: 600,
              color: "#fff",
              textAlign: "center",
            }}
          >
            Anmelden
          </h1>

          {error && (
            <p
              style={{
                margin: 0,
                padding: "10px 14px",
                borderRadius: 8,
                background: "rgba(220,50,50,0.15)",
                border: "1px solid rgba(220,50,50,0.3)",
                color: "#f87171",
                fontSize: 14,
              }}
            >
              {error}
            </p>
          )}

          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Benutzername
            </span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 8,
                padding: "12px 14px",
                fontSize: 15,
                color: "#fff",
                outline: "none",
                fontFamily: "inherit",
              }}
            />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Passwort
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 8,
                padding: "12px 14px",
                fontSize: 15,
                color: "#fff",
                outline: "none",
                fontFamily: "inherit",
              }}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: 4,
              padding: "13px 24px",
              borderRadius: 100,
              background: loading ? "rgba(255,152,0,0.5)" : ACCENT,
              color: "#16212e",
              fontSize: 15,
              fontWeight: 700,
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              fontFamily: "inherit",
              transition: "opacity 0.2s",
            }}
          >
            {loading ? "Wird angemeldet…" : "Anmelden"}
          </button>
        </form>

        <p style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.2)", marginTop: 24 }}>
          Diese Seite ist nicht öffentlich zugänglich.
        </p>
      </div>
    </div>
  );
}
