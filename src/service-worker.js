var version = 'v1';
this.addEventListener('install', function(event) {
  event.waitUntil(
    // Store these resources in the cache
    caches.open(version).then(function(cache) {
      return cache.addAll([
        '/',
        '/favicon.ico',
        '/apple-touch-icon.png',
        '/index.css'
      ]);
    })
  );
});
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      return response || fetch(event.request);
    })
  );
});
