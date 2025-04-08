self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('pwa-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/styles/styles.css',
                '/src/pages/1suehnedeckelsuehneopfer.html',
                '/src/pages/2suendenbockasasel.html',
                '/src/pages/3endederrache.html',
                '/src/pages/4passalamm.html',
                '/src/pages/5loesegeld.html',
                '/src/pages/6bronzeneschlange.html',
                '/src/pages/7siegerueberteufel.html',
                '/src/pages/8fluch.html',
                '/src/pages/9maertyrer.html',
                '/src/pages/10strafuebernahme.html'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});