import React from "react";
import { Info } from "lucide-react";
import { RoutePath } from "../../types";

// Shown in place of features that only ever worked inside the visitor's own browser (member sign-in,
// registration, dashboard, EZ Booking, affiliation requests): nothing reached the club and passwords
// were kept unprotected on the device. They stay off until a real, server-backed service exists.
export default function FeatureUnavailable({ title, navigate }: { title: string; navigate: (path: RoutePath) => void }) {
  return (
    <div className="bg-bg-primary min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-lg w-full bg-white border border-gold/40 rounded-sm shadow-sm p-8 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-gold/15 mx-auto flex items-center justify-center">
          <Info className="w-6 h-6 text-gold-dark" aria-hidden="true" />
        </div>
        <h1 className="font-display text-2xl text-text-dark">{title} is not available yet</h1>
        <p className="font-sans text-[13px] text-text-body font-light leading-relaxed">
          Online member services are being prepared. To apply for membership, use the membership application form.
          For anything else, contact the Club Secretariat at{" "}
          <a href="mailto:info@cbbcl.org" className="text-navy underline underline-offset-2 hover:text-gold-dark">info@cbbcl.org</a>.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-1">
          <button
            type="button"
            onClick={() => navigate("/membership")}
            className="py-2.5 px-5 bg-navy text-white hover:bg-gold hover:text-navy text-[10px] font-sans font-semibold uppercase tracking-widest transition-colors"
          >
            Apply for Membership
          </button>
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="py-2.5 px-5 border border-slate-300 text-navy hover:border-gold hover:text-gold-dark text-[10px] font-sans font-semibold uppercase tracking-widest transition-colors"
          >
            Contact the Club
          </button>
        </div>
      </div>
    </div>
  );
}
