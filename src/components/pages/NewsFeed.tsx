import React, { useState, useEffect } from "react";
import { getNewsPosts } from "../../utils/storage";
import { getCMSEvents } from "../../utils/cmsStorage";
import { NewsPost, RoutePath } from "../../types";
import CardMedia from "../CardMedia";
import { Search, Heart, Tag, Calendar, Anchor, ShieldAlert, ArrowRight } from "lucide-react";
import { MASTER_HERO_VIDEO } from "../../data";
import BackgroundVideo from "../BackgroundVideo";
import AnnouncementTicker from "../gazette/AnnouncementTicker";
import ClubStatsCards from "../gazette/ClubStatsCards";
import DirectorCarousel from "../gazette/DirectorCarousel";
import UpcomingEventsSection from "../gazette/UpcomingEventsSection";

interface NewsFeedProps {
  navigate: (path: RoutePath) => void;
}

const PAGE_SIZE = 9;

export default function NewsFeed({ navigate }: NewsFeedProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [newsList, setNewsList] = useState<NewsPost[]>([]);
  const [shown, setShown] = useState(PAGE_SIZE);
  // Likes are kept on this device only (there is no shared database), so no public count is shown.
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Past events join the Gazette as regular cards (category "Events"), newest first with the posts.
    const posts = getNewsPosts();
    const coveredEvents = new Set(posts.map((p) => p.eventId).filter(Boolean));
    const eventPosts: NewsPost[] = getCMSEvents()
      .filter((e) => !e.isUpcoming && !e.cancelled && !coveredEvents.has(e.id))
      .map((e) => {
        const d = new Date(Date.parse(e.startsAt || e.date));
        return {
          id: `event-${e.id}`,
          title: e.title,
          date: e.date,
          category: "Events",
          year: Number.isNaN(d.getTime()) ? "" : String(d.getFullYear()),
          month: Number.isNaN(d.getTime()) ? "" : d.toLocaleString("en-US", { month: "long" }),
          excerpt: [e.description, e.venue].filter(Boolean).join(" · "),
          content: e.description,
          tags: ["event", e.category].filter(Boolean).map((t) => t.toLowerCase()),
          image: e.image,
          likes: 0,
          commentsCount: 0,
          link: "/events",
        };
      });
    const when = (p: NewsPost) => Date.parse(p.date) || 0;
    // While its event is upcoming, a post about it would repeat the Upcoming Events card; it appears afterwards.
    const upcomingIds = new Set(getCMSEvents().filter((e) => e.isUpcoming && !e.cancelled).map((e) => e.id));
    const list = [...posts.filter((p) => !(p.eventId && upcomingIds.has(p.eventId))), ...eventPosts].sort((a, b) => when(b) - when(a));
    setNewsList(list);
    const initial: Record<string, boolean> = {};
    for (const p of list) {
      try {
        const stored = localStorage.getItem(`cbbcl_news_eng_${p.id}`);
        if (stored) initial[p.id] = !!JSON.parse(stored).liked;
      } catch (e) {
        // ignore unreadable entries
      }
    }
    setLiked(initial);
  }, []);

  useEffect(() => setShown(PAGE_SIZE), [searchTerm, selectedCategory]);

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering card navigation
    setLiked((prev) => {
      const next = !prev[id];
      try {
        const stored = JSON.parse(localStorage.getItem(`cbbcl_news_eng_${id}`) || "{}");
        localStorage.setItem(`cbbcl_news_eng_${id}`, JSON.stringify({ ...stored, liked: next, likes: next ? 1 : 0 }));
      } catch (err) {
        console.error(err);
      }
      return { ...prev, [id]: next };
    });
  };

  const categories = ["All", "Official Gazette Release", "News", "Announcements", "Governance", "CSR", "Sports", "Cultural", "Events"];

  const isPublic = (post: NewsPost) =>
    !post.status ||
    post.status === "Published" ||
    (post.status === "Scheduled" && !!post.scheduledDate && new Date(post.scheduledDate) <= new Date());
  const publicPosts = newsList.filter(isPublic);

  // Filter and search logic
  const q = searchTerm.trim().toLowerCase();
  const filteredPosts = publicPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.content.toLowerCase().includes(q) ||
      post.tags.some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  // Highlights reuse existing Gazette posts with photos; shown once there are at least two.
  const highlights = publicPosts.filter((p) => p.image).slice(0, 4);

  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Page Header */}
      <section className="relative h-72 bg-navy flex items-center justify-center overflow-hidden border-b border-navy-light">
        <div className="absolute inset-0 w-full h-full">
          <BackgroundVideo src={MASTER_HERO_VIDEO} />
          <div className="absolute inset-0 bg-navy/85 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3 overflow-hidden">
          <p className="font-sans text-[10px] tracking-[0.2em] text-gold uppercase font-semibold">
            Cox's Bazar Boat Club Ltd.
          </p>
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-extralight text-white tracking-tight break-words whitespace-normal leading-tight">
            The Ocean Gazette & <span className="font-serif italic text-gold">Club Life</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-slate-300 font-light">
            News, Events, Members and Stories from Our Coastal Community
          </p>
          <div className="font-sans text-[11px] text-slate-400 flex items-center justify-center space-x-2">
            <button type="button" onClick={() => navigate("/")} className="hover:text-gold">Home</button>
            <span className="text-white/35">▪</span>
            <span className="text-gold">Club Gazette</span>
          </div>
        </div>
      </section>

      <AnnouncementTicker navigate={navigate} />
      <ClubStatsCards />
      <DirectorCarousel navigate={navigate} />
      <UpcomingEventsSection navigate={navigate} />

      {/* The Ocean Gazette: search, categories and posts */}
      <section aria-label="The Ocean Gazette" className="bg-white border-y border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">
          <span className="font-sans text-[9px] uppercase tracking-widest text-gold font-semibold">The Ocean Gazette</span>
          <h2 className="font-display text-2xl sm:text-3xl text-text-dark font-light">News & <span className="font-serif italic text-gold">Official Releases</span></h2>
        </div>

        {/* Search / filter toolbar: on large screens it sticks under the header and the announcement bar */}
        <div className="bg-white/95 backdrop-blur border-b border-slate-150 py-5 px-4 sm:px-6 lg:sticky z-30" style={{ top: "calc(var(--header-h, 116px) + var(--ticker-h, 0px))" }}>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="relative w-full lg:w-80">
              <label htmlFor="gazette-search" className="sr-only">Search the Gazette</label>
              <input
                id="gazette-search"
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search posts, archives, tags..."
                className="w-full bg-slate-50 border border-slate-200 pl-10 pr-14 py-2 text-xs rounded-full focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
              />
              <Search className="absolute left-3.5 top-2.5 w-4.5 h-4.5 text-slate-400" aria-hidden="true" />
              {searchTerm && (
                <button type="button" onClick={() => setSearchTerm("")} className="absolute right-3.5 top-2 text-slate-400 hover:text-navy text-xs">
                  Clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-center" role="group" aria-label="Filter by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-sans font-semibold uppercase tracking-wider transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${
                    selectedCategory === cat ? "bg-navy text-gold" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center bg-bg-primary border border-slate-200 rounded p-12 space-y-4">
              <ShieldAlert className="w-12 h-12 text-gold mx-auto" />
              <h3 className="font-display text-lg text-text-dark font-semibold">No Gazette Posts Found</h3>
              <p className="font-sans text-xs text-text-body font-light max-w-sm mx-auto">
                {publicPosts.length === 0
                  ? "No Gazette posts have been published yet."
                  : `No posts match${searchTerm ? ` "${searchTerm}"` : ""}${selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}. Try resetting the filters.`}
              </p>
              {publicPosts.length > 0 && (
                <button
                  type="button"
                  onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                  className="px-5 py-2.5 bg-navy text-white text-[10px] uppercase font-sans font-semibold tracking-wider hover:bg-gold hover:text-navy"
                >
                  Reset Filters
                </button>
              )}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.slice(0, shown).map((post) => {
                  const hasLiked = !!liked[post.id];
                  return (
                    <article
                      key={post.id}
                      onClick={() => navigate((post.link || `/news-feed/${post.id}`) as RoutePath)}
                      className="bg-white border border-slate-200 hover:border-gold/60 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 rounded-sm cursor-pointer group overflow-hidden"
                    >
                      <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                        {post.image ? (
                          <CardMedia
                            media={post.image}
                            objectPosition={post.imagePosition}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-navy flex items-center justify-center"><Anchor className="w-8 h-8 text-gold/40" /></div>
                        )}
                      </div>
                      <div className="p-5 flex-1 flex flex-col gap-3">
                        <div className="flex justify-between items-center text-[10px] font-sans">
                          <span className="text-gold-dark uppercase tracking-[0.1em] font-semibold flex items-center space-x-1">
                            <Anchor className="w-3 h-3" />
                            <span>{post.category}</span>
                          </span>
                          <span className="text-slate-400 font-light flex items-center space-x-1">
                            <Calendar className="w-3.5 h-3.5 text-slate-300" />
                            <span>{post.date}</span>
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-semibold text-text-dark leading-snug line-clamp-2">{post.title}</h3>
                        <p className="font-sans text-xs text-text-body font-light line-clamp-3 leading-relaxed">{post.excerpt}</p>
                        <div className="mt-auto pt-3 border-t border-slate-100 flex justify-between items-center text-[10px] font-sans">
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); navigate((post.link || `/news-feed/${post.id}`) as RoutePath); }}
                            className="font-bold text-navy group-hover:text-gold-dark transition-colors inline-flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded-sm"
                          >
                            {post.link ? "View Event" : "Read Gazette Release"} <ArrowRight className="w-3 h-3" />
                          </button>
                          <div className="flex items-center gap-3">
                            {post.tags[0] && (
                              <span className="hidden sm:flex items-center gap-1 text-text-light">
                                <Tag className="w-3 h-3 text-gold-dark" />
                                <span className="uppercase text-[8px] font-bold">{post.tags[0]}</span>
                              </span>
                            )}
                            <button
                              type="button"
                              onClick={(e) => handleLike(post.id, e)}
                              aria-pressed={hasLiked}
                              title="Saved on this device"
                              className={`flex items-center gap-1 px-1.5 py-0.5 rounded-sm transition-colors ${hasLiked ? "text-rose-600 bg-rose-50" : "text-slate-400 hover:text-rose-600"}`}
                            >
                              <Heart className={`w-3.5 h-3.5 ${hasLiked ? "fill-current" : ""}`} />
                              <span>{hasLiked ? "Liked" : "Like"}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
              {filteredPosts.length > shown && (
                <div className="text-center mt-10">
                  <button
                    type="button"
                    onClick={() => setShown((n) => n + PAGE_SIZE)}
                    className="px-6 py-3 border border-navy text-navy hover:bg-navy hover:text-white font-sans text-[10px] uppercase tracking-widest font-semibold transition-colors"
                  >
                    Load More ({filteredPosts.length - shown} more)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Club Life & Recent Highlights (reuses Gazette posts with photos) */}
      {highlights.length >= 2 && (
        <section aria-label="Club life and recent highlights" className="px-4 sm:px-6 py-14">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <span className="font-sans text-[9px] uppercase tracking-widest text-gold font-semibold">In Pictures</span>
              <h2 className="font-display text-2xl sm:text-3xl text-text-dark font-light">Club Life & <span className="font-serif italic text-gold">Recent Highlights</span></h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {highlights.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => navigate((p.link || `/news-feed/${p.id}`) as RoutePath)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-sm text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                >
                  <CardMedia media={p.image} objectPosition={p.imagePosition} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                  <span className="absolute bottom-0 inset-x-0 p-3 font-display text-sm text-white leading-snug line-clamp-2">{p.title}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
