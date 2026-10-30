// Shared input checks for the public form endpoints (membership nomination, contact inquiry):
// length limits, email/URL validation, a hidden honeypot field and per-IP / per-address rate limits.
import type { VercelRequest } from "@vercel/node";
import { rateLimit } from "./stats.js";

export class FormError extends Error {
  constructor(message: string, public status = 400) {
    super(message);
  }
}

/** Trimmed single-line text, cut to `max` characters (control characters removed). */
export function text(value: unknown, max: number): string {
  return (value ?? "").toString().replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

/** Trimmed multi-line text (line breaks kept), cut to `max` characters. */
export function multiline(value: unknown, max: number): string {
  return (value ?? "").toString().replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").replace(/\r\n?/g, "\n").trim().slice(0, max);
}

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;
export function isEmail(value: string): boolean {
  return value.length <= 254 && EMAIL_RE.test(value);
}

/** http(s) URL or ""; anything else (javascript:, data:, plain text) is rejected. */
export function webUrl(value: string): string | null {
  if (!value) return "";
  const withScheme = /^[a-z][a-z0-9+.-]*:/i.test(value) ? value : `https://${value}`;
  try {
    const u = new URL(withScheme);
    return u.protocol === "https:" || u.protocol === "http:" ? u.toString() : null;
  } catch {
    return null;
  }
}

export function clientIp(req: VercelRequest): string {
  const fwd = (req.headers["x-forwarded-for"] || "").toString().split(",")[0].trim();
  return fwd || (req.headers["x-real-ip"] || "").toString() || "unknown";
}

/**
 * Bots fill every field: a non-empty hidden "company_website" field means the submission is dropped.
 * Returns true when the request looks automated.
 */
export function isBot(body: Record<string, unknown>): boolean {
  return Boolean(body && typeof body.company_website === "string" && body.company_website.trim());
}

/** Throws a 429 FormError when this IP (or recipient address) has sent too many forms recently. */
export async function enforceLimits(form: string, req: VercelRequest, email: string) {
  const ip = clientIp(req);
  const [perIp, perEmail] = await Promise.all([
    rateLimit(`cbbcl:rl:${form}:ip:${ip}`, 5, 60 * 60),
    rateLimit(`cbbcl:rl:${form}:email:${email.toLowerCase()}`, 3, 24 * 60 * 60),
  ]);
  if (!perIp || !perEmail) {
    throw new FormError("Too many submissions. Please try again later or email the Club Secretariat directly.", 429);
  }
}
