/* MoneyGuard — service worker: network-first, offline z cache */
const CACHE = 'moneyguard-2026-10-08g';
const ASSETS = ['./MoneyGuard.html', './manifest.json', './MoneyGuard-192.png', './MoneyGuard-512.png', './MoneyGuard-apple-touch.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return; // GitHub/Anthropic API bez cache
  e.respondWith(
    fetch(r).then(res => { const c = res.clone(); caches.open(CACHE).then(ca => ca.put(r, c)); return res; })
      .catch(() => caches.match(r).then(m => m || caches.match('./MoneyGuard.html')))
  );
});
