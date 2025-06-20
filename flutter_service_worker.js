'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "959c4623658252ac7b7c65d400422f5a",
"version.json": "56122f5851473b69cdf1bdd59da57a69",
"index.html": "806aea3f4262d4b515c60a2aa9135360",
"/": "806aea3f4262d4b515c60a2aa9135360",
"main.dart.js": "f66b1c40381e534a9d6a8bbe16b9dce9",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"cors.json": "434eb804728f2a72969effd13fc48333",
"manifest.json": "49bb5aa8158a2f131641ce5b089e60cf",
".git/config": "aef2a73c5f71798ff742cb7de594c340",
".git/objects/59/2cba9ae81357dd17889707f8fcb0601962c3ed": "6986f7ef4b7f172ce04ee73a17937c22",
".git/objects/66/e0dae796062e9018188aa4107ef4b6e06785d3": "5e59545ff374cd7bd3405fd302c3aeac",
".git/objects/3e/ee4ed83de4bc6a46ded790ea7ea6e25df33d71": "82078bf0237c4830a686ed6118e8b0f8",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/04/20396550591bbc4f6d3d2f75a1522b1e90cb86": "6dcba220ee6ef661b0d08b4456dfd009",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/51/a46648fa32a65f810dd4313640d8fb219a1827": "168e08e09aa26b0a8fe261d88341cc89",
".git/objects/93/ae1266cc3435392c87c05b25de8233cb3ac7f7": "35b9128d86ccf44d57d25470a2359ddd",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/a4/94e1b69830dd97299d53d382aef8661749a5c6": "a262cd737cb279d5bb90034976fd90e0",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d0/d4f5e8d392fe7df453b4cb8eca3076ba64ce26": "c38e6a855d74906f6ddd0277eab285b2",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/d935253b177b593bf45212339bce65b8de176f": "05f782b8e2fe339ca307ce085e5802ca",
".git/objects/c6/58f516311be444954e5dff5c04756c71a618a1": "595e874bfca6221343eb807fc44925fb",
".git/objects/4e/e2ac4e7c81dce409ca7b92232bfd8dbb1447a8": "ce3dc5b18904351e94bf8062c3cc8eb7",
".git/objects/4e/0029bc97bd8881abc31ed98855652dc891e0ff": "59ed447d219849763e9e22ce7b24159a",
".git/objects/4b/60f9e94a88499035e9076f1d8d8206cdb37173": "9561a8052a21fd8d2ea1d902264d3f00",
".git/objects/7d/e155b8627819d87d38b4f3d2b7cf1c26b36720": "474311716efe0ead6b98662ff4c92169",
".git/objects/7d/f09501363b7b6a81f8c9cf5293e5d25953db60": "e21d1cacf77f3c8dd475970de9423706",
".git/objects/7c/fb0bd612d8c47edac4e4b1c414df9dcaaf9272": "7e3a6d9a778d4a0cf83538bda7440ae2",
".git/objects/1a/89f5ef23e6b5875d7e897c42de8c01d40b39ef": "abb1b5446ca07c5f2cee62739d56bd49",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/2a/a3e677f4dcf85de5a6ec8f01986b0335015158": "314985471410e333a4e390678303ad28",
".git/objects/6e/45288c55f73bd22b3bb51a86513acbdda4f388": "8d19de1d1ea686252130ba3dc307f1f7",
".git/objects/31/7e5c29d1560f09bb028f5a34ffc38678201a28": "bec16f314c0225fcc62cc2e4d5df7f49",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/29ad826e812b5036a2ad50cac3ee46f2930bb3": "1d7c72d009f1ddb59985b02e5fba9d0d",
".git/objects/5e/f16cee5df39575246c96f6557c2810817705c6": "cd4d2b1cba00f89836f3a6213a018539",
".git/objects/55/21bd8e9a79ca0a8b0f8ef4454f6f841f6abb9a": "40bf91fdce2854738d11b63af5ffa7d8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/57c1c720af7c83ba38bea9c50ed680eb5cb785": "b6da64121a5ae409209aaa0b41ab75dd",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/b6/f13eb5924d14e160c8b9aa4f0103ca04614c30": "728aefcc880fb1c7f932333b85160fa8",
".git/objects/d2/9c694e9a749928769c557fa09491f1167358b9": "39f8c9c0d621ff54f05e7ab4399ff467",
".git/objects/af/2f7fa1975e3979dd38154db97980db55657c53": "52bfdbd4538bcfea299c5b2c7d6f4eb4",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ea/57d3a712b920c0f327e11dccaed3e0c95f5a5c": "6d73ade88904665c642d49e43703c06e",
".git/objects/f0/2d4253487cc4dfb39fc3c3735e5de3c3593d7e": "edb1f65e2090515febfcf17eee4ec20b",
".git/objects/e8/59cf0203ea70b41774ce27466f03094338ea66": "6e1de63ecdbf152536719de03b10eb04",
".git/objects/ce/7aee40b9f27f36ed2cb3d62774aca14760fdbc": "8a102bd70cc274b744ded53beadccb44",
".git/objects/1b/3b36e0cafaf3df4d8d62597c188ea8f8ce989d": "20742466021de91f89986327cdc7e5f1",
".git/objects/24/6758f1d7987faa43b956f192492441228e6e8b": "1d70c41330a6f79e08f3efca2fcc7bf5",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/1d/e1b4bba431e811bebac52324844e7b9532160e": "add6a64ac441586f47ca1e1d63dcfc4f",
".git/objects/1c/ed4cbb3a27de9955393a2d80f0d808cefbe625": "aa4a777a675dada565bca1e331f6c6bf",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "90138a67634b52fbef571db44a18a46a",
".git/logs/refs/heads/main": "90138a67634b52fbef571db44a18a46a",
".git/logs/refs/remotes/origin/main": "50d1668f48e12976ebae0aacf5ec10e4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1ff00c53062ad4129dd7b9730ca24da0",
".git/refs/remotes/origin/main": "1ff00c53062ad4129dd7b9730ca24da0",
".git/index": "c42d82306a3095b59550db0b17e23950",
".git/COMMIT_EDITMSG": "0dc8946d1d1aeb985289bdb079572c44",
"assets/AssetManifest.json": "38fc3b4ca1803f2b445efb600690a6f7",
"assets/NOTICES": "04b12903590691218eec20bc477bab9c",
"assets/FontManifest.json": "8d0976ef776204204d1ea8f915083cf0",
"assets/AssetManifest.bin.json": "b6d6ec086a82190cf7e3220642e45887",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "232ce7b5c092b3194ae885681064aefd",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/MaterialIcons-Regular.otf": "3f9353e5a1706a13b82b64d63e4b74c5",
"assets/assets/images/12.png": "8d9696c3521c2e8be52ac2cd0ab64169",
"assets/assets/images/11.png": "7e2c37d00e52c42631c41abcea7e712c",
"assets/assets/images/english/teachers.json": "6a5c9fdb8b8ca21b305181fbb3327941",
"assets/assets/images/logo.png": "aef53e4bb69728aabeac198e6d266f61",
"assets/assets/images/logo.jpeg": "b5cb2c017942da8f4da4f4031061ffe4",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
