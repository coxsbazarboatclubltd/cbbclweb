import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Megaphone, Pause, Play } from "lucide-react";
import { RoutePath } from "../../types";
import { activeAnnouncements } from "../../content/clubLife";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const ROTATE_MS = 7000;

// One notice at a time from the code-managed announcements list; hidden when none are live.
export default function AnnouncementTicker({ navigate }: { navigate: (path: RoutePath) => void }) {
  const items = activeAnnouncements();
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const multiple = items.length > 1;
  const autoplay = multiple && !paused && !hovered && !reducedMotion;

  // Sticks below the header; publishes its height as --ticker-h for the Gazette toolbar underneath.
  const barRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = barRef.current;
    const root = document.documentElement.style;
    if (!el || typeof ResizeObserver === "undefined") return;
    const publish = () => root.setProperty("--ticker-h", `${el.offsetHeight}px`);
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(el);
    return () => { ro.disconnect(); root.removeProperty("--ticker-h"); };
  }, [items.length > 0]);

  useEffect(() => {
    if (!autoplay) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % items.length), ROTATE_MS);
    return () => window.clearInterval(t);
  }, [autoplay, items.length]);

  if (items.length === 0) return null;
  const item = items[index % items.length];
  const go = (d: number) => setIndex((i) => (i + d + items.length) % items.length);

  const open = () => {
    if (!item.link) return;
    if (item.link.startsWith("/")) navigate(item.link as RoutePath);
    else window.open(item.link, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={barRef}
      aria-label="Latest announcements"
      className="sticky z-40 bg-navy-mid border-b border-gold/30 text-slate-100 shadow-md"
      style={{ top: "var(--header-h, 116px)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-center gap-3 sm:gap-4">
        <span className="shrink-0 inline-flex items-center gap-2 bg-gold text-navy px-3 py-1 rounded-sm font-sans text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
          <Megaphone className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="hidden sm:inline">Latest</span>
        </span>
        <p aria-live="polite" className="min-w-0 text-center font-sans text-xs sm:text-[13px] font-light leading-snug">
          <span key={item.id} className="inline">{item.text}</span>
          {item.link && (
            <button
              type="button"
              onClick={open}
              className="ml-2 text-gold hover:text-gold-light underline underline-offset-2 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded-sm"
            >
              {item.linkLabel || "Learn more"}
            </button>
          )}
        </p>
        {multiple && (
          <div className="shrink-0 flex items-center gap-1">
            <span className="hidden sm:inline font-sans text-[10px] text-slate-400 tabular-nums mr-1">{(index % items.length) + 1}/{items.length}</span>
            {[
              { label: "Previous announcement", onClick: () => go(-1), Icon: ChevronLeft },
              { label: paused ? "Resume announcements" : "Pause announcements", onClick: () => setPaused((p) => !p), Icon: paused ? Play : Pause },
              { label: "Next announcement", onClick: () => go(1), Icon: ChevronRight },
            ].map(({ label, onClick, Icon }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                onClick={onClick}
                className="w-7 h-7 rounded-full border border-white/15 hover:border-gold hover:text-gold flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              >
                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
