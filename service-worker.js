const CACHE = "compile-companion-v21-2-5";
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
  "./fonts/Cardot-Regular.otf",
  "./fonts/Cardot-Semibold.otf",
  "./protocol-art/compiled/spirit.webp",
  "./protocol-art/compiled/death.webp",
  "./protocol-art/compiled/fire.webp",
  "./protocol-art/compiled/metal.webp",
  "./protocol-art/compiled/apathy.webp",
  "./protocol-art/compiled/gravity.webp",
  "./protocol-art/compiled/water.webp",
  "./protocol-art/compiled/light.webp",
  "./protocol-art/compiled/plague.webp",
  "./protocol-art/compiled/hate.webp",
  "./protocol-art/compiled/darkness.webp",
  "./protocol-art/compiled/life.webp",
  "./protocol-art/compiled/psychic.webp",
  "./protocol-art/compiled/speed.webp",
  "./protocol-art/compiled/love.webp",
  "./protocol-art/compiled/chaos.webp",
  "./protocol-art/compiled/clarity.webp",
  "./protocol-art/compiled/corruption.webp",
  "./protocol-art/compiled/luck.webp",
  "./protocol-art/compiled/diversity.webp",
  "./protocol-art/compiled/courage.webp",
  "./protocol-art/compiled/fear.webp",
  "./protocol-art/compiled/ice.webp",
  "./protocol-art/compiled/mirror.webp",
  "./protocol-art/compiled/unity.webp",
  "./protocol-art/compiled/time.webp",
  "./protocol-art/compiled/war.webp",
  "./protocol-art/compiled/peace.webp",
  "./protocol-art/compiled/smoke.webp",
  "./protocol-art/compiled/assimilation.webp",
  "./protocol-art/compiled/wrath.webp",
  "./protocol-art/compiled/envy.webp",
  "./protocol-art/compiled/ambush.webp",
  "./protocol-art/compiled/fulcrum.webp",
  "./protocol-art/compiled/flexible.webp",
  "./protocol-art/compiled/pride.webp",
  "./protocol-art/compiled/gluttony.webp",
  "./protocol-art/compiled/sloth.webp",
  "./protocol-art/compiled/overwhelm.webp",
  "./protocol-art/compiled/inert.webp",
  "./protocol-art/compiled/nova.webp",
  "./protocol-art/compiled/greed.webp",
  "./protocol-art/compiled/lust.webp",
  "./protocol-art/compiled/momentum.webp",
  "./protocol-art/compiled/rigid.webp",
  "./protocol-art/uncompiled/spirit.webp",
  "./protocol-art/uncompiled/death.webp",
  "./protocol-art/uncompiled/fire.webp",
  "./protocol-art/uncompiled/metal.webp",
  "./protocol-art/uncompiled/apathy.webp",
  "./protocol-art/uncompiled/gravity.webp",
  "./protocol-art/uncompiled/water.webp",
  "./protocol-art/uncompiled/light.webp",
  "./protocol-art/uncompiled/plague.webp",
  "./protocol-art/uncompiled/hate.webp",
  "./protocol-art/uncompiled/darkness.webp",
  "./protocol-art/uncompiled/life.webp",
  "./protocol-art/uncompiled/psychic.webp",
  "./protocol-art/uncompiled/speed.webp",
  "./protocol-art/uncompiled/love.webp",
  "./protocol-art/uncompiled/chaos.webp",
  "./protocol-art/uncompiled/clarity.webp",
  "./protocol-art/uncompiled/corruption.webp",
  "./protocol-art/uncompiled/luck.webp",
  "./protocol-art/uncompiled/diversity.webp",
  "./protocol-art/uncompiled/courage.webp",
  "./protocol-art/uncompiled/fear.webp",
  "./protocol-art/uncompiled/ice.webp",
  "./protocol-art/uncompiled/mirror.webp",
  "./protocol-art/uncompiled/unity.webp",
  "./protocol-art/uncompiled/time.webp",
  "./protocol-art/uncompiled/war.webp",
  "./protocol-art/uncompiled/peace.webp",
  "./protocol-art/uncompiled/smoke.webp",
  "./protocol-art/uncompiled/assimilation.webp",
  "./protocol-art/uncompiled/wrath.webp",
  "./protocol-art/uncompiled/envy.webp",
  "./protocol-art/uncompiled/ambush.webp",
  "./protocol-art/uncompiled/fulcrum.webp",
  "./protocol-art/uncompiled/flexible.webp",
  "./protocol-art/uncompiled/pride.webp",
  "./protocol-art/uncompiled/gluttony.webp",
  "./protocol-art/uncompiled/sloth.webp",
  "./protocol-art/uncompiled/overwhelm.webp",
  "./protocol-art/uncompiled/inert.webp",
  "./protocol-art/uncompiled/nova.webp",
  "./protocol-art/uncompiled/greed.webp",
  "./protocol-art/uncompiled/lust.webp",
  "./protocol-art/uncompiled/momentum.webp",
  "./protocol-art/uncompiled/rigid.webp",
  "./game-engine.js",
  "./game-ui.js",
  "./game-data/cards-main1-aux1-main2-aux2.json",
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache =>
      Promise.allSettled(
        ASSETS.map(asset =>
          fetch(asset, { cache: "reload" })
            .then(response => {
              if (!response.ok) throw new Error(`Failed to fetch ${asset}`);
              return cache.put(asset, response);
            })
        )
      )
    )
  );
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
