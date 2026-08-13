import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "ss-admin";
const SECRET = process.env.AUTH_SECRET ?? "ss-blog-secret-please-change-in-prod";

/** HMAC-Verifikation via Web Crypto API (Edge-Runtime-kompatibel) */
async function verifySession(token: string): Promise<boolean> {
  try {
    const decoded  = atob(token);
    const lastDot  = decoded.lastIndexOf(".");
    if (lastDot === -1) return false;

    const ts  = decoded.slice(0, lastDot);
    const mac = decoded.slice(lastDot + 1);

    const age = Date.now() - parseInt(ts, 10);
    if (isNaN(age) || age < 0 || age > 7 * 24 * 60 * 60 * 1000) return false;

    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      enc.encode(SECRET),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );
    const macBytes = Uint8Array.from(
      mac.match(/.{2}/g)?.map((b) => parseInt(b, 16)) ?? []
    );
    return await crypto.subtle.verify("HMAC", key, macBytes, enc.encode(ts));
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Login-Seite und Login-API immer durchlassen
  const isPublic =
    pathname === "/admin" ||
    pathname === "/admin/" ||
    pathname === "/api/admin/login";

  if (isPublic) return NextResponse.next();

  // Alle anderen /admin/* und /api/admin/* Routen schützen
  const needsAuth =
    pathname.startsWith("/admin/") ||
    pathname.startsWith("/api/admin/");

  if (needsAuth) {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (!token || !(await verifySession(token))) {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
      }
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
