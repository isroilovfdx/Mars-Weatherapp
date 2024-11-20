const CACHE_NAME = 'your-app-cache';
const urlsToCache = [
    './index.html',
    './main.html',
    './style.css',
    './script.js',
    './8504201-removebg-preview.png',
    './images/**.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
