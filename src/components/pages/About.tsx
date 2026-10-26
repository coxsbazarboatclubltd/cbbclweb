import { useEffect, useState, type ReactNode } from "react";
import { Anchor, ArrowRight, Users, Handshake, Sailboat, ShieldAlert, Landmark, Building2, FileText, Banknote, MapPin } from "lucide-react";
import { CLUB_VISION, CLUB_MISSION, CLUB_CORE_VALUES } from "../../content/visionMission";
import { MASTER_HERO_VIDEO, MASTER_HERO_POSTER } from "../../data";
import { RoutePath } from "../../types";
import BackgroundVideo from "../BackgroundVideo";

// Content follows the club's official profile brochure (2026). Board, membership, facilities and
// contact details have their own pages, so this page links to them instead of repeating them.

interface AboutProps {
  initialSection?: string;
  navigate?: (path: RoutePath) => void;
}

const SECTIONS = [
  { id: "overview", label: "Our Story" },
  { id: "new-chapter", label: "A New Chapter" },
  { id: "vision", label: "Vision & Mission" },
  { id: "lifestyle", label: "Waterfront Lifestyle" },
  { id: "history", label: "Our Journey" },
  { id: "governance", label: "Governance" },
  { id: "road-ahead", label: "The Road Ahead" },
];

const GLANCE = [
  { label: "Incorporated", value: "May 2026" },
  { label: "Registration No.", value: "CH-16670/2026" },
  { label: "Legal Form", value: "Company Limited by Guarantee, non-profit" },
  { label: "Core Focus", value: "Social engagement, family recreation, fellowship and recreational development" },
];

const IDENTITY = [
  { Icon: Sailboat, title: "A maritime and recreational institution" },
  { Icon: Users, title: "A destination for members and their families" },
  { Icon: Handshake, title: "A platform for professional networking" },
  { Icon: Anchor, title: "A vision rooted in coastal hospitality" },
];

const EXPERIENCE_AREAS = [
  "Maritime Leisure & Coastal Recreation",
  "Member & Family Experiences",
  "Boating & Water-Based Recreation",
  "Curated Coastal Excursions",
  "Responsible Waterfront Development",
];

const TIMELINE = [
  { when: "May 2026", what: "Incorporation", done: true },
  { when: "June 2026", what: "Second Board Meeting", done: true },
  { when: "31 Oct 2026", what: "Soft Opening Ceremony", done: false },
  { when: "Q4 2026", what: "Pontoon Launch", done: false },
  { when: "2027 Onwards", what: "Grand Opening", done: false },
];

const JOURNEY_STEPS = [
  { title: "Incorporation & Administrative Formalities", text: "The Company was incorporated in May 2026, and the necessary administrative formalities and related documentation have been completed." },
  { title: "Board Governance", text: "The Club's organisational structure has been established, and its governance and operational activities are progressing." },
  { title: "Temporary Clubhouse", text: "Temporary office premises have been rented to support the Club's initial administrative and organisational activities." },
  { title: "Banking Operations", text: "A bank account has been opened in the Club's name, establishing a foundation for its institutional financial operations." },
  { title: "Digital Presence", text: "The Club's website, official Facebook page and presence across other social media platforms have been established." },
  { title: "Membership Development", text: "Membership applications are being reviewed, with new members admitted progressively through a screening and verification process." },
];

const GOVERNANCE_FACTS = [
  { Icon: FileText, label: "Registration Number", value: "CH-16670/2026" },
  { Icon: Landmark, label: "Statutory Oversight Body", value: "Registrar of Joint Stock Companies and Firms (RJSC)" },
  { Icon: Building2, label: "Registered Office", value: "Shopno Bilash Suites, Plot 28, Block A, Kolatoli, Cox's Bazar, Bangladesh" },
  { Icon: MapPin, label: "Operational Secretariat", value: "Anderson Road, Cox's Bazar - 4700, Bangladesh" },
  { Icon: Banknote, label: "Primary Banker", value: "Bangladesh Development Bank PLC (BDBL)" },
];

