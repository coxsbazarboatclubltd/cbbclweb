// Real site counters kept in Upstash Redis (connect it from Vercel → Storage → Upstash for Redis).
// Without the store configured every call is a no-op and readStats() reports configured: false.
//   - website visits: every page load counts (repeat visits too), per day and all-time
//   - applications: counted when a membership application is successfully submitted
//   - under review: +1 per new application; the club lowers it as applications are decided
//     (Upstash console: DECRBY cbbcl:applications:review <n>)
const URL_ = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || "";
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || "";

const K = {
  visitsTotal: "cbbcl:visits:total",
  visitsDay: (d: string) => `cbbcl:visits:day:${d}`,
  appsTotal: "cbbcl:applications:total",
  appsMonth: (m: string) => `cbbcl:applications:month:${m}`,
  appsReview: "cbbcl:applications:review",
};

export function statsConfigured(): boolean {
  return Boolean(URL_ && TOKEN);
}

// Calendar day and month in Bangladesh time, so "today" matches the club's day.
function dhakaDate(): { day: string; month: string } {
  const day = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dhaka", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  return { day, month: day.slice(0, 7) };
}

async function pipeline(commands: (string | number)[][]): Promise<any[]> {
  const res = await fetch(`${URL_}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(commands),
  });
  if (!res.ok) throw new Error(`Upstash ${res.status}`);
  const out = (await res.json()) as { result?: any; error?: string }[];
  return out.map((r) => r.result);
}

export interface SiteStats {
  configured: boolean;
  visitsToday: number;
  visitsTotal: number;
  applicationsThisMonth: number;
  applicationsTotal: number;
  applicationsUnderReview: number;
}

const EMPTY: SiteStats = { configured: false, visitsToday: 0, visitsTotal: 0, applicationsThisMonth: 0, applicationsTotal: 0, applicationsUnderReview: 0 };

export async function readStats(): Promise<SiteStats> {
  if (!statsConfigured()) return EMPTY;
  const { day, month } = dhakaDate();
  const [vd, vt, am, at, ar] = await pipeline([["GET", K.visitsDay(day)], ["GET", K.visitsTotal], ["GET", K.appsMonth(month)], ["GET", K.appsTotal], ["GET", K.appsReview]]);
  return { configured: true, visitsToday: Number(vd) || 0, visitsTotal: Number(vt) || 0, applicationsThisMonth: Number(am) || 0, applicationsTotal: Number(at) || 0, applicationsUnderReview: Number(ar) || 0 };
}

export async function recordVisit(): Promise<SiteStats> {
  if (!statsConfigured()) return EMPTY;
  const { day, month } = dhakaDate();
  const [vd, , vt, am, at, ar] = await pipeline([
    ["INCR", K.visitsDay(day)],
    ["EXPIRE", K.visitsDay(day), 60 * 60 * 24 * 120],
    ["INCR", K.visitsTotal],
    ["GET", K.appsMonth(month)],
    ["GET", K.appsTotal],
    ["GET", K.appsReview],
  ]);
  return { configured: true, visitsToday: Number(vd) || 0, visitsTotal: Number(vt) || 0, applicationsThisMonth: Number(am) || 0, applicationsTotal: Number(at) || 0, applicationsUnderReview: Number(ar) || 0 };
}

export async function recordApplication(): Promise<void> {
  if (!statsConfigured()) return;
  const { month } = dhakaDate();
  try {
    await pipeline([["INCR", K.appsMonth(month)], ["INCR", K.appsTotal], ["INCR", K.appsReview]]);
  } catch (e) {
    // Counting must never fail an application that was already emailed successfully.
    console.error("Application counter not updated:", e);
  }
}

/**
 * Fixed-window rate limit: true while `key` has been used at most `limit` times in `windowSec`.
 * Without the store configured (or if it is unreachable) requests are allowed, so forms keep working.
 */
export async function rateLimit(key: string, limit: number, windowSec: number): Promise<boolean> {
  if (!statsConfigured()) return true;
  try {
    const [count] = await pipeline([["INCR", key], ["EXPIRE", key, windowSec, "NX"]]);
    return Number(count) <= limit;
  } catch (e) {
    console.error("Rate limit check failed:", e);
    return true;
  }
}
