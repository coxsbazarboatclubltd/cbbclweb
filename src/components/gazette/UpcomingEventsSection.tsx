import React, { useMemo } from "react";
import { ArrowRight, CalendarDays, CalendarX2, Clock, MapPin } from "lucide-react";
import { EventItem, RoutePath } from "../../types";
import { getCMSEvents } from "../../utils/cmsStorage";
import { clubToday } from "../../content/clubLife";
import CardMedia from "../CardMedia";

const STATUS: Record<NonNullable<EventItem["registrationStatus"]>, { label: string; cls: string }> = {
  open: { label: "Open for Registration", cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  soon: { label: "Registration Soon", cls: "bg-sky-50 text-sky-700 border-sky-200" },
  full: { label: "Fully Booked", cls: "bg-amber-50 text-amber-700 border-amber-200" },
  closed: { label: "Registration Closed", cls: "bg-slate-100 text-slate-600 border-slate-200" },
};

const when = (e: EventItem) => Date.parse(e.startsAt || e.date) || Number.POSITIVE_INFINITY;

// Code-managed events (src/data.ts EVENTS_DATA). Cancelled and finished events are left out.
export function upcomingEvents(): EventItem[] {
  const now = Date.now();
  const today = clubToday();
  return getCMSEvents()
    .filter((e) => e.isUpcoming && !e.cancelled)
    .filter((e) => {
      const end = Date.parse(e.endsAt || e.startsAt || "");
      return Number.isNaN(end) ? true : end >= now || (e.endsAt || e.startsAt || "").slice(0, 10) >= today;
    })
    .sort((a, b) => when(a) - when(b));
}

function registrationState(e: EventItem) {
  let s = e.registrationStatus;
  if (s === "open" && e.registrationDeadline && e.registrationDeadline < clubToday()) s = "closed";
  return s;
}

function EventCard({ e, featured, navigate }: { key?: React.Key; e: EventItem; featured?: boolean; navigate: (p: RoutePath) => void }) {
  const state = registrationState(e);
  const status = state ? STATUS[state] : null;
  const time = e.startsAt && e.startsAt.includes("T")
    ? new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(new Date(e.startsAt))
    : "";
  return (
    <article className={`bg-white border border-slate-200/80 rounded-sm shadow-sm overflow-hidden flex flex-col ${featured ? "md:flex-row" : ""}`}>
      <div className={`relative bg-navy shrink-0 ${featured ? "aspect-[16/9] md:aspect-auto md:w-2/5 md:min-h-[230px]" : "aspect-[16/7]"}`}>
        {e.image ? <CardMedia media={e.image} alt={e.title} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center"><CalendarDays className="w-10 h-10 text-gold/50" /></div>}
        <div className="absolute top-3 left-3 bg-navy/90 border border-gold text-center px-3 py-1.5">
          <span className="block font-display text-lg text-gold font-bold leading-none">{e.day}</span>
          <span className="block font-sans text-[8px] text-slate-200 uppercase tracking-widest mt-0.5">{e.month}</span>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-sans text-[9px] uppercase tracking-widest text-gold-dark font-semibold">{e.category}</span>
          {status && <span className={`font-sans text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 border rounded-sm ${status.cls}`}>{status.label}</span>}
        </div>
        <h3 className={`font-display text-text-dark leading-snug ${featured ? "text-xl sm:text-2xl" : "text-lg"}`}>{e.title}</h3>
        <p className={`font-sans text-xs text-text-body font-light leading-relaxed ${featured ? "" : "line-clamp-2"}`}>{e.description}</p>
        <ul className="font-sans text-[11px] text-text-light space-y-1">
          <li className="flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5 text-gold-dark" />{e.date}{time && <><Clock className="w-3.5 h-3.5 text-gold-dark ml-2" />{time}</>}</li>
          {e.venue && <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-gold-dark" />{e.venue}</li>}
          {e.registrationDeadline && state !== "closed" && <li>Register by {e.registrationDeadline}</li>}
        </ul>
        <div className="mt-auto pt-2 flex flex-wrap gap-2">
          <button type="button" onClick={() => navigate("/events")} className="font-sans text-[10px] uppercase tracking-widest font-bold text-navy hover:text-gold-dark inline-flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded-sm">
            Event Details <ArrowRight className="w-3 h-3" />
          </button>
          {state === "open" && e.registrationUrl && (
            <a href={e.registrationUrl} target="_blank" rel="noopener noreferrer" className="ml-auto py-2 px-4 bg-navy text-white hover:bg-gold hover:text-navy font-sans text-[10px] uppercase tracking-widest font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
              Register
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function UpcomingEventsSection({ navigate }: { navigate: (path: RoutePath) => void }) {
  const events = useMemo(upcomingEvents, []);
  const featured = events.find((e) => e.featured) || events[0];
  const others = events.filter((e) => e !== featured).slice(0, 2);

  return (
    <section aria-label="Upcoming events" className="px-4 sm:px-6 pb-14">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-end justify-between gap-3">
          <div>
            <span className="font-sans text-[9px] uppercase tracking-widest text-gold font-semibold">Club Calendar</span>
            <h2 className="font-display text-2xl sm:text-3xl text-text-dark font-light">Upcoming <span className="font-serif italic text-gold">Events</span></h2>
          </div>
          {events.length > 0 && (
            <button type="button" onClick={() => navigate("/events")} className="font-sans text-[10px] uppercase tracking-widest font-bold text-navy hover:text-gold-dark inline-flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded-sm">
              All Events <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {featured ? (
          <div className="space-y-5">
            {featured.banner ? (
              <>
                {/* Designed banner (title, date and venue are in the artwork); phones get the regular card. */}
                <article className="hidden md:block max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-sm shadow-sm overflow-hidden">
                  <button type="button" onClick={() => navigate("/events")} className="block w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
                    <img
                      src={featured.banner}
                      alt={`${featured.title}, ${featured.date}${featured.venue ? `, ${featured.venue}` : ""}`}
                      width={1600}
                      height={600}
                      className="w-full h-auto block"
                    />
                  </button>
                  <div className="px-5 py-3 flex flex-wrap items-center gap-3 border-t border-slate-100">
                    <span className="font-sans text-[9px] uppercase tracking-widest text-gold-dark font-semibold">{featured.category}</span>
                    <button type="button" onClick={() => navigate("/events")} className="ml-auto font-sans text-[10px] uppercase tracking-widest font-bold text-navy hover:text-gold-dark inline-flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded-sm">
                      Event Details <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </article>
                <div className="md:hidden"><EventCard e={featured} featured navigate={navigate} /></div>
              </>
            ) : (
              <EventCard e={featured} featured navigate={navigate} />
            )}
            {others.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {others.map((e) => <EventCard key={e.id} e={e} navigate={navigate} />)}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white border border-dashed border-slate-300 rounded-sm p-8 sm:p-10 text-center space-y-2">
            <CalendarX2 className="w-9 h-9 text-gold mx-auto" aria-hidden="true" />
            <p className="font-display text-xl text-text-dark">No upcoming events scheduled</p>
            <p className="font-sans text-xs text-text-body font-light">New club events will be announced here and on the Events page.</p>
          </div>
        )}
      </div>
    </section>
  );
}