const ROAD_AHEAD = [
  "Strengthen institutional administration and governance",
  "Advance development in line with the approved masterplan",
  "Build the proposed clubhouse and member facilities",
  "Progress marine recreation and sports infrastructure",
  "Develop a distinctive member community",
];

const prose = "font-sans text-[13px] sm:text-sm text-text-body font-light leading-relaxed";

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`font-sans text-[10px] font-semibold tracking-[0.25em] uppercase block ${light ? "text-gold" : "text-text-gold"}`}>
      {children}
    </span>
  );
}

function Heading({ children, accent, light = false }: { children: ReactNode; accent: string; light?: boolean }) {
  return (
    <h2 className={`font-display text-3xl md:text-4xl font-light tracking-tight leading-tight ${light ? "text-white" : "text-text-dark"}`}>
      {children} <span className="font-serif italic font-normal text-gold">{accent}</span>
    </h2>
  );
}

function Note({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 p-4 border-l-[3px] border-gold bg-white/70">
      <ShieldAlert className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
      <p className="font-sans text-[11px] italic text-slate-600 leading-relaxed">{children}</p>
    </div>
  );
}

function LinkButton({ label, path, navigate, light = false }: { label: string; path: RoutePath; navigate?: (path: RoutePath) => void; light?: boolean }) {
  return (
    <button
      type="button"
      onClick={() => navigate?.(path)}
      className={`inline-flex items-center gap-2 px-5 py-3 font-sans text-[10px] uppercase tracking-widest font-semibold transition-colors ${
        light ? "bg-gold text-navy hover:bg-gold-light" : "border border-navy text-navy hover:bg-navy hover:text-gold"
      }`}
    >
      <span>{label}</span>
      <ArrowRight className="w-3.5 h-3.5" />
    </button>
  );
}

