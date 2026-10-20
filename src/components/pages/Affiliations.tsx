import React, { useState } from "react";
import { ArrowRight, Crown, Handshake, Plane } from "lucide-react";
import { RoutePath } from "../../types";
import { MASTER_HERO_VIDEO } from "../../data";
import BackgroundVideo from "../BackgroundVideo";
// Flags from the MIT-licensed flag-icons set (4:3), stored locally.
// @ts-ignore
import flagBD from "../../assets/flags/bd.svg";
// @ts-ignore
import flagIN from "../../assets/flags/in.svg";
// @ts-ignore
import flagPK from "../../assets/flags/pk.svg";
// @ts-ignore
import flagLK from "../../assets/flags/lk.svg";
// @ts-ignore
import flagNZ from "../../assets/flags/nz.svg";
// @ts-ignore
import flagSG from "../../assets/flags/sg.svg";
// @ts-ignore
import flagMY from "../../assets/flags/my.svg";
// @ts-ignore
import flagCA from "../../assets/flags/ca.svg";

// Landmark photos (Unsplash License: free for commercial use), resized and stored locally.
// @ts-ignore
import photoBD from "../../assets/landmarks/bd.webp";
// @ts-ignore
import photoIN from "../../assets/landmarks/in.webp";
// @ts-ignore
import photoPK from "../../assets/landmarks/pk.webp";
// @ts-ignore
import photoLK from "../../assets/landmarks/lk.webp";
// @ts-ignore
import photoNZ from "../../assets/landmarks/nz.webp";
// @ts-ignore
import photoSG from "../../assets/landmarks/sg.webp";
// @ts-ignore
import photoMY from "../../assets/landmarks/my.webp";
// @ts-ignore
import photoCA from "../../assets/landmarks/ca.webp";

// Countries where reciprocal club affiliations are being pursued. No affiliations are confirmed yet,
// so each country shows an "in process" note; add clubs here as agreements are signed.
const AFFILIATION_COUNTRIES = [
  { code: "bd", name: "Bangladesh", flag: flagBD, photo: photoBD, landmark: "Ahsan Manzil, Dhaka" },
  { code: "in", name: "India", flag: flagIN, photo: photoIN, landmark: "Gateway of India, Mumbai" },
  { code: "pk", name: "Pakistan", flag: flagPK, photo: photoPK, landmark: "Badshahi Mosque, Lahore" },
  { code: "lk", name: "Sri Lanka", flag: flagLK, photo: photoLK, landmark: "Sigiriya Rock Fortress" },
  { code: "nz", name: "New Zealand", flag: flagNZ, photo: photoNZ, landmark: "Sky Tower, Auckland" },
  { code: "sg", name: "Singapore", flag: flagSG, photo: photoSG, landmark: "Marina Bay Sands" },
  { code: "my", name: "Malaysia", flag: flagMY, photo: photoMY, landmark: "Petronas Twin Towers, Kuala Lumpur" },
  { code: "ca", name: "Canada", flag: flagCA, photo: photoCA, landmark: "CN Tower, Toronto" },
];

interface AffiliationsProps {
  navigate: (path: RoutePath) => void;
}

