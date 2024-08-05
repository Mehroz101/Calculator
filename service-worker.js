const CACHE_NAME = 'price-calculator-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './styles/style.css',
  './js/app.js'
];

self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker caching files');
      return cache.addAll(urlsToCache);
    }).catch((error) => {
      console.error('Cache open failed:', error);
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.startsWith(self.location.origin)) {
    console.log('Service Worker fetching:', event.request.url);
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          console.log('Cache hit:', event.request.url);
          return response;
        }
        console.log('Cache miss:', event.request.url);
        return fetch(event.request);
      }).catch((error) => {
        console.error('Fetch failed:', error);
      })
    );
  }
});
