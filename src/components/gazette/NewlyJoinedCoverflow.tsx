import React, { useEffect, useMemo, useRef, useState } from "react";
import { Anchor, ArrowRight, Calendar, ChevronLeft, ChevronRight, Facebook, Globe, Instagram, Landmark, Linkedin, Twitter } from "lucide-react";
import { Director, RoutePath } from "../../types";
import { getBoardMembers, getDirectorPortrait } from "../../utils/storage";
import { NEWLY_JOINED_DIRECTOR_IDS } from "../../content/clubLife";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import CardMedia from "../CardMedia";

const ROTATE_MS = 6000;

/** A notice, event or news post shown as a card beside the member cards. */
export type FeedCard = {
  key: string; path: string; category: string; date: string; title: string; excerpt: string; cta: string;
  image?: string; imagePosition?: string; empty?: "event";
};

type Slide = { kind: "member"; key: string; d: Director } | { kind: "feed"; key: string; f: FeedCard };

// Only links the director submitted (no placeholder profiles).
function socialLinks(d: Director) {
  if (!d.profileSubmitted) return [];
  return ([
    ["linkedin", d.socials?.linkedin, Linkedin, "LinkedIn"],
    ["facebook", d.socials?.facebook, Facebook, "Facebook"],
    ["twitter", d.socials?.twitter, Twitter, "X / Twitter"],
    ["instagram", d.socials?.instagram, Instagram, "Instagram"],
    ["fbcci", d.socials?.fbcci, Landmark, "FBCCI"],
    ["website", d.socials?.website, Globe, "Website"],
  ] as const).filter(([, url]) => !!url) as unknown as [string, string, typeof Globe, string][];
}

