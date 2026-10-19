import type { VercelRequest, VercelResponse } from "@vercel/node";
import { readStats, recordVisit } from "./_lib/stats.js";

// GET  /api/stats            -> current counters
// POST /api/stats {event:"visit"} -> count one website visit, then return the counters
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Cache-Control", "no-store");
  try {
    if (req.method === "POST") {
      const event = (req.body && req.body.event) || "";
      if (event !== "visit") return res.status(400).json({ error: "Unknown event." });
      return res.status(200).json(await recordVisit());
    }
    if (req.method === "GET") return res.status(200).json(await readStats());
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Method not allowed." });
  } catch (error: any) {
    console.error("Stats error:", error);
    return res.status(500).json({ error: "Stats unavailable." });
  }
}
