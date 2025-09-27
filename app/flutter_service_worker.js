'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e8870767a388999c9bba02aa0e386f2e",
"assets/AssetManifest.bin.json": "e4f3b629a4c5a6955d087d22f16c61ce",
"assets/AssetManifest.json": "6b05f2fb88004c870efcce003df9e691",
"assets/assets/categories/dairy/happycowcheese.jpg": "3a0b645833762c65ed0baa2369e4e346",
"assets/assets/categories/snacks/munchee-cheesecracker.webp": "3e0c87593e15b9131b75a6da949d24a6",
"assets/assets/categories/snacks/munchee-chocolatepuff.jpg": "a4e9e5ed4b543d5b7991251d8b8cb123",
"assets/assets/categories/snacks/munchee-chocolatesbiscuit.webp": "f074d1b2392b5293d05972350bfcbfb5",
"assets/assets/categories/snacks/munchee-chocolatesmarie.jpeg": "6f2d7adfbdf70f812c15ef682bd5e7cd",
"assets/assets/categories/snacks/munchee-chocshok.jpeg": "c405e2c7357e7166012d6f11488d2e01",
"assets/assets/categories/snacks/munchee-custardcream.webp": "db200602e705a220b1b2674c81291e63",
"assets/assets/categories/snacks/munchee-gingerbiscuit.webp": "ab2ff4d40f94d0bd5c4b7da2efc2bbae",
"assets/assets/categories/snacks/munchee-moringacrackerbiscuit.jpg": "34061ab8512cbeeefa6873c91a4c234d",
"assets/assets/categories/snacks/munchee-nicebiscuit.webp": "9a5a8571d06a722792469e1047b118fb",
"assets/assets/categories/snacks/munchee-potatocracker.webp": "34d6717032b2f9deed433838e655f632",
"assets/assets/categories/snacks/munchee-tifin.jpg": "1c3e25f7789f5fda7bdb42e71b95bf05",
"assets/assets/categories/snacks/risbary-chocomo.jpeg": "76a7ba0012f7ca27b7b6a8dfe82f17ac",
"assets/assets/categories/snacks/risbary-chunkeychok.jpeg": "481704a25cefb7412903d0e1d0c61f67",
"assets/assets/categories/vegetables/broccoli.jpg": "b7225bea3b3ab801472e40a72e8cfa8e",
"assets/assets/categories/vegetables/cabbage.jpeg": "492646468e6ea7db04d65ad5ff20c7fe",
"assets/assets/categories/vegetables/cauliflower.jpg": "65d6bd1684de0ad455d3d00dab5b037c",
"assets/assets/categories/vegetables/celery.jpg": "a5f6e26599a6d77e1558c42718cc9f84",
"assets/assets/categories/vegetables/corn.jpg": "966c142ca6c83df20880577e221dbdcd",
"assets/assets/categories/vegetables/cucumbers.jpg": "a9b4553090eca67cec398b483cc8be73",
"assets/assets/categories/vegetables/eggplants.jpg": "e65a960bdb837f456ddbd76132543524",
"assets/assets/categories/vegetables/garlic.jpg": "ca58c1f57d333178a9afe4c663afd17b",
"assets/assets/categories/vegetables/lettuce.jpg": "8307ec1786ab61f799bac746d9d2b2a9",
"assets/assets/images/barcode.jpg": "c948a18f82037d5d82675788019ab202",
"assets/assets/images/day_closing.jpg": "2acb19b3810ab3697a6cc65d250f3683",
"assets/assets/images/item_stock.jpg": "6acf064701210f76dcb7d7e98f846784",
"assets/assets/images/logo.jpg": "dd3ac61991e7e51a2252f38ade5c00bc",
"assets/assets/images/logout_button.jpg": "8ab295ed237605085ac57da2351d62bd",
"assets/assets/images/muser.jpg": "1c03ee8a7b95165edca508af90d584c9",
"assets/assets/images/sales_pos.jpg": "6d2754a88493f973f973260c683a3111",
"assets/assets/images/socialmedia.jpg": "0202e52518be88fa450dd2072445cc09",
"assets/assets/images/suppliers.jpg": "70ef06e9a076296997cf54c837fc0b5c",
"assets/assets/images/users.jpg": "abb4530aeb84110a5a3bce2198ca252e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "80d8ddd5038827ebf8565df8914144c6",
"assets/NOTICES": "4b56e4961dacce798826f4f5e4725f49",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "2d54e3e7c0ef099a0c6ce47560f935df",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5fe3227710d4d430905c3afc123ab9b4",
"/": "5fe3227710d4d430905c3afc123ab9b4",
"main.dart.js": "f820f4b2d256ad430fc9becfde7372f0",
"manifest.json": "279e2009d4c15ccb414b4c2604f1d532",
"version.json": "8902f623e59b00191c3594fe9a9f904d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
