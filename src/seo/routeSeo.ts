// Per-route search metadata (title, description, canonical URL, robots, JSON-LD).
// The site is a client-rendered SPA: index.html carries the homepage tags and the
// Organization/WebSite JSON-LD, and applySeo() updates them on every route change.
// Only verified club facts belong here; keep descriptions in step with the page content.

import { getBoardMembers, getNewsPosts, DIRECTOR_ID_ALIASES } from "../utils/storage";
import { getCMSEvents } from "../utils/cmsStorage";
import { MEMBERSHIP_CATEGORIES } from "../membershipCategories";
import { EventItem } from "../types";
import { POLICIES } from "../content/legal";

/** Production origin. cbbcl.org (apex) permanently redirects here, so canonicals use www. */
export const SITE_URL = "https://www.cbbcl.org";
export const SITE_NAME = "Cox's Bazar Boat Club Ltd.";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
const CLUB_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Anderson Road",
  addressLocality: "Cox's Bazar",
  postalCode: "4700",
  addressCountry: "BD",
};

export interface RouteSeo {
  title: string;
  description: string;
  /** Canonical path ("/about"); omitted for pages that must not be indexed. */
  path?: string;
  noindex?: boolean;
  image?: string;
  jsonLd?: object[];
}

const withSite = (page: string) => `${page} | ${SITE_NAME}`;
const clip = (text: string, max = 158) => {
  const t = text.replace(/\s+/g, " ").trim();
  return t.length <= max ? t : `${t.slice(0, max - 1).replace(/[\s,;.:—-]+\S*$/, "")}…`;
};
const absolute = (src?: string) => {
  if (!src) return undefined;
  if (/^https?:\/\//i.test(src)) return src;
  if (src.startsWith("data:")) return undefined;
  return `${SITE_URL}${src.startsWith("/") ? "" : "/"}${src}`;
};

function breadcrumbs(items: [string, string][]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  };
}

/** Event JSON-LD for code-managed events with a confirmed start date, venue and status. */
function eventsJsonLd(events: EventItem[]): object[] {
  return events
    .filter((e) => e.isUpcoming && !e.cancelled && e.startsAt && e.venue)
    .map((e) => ({
      "@context": "https://schema.org",
      "@type": "Event",
      name: e.title,
      description: e.description,
      startDate: e.startsAt,
      ...(e.endsAt ? { endDate: e.endsAt } : {}),
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: { "@type": "Place", name: e.venue, address: CLUB_ADDRESS },
      ...(absolute(e.banner || e.image) ? { image: [absolute(e.banner || e.image)] } : {}),
      organizer: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    }));
}

const NOINDEX = (title: string): RouteSeo => ({ title: withSite(title), description: "", noindex: true });

