// TODO:

this.addEventListener('install', (event) => {
     event.waitUntil(
          caches.open('v1').then((cache) => {
               return cache.addAll([
                    '/pwa-photobooth/',
                    '/pwa-photobooth/index.html',
                    '/pwa-photobooth/manifest.json'
               ])
                    .then(() => {
                         console.log('Success! App is available offline!');
                    })
          })
     );
});

self.addEventListener('fetch', (event) => {
     event.respondWith(
          caches.match(event.request)
               .then((response) => {
                    return response || fetch(event.request);
               })
     );
});