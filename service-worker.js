const CACHE = "compile-companion-v11";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./version.json",
  "./backgrounds/ambush.webp",
  "./backgrounds/apathy.webp",
  "./backgrounds/assimilation.webp",
  "./backgrounds/diversity.webp",
  "./backgrounds/envy.webp",
  "./backgrounds/fire.webp",
  "./backgrounds/fulcrum.webp",
  "./backgrounds/gluttony.webp",
  "./backgrounds/greed.webp",
  "./backgrounds/kvDDXIIw.webp",
  "./backgrounds/lust.webp",
  "./backgrounds/momentum.webp",
  "./backgrounds/nova.webp",
  "./backgrounds/overwhelm.webp",
  "./backgrounds/sloth.webp",
  "./backgrounds/speed.webp",
  "./backgrounds/unity.webp",
  "./backgrounds/wrath.webp"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  const coreFiles = [
    "/index.html",
    "/app.js",
    "/style.css",
    "/manifest.webmanifest",
    "/version.json"
  ];

  const isNavigation = event.request.mode === "navigate";
  const isCoreFile = coreFiles.some(path => url.pathname.endsWith(path));

  // Core app files are network-first so GitHub Pages updates replace
  // old cached app code promptly. Cache is only the offline fallback.
  if (isNavigation || isCoreFile) {
    event.respondWith(
      fetch(event.request, { cache: "no-store" })
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request).then(cached => cached || caches.match("./index.html")))
    );
    return;
  }

  // Other static assets remain cache-first for fast offline use.
  event.respondWith(
    caches.match(event.request).then(cached =>
      cached || fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
        return response;
      })
    )
  );
});
