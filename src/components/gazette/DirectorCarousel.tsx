import React from "react";
import { ArrowRight } from "lucide-react";
import { RoutePath } from "../../types";
import NewlyJoinedCoverflow from "./NewlyJoinedCoverflow";

// Gazette page spotlight of the most recently joined members: the same 3D coverflow as the homepage,
// members only (approved public profiles, no private details).
export default function DirectorCarousel({ navigate }: { navigate: (path: RoutePath) => void }) {
  return (
    <section aria-label="Meet Our Newly Joined Members" className="px-4 sm:px-6 py-14">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="font-sans text-[9px] uppercase tracking-widest text-gold font-semibold">Member Spotlight</span>
            <h2 className="font-display text-2xl sm:text-3xl text-text-dark font-light">Meet Our <span className="font-serif italic text-gold">Newly Joined Members</span></h2>
          </div>
          <button type="button" onClick={() => navigate("/members")} className="font-sans text-[10px] uppercase tracking-widest font-bold text-navy hover:text-gold-dark inline-flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded-sm">
            View All Members <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <NewlyJoinedCoverflow navigate={navigate} />
      </div>
    </section>
  );
}
