import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

async function getExpectedToken(): Promise<string> {
  const secret = process.env.SESSION_SECRET ?? "dev-fallback-secret";
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode("admin:authenticated")
  );
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAdminPage = pathname.startsWith("/admin");
  const isAdminApi = pathname.startsWith("/api/admin");

  if (!isAdminPage && !isAdminApi) return NextResponse.next();

  // Login-Endpunkte freigeben
  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    return NextResponse.next();
  }

  const session = request.cookies.get("admin-session")?.value;
  const expected = await getExpectedToken();

  if (!session || session !== expected) {
    if (isAdminApi) {
      return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
    }
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
