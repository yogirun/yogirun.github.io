/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.1.0/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "ambassadors.html",
    "revision": "c91f2b2bc7fc850abd41b22bdc5a1999"
  },
  {
    "url": "favicon.png",
    "revision": "da0da0bc1d2cd21d4e2cd780eb0c5d3e"
  },
  {
    "url": "index.html",
    "revision": "5e6aadd1facb480525eb12670d451f2d"
  },
  {
    "url": "manifest.json",
    "revision": "265ed8585d74d4695dbad30076932275"
  },
  {
    "url": "partners.html",
    "revision": "5fa07335ac4f7faa145f5fe33ed9a92a"
  },
  {
    "url": "upload.html",
    "revision": "6b78bd9ecb85333508426ade277ba436"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
