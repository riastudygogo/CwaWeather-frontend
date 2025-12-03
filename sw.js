const CACHE_NAME = "ria-weather-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./img/favicon.svg",
  "./img/icon.png"
];

// 安裝時快取
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 開啟時從 cache 讀取
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
