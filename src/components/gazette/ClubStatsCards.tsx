import React, { useEffect, useState } from "react";
import { ClipboardList, Globe2, Hourglass, Users } from "lucide-react";
import { getSiteStats, SiteStats } from "../../utils/siteStats";
import { getClubMembers } from "../../utils/memberStorage";

// Real figures only: the members directory plus the site counters already shown on the homepage
// (visits and membership applications). Nothing here is estimated or hardcoded.
export default function ClubStatsCards() {
  const [stats, setStats] = useState<SiteStats | null | undefined>(undefined); // undefined = loading
  const [members, setMembers] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;
    try {
      setMembers(getClubMembers().filter((m) => m.status === "Active").length);
    } catch {
      setMembers(null);
    }
    getSiteStats().then((s) => alive && setStats(s));
    return () => {
      alive = false;
    };
  }, []);

  const loading = stats === undefined;
  const live = !!stats && stats.configured;
  const n = (v: number | undefined) => (typeof v === "number" ? v.toLocaleString("en-US") : "—");
  const month = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Dhaka", month: "long" }).format(new Date());

  const cards = [
    { Icon: Users, label: "Club Members", value: members === null ? "—" : n(members), note: "Founding members in the directory", ready: members !== null },
    { Icon: Globe2, label: "Website Visits Today", value: live ? n(stats!.visitsToday) : "—", note: live ? `${n(stats!.visitsTotal)} in total` : "", ready: live },
    { Icon: ClipboardList, label: `Membership Applications · ${month}`, value: live ? n(stats!.applicationsThisMonth) : "—", note: "Submitted through the website", ready: live },
    { Icon: Hourglass, label: "Applications Under Review", value: live ? n(stats!.applicationsUnderReview) : "—", note: "Awaiting the Board's decision", ready: live },
  ];

  return (
    <section aria-label="Club statistics" className="bg-bg-primary px-4 sm:px-6 pt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {cards.map(({ Icon, label, value, note, ready }) => (
          <div key={label} className="bg-white border border-slate-200/80 rounded-sm shadow-sm p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
            <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-gold-dark" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-text-light font-semibold leading-tight">{label}</p>
              <p className={`font-display text-2xl sm:text-3xl text-text-dark tabular-nums leading-tight mt-1 ${loading ? "animate-pulse text-slate-300" : ""}`}>{loading ? "…" : value}</p>
              {!loading && (
                <p className="font-sans text-[10px] sm:text-[11px] text-text-light mt-0.5">{ready ? note : "Currently unavailable"}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
