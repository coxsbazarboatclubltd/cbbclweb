import React from "react";
import { RoutePath } from "../../types";

// CBBCL Portfolio (Media Files/CBBCL Portfolio.pdf), shown exactly as designed: each two-page spread
// as one image on wider screens, split into its two pages on phones so the text stays readable.
// Images are generated from the PDF; to update, re-export the pages into src/assets/images/portfolio/.
// @ts-ignore (Vite client types are not loaded in this project; other asset imports do the same)
const images = import.meta.glob("../../assets/images/portfolio/*.webp", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const img = (name: string) => images[`../../assets/images/portfolio/${name}.webp`];

/** What each spread shows (used as image descriptions for screen readers and search). */
const SPREADS = [
  "Cover: Cox's Bazar Boat Club Ltd., established 2026 — A Premier Waterfront Destination for a Prouder Bangladesh",
  "Table of contents",
  "The Opening Story: about the Club and CBBCL at a glance",
  "A New Chapter for Cox's Bazar: identity, purpose and coastal positioning",
  "Vision and Mission",
  "The Waterfront Lifestyle: marine recreation, boating and coastal experiences",
  "Beyond Recreation: hospitality, sports, wellness, business and accommodation facilities",
  "Our Journey: from establishment to institutional growth",
  "Soft opening and future priorities and development plans",
  "The People Behind the Vision: message from President Humayun Kabir Robel",
  "Board of Directors",
  "Membership and privileges: categories, admission fees, subscriptions and voting rights",
  "Governance and institutional strength",
  "The Road Ahead: development timeline and membership invitation",
  "Reach out to us: contact information",
];

export default function Portfolio({ navigate }: { navigate: (path: RoutePath) => void }) {
  return (
    <div className="bg-navy min-h-screen">
      <section className="px-4 sm:px-6 pt-14 pb-10 text-center border-b border-gold/30">
        <p className="font-sans text-[10px] tracking-[0.2em] text-gold uppercase font-semibold">Cox's Bazar Boat Club Ltd.</p>
        <h1 className="font-display text-3xl sm:text-5xl font-light text-white tracking-tight mt-3">
          Club <span className="font-serif italic text-gold">Portfolio</span>
        </h1>
        <p className="font-sans text-xs sm:text-sm text-slate-300 font-light mt-3 max-w-xl mx-auto">
          Our story, vision, facilities, leadership and membership. Scroll to read.
        </p>
      </section>

      <div className="max-w-[1600px] mx-auto px-2 sm:px-6 py-8 sm:py-12 space-y-4 sm:space-y-8">
        {SPREADS.map((label, i) => {
          const n = String(i + 1).padStart(2, "0");
          const eager = i < 2;
          return (
            <figure key={n} className="m-0">
              {/* Phones: the spread's two pages, one under the other */}
              <div className="sm:hidden space-y-2">
                {(["a", "b"] as const).map((half) => (
                  <img
                    key={half}
                    src={img(`page-${n}${half}`)}
                    alt={half === "a" ? label : ""}
                    width={1200}
                    height={849}
                    loading={eager ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-auto block shadow-lg"
                  />
                ))}
              </div>
              {/* Tablets and desktops: the full spread */}
              <img
                src={img(`spread-${n}`)}
                alt={label}
                width={2400}
                height={849}
                loading={eager ? "eager" : "lazy"}
                decoding="async"
                className="hidden sm:block w-full h-auto shadow-2xl"
              />
              <figcaption className="sr-only">{`Spread ${i + 1} of ${SPREADS.length}: ${label}`}</figcaption>
            </figure>
          );
        })}
      </div>

      <div className="px-4 pb-16 text-center">
        <button
          type="button"
          onClick={() => navigate("/membership")}
          className="py-3 px-8 bg-gold text-navy hover:bg-gold-light font-sans text-[11px] uppercase tracking-widest font-semibold transition-colors"
        >
          Explore Membership
        </button>
      </div>
    </div>
  );
}
