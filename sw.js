const CACHE='meishi-pocket-ocr-v11';
const SHELL=['./','./index.html','./icon.png','./manifest.webmanifest','./ocr/tesseract.min.js','./ocr/worker.min.js'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(async cache=>{for(const p of SHELL){try{await cache.add(p)}catch(e){console.warn('cache failed:',p,e)}}}));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('meishi-pocket-')&&key!==CACHE)await caches.delete(key);await self.clients.claim()})())});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||new URL(req.url).origin!==location.origin)return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE), cached=await cache.match(req);
  if(cached)return cached;
  try{const res=await fetch(req);if(res.ok)cache.put(req,res.clone()).catch(()=>{});return res}
  catch(e){if(req.mode==='navigate')return await cache.match('./index.html')||Response.error();throw e}
 })());
});