export default function About({ initialSection = "overview", navigate }: AboutProps) {
  const [active, setActive] = useState(initialSection);

  const goTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (initialSection && initialSection !== "overview") goTo(initialSection);
  }, [initialSection]);

  // Highlight the section currently in view in the sticky section bar.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    // Above the first section (page header), the first item is the current one.
    const onScroll = () => window.scrollY < 300 && setActive(SECTIONS[0].id);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Header */}
      <section className="relative h-[22rem] sm:h-96 bg-navy flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <BackgroundVideo src={MASTER_HERO_VIDEO} />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <Eyebrow light>About the Club</Eyebrow>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extralight text-white tracking-tight leading-tight">
            Where the Bay Meets <span className="font-serif italic text-gold">Belonging</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Discover the vision, experiences, and people shaping Cox's Bazar Boat Club Limited.
          </p>
        </div>
      </section>

      {/* Sticky section bar */}
      <div role="navigation" className="sticky z-40 bg-white border-b border-slate-200 shadow-sm" style={{ top: "var(--header-h, 116px)" }} aria-label="About sections">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(s.id)}
              className={`shrink-0 px-3 sm:px-4 py-4 font-sans text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold border-b-2 transition-colors ${
                active === s.id ? "border-gold text-navy" : "border-transparent text-slate-400 hover:text-navy"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. OUR STORY */}
      <section id="overview" className="scroll-mt-[calc(var(--header-h,116px)+64px)] py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
          <div className="space-y-6">
            <Eyebrow>The Opening Story</Eyebrow>
            <Heading accent="Limited">Cox's Bazar Boat Club</Heading>
            <div className="w-16 h-px bg-gold" />
            <p className={prose}>
              Cox's Bazar Boat Club Limited (CBBCL) is a non-profit social and recreational institution incorporated in
              Bangladesh in 2026 as a <strong className="font-medium text-text-dark">Company Limited by Guarantee under the Companies Act, 1994</strong>.
              Established in the coastal city of Cox's Bazar, the Club aims to foster social connections, family-oriented
              recreation, fellowship and meaningful engagement among its members.
            </p>
            <p className={prose}>
              Guided by its Memorandum and Articles of Association, CBBCL is committed to maintaining a congenial, inclusive and
              well-governed club environment that promotes shared experiences, community relationships and recreational
              opportunities. With a focus on member welfare, responsible governance and the development of recreational
              facilities, the Club aspires to build a distinctive community where relationships, recreation and the spirit of
              coastal living come together.
            </p>
          </div>
          <aside className="bg-navy text-white p-8 border-t-4 border-gold shadow-xl">
            <h3 className="font-display text-xl text-gold mb-6">CBBCL at a Glance</h3>
            <dl className="space-y-5">
              {GLANCE.map((g) => (
                <div key={g.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <dt className="font-sans text-[9px] uppercase tracking-[0.2em] text-gold-light font-semibold">{g.label}</dt>
                  <dd className="font-display text-lg text-white font-light leading-snug mt-1">{g.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* 2. A NEW CHAPTER */}
      <section id="new-chapter" className="scroll-mt-[calc(var(--header-h,116px)+64px)] py-20 px-6 bg-bg-secondary">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-5">
            <Eyebrow>Identity, Purpose & Coastal Positioning</Eyebrow>
            <Heading accent="Cox's Bazar">A New Chapter for</Heading>
            <p className={prose}>
              Cox's Bazar offers a coastal setting for maritime recreation, hospitality and social connection. Cox's Bazar Boat
              Club Limited envisions a destination that brings these experiences together within a structured, professionally
              governed and member-focused institution.
            </p>
            <p className={prose}>
              Our identity is rooted in maritime recreation, member and family experiences, professional networking, and a
              long-term waterfront vision. Our purpose is to create a trusted environment where members can enjoy meaningful
              experiences, strengthen professional relationships and participate in a distinctive waterfront lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {IDENTITY.map(({ Icon, title }) => (
              <div key={title} className="bg-white p-6 border border-slate-200/70 hover:border-gold/60 transition-colors space-y-4">
                <span className="w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold" />
                </span>
                <p className="font-display text-lg text-text-dark leading-snug">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section id="vision" className="scroll-mt-[calc(var(--header-h,116px)+64px)] relative py-20 px-6 bg-navy text-white overflow-hidden">
        {/* Same looping video as the homepage hero; loads only when this section scrolls into view. */}
        <div className="absolute inset-0 w-full h-full" aria-hidden="true">
          <BackgroundVideo src={MASTER_HERO_VIDEO} animated />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-navy/60"></div>
        </div>
        <div className="relative max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Eyebrow light>What Guides Us</Eyebrow>
            <Heading accent="& Mission" light>Vision</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 border border-gold/30 bg-navy/60 backdrop-blur-sm space-y-3">
              <h3 className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">Vision</h3>
              <p className="font-display text-lg md:text-xl font-light leading-relaxed text-slate-100">{CLUB_VISION}</p>
            </div>
            <div className="p-8 border border-gold/30 bg-navy/60 backdrop-blur-sm space-y-3">
              <h3 className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">Mission</h3>
              <p className="font-display text-lg md:text-xl font-light leading-relaxed text-slate-100">{CLUB_MISSION}</p>
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="text-center font-sans text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {CLUB_CORE_VALUES.map((v, i) => (
                <div key={v.title} className="p-5 border-t border-gold/50 space-y-2">
                  <span className="font-display text-2xl text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-sans text-xs font-semibold text-white">{v.title}</p>
                  <p className="font-sans text-[11px] text-slate-300 font-light leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WATERFRONT LIFESTYLE */}
      <section id="lifestyle" className="scroll-mt-[calc(var(--header-h,116px)+64px)] py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-2 border border-gold/40 translate-x-3 translate-y-3" />
            <img src={MASTER_HERO_POSTER} alt="Boats on the water at Cox's Bazar" loading="lazy" className="relative w-full h-72 sm:h-[26rem] object-cover border border-gold" />
          </div>
          <div className="space-y-6">
            <Eyebrow>The Waterfront Lifestyle</Eyebrow>
            <Heading accent="the Bay of Bengal">Connecting Members with</Heading>
            <p className={prose}>
              The waterfront vision of CBBCL places maritime recreation at the heart of the Club experience. The proposed
              facilities aim to create opportunities for members to connect with the Bay of Bengal, and to cultivate a
              distinctive club environment shaped by coastal beauty, meaningful fellowship and a genuine sense of belonging.
            </p>
            <ul className="divide-y divide-slate-100 border-y border-slate-100">
              {EXPERIENCE_AREAS.map((area, i) => (
                <li key={area} className="flex items-center gap-4 py-3">
                  <span className="font-display text-xl text-gold w-8">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-sans text-[13px] text-text-dark">{area}</span>
                </li>
              ))}
            </ul>
            <LinkButton label="Explore proposed facilities" path="/facilities" navigate={navigate} />
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10">
          <Note>
            Boating, excursions and related facilities described here represent potential initiatives and are not a declaration
            that these services are currently operational. Any such activities will be undertaken in accordance with the Club's
            constitutional objectives, required approvals and the applicable laws and regulations of Bangladesh.
          </Note>
        </div>
      </section>

      {/* 5. OUR JOURNEY */}
      <section id="history" className="scroll-mt-[calc(var(--header-h,116px)+64px)] py-20 px-6 bg-bg-primary">
        <div className="max-w-6xl mx-auto space-y-14">
          <div className="max-w-3xl space-y-5">
            <Eyebrow>From Establishment to Institutional Growth</Eyebrow>
            <Heading accent="Journey">Our</Heading>
            <p className={prose}>
              Cox's Bazar Boat Club Limited began its institutional journey with incorporation in May 2026. Since its
              establishment, the Club has taken consistent steps to strengthen its organisational foundation, advance
              administrative operations, establish its digital presence and expand its membership base.
            </p>
          </div>

          {/* Timeline */}
          <ol className="relative grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-4">
            <span className="hidden sm:block absolute left-0 right-0 top-[11px] h-px bg-gold/40" aria-hidden="true" />
            <span className="sm:hidden absolute top-0 bottom-0 left-[11px] w-px bg-gold/40" aria-hidden="true" />
            {TIMELINE.map((t) => (
              <li key={t.when} className="relative flex sm:flex-col items-start sm:items-center gap-4 sm:gap-3 sm:text-center">
                <span className={`relative z-10 w-6 h-6 rounded-full border-2 border-gold shrink-0 ${t.done ? "bg-gold" : "bg-bg-primary"}`} />
                <div>
                  <span className="block font-display text-xl text-text-dark">{t.when}</span>
                  <span className="block font-sans text-[10px] uppercase tracking-widest text-text-light mt-1">{t.what}</span>
                </div>
              </li>
            ))}
          </ol>

          <div className="bg-navy text-white px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 border-l-4 border-gold">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold font-semibold shrink-0">Soft Opening</span>
            <p className="font-sans text-[13px] text-slate-200 font-light">
              Preparations are underway for the Club's scheduled Soft Opening Ceremony on <strong className="font-medium text-white">31 October 2026</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {JOURNEY_STEPS.map((s, i) => (
              <div key={s.title} className="bg-white p-6 border border-slate-200/70 space-y-2">
                <span className="font-display text-2xl text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-sans text-xs font-semibold text-text-dark">{s.title}</h3>
                <p className="font-sans text-xs text-text-body font-light leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
            <div className="space-y-4">
              <h3 className="font-display text-2xl text-text-dark font-light">Future Priorities & Development Plans</h3>
              <p className={prose}>
                As part of its long-term institutional development, CBBCL intends to explore the acquisition of its own land and
                the establishment of a permanent clubhouse. These initiatives will be considered progressively, taking into account
                financial capacity, feasibility, necessary approvals and the applicable laws and regulations of Bangladesh.
              </p>
              <p className={prose}>
                The Club aims to organise a Grand Opening Ceremony in 2027, subject to its overall readiness, infrastructure
                progress, financial capacity and the necessary approvals. The schedule and scope of these initiatives will be
                determined in light of prevailing circumstances and decisions of the Board of Directors.
              </p>
            </div>
            <blockquote className="bg-white p-8 border-t-4 border-gold shadow-sm">
              <span className="block font-sans text-[10px] uppercase tracking-[0.25em] text-gold-dark font-semibold mb-3">Our Commitment</span>
              <p className="font-display text-xl text-text-dark font-light italic leading-relaxed">
                “To build a distinguished, well-organised and member-focused club in Cox's Bazar through good governance,
                institutional transparency, active member participation and responsible development.”
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 6. GOVERNANCE */}
      <section id="governance" className="scroll-mt-[calc(var(--header-h,116px)+64px)] py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div className="space-y-6">
            <Eyebrow>Legal Framework & Institutional Credibility</Eyebrow>
            <Heading accent="Institutional Strength">Governance &</Heading>
            <p className={prose}>
              Cox's Bazar Boat Club Limited is a Company Limited by Guarantee incorporated under the
              <strong className="font-medium text-text-dark"> Companies Act, 1994 (Act XVIII of 1994)</strong>, as a non-profit institution.
            </p>
            <div className="flex flex-wrap gap-3">
              <LinkButton label="Governance & committees" path="/governance" navigate={navigate} />
              <LinkButton label="Board of Directors" path="/board" navigate={navigate} />
            </div>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {GOVERNANCE_FACTS.map(({ Icon, label, value }, i) => (
              <div key={label} className={`bg-white p-6 space-y-3 ${i === GOVERNANCE_FACTS.length - 1 ? "sm:col-span-2" : ""}`}>
                <Icon className="w-5 h-5 text-gold-dark" />
                <dt className="font-sans text-[9px] uppercase tracking-[0.2em] text-text-light font-semibold">{label}</dt>
                <dd className="font-sans text-[13px] text-text-dark leading-relaxed">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 7. THE ROAD AHEAD */}
      <section id="road-ahead" className="scroll-mt-[calc(var(--header-h,116px)+64px)] relative py-24 px-6 bg-navy text-white overflow-hidden">
        {/* Same looping video as the homepage hero; loads only when this section scrolls into view. */}
        <div className="absolute inset-0 w-full h-full" aria-hidden="true">
          <BackgroundVideo src={MASTER_HERO_VIDEO} animated />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-navy/60"></div>
        </div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Eyebrow light>Development Timeline & Future Ambitions</Eyebrow>
            <Heading accent="Ahead" light>The Road</Heading>
            <p className="font-sans text-[13px] sm:text-sm text-slate-300 font-light leading-relaxed">
              CBBCL's roadmap outlines a progression from institutional establishment and initial marina facilities toward a
              dedicated clubhouse and expanded recreational infrastructure. The long-term vision is to bring maritime
              experiences, hospitality, wellness, business facilities and family leisure together within a unified waterfront
              destination.
            </p>
            <ul className="space-y-3">
              {ROAD_AHEAD.map((r) => (
                <li key={r} className="flex items-start gap-3 font-sans text-[13px] text-slate-200 font-light">
                  <span className="text-gold mt-0.5">◆</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 sm:p-10 border border-gold/40 bg-navy/60 backdrop-blur-sm space-y-5">
            <h3 className="font-display text-2xl text-gold font-light">An Invitation to Be Part of Our Vision</h3>
            <p className="font-sans text-[13px] text-slate-300 font-light leading-relaxed">
              Membership represents an opportunity to participate in the development of a distinctive coastal institution.
              Through shared commitment, responsible governance and a long-term outlook, members can contribute to the Club's
              future direction.
            </p>
            <p className="font-serif italic text-lg text-gold-light leading-relaxed">
              A waterfront vision. A community of distinction. A legacy in the making.
            </p>
            <LinkButton label="Explore membership" path="/membership" navigate={navigate} light />
          </div>
        </div>
      </section>
    </div>
  );
}
