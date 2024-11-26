'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "89a13cf1d4906ce630568fe505d71554",
".git/config": "d92c424e3db1f86d872c54ba2ecafab1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d7c587fde8d2a9a19b2c09315f4af81d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9719e20f760282a6568390b58e02e8c3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "58e9180786ffb60d8247e2df9ea04b8a",
".git/logs/refs/heads/main": "2c7e78f7a555b58026a81bd024f4ffd1",
".git/logs/refs/remotes/origin/main": "f42aa6176326820cabd0c31b7fe367f7",
".git/logs/refs/remotes/origin/master": "3ecc4bca3d406931682b762310b1a3f9",
".git/objects/49/a85d357e3a31a41f9afd88a086132a5e5db1d8": "59598c8c977db293b3a0744700e60556",
".git/objects/65/a8664529c21915f99f043368b987a08642a153": "c73f2250816d68dba33b3a62b4d0b847",
".git/objects/81/8b9df6fc78033ac7d25a52486da5d87c4cec35": "4125a041fd7dc2fcaf737b29ef931283",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/92/436f397835d0f76baae852d933463fccfdaf59": "2aac265e13c3958c358d6c8a2d658dbf",
".git/objects/9e/902f1d9e9aba6d2249860da53f23aa56093983": "5b522bd1eddc4fd2b46cb7a6b8716981",
".git/objects/b2/72d154d5dbdf4f37dbc2fa53c698fb6b46cbe5": "b66cbf4d7b10f617f60b64da035a2a74",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/319e4e4b378b0e6b02d422266a6633058e7a43": "6eaab8eba2840b6aa41f89c2cbf98302",
".git/objects/e2/54f3ec039fb4fee591ddff466491b51c363b7b": "3af296911d3eb9736919cf629ea83edb",
".git/objects/eb/2e984b24a54a2c693edb1c29b1aff55fd8d3c3": "2d3eb77342578df09c6496966b92ee05",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/pack/pack-6e941c29f72cec51c24fd921c4adf845a5e06fb4.idx": "188e6e958ca6d6f18df5e817d3767d32",
".git/objects/pack/pack-6e941c29f72cec51c24fd921c4adf845a5e06fb4.pack": "b273c724c0e28df63ccabac43c3f58a5",
".git/objects/pack/pack-6e941c29f72cec51c24fd921c4adf845a5e06fb4.rev": "f92d42380a8790a3d9546a5001dcbd38",
".git/ORIG_HEAD": "faf85beeb077b5b90a51aac74a22b4dd",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "faf85beeb077b5b90a51aac74a22b4dd",
".git/refs/remotes/origin/main": "436841cc9f74bbc437472a7f61829f28",
".git/refs/remotes/origin/master": "95626e98d58a1efac4fd4662399bb647",
"assets/AssetManifest.bin": "fe3ab990947728bd382f914587836d24",
"assets/AssetManifest.bin.json": "1f01ef315b991772d37d577b92393859",
"assets/AssetManifest.json": "3559af9d60c9591eae13db20120eb3dc",
"assets/assets/icons/activity_light.svg": "400fa9a09f7c243f8bdbe8a0d6e16a87",
"assets/assets/icons/noimageperson.jpg": "39b3cb809fb8af679e542580c5d74076",
"assets/assets/icons/shopping_bag_light.svg": "d69b59f18d90ea55584d285c521f3e7b",
"assets/assets/images/building.png": "fe984c2d1849bc44a4c6119e6f1afbae",
"assets/assets/images/building_noimage.jpg": "e35dd31fd8929daa6efe9637ad8fcf01",
"assets/assets/images/logo.jpg": "67f30baa07c2ccc1eafe33627758082f",
"assets/assets/images/no_building.jpg": "fc864079d15ab1f941cf45d889bcf9dc",
"assets/assets/json/loader.json": "0b0b5bc00c9a9088a6d8d380e061a302",
"assets/assets/json/no_data.json": "c58a28072e06a08af13d2573df1d5d00",
"assets/assets/json/splash.json": "475e378b8ee981acf5f4be841b55785e",
"assets/FontManifest.json": "68d0efba7a612c68454428e10186d240",
"assets/fonts/MaterialIcons-Regular.otf": "a9cbcd100df7f651e66ce9a51ff854f6",
"assets/NOTICES": "0be1560169aeba585a2141f9ebc4b994",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/hugeicons/lib/fonts/hgi-stroke-rounded.ttf": "7b7e29353cabc1555d2720eb496b805e",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "8aab3f6bc725eee3cdbd5220f84a9e67",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "728fb32fe94a38f643f82bd0d44f9f1e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2dc1ebd1e08b15bc825ec3df31ae3d64",
"/": "2dc1ebd1e08b15bc825ec3df31ae3d64",
"main.dart.js": "d2bf0c3b25f4f540d51914a8e0136d00",
"manifest.json": "f033f926ff6342c35acf0782491477a7",
"version.json": "aa6fb56d89b046a75cc876504da5c8ad"};
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
