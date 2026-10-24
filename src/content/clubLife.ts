import { MASTER_HERO_POSTER } from "../data";

// Code-managed content for the Gazette / Club Life page. There is no CMS or database: edit this file
// to publish, change or expire items, then redeploy. Only add verified CBBCL information here.

export interface ClubAnnouncement {
  id: string;
  /** Short headline, used where the notice is shown as a card (homepage news). */
  title?: string;
  text: string;
  /** Card photo (homepage news carousel). */
  image?: string;
  /** Internal path (e.g. "/membership") or full URL. Omit if the notice has no destination. */
  link?: string;
  linkLabel?: string;
  /** Higher shows first (after pinned items). */
  priority?: number;
  /** Pinned notices always lead the ticker. */
  pinned?: boolean;
  /** Visible from this date (YYYY-MM-DD, Bangladesh time). Omit to show immediately. */
  startDate?: string;
  /** Hidden after this date (YYYY-MM-DD, inclusive). Omit to keep showing. */
  expiryDate?: string;
}

// Verified, current notices only. Leave the list empty to hide the ticker.
export const CLUB_ANNOUNCEMENTS: ClubAnnouncement[] = [
  {
    id: "membership-applications-open",
    title: "Membership Applications Are Open",
    image: MASTER_HERO_POSTER,
    text: "Membership applications are open. Submit your interest online and the Club Secretariat will follow up.",
    link: "/membership",
    linkLabel: "Apply for membership",
    pinned: true,
  },
];

/** Most recently joined members, shown in the "Meet Our Newly Joined Members" spotlight (newest first).
 *  No joining dates are shown (none are on record). */
export const NEWLY_JOINED_DIRECTOR_IDS = ["nadia-siddika", "atiqul-islam", "mohammed-anwarul-islam", "abu-murshed-chowdhury"];

/** Today's date (YYYY-MM-DD) in the club's timezone. */
export function clubToday(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dhaka", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}

/** Announcements that are live today, pinned first, then by priority. */
export function activeAnnouncements(list: ClubAnnouncement[] = CLUB_ANNOUNCEMENTS): ClubAnnouncement[] {
  const today = clubToday();
  return list
    .filter((a) => a.text.trim() && (!a.startDate || a.startDate <= today) && (!a.expiryDate || a.expiryDate >= today))
    .sort((a, b) => Number(!!b.pinned) - Number(!!a.pinned) || (b.priority ?? 0) - (a.priority ?? 0));
}
