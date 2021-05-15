{
var CACHE_NAME = 'static-v1';
self.addEventListener('install', function (event){
    event.waitUnitil(
        caches.open(CACHE_NAME).then(function(cache){
            return cache.addAll([
                '/',
                '/index.html',
                '/estilo.css',
                '/app.js',
                '/manifest.json',
                '/vetor.js'
                
            ]);

        })

    )
});

var CACHE_NAME = 'static-v1';

self.addEventListener('activate', function activator(event){
    event.waitUntil(
        caches.keys().then(function(keys){
            return promise.all(keys
                .filter(function (key){
                return key.indexof(CACHE_NAME) !== 0;
            })
            .map(function (key){
                return caches.delete(key);
            })
            );
        })
    );
});

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(function (cachedResponse){
            return cacheResponse || fetch(event.request);      
            })
    );
});

}