// Homepage 3D coverflow: club notices and events first, then the newly joined members
// (styled like the profile page card), then news posts.
export default function NewlyJoinedCoverflow({ navigate, lead = [], news = [] }: { navigate: (path: RoutePath) => void; lead?: FeedCard[]; news?: FeedCard[] }) {
  const slides = useMemo<Slide[]>(() => {
    const list = getBoardMembers();
    const members = NEWLY_JOINED_DIRECTOR_IDS.map((id) => list.find((d) => d.id === id)).filter(Boolean) as Director[];
    return [
      ...lead.map((f) => ({ kind: "feed" as const, key: f.key, f })),
      ...members.map((d) => ({ kind: "member" as const, key: `member-${d.id}`, d })),
      ...news.map((f) => ({ kind: "feed" as const, key: f.key, f })),
    ];
  }, [lead, news]);
  const n = slides.length;

  const wrapRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1000);
  const [active, setActive] = useState(0);
  // Rotation stops while a mouse is over the cards, a finger is on them, or a keyboard user is inside.
  const [hover, setHover] = useState(false);
  const [touching, setTouching] = useState(false);
  const [keyFocus, setKeyFocus] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => setWidth(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (active > n - 1) setActive(0);
  }, [n, active]);

  const autoplay = n > 1 && !hover && !touching && !keyFocus && !reducedMotion;
  // Restarts after every change, so a manual move always gets a full interval before the next turn.
  useEffect(() => {
    if (!autoplay) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % n), ROTATE_MS);
    return () => window.clearTimeout(t);
  }, [autoplay, n, active]);

  const go = (d: number) => setActive((a) => (a + d + n) % n);

  const startX = useRef<number | null>(null);
  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    if (e.pointerType !== "mouse") setTouching(true);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") setTouching(false);
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  if (n === 0) return null;

  // Shortest signed distance from the active card (wraps around when there are 3 or more).
  const offsetOf = (i: number) => {
    let o = i - active;
    if (n > 2) {
      if (o > n / 2) o -= n;
      if (o < -n / 2) o += n;
    }
    return o;
  };
  const spacing = Math.min(230, width * 0.3);

  const controlCls = "w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-300 bg-white/95 shadow-md text-navy hover:border-gold hover:text-gold-dark flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold";
  const ctaCls = "font-sans text-[10px] uppercase tracking-widest font-bold text-navy hover:text-gold-dark inline-flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded-sm";

  const renderMember = (d: Director, isActive: boolean) => {
    const links = socialLinks(d);
    return (
      <>
        <span className="font-sans text-[9px] uppercase tracking-widest text-gold-dark font-semibold">Newly Joined</span>
        <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full border border-gold overflow-hidden bg-navy">
          <img src={getDirectorPortrait(d)} alt={d.photoAlt || d.name} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <h3 className="font-display text-lg text-text-dark leading-tight">{d.name}</h3>
        <div className="border-t border-slate-100 pt-4 space-y-2.5 font-sans text-xs text-left">
          {d.memberNumber && (
            <div className="flex justify-between gap-3 border-b border-slate-50 pb-2">
              <span className="text-slate-400 font-light">Member No.:</span>
              <span className="text-gold-dark font-mono font-semibold">{d.memberNumber}</span>
            </div>
          )}
          <div className="flex justify-between gap-3">
            <span className="text-slate-400 font-light">Designation:</span>
            <span className="text-navy font-semibold text-right">{d.designation}</span>
          </div>
        </div>
        {links.length > 0 && (
          <div className="border-t border-slate-100 pt-4">
            <span className="block text-[9px] font-sans text-slate-400 font-bold uppercase tracking-widest mb-3">Social Registries</span>
            <div className="flex flex-wrap justify-center gap-3">
              {links.map(([key, url, Icon, label]) =>
                /^https?:\/\//i.test(url) ? (
                  <a key={key} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} tabIndex={isActive ? 0 : -1} onClick={(e) => e.stopPropagation()} className="p-2 border border-slate-200 hover:border-navy text-slate-600 hover:text-navy rounded-full transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ) : (
                  <span key={key} role="img" title={`${label}: ${url}`} aria-label={`${label}: ${url}`} className="p-2 border border-slate-200 text-slate-600 rounded-full">
                    <Icon className="w-4 h-4" />
                  </span>
                )
              )}
            </div>
          </div>
        )}
        <div className="mt-auto pt-2">
          <button type="button" tabIndex={isActive ? 0 : -1} onClick={(e) => { e.stopPropagation(); navigate(`/board/${d.id}` as RoutePath); }} className={ctaCls}>
            View Profile <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </>
    );
  };

  const renderFeed = (f: FeedCard, isActive: boolean) => (
    <>
      <div className="flex flex-wrap justify-between items-center gap-x-2 gap-y-1 text-[10px] font-sans tracking-wider whitespace-nowrap">
        <span className="text-gold uppercase font-semibold flex items-center gap-1"><Anchor className="w-3 h-3 text-gold-dark shrink-0" />{f.category}</span>
        <span className="text-slate-400 font-light flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-slate-300" />{f.date}</span>
      </div>
      <h3 className="font-display text-lg text-text-dark leading-snug text-left line-clamp-2">{f.title}</h3>
      <div className="h-40 overflow-hidden rounded-xs bg-navy flex items-center justify-center">
        {f.image
          ? <CardMedia media={f.image} objectPosition={f.imagePosition} alt={f.title} className="w-full h-full object-cover" />
          : f.empty === "event" ? <Calendar className="w-9 h-9 text-gold/60" /> : <Anchor className="w-9 h-9 text-gold/60" />}
      </div>
      <p className="font-sans text-[11px] text-text-body font-light leading-relaxed text-left line-clamp-4">{f.excerpt}</p>
      <div className="mt-auto pt-4 border-t border-slate-100 text-left">
        <button type="button" tabIndex={isActive ? 0 : -1} onClick={(e) => { e.stopPropagation(); navigate(f.path as RoutePath); }} className={ctaCls}>
          {f.cta} <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </>
  );

  return (
    <section aria-roledescription="carousel" aria-label="Club announcements, news and newly joined members" className="space-y-4">
      <div className="relative">
      <div
        ref={wrapRef}
        className="relative grid overflow-hidden py-4"
        style={{ perspective: "1200px", touchAction: "pan-y" }}
        onPointerEnter={(e) => { if (e.pointerType === "mouse") setHover(true); }}
        onPointerLeave={(e) => { if (e.pointerType === "mouse") setHover(false); }}
        onFocusCapture={(e) => setKeyFocus((e.target as HTMLElement).matches(":focus-visible"))}
        onBlurCapture={() => setKeyFocus(false)}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => setTouching(false)}
        onKeyDown={(e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); }}
      >
        {slides.map((s, i) => {
          const o = offsetOf(i);
          const isActive = o === 0;
          const hidden = Math.abs(o) > 2;
          return (
            <article
              key={s.key}
              aria-hidden={!isActive}
              onClick={() => { if (!isActive) setActive(i); }}
              className={`[grid-area:1/1] justify-self-center w-[270px] sm:w-[290px] flex flex-col gap-4 bg-white border shadow-lg rounded-sm text-center p-6 ${s.kind === "member" ? "border-gold" : "border-slate-200"} ${reducedMotion ? "" : "transition-all duration-700 ease-out"} ${isActive ? "" : "cursor-pointer"}`}
              style={{
                transform: `translateX(${o * spacing}px) rotateY(${o * -35}deg) scale(${isActive ? 1 : Math.abs(o) === 1 ? 0.82 : 0.68})`,
                zIndex: 10 - Math.abs(o),
                opacity: hidden ? 0 : isActive ? 1 : Math.abs(o) === 1 ? 0.6 : 0.35,
                filter: isActive ? "none" : "saturate(0.6)",
                pointerEvents: hidden ? "none" : "auto",
              }}
            >
              {s.kind === "member" ? renderMember(s.d, isActive) : renderFeed(s.f, isActive)}
            </article>
          );
        })}
      </div>
        {/* Arrows sit on either side of the card stack */}
        {n > 1 && (
          <>
            <button type="button" aria-label="Previous card" onClick={() => go(-1)} className={`${controlCls} absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20`}><ChevronLeft className="w-5 h-5" /></button>
            <button type="button" aria-label="Next card" onClick={() => go(1)} className={`${controlCls} absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20`}><ChevronRight className="w-5 h-5" /></button>
          </>
        )}
      </div>

      {n > 1 && (
        <div className="flex justify-center">
          <div className="flex gap-2" role="group" aria-label="Choose card">
            {slides.map((s, i) => (
              <button
                key={s.key}
                type="button"
                aria-label={`Show card ${i + 1} of ${n}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${i === active ? "w-6 bg-gold" : "w-2 bg-slate-300 hover:bg-slate-400"}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
