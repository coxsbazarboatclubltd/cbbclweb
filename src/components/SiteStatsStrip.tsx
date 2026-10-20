import React, { useEffect, useState } from "react";
import { MEMBERSHIP_CATEGORIES } from "../membershipCategories";
import { getSiteStats, SiteStats } from "../utils/siteStats";

// Homepage figures. Visits and applications are real counts kept by the site (api/_lib/stats.ts);
// they show a dash until the counter store is connected. "Under review" rises with each new
// application and is lowered by the club as applications are decided.
export default function SiteStatsStrip() {
  const [stats, setStats] = useState<SiteStats | null>(null);

  useEffect(() => {
    let alive = true;
    getSiteStats().then((s) => alive && setStats(s));
    return () => {
      alive = false;
    };
  }, []);

  const ready = !!stats && stats.configured;
  const fmt = (n: number | undefined) => (ready && typeof n === "number" ? n.toLocaleString("en-US") : "—");
  const month = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Dhaka", month: "long" }).format(new Date());

  const items = [
    { label: "Website Visits Today", value: fmt(stats?.visitsToday), note: ready ? `${fmt(stats?.visitsTotal)} ${stats?.visitsTotal === 1 ? "visit" : "visits"} in total` : "" },
    { label: `New Applications · ${month}`, value: fmt(stats?.applicationsThisMonth), note: ready ? "Submitted this month" : "" },
    { label: "Applications Under Review", value: fmt(stats?.applicationsUnderReview), note: ready ? "Awaiting the Board's decision" : "" },
    { label: "Membership Categories", value: String(MEMBERSHIP_CATEGORIES.length), note: "Under the Articles of Association" },
  ];

  return (
    <section className="bg-navy-mid border-y border-navy-light py-10 px-6 text-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {items.map((it, i) => (
          <div key={it.label} className={`space-y-1.5 ${i > 0 ? "md:border-l border-slate-700/50" : ""} ${i % 2 === 1 ? "border-l md:border-l" : ""}`}>
            <span className="font-sans text-[9px] uppercase tracking-widest text-gold block">{it.label}</span>
            <span className="font-display text-2xl md:text-3xl text-white font-medium block tabular-nums">{it.value}</span>
            {it.note && <span className="font-sans text-[10px] text-slate-400 block">{it.note}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
