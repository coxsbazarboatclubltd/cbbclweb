import React from "react";
import { ShieldOff } from "lucide-react";
import { RoutePath } from "../../types";

// The old admin dashboard checked a password inside the visitor's browser (it shipped in the public
// code) and saved changes only to that browser, so it was neither secure nor a real CMS. It stays
// disabled until a server-side login and content store exist. Site content is managed in code.
export default function AdminDisabled({ navigate }: { navigate: (path: RoutePath) => void }) {
  return (
    <div className="bg-bg-primary min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-lg w-full bg-white border border-gold/40 rounded-sm shadow-sm p-8 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-gold/15 mx-auto flex items-center justify-center">
          <ShieldOff className="w-6 h-6 text-gold-dark" />
        </div>
        <h1 className="font-display text-2xl text-text-dark">Admin area unavailable</h1>
        <p className="font-sans text-[13px] text-text-body font-light leading-relaxed">
          The administration area is currently disabled. Website content is maintained by the club's web team.
          For updates, please contact the Club Secretariat.
        </p>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="py-2.5 px-5 bg-navy text-white hover:bg-gold hover:text-navy text-[10px] font-sans font-semibold uppercase tracking-widest transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
