// Client side of the site counters (see api/_lib/stats.ts).
// Each page load counts one website visit; repeat visits count too. Automated browsers
// (navigator.webdriver) only read the figures, so testing doesn't inflate them.
export interface SiteStats {
  configured: boolean;
  visitsToday: number;
  visitsTotal: number;
  applicationsThisMonth: number;
  applicationsTotal: number;
}

let pending: Promise<SiteStats | null> | null = null;

function request(method: "GET" | "POST"): Promise<SiteStats | null> {
  return fetch("/api/stats", {
    method,
    headers: method === "POST" ? { "Content-Type": "application/json" } : undefined,
    body: method === "POST" ? JSON.stringify({ event: "visit" }) : undefined,
  })
    .then((r) => (r.ok ? r.json() : null))
    .catch(() => null);
}

/** Call once when the site loads. */
export function recordVisitOnce(): void {
  if (pending) return;
  const automated = typeof navigator !== "undefined" && (navigator as any).webdriver;
  pending = request(automated ? "GET" : "POST");
}

/** Latest figures (reuses the visit request made on load). */
export function getSiteStats(): Promise<SiteStats | null> {
  if (!pending) pending = request("GET");
  return pending;
}
