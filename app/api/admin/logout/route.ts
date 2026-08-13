import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME } from "@/lib/auth";

export async function POST(req: NextRequest) {
  // Redirect zur Login-Seite (funktioniert sowohl für Form-Submit als auch Fetch)
  const response = NextResponse.redirect(new URL("/admin", req.url));
  response.cookies.set(COOKIE_NAME, "", { maxAge: 0, path: "/" });
  return response;
}
