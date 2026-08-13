"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogoMark } from "@/components/LogoMark";

const ACCENT = "#ff9800";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      const data = await res.json();
      setError(data.error ?? "Anmeldung fehlgeschlagen.");
      setLoading(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 10,
    color: "#fff",
    fontSize: 15,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <div
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#080f17",
        padding: "24px",
        fontFamily: "var(--font-dm-sans), -apple-system, sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: 380 }}>
        {/* Logo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <LogoMark size={44} />
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: 13,
            fontFamily: "var(--font-jetbrains), monospace",
            letterSpacing: "0.15em",
            color: ACCENT,
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          Admin
        </p>
        <h1
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 32,
            fontWeight: 500,
            color: "#fff",
            textAlign: "center",
            margin: "0 0 36px",
          }}
        >
          Anmelden
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <div>
            <label
              htmlFor="username"
              style={{
                display: "block",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginBottom: 8,
              }}
            >
              Benutzername
            </label>
            <input
              id="username"
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = ACCENT)}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              style={{
                display: "block",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginBottom: 8,
              }}
            >
              Passwort
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = ACCENT)}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
            />
          </div>

          {error && (
            <p
              style={{
                fontSize: 14,
                color: "#f56565",
                background: "rgba(245,101,101,0.1)",
                border: "1px solid rgba(245,101,101,0.2)",
                borderRadius: 8,
                padding: "10px 14px",
                margin: 0,
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: 8,
              padding: "14px",
              borderRadius: 100,
              border: "none",
              background: loading ? "rgba(255,152,0,0.5)" : ACCENT,
              color: "#16212e",
              fontSize: 15,
              fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              fontFamily: "inherit",
              transition: "background 0.2s",
            }}
          >
            {loading ? "Anmelden…" : "Anmelden →"}
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: 40,
            fontSize: 12,
            color: "rgba(255,255,255,0.18)",
          }}
        >
          Diese Seite ist nicht öffentlich zugänglich.
        </p>
      </div>
    </div>
  );
}
