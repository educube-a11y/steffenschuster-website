import { NextRequest, NextResponse } from "next/server";
import { verifyCredentials, createSessionToken, COOKIE_NAME, COOKIE_MAX_AGE } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!verifyCredentials(username, password)) {
    return NextResponse.json(
      { error: "Benutzername oder Passwort falsch." },
      { status: 401 }
    );
  }

  const token = createSessionToken();
  const response = NextResponse.json({ ok: true });

  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });

  return response;
}
