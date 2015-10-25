var version = 'v1';
this.addEventListener('install', function(event) {
  event.waitUntil(
    // Store these resources in the cache
    caches.open(version).then(function(cache) {
      return cache.addAll([
        '/',
        '/favicon.ico',
        '/apple-touch-icon.png',
        '/vendor.css',
        '/app.css',
        '/vendor.js',
        '/app.js'
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
// this.addEventListener('fetch', function(event) {
//   var response;
//   event.respondWith(
//     // Respond to fetch with a resource from the cache
//     caches.match(event.request)
//
//     // If that fails:
//     // Respond to fetch with a resource from the network
//     .catch(function() {
//       return fetch(event.request);
//     })
//     // Cache network resource so it’s available in the future
//     // .then(function(r) {
//     //   response = r;
//     //   caches.open('v1').then(function(cache) {
//     //     cache.put(event.request, response);
//     //   });
//     //   return response.clone();
//     // })
//
//     // If everything fails:
//     // Respond to fetch with fallback
//     // .catch(function() {
//     //   return new Response('data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
//     // })
//   );
// });
