// Mon héroïne — fonctionne aussi sans réseau (la synchro reprend au retour d'internet)
var CACHE = 'monheroine-v11';
var FILES = ['./', './index.html', './manifest.json', './firebase-config.js', './icon-192.png', './icon-512.png'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); })); self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (k) { return Promise.all(k.filter(function (x) { return x !== CACHE; }).map(function (x) { return caches.delete(x); })); })); self.clients.claim(); });
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(function (r) { var c = r.clone(); caches.open(CACHE).then(function (ca) { ca.put(e.request, c); }); return r; }).catch(function () { return caches.match(e.request).then(function (r) { return r || caches.match('./index.html'); }); }));
});