export default function Affiliations({ navigate }: AffiliationsProps) {
  const [selected, setSelected] = useState<string>(AFFILIATION_COUNTRIES[0].code);
  const country = AFFILIATION_COUNTRIES.find((c) => c.code === selected);

  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Page Header */}
      <section className="relative h-72 bg-navy flex items-center justify-center overflow-hidden border-b border-navy-light">
        <div className="absolute inset-0 w-full h-full">
          <BackgroundVideo
            src={MASTER_HERO_VIDEO}
          />
          <div className="absolute inset-0 bg-navy/85 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3 overflow-hidden">
          <p className="font-sans text-[10px] tracking-[0.2em] text-gold uppercase font-semibold">
            Cox's Bazar Boat Club Ltd.
          </p>
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-extralight text-white tracking-tight break-words whitespace-normal leading-tight">
            Reciprocal Bonds & <span className="font-serif italic text-gold">Affiliated Clubs</span>
          </h1>
          <div className="font-sans text-[11px] text-slate-400 flex items-center justify-center space-x-2">
            <span className="cursor-pointer hover:text-gold" onClick={() => navigate("/")}>Home</span>
            <span>&gt;</span>
            <span className="text-gold">Reciprocal Networks</span>
          </div>
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-12 bg-white border-b border-slate-100 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="font-sans text-[9px] uppercase tracking-widest text-[#c9a84c] font-semibold">
            The Reciprocal Grid
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-light text-text-dark tracking-tight">
            Privileged Access Beyond Cox's Bazar Shorelines
          </h2>
          <p className="font-sans text-xs sm:text-[13px] text-text-body font-light leading-relaxed">
            In keeping with our vision to deliver exceptional value to our elite members, Cox's Bazar Boat Club Limited 
            maintains direct reciprocal ties with leading private recreational entities. CBBCL members can enjoy 
            exclusive access to sports lounges, private pools, tennis courts, and guest lodges while travelling in Dhaka, 
            Chittagong, and other regional hubs.
          </p>
        </div>
      </section>

      {/* Affiliations by country */}
      <section className="py-14 px-6 bg-bg-primary">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="font-sans text-[9px] uppercase tracking-widest text-gold font-semibold">Affiliations by Country</span>
            <h3 className="font-display text-2xl text-text-dark font-light">Select a country to view affiliated clubs</h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {AFFILIATION_COUNTRIES.map((c) => {
              const active = c.code === selected;
              return (
                <button
                  key={c.code}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelected(c.code)}
                  className={`group relative h-28 sm:h-36 overflow-hidden rounded-lg text-left shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${active ? "ring-2 ring-gold ring-offset-2 ring-offset-bg-primary" : "ring-1 ring-black/5"}`}
                >
                  <img src={c.photo} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 pb-3 sm:pb-4">
                    <img src={c.flag} alt="" aria-hidden="true" className="w-7 sm:w-9 h-auto shrink-0 rounded-[2px] shadow" />
                    <span className="font-display text-base sm:text-xl text-white truncate flex-1">{c.name}</span>
                    <span className={`hidden sm:flex w-8 h-8 rounded-full items-center justify-center shrink-0 transition-colors ${active ? "bg-gold text-navy" : "border border-gold/70 text-gold group-hover:bg-gold group-hover:text-navy"}`}>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {country && (
            <div className="relative overflow-hidden bg-white border border-gold/30 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)]" role="status">
              <img src={country.photo} alt={country.landmark} className="w-full h-48 md:h-full object-cover" />
              <div className="p-6 sm:p-8 space-y-3">
                <p className="font-sans text-[10px] uppercase tracking-widest text-gold-dark font-semibold">{country.name}</p>
                <h4 className="font-display text-3xl text-text-dark font-light">Affiliations in Progress</h4>
                <div className="w-14 h-px bg-gold" />
                <p className="font-sans text-[13px] text-text-body font-light leading-relaxed">
                  Reciprocal club affiliations in {country.name} are currently being arranged and will be available soon.
                  We look forward to sharing these opportunities with our members.
                </p>
                <p className="font-sans text-[10px] text-text-light italic">Pictured: {country.landmark}</p>
              </div>
              <div className="relative p-6 sm:p-8 md:border-l border-t md:border-t-0 border-slate-100 space-y-5">
                {/* Faint sailboat watermark */}
                <svg viewBox="0 0 100 100" className="absolute right-3 bottom-3 w-28 h-28 text-gold/10 pointer-events-none" aria-hidden="true">
                  <path d="M50 8 L50 72 L22 72 Z M54 18 L54 72 L80 72 Z M14 78 L86 78 L76 90 L24 90 Z" fill="currentColor" />
                </svg>
                {[
                  { Icon: Handshake, title: "Reciprocal Privileges", text: "Access to partner clubs and facilities" },
                  { Icon: Crown, title: "Exclusive Network", text: "Connect with a wider community of clubs" },
                  { Icon: Plane, title: "More Destinations", text: "Stay tuned for upcoming partnerships" },
                ].map(({ Icon, title, text }) => (
                  <div key={title} className="relative flex items-center gap-4">
                    <span className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold-dark" />
                    </span>
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-widest text-text-dark font-semibold">{title}</p>
                      <p className="font-sans text-[11px] text-text-light">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Reciprocal protocol guidance block */}
      <section className="py-16 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto p-8 bg-slate-50 border border-slate-200 rounded-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-3">
            <h4 className="font-display text-lg text-text-dark font-semibold">Are You Travelling in Reciprocal Hubs?</h4>
            <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
              Before visiting our affiliate locations, you must request an official CBBCL Introduction Card from the Club Registrar. This guarantees smooth clearance at affiliate security rails.
            </p>
          </div>
          <div className="md:col-span-4 text-center md:text-right">
            <a
              href="mailto:registry@cbbcl.org"
              className="py-3 px-5 bg-[#1a2744] text-white hover:bg-gold hover:text-navy text-[10px] font-sans font-semibold uppercase tracking-widest inline-block transition-colors"
            >
              Email Registrar Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