/** Metadata for a normalised path (no query, no trailing slash). */
export function routeSeo(rawPath: string): RouteSeo {
  const path = rawPath.replace(/\.html$/, "") || "/";
  const seg = path.split("/").filter(Boolean);

  switch (path) {
    case "/":
    case "/index":
    case "/home":
      return {
        title: `${SITE_NAME} | Official Website`,
        description: "Official website of Cox's Bazar Boat Club Ltd. (CBBCL), a private socio-cultural and nautical club in Cox's Bazar, Bangladesh: membership, facilities and events.",
        path: "/",
      };
    case "/about":
      return {
        title: withSite("About the Club"),
        description: "About Cox's Bazar Boat Club Ltd.: the club's vision, mission, core values and objectives, and its incorporation as a company limited by guarantee in Bangladesh.",
        path: "/about",
      };
    case "/facilities":
    case "/gallery":
      return {
        title: withSite("Club Facilities"),
        description: "Facilities of Cox's Bazar Boat Club Ltd. in Cox's Bazar, including the private hotel, boating and yacht, club lounge and dining for members and their guests.",
        path: "/facilities",
      };
    case "/membership":
      return {
        title: withSite("Membership"),
        description: `Membership at Cox's Bazar Boat Club Ltd.: ${MEMBERSHIP_CATEGORIES.map((c) => c.title.replace(/ Membership$/, "")).join(", ")} membership, fees and how to apply.`,
        path: "/membership",
      };
    case "/governance":
      return {
        title: withSite("Governance"),
        description: "Governance of Cox's Bazar Boat Club Ltd.: articles of association, board structure, committees and how the club is managed.",
        path: "/governance",
      };
    case "/board":
      return {
        title: withSite("Board of Directors"),
        description: "The Board of Directors of Cox's Bazar Boat Club Ltd.: the President, Vice President, Core Secretariat and directors who lead the club in Cox's Bazar.",
        path: "/board",
      };
    case "/members":
      return {
        title: withSite("Club Members"),
        description: "Member directory of Cox's Bazar Boat Club Ltd., including the founding members of the club in Cox's Bazar, Bangladesh.",
        path: "/members",
      };
    case "/news-feed":
    case "/news":
      return {
        title: withSite("The Ocean Gazette: News & Club Life"),
        description: "News, official releases, upcoming events and newly joined members of Cox's Bazar Boat Club Ltd. in Cox's Bazar, Bangladesh.",
        path: "/news-feed",
        jsonLd: eventsJsonLd(getCMSEvents()),
      };
    case "/events":
      return {
        title: withSite("Events"),
        description: "Upcoming and past events of Cox's Bazar Boat Club Ltd. at the club in Cox's Bazar, Bangladesh.",
        path: "/events",
        jsonLd: eventsJsonLd(getCMSEvents()),
      };
    case "/affiliations":
      return {
        title: withSite("Reciprocal Affiliations"),
        description: "Reciprocal club affiliations of Cox's Bazar Boat Club Ltd. for members travelling in Bangladesh and abroad.",
        path: "/affiliations",
      };
    case "/contact":
      return {
        title: withSite("Contact"),
        description: "Contact Cox's Bazar Boat Club Ltd., Anderson Road, Cox's Bazar 4700, Bangladesh: phone +880 13328 86688, email info@cbbcl.org or membership@cbbcl.org.",
        path: "/contact",
      };
    case "/privacy-policy":
    case "/terms":
    case "/cookie-policy":
    case "/data-deletion": {
      const doc = POLICIES.find((p) => `/${p.slug}` === path)!;
      return {
        title: withSite(doc.title),
        description: clip(doc.summary),
        path,
        jsonLd: [breadcrumbs([["Home", "/"], [doc.title, path]])],
      };
    }
    // Accounts, admin and request forms are not search landing pages.
    case "/login": return NOINDEX("Member Login");
    case "/register": return NOINDEX("Member Registration");
    case "/dashboard": return NOINDEX("Member Dashboard");
    case "/admin-dashboard":
    case "/admin-dashboard/home-cms": return NOINDEX("Admin");
    case "/ezbooking-portal": return NOINDEX("EZ Booking Portal");
    case "/affiliation-request": return NOINDEX("Affiliation Request");
    case "/membership-application": return NOINDEX("Membership Application");
  }

  // Director profiles (/board/<id>; /profile/<id> is the same page).
  if ((seg[0] === "board" || seg[0] === "profile") && seg[1]) {
    const id = DIRECTOR_ID_ALIASES[seg[1]] || seg[1];
    const d = getBoardMembers().find((x) => x.id === id);
    if (!d) return NOINDEX("Profile Not Found");
    // Profiles still awaiting details show only a thank-you note: keep them out of search until filled in.
    if (!d.profileSubmitted) return { ...NOINDEX(`${d.name}, ${d.designation}`), description: `${d.name}, ${d.designation} of Cox's Bazar Boat Club Ltd.` };
    const role = d.businessProfile?.role ? ` ${d.businessProfile.role.split(";")[0].trim()}.` : "";
    return {
      title: withSite(`${d.name}, ${d.designation}`),
      description: clip(`${d.name} is ${/^[AEIOU]/i.test(d.designation) ? "an" : "a"} ${d.designation} of Cox's Bazar Boat Club Ltd. in Cox's Bazar, Bangladesh.${role}`),
      path: `/board/${d.id}`,
      image: absolute(d.photoUrl),
      jsonLd: [
        breadcrumbs([["Home", "/"], ["Board of Directors", "/board"], [d.name, `/board/${d.id}`]]),
        {
          "@context": "https://schema.org",
          "@type": "Person",
          name: d.name,
          jobTitle: d.designation,
          url: `${SITE_URL}/board/${d.id}`,
          ...(absolute(d.photoUrl) ? { image: absolute(d.photoUrl) } : {}),
          memberOf: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        },
      ],
    };
  }

  if (seg[0] === "membership" && seg[1]) {
    const c = MEMBERSHIP_CATEGORIES.find((x) => x.slug === seg[1].toLowerCase().replace(/_/g, "-"));
    if (!c) return NOINDEX("Membership Category Not Found");
    return {
      title: withSite(c.title),
      description: clip(`${c.title} at Cox's Bazar Boat Club Ltd.: ${c.summary}`),
      path: `/membership/${c.slug}`,
      jsonLd: [breadcrumbs([["Home", "/"], ["Membership", "/membership"], [c.title, `/membership/${c.slug}`]])],
    };
  }

  if ((seg[0] === "news-feed" || seg[0] === "news") && seg[1]) {
    const post = getNewsPosts().find((p) => p.id === seg[1]);
    if (!post) return NOINDEX("Article Not Found");
    return {
      title: withSite(post.title),
      description: clip(post.excerpt || post.content),
      path: `/news-feed/${post.id}`,
      image: absolute(post.image),
      jsonLd: [breadcrumbs([["Home", "/"], ["News", "/news-feed"], [post.title, `/news-feed/${post.id}`]])],
    };
  }

  // Member detail views and affiliate club pages have no confirmed public content yet.
  if (seg[0] === "members" && seg[1]) return { ...routeSeo("/members"), noindex: true };
  if (seg[0] === "affiliations" && seg[1]) return NOINDEX("Affiliated Club");

  return NOINDEX("Page Not Found");
}

