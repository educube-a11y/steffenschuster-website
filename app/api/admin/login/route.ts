import { NextResponse } from "next/server";
import crypto from "crypto";

function computeToken(): string {
  const secret = process.env.SESSION_SECRET ?? "dev-fallback-secret";
  return crypto
    .createHmac("sha256", secret)
    .update("admin:authenticated")
    .digest("hex");
}

export async function POST(request: Request) {
  const { username, password } = await request.json();

  const expectedUser = process.env.ADMIN_USERNAME ?? "Steffen";
  const expectedPass = process.env.ADMIN_PASSWORD;

  if (!expectedPass) {
    console.error("ADMIN_PASSWORD ist nicht als Umgebungsvariable gesetzt.");
    return NextResponse.json(
      { error: "Server nicht konfiguriert. Bitte ADMIN_PASSWORD setzen." },
      { status: 500 }
    );
  }

  if (username !== expectedUser || password !== expectedPass) {
    return NextResponse.json(
      { error: "Ungültige Zugangsdaten." },
      { status: 401 }
    );
  }

  const token = computeToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set("admin-session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 Tage
    path: "/",
  });
  return response;
}
