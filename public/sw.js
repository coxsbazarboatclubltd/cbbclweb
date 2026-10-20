// CBBCL service worker.
// Pages are always fetched fresh (network-first) so a new deployment never shows a stale page whose
// code files no longer exist (that showed a blank page until a hard refresh). Cached copies are only
// an offline fallback. Hashed build files under /assets never change, so those are served from cache.
const CACHE_NAME = "cbbcl-cache-v2";
const OFFLINE_URL = "/offline.html";

// The site lives on www.cbbcl.org; the bare cbbcl.org redirects there. Browsers that installed this
// worker on cbbcl.org before the move were stuck on an old copy (a redirected sw.js can't update it)
// and showed a blank page. On cbbcl.org this version clears its caches, removes itself and reloads
// the tab, which then follows the redirect to www.cbbcl.org.
const RETIRED_HOST = self.location.hostname === "cbbcl.org";

const ASSETS_TO_CACHE = [
  "/offline.html",
  "/favicon.svg",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/android-chrome-192x192.png",
  "/site.webmanifest"
];

self.addEventListener("install", (event) => {
  if (RETIRED_HOST) {
    event.waitUntil(self.skipWaiting());
    return;
  }
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE)).then(() => self.skipWaiting())
  );
});

// Drop older caches (including stale saved pages), take control, and reload open tabs once so any
// tab stuck on a blank page from the old cache-first behaviour recovers by itself.
self.addEventListener("activate", (event) => {
  if (RETIRED_HOST) {
    event.waitUntil(
      caches.keys()
        .then((names) => Promise.all(names.map((n) => caches.delete(n))))
        .then(() => self.registration.unregister())
        .then(() => self.clients.matchAll({ type: "window" }))
        .then((clients) => Promise.all(clients.map((client) => client.navigate(client.url).catch(() => {}))))
    );
    return;
  }
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: "window" }))
      .then((clients) => Promise.all(clients.map((client) => client.navigate(client.url).catch(() => {}))))
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (RETIRED_HOST || request.method !== "GET") return;

  const url = new URL(request.url);
  // Leave other sites, the API, dev tooling and partial (Range) media requests to the browser.
  if (url.origin !== self.location.origin || url.pathname.startsWith("/api") || ioRelated(url) || request.headers.has("range")) {
    return;
  }

  // Pages: network first, offline page as a fallback.
  if (request.mode === "navigate") {
    event.respondWith(fetch(request).catch(() => caches.match(OFFLINE_URL)));
    return;
  }

  // Hashed build files: cache first (their names change whenever their content does).
  if (url.pathname.startsWith("/assets/")) {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request).then((response) => {
        if (response && response.status === 200 && response.type === "basic") {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      }))
    );
    return;
  }

  // Everything else (public files such as icons, sitemap, share image): network first, cache when offline.
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.status === 200 && response.type === "basic") {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() => caches.match(request))
  );
});

function ioRelated(url) {
  return url.pathname.includes("socket.io") || url.pathname.includes("@vite") || url.pathname.includes("hot-update");
}

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
