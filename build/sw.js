importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
        }),
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
      ],
    }),
  );

workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "3c639729f0a74e77c0993c0b9c568c9a"
  },
  {
    "url": "index.html",
    "revision": "79855a21c8006795a0cb6989a89a5c80"
  },
  {
    "url": "js/app.js",
    "revision": "57ad639cf37eca669479bb8755dce7a8"
  }
]);