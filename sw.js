self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('pwa-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/styles/styles.css',
                '/pages/page1.html',
                '/pages/page2.html',
                '/pages/page3.html',
                '/pages/page4.html',
                '/pages/page5.html',
                '/pages/page6.html',
                '/pages/page7.html',
                '/pages/page8.html',
                '/pages/page9.html'
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