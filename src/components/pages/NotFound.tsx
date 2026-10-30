import React from "react";
import { Compass } from "lucide-react";
import { RoutePath } from "../../types";

const LINKS: [string, RoutePath][] = [
  ["Home", "/"],
  ["About", "/about"],
  ["Membership", "/membership"],
  ["Board of Directors", "/board"],
  ["Events", "/events"],
  ["Contact", "/contact"],
];

// Unknown addresses: a real "not found" page (marked noindex in routeSeo) instead of a copy of the homepage.
export default function NotFound({ navigate }: { navigate: (path: RoutePath) => void }) {
  return (
    <div className="bg-bg-primary min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-lg w-full bg-white border border-gold/40 rounded-sm shadow-sm p-8 text-center space-y-5">
        <div className="w-14 h-14 rounded-full bg-gold/15 mx-auto flex items-center justify-center">
          <Compass className="w-6 h-6 text-gold-dark" />
        </div>
        <h1 className="font-display text-2xl text-text-dark">Page not found</h1>
        <p className="font-sans text-[13px] text-text-body font-light leading-relaxed">
          The page you are looking for does not exist or has moved. These pages may help:
        </p>
        <nav aria-label="Main pages" className="flex flex-wrap justify-center gap-2">
          {LINKS.map(([label, path]) => (
            <a
              key={path}
              href={path}
              onClick={(e) => { e.preventDefault(); navigate(path); }}
              className="py-2 px-4 border border-slate-200 hover:border-gold text-navy hover:text-gold-dark text-[10px] font-sans font-semibold uppercase tracking-widest transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
