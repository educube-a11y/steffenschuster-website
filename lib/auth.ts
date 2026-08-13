import crypto from "crypto";

// ─── Credentials ─────────────────────────────────────────────────────────────
// Passwort via PBKDF2-SHA512 gehasht (100 000 Iterationen, 64 Byte)
// Klartext-Passwort wird NIRGENDWO gespeichert
const ADMIN_USER = "Steffen";
const PASS_SALT  = "steffenschuster2024salt";
const PASS_HASH  =
  "a3720e98417517a3b693549cfe9946bf06d6937ff766371854db637eebb5d7d5" +
  "4dfb7b76e8d6dfbc4c27dd6a598e8ec4159e534d2506d2d8736d5cbe284aa24f";

// ─── Session ─────────────────────────────────────────────────────────────────
const SECRET = process.env.AUTH_SECRET ?? "ss-blog-secret-please-change-in-prod";
export const COOKIE_NAME    = "ss-admin";
export const COOKIE_MAX_AGE = 7 * 24 * 60 * 60; // 7 Tage in Sekunden

/** Überprüft Benutzername + Passwort via Timing-Safe-Vergleich */
export function verifyCredentials(username: string, password: string): boolean {
  if (username !== ADMIN_USER) return false;
  const inputHash = crypto
    .pbkdf2Sync(password, PASS_SALT, 100_000, 64, "sha512")
    .toString("hex");
  try {
    return crypto.timingSafeEqual(
      Buffer.from(inputHash, "hex"),
      Buffer.from(PASS_HASH, "hex")
    );
  } catch {
    return false;
  }
}

/** Erstellt ein HMAC-gesichertes Session-Token (Base64) */
export function createSessionToken(): string {
  const ts  = Date.now().toString();
  const mac = crypto.createHmac("sha256", SECRET).update(ts).digest("hex");
  return Buffer.from(`${ts}.${mac}`).toString("base64");
}

/** Verifiziert ein Session-Token (inkl. Ablaufprüfung 7 Tage) */
export function verifySessionToken(token: string): boolean {
  try {
    const decoded  = Buffer.from(token, "base64").toString("utf-8");
    const lastDot  = decoded.lastIndexOf(".");
    if (lastDot === -1) return false;
    const ts  = decoded.slice(0, lastDot);
    const mac = decoded.slice(lastDot + 1);
    const age = Date.now() - parseInt(ts, 10);
    if (isNaN(age) || age < 0 || age > 7 * 24 * 60 * 60 * 1000) return false;
    const expected = crypto.createHmac("sha256", SECRET).update(ts).digest("hex");
    return crypto.timingSafeEqual(Buffer.from(mac, "hex"), Buffer.from(expected, "hex"));
  } catch {
    return false;
  }
}
