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
                '/src/pages/10strafuebernahme.html',
                '/src/buttonSymbols/1Sühnedeckel.png',
                '/src/buttonSymbols/2Sündenbock.png',
                '/src/buttonSymbols/3Ende der Rache.png',
                '/src/buttonSymbols/4Passalamm.png',
                '/src/buttonSymbols/5Lösegeld.png',
                '/src/buttonSymbols/6Bronzeneschlange.png',
                '/src/buttonSymbols/7SiegerüberTeufel.png',
                '/src/buttonSymbols/8Fluch.png',
                '/src/buttonSymbols/9Martyrer.png',
                '/src/buttonSymbols/10Strafübernahme.png',
                '/src/icons/icon-192x192.png',
                '/src/icons/icon-512x512.png',
                '/src/icons/icon-1024x1024.png'
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