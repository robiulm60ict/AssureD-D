'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "015ba681f3bc7a5ad5ace1b80f14061a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "0c751b0713d2f504ea01ef11d188f690",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "df442a0bca6b9dbb9c50c774535dd781",
".git/logs/refs/heads/main": "01061b3be5c4c4104b5db0cd25f9eda7",
".git/logs/refs/remotes/origin/main": "371869c2075402a3f57ca830df01fb28",
".git/objects/01/583f2da088f5c90be3e9bf9c960b3e8d499170": "aafe97afbfb6fa5f2942ae7889351e21",
".git/objects/05/3727a6eba12019a7ca63be1926722eb318133a": "9e40e6195e1bdcd56e2d78ed5f0268a0",
".git/objects/0d/baa476a1d26f75ea51717af0c52c1ac84bcfee": "3b2213537409bd989b62befa7daf9a53",
".git/objects/0e/eedc5cba8c6ddc84adfabb915ba62dcfd16d9f": "1e2f45bd9503fbcf3f54bfe56c38dc63",
".git/objects/0f/8ffd6752fbd0334e53965f40ac53ff057bdac1": "73e80f23790986ea99f0021717bb0289",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/b95c43cedc3e1e493c243f241fafd3323f7d3b": "ac721c2a712036bc232f4d81dfa7a8b8",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/2c/6307eda089d744161628549b9ac1898f4ae050": "598c0cee4d9463801fefbe75866cd44f",
".git/objects/30/736fe95c52e7e838128771afce0da093add277": "ce664a30b7adf469fd163baa95daf01a",
".git/objects/32/fa82e49a69d785b8b72ab4b429d9b9566ba82c": "c0894a456eacb47d59a461ebfdde00e6",
".git/objects/36/2c753d219f956919b002892ba85b2081ff8877": "a5005e5c985c77c06926f23817e1f7cb",
".git/objects/3e/02141d13719d28b6ad37249655690a3d87ac73": "5fe990aa9b61d7af8d35a56e28fcb00c",
".git/objects/42/607d4ea4319e8b4b9a74650c2fe110eb834319": "00520abf7117b655f3b41ae397befe10",
".git/objects/43/17bae4645edcf794a5e457e1794dd52da6cc48": "453b002ec2df684d970eef59f28b3dac",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4d/d8fea8b783fa9a246c158d888fac15028f3de1": "8c5d4f1c493428442fd6d720cdf361f5",
".git/objects/4f/06c76c30a8236ace14b94b379d186b36aaec12": "3582758cf26dc808f0c740a28ded773d",
".git/objects/52/c0b2f6e60118a37f5a85583080fcdeac97a414": "4c0fdbaba32bb7c7afcb1525474da68f",
".git/objects/54/b7123fd75cfe14c844429f3e14967d5c5e431a": "3fd027893316a9dd4e6343c7229aa660",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/31458fdeff39f64799ff98d50526942fc73f4b": "3a79bc8cb72c0c7676ebe73529a75a06",
".git/objects/5e/49a264a9267293b5d5fe9f7e9492c18b95e3e1": "a70fcf8201f0f6002c907327a35a682a",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/3dfc0c6d20e6b1b8a509475901b105a48eb21b": "b99e6fd6e44f980d4c4ae85f0ae4d241",
".git/objects/6d/bd6dd484b5e903b18966fcf2e03e043f605a7d": "2627ecfd7deb732a0f3070535fc71ace",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/42078b515f2a226344fc1ad958d25cf9b2a13f": "60564d16cd7502dc412436d67a50ad7d",
".git/objects/77/919596129a6567cd2712b32bf5b7654bb2de7b": "ed4b235e449992c5787e1a17f0dd0cfa",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/a1e687d291177de6bcc340347c0d82d951161c": "10db7ca45e682cb1c5251ba4592bf9b6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/9e/4e9b6c8d904b98d6a1c1288f7c5ecc14a5f5ad": "473bc5b8e6a9c6be4b9e523bc81c8f50",
".git/objects/a0/df0126a78e87bc105e93109134b9f7530d943e": "64f0af74103437bb0d159ba1ee3f7ce9",
".git/objects/a6/a5fabde3387dc8f9c04a3e1f9ea25c89dc19c5": "3ab3474b2556b216a080bd4da8c651fc",
".git/objects/ad/745d06c9704a4739d3a59e94285618a9a7125f": "1652c266b8cb5ed2f21e1f123f551344",
".git/objects/b2/72d154d5dbdf4f37dbc2fa53c698fb6b46cbe5": "b66cbf4d7b10f617f60b64da035a2a74",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/1ebefbe07391741230114611dc233c71ffb3a8": "fcd4d07a2019e24453833c9f2c205f6f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/dfb25847231090eb49a3f8ffd9d97f06e60938": "25a075d69cb6e62f8d658c4faa46c299",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/1d857ae128955df2f9cec15b0f701433d2ecea": "d50897cc678a68c1745d2eb6af8c7cca",
".git/objects/be/4238f835c3f700524d1c0c28021dea75398a55": "033fe1cce78b185e01c0d5ece1d46895",
".git/objects/be/d2ac67c328cbf026d794cefda823ae3ee87cd3": "27f54b95214d3909bcdffa92c3246257",
".git/objects/c0/0c3892350156e7763eb4636fcf7fa382d5f847": "980128205209cba4cc2d3e7b19e3a5d3",
".git/objects/c0/2d9c6e0141bc502a443c57ef4ce79127195aa2": "119aa705c6efad023d4d47053186aa70",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/190e1b65f2a259d288610262024be8876d2dd1": "d967e4078cfd2a7d2be2403ce4dc12d2",
".git/objects/cb/9799d25dcd067b44dd7852e66b17c883499811": "02f638d3d85d058080336a5df494dccc",
".git/objects/ce/c2b16efd415bff62fe7848d3b0c76cef1c2341": "b4408a0d96f943848da5a56825de8693",
".git/objects/cf/abc839b5bfb80bb0fc76deda8c78b6ec4f8365": "dc39fa13f76f9c3551af24b0176abd5e",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e1/34a82342cb2c723f37c8b6a15823462ece6b5f": "c904b1548c18a83a25373a5d88f91e84",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/e4/3731dbadd833711143b41db4862af19baccf07": "a36104e42bd5d88607beb01fb4ad3fa7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/ef/17f5aadc8564cfe977e823c52904a07907d3d6": "53c2e932f103fe253472b12f8b127fce",
".git/objects/ef/60938ec011c88160eb3637756084c8c3b8d976": "3f4acaedf2f6d2b2147353537374294e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/439888bf0d4cecda6a4536200b9248d22ee78d": "369d9480a5524cc900ab383ff0574e06",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/fa/ae42e68a74e06c87cb04518edef8e0d958eb12": "0f6d38d606e36d6a052c5c28a1db33b4",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/fc/8263a8e421c83ebaee02c29ded03f59a25b353": "21863fed0d7dd10d70976cc322ecbd7c",
".git/objects/fc/a5388d6ea0ca116252d37ce1d580079b1b5c2e": "ac808a026371219e2797c59cc081d1e4",
".git/refs/heads/main": "76554bd81d71a223cc22f0dd802fb368",
".git/refs/remotes/origin/main": "76554bd81d71a223cc22f0dd802fb368",
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
"assets/NOTICES": "4f5143c14d038b17725603f8ecb6e791",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "5530dc96a013849f2739b2393d1b8102",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/hugeicons/lib/fonts/hgi-stroke-rounded.ttf": "7b7e29353cabc1555d2720eb496b805e",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e54a9a79c073729c988b779862f0748e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1b0f62ff4622905bf344d9102d94a2cb",
"/": "1b0f62ff4622905bf344d9102d94a2cb",
"main.dart.js": "f955e8123fcef0fea7e073b79e1291b7",
"manifest.json": "f033f926ff6342c35acf0782491477a7",
"version.json": "8fa435db0dbbc5446f4b15a8e1f0c340"};
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
