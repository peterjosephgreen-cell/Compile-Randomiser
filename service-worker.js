const CACHE = "compile-companion-v17";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./compile-logo.png",
  "./compile-mark.png",
  "./version.json",
  "./protocol-art/apathy.webp",
  "./protocol-art/chaos.webp",
  "./protocol-art/darkness.webp",
  "./protocol-art/death.webp",
  "./protocol-art/fire.webp",
  "./protocol-art/gravity.webp",
  "./protocol-art/hate.webp",
  "./protocol-art/life.webp",
  "./protocol-art/light.webp",
  "./protocol-art/love.webp",
  "./protocol-art/metal.webp",
  "./protocol-art/plague.webp",
  "./protocol-art/psychic.webp",
  "./protocol-art/spirit.webp",
  "./protocol-art/water.webp",
  "./main3/art/ambush.webp",
  "./main3/art/envy.webp",
  "./main3/art/fulcrum.webp",
  "./main3/art/gluttony.webp",
  "./main3/art/greed.webp",
  "./main3/art/lust.webp",
  "./main3/art/momentum.webp",
  "./main3/art/nova.webp",
  "./main3/art/overwhelm.webp",
  "./main3/art/pride.webp",
  "./main3/art/sloth.webp",
  "./main3/art/wrath.webp",
  "./main3/icons/ambush.webp",
  "./main3/icons/envy.webp",
  "./main3/icons/fulcrum.webp",
  "./main3/icons/gluttony.webp",
  "./main3/icons/greed.webp",
  "./main3/icons/lust.webp",
  "./main3/icons/momentum.webp",
  "./main3/icons/nova.webp",
  "./main3/icons/overwhelm.webp",
  "./main3/icons/pride.webp",
  "./main3/icons/sloth.webp",
  "./main3/icons/wrath.webp",
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
  "./protocol-art/flexible.webp",
  "./protocol-art/ice.webp",
  "./protocol-art/inert.webp",
  "./protocol-art/luck.webp",
  "./protocol-art/mirror.webp",
  "./protocol-art/peace.webp",
  "./protocol-art/rigid.webp",
  "./protocol-art/smoke.webp",
  "./protocol-art/time.webp",
  "./protocol-art/war.webp",
  "./protocol-art/clarity.webp",
  "./protocol-art/courage.webp",
  "./protocol-art/fear.webp",
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
