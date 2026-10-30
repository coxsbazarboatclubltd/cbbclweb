import React, { useState } from "react";
import { FileText } from "lucide-react";
import { RoutePath } from "../../types";
import { POLICIES, POLICY_EFFECTIVE_DATE, PolicyDoc } from "../../content/legal";

// Turns email addresses in policy text into mailto links.
function withEmailLinks(text: string) {
  return text.split(/([a-z0-9._%+-]+@cbbcl\.org)/gi).map((part, i) =>
    i % 2 === 1 ? (
      <a key={i} href={`mailto:${part}`} className="text-navy underline underline-offset-2 hover:text-gold-dark">{part}</a>
    ) : (
      part
    )
  );
}

/** Removes everything the website stored in this browser (local storage and offline caches). */
async function clearSiteStorage(): Promise<void> {
  try { localStorage.clear(); } catch { /* storage unavailable */ }
  try { sessionStorage.clear(); } catch { /* storage unavailable */ }
  try {
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    }
  } catch { /* caches unavailable */ }
}

export default function PolicyPage({ doc, navigate }: { key?: React.Key; doc: PolicyDoc; navigate: (path: RoutePath) => void }) {
  const [cleared, setCleared] = useState(false);

  return (
    <div className="bg-bg-primary min-h-screen">
      <section className="bg-navy border-b border-gold/30 px-6 pt-16 pb-12 text-center">
        <p className="font-sans text-[10px] tracking-[0.2em] text-gold uppercase font-semibold">Cox's Bazar Boat Club Ltd.</p>
        <h1 className="font-display text-3xl sm:text-5xl font-light text-white tracking-tight mt-3">{doc.title}</h1>
        <p className="font-sans text-xs text-slate-300 font-light mt-3">Effective {POLICY_EFFECTIVE_DATE}</p>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10">
        <article className="bg-white border border-slate-200/80 rounded-sm shadow-sm p-6 sm:p-10 space-y-8">
          <p className="font-sans text-sm text-text-body font-light leading-relaxed border-l-4 border-gold pl-4">{doc.summary}</p>
          {doc.sections.map((s) => (
            <section key={s.heading} className="space-y-3">
              <h2 className="font-display text-xl text-text-dark">{s.heading}</h2>
              {s.paragraphs?.map((p, i) => (
                <p key={i} className="font-sans text-[13px] sm:text-sm text-text-body font-light leading-relaxed">{withEmailLinks(p)}</p>
              ))}
              {s.items && (
                <ul className="list-disc pl-5 space-y-2 font-sans text-[13px] sm:text-sm text-text-body font-light leading-relaxed marker:text-gold">
                  {s.items.map((it, i) => <li key={i}>{withEmailLinks(it)}</li>)}
                </ul>
              )}
              {doc.slug === "cookie-policy" && s.heading.startsWith("3.") && (
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={async () => { await clearSiteStorage(); setCleared(true); }}
                    className="py-2.5 px-5 bg-navy text-white hover:bg-gold hover:text-navy text-[10px] font-sans font-semibold uppercase tracking-widest transition-colors"
                  >
                    Clear this website's data on this device
                  </button>
                  <p role="status" aria-live="polite" className="font-sans text-xs text-emerald-700 mt-2 min-h-[1rem]">
                    {cleared ? "Done. Stored website data was removed from this browser." : ""}
                  </p>
                </div>
              )}
            </section>
          ))}
        </article>

        <aside aria-label="Website policies" className="lg:sticky lg:top-40 self-start">
          <h2 className="font-sans text-[10px] uppercase tracking-widest text-gold-dark font-semibold mb-3">Policies</h2>
          <ul className="space-y-1">
            {POLICIES.map((p) => (
              <li key={p.slug}>
                <a
                  href={`/${p.slug}`}
                  aria-current={p.slug === doc.slug ? "page" : undefined}
                  onClick={(e) => { e.preventDefault(); navigate(`/${p.slug}` as RoutePath); }}
                  className={`flex items-center gap-2 py-2 px-3 rounded-sm font-sans text-xs transition-colors ${p.slug === doc.slug ? "bg-navy text-white" : "text-navy hover:bg-white hover:text-gold-dark"}`}
                >
                  <FileText className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