function setMeta(attr: "name" | "property", key: string, content: string | null) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (content === null) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Write the route's metadata into <head>. */
export function applySeo(seo: RouteSeo) {
  document.title = seo.title;
  const url = seo.path ? `${SITE_URL}${seo.path}` : null;

  if (seo.description) setMeta("name", "description", seo.description);
  setMeta("name", "robots", seo.noindex ? "noindex, follow" : null);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (url && !seo.noindex) {
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  } else {
    canonical?.remove();
  }

  setMeta("property", "og:title", seo.title);
  if (seo.description) {
    setMeta("property", "og:description", seo.description);
    setMeta("name", "twitter:description", seo.description);
  }
  if (url) setMeta("property", "og:url", url);
  setMeta("property", "og:image", seo.image || DEFAULT_IMAGE);
  setMeta("property", "og:image:secure_url", seo.image || DEFAULT_IMAGE);
  // Size/type tags describe the default 1200x630 card only.
  setMeta("property", "og:image:width", seo.image ? null : "1200");
  setMeta("property", "og:image:height", seo.image ? null : "630");
  setMeta("property", "og:image:type", seo.image ? null : "image/jpeg");
  setMeta("name", "twitter:title", seo.title);
  setMeta("name", "twitter:image", seo.image || DEFAULT_IMAGE);

  document.head.querySelectorAll("script[data-route-jsonld]").forEach((s) => s.remove());
  for (const data of seo.jsonLd || []) {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute("data-route-jsonld", "");
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }
}
