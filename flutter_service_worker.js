'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e2953048c1b93481aa0713f0cbfbfff0",
".git/config": "a13340fc573381e639792ddc3e4f164a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d67b890eab6ea0aa68d181171b3e4bf5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4eb132f6431b0db4d1db8f44761380a3",
".git/logs/refs/heads/master": "4eb132f6431b0db4d1db8f44761380a3",
".git/logs/refs/remotes/origin/master": "a09a1d7371056e6dc9df0fed17a52cc6",
".git/objects/06/13859947f221c8846d9ff650142c13378cc3b7": "2b4f4ff698962b1e8919f7fc9b00a91c",
".git/objects/11/9c545edecc22d1f362caff000f0e0d4dbe1b8a": "832b2627a73beb405dfc39d902aa4090",
".git/objects/18/b8aea3b732460d13bb8cb7de812dbae7e9ee84": "2b753d8a768dd494db332f7e4cb55fbf",
".git/objects/20/e1c5d3593ac2899bb8ded133ef4c77eeb37a0c": "433abe277cdcac17e50b6526ab316076",
".git/objects/27/1d7e9e0ac4bfa6e4a2360cf9675bca73b84009": "6741143eebde5a581650d714b4f76e58",
".git/objects/2d/3f55551bf4f46fe09cdda3c8ef74b7ce08c33a": "b1a7e91f8e6b8575a4845d80030ebcdd",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/74aca03058e66d3a2cae074f0bcbd73466aad5": "e8b1edf59bc40d4f94d3776b88705612",
".git/objects/41/160bf100863241c0aa708aaff3f76e5f1a28a3": "3c8c32f35d59d7b9c77b547cb3cf5b58",
".git/objects/50/f1173de51dca18ad423658231e44a4104e0c65": "d4ae9bd54a47db394e42ae64fb3d273e",
".git/objects/51/fcc39906b9b2291606a28aae897f5148d78316": "33339388db3e22faf114615326354296",
".git/objects/56/5375773523cf29adce38a9fbf71a3badf2082c": "70d703d36ac9509bf7b0ca7e7091965b",
".git/objects/56/e0b4b9275fbb344406390ea50e0050c2402090": "d4e4b3824c6820bf3ffcb24557d1860d",
".git/objects/69/426a3eb5660eda166c828d3606ab7bcbc46133": "7da808d7000a78d98574f3bffef3c708",
".git/objects/6c/47ca111bb88e49372a7ebe5d4508a2aac9ed94": "718c1f11ebac364f9925f43b0d772c09",
".git/objects/72/1147d8311f1bed1bab5e39c18254beedcaf0ab": "a05bf2ece9218225d1647c8fb16a836f",
".git/objects/76/be6252b91e87ab5ead604b99d6945c13869f08": "6992fb0e4b587d22f9d9c27f87adfcc1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/16a0f0f5947925f4f93bc96ebb52f387f8b2b1": "be104a88f747457d238fc0a41815750a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/fd6a12d0e20d7010b196e425ca48b0b5286df2": "83ed96d663ab2dcb9e388c8c4cd2157d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/f073690d3ffe5c251c690e4488af8a4fb441e4": "04519e93d669ab4885bfa84e892971a0",
".git/objects/a6/988c3c31c15ded0e4bee298e377fcf914ae8f4": "f5e91eafda9c1701891428f0068c18bf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/ce455ac324729a91a7f1b37075b1c21a91639a": "41c87efbfda33aa7fee7c931b070c0cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ca/90de9d20466d812eecf53ed58fa42822973ef6": "672c8e4dc89bac2997cce9c9630149e8",
".git/objects/d4/cb10f7731036570cd62343292083c8fe77f287": "9f413a2382eacfbde15c907fca54748a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/4d0004a8bac5cdeb8032fe46d02bdbc17096af": "cf6985873a413169576a29e4215e9fd9",
".git/objects/dd/b279290ba32b02722d7bee592d7df22a16e86f": "b7e69c861090b631fe44dc059ec419e4",
".git/objects/de/fe102662ebee87dbb78f883f61527ec847e070": "8e0428fd427fa93eb3dffbeefffefd3b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/8b84ce87fa0bb23d2267cb20789cb560b753d5": "94000372febb7e352d220b1f18ea4721",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/objects/fc/71dea59f69b4b26dfa8963751a12a11171f67f": "87010b0e84e86abc3e14af6884763b2e",
".git/refs/heads/master": "dd16925e7ef704c21092331527de8be6",
".git/refs/remotes/origin/master": "dd16925e7ef704c21092331527de8be6",
"assets/AssetManifest.json": "99d0c9f3eb70cf17e189b619ab4eaf4f",
"assets/FontManifest.json": "b80df75855f201b768ae38a64ccb627d",
"assets/fonts/Inter-Black.ttf": "5f2ce7df2a2e8570f4c32a44414df347",
"assets/fonts/Inter-Bold.ttf": "91e5aee8f44952c0c14475c910c89bb8",
"assets/fonts/Inter-ExtraBold.ttf": "bd9525f1099e9f5845f6aef2956e9fb8",
"assets/fonts/Inter-ExtraLight.ttf": "909744bbb5a7ede41ce522a1507e952c",
"assets/fonts/Inter-Light.ttf": "6ffbefc66468b90d7af1cbe1e9f13430",
"assets/fonts/Inter-Medium.ttf": "5ff1f2a9a78730d7d0c309320ff3c9c7",
"assets/fonts/Inter-Regular.ttf": "515cae74eee4925d56e6ac70c25fc0f6",
"assets/fonts/Inter-SemiBold.ttf": "ec60b23f3405050f546f4765a9e90fec",
"assets/fonts/Inter-Thin.ttf": "35b7cf4cc47ac526b745c7c29d885f60",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/SpaceMono-Bold.ttf": "450f757ba22bf3eb9f839eb26287398a",
"assets/fonts/SpaceMono-BoldItalic.ttf": "97244ddaccbf325073da7af362e2cb5f",
"assets/fonts/SpaceMono-Italic.ttf": "233cc83beb6682c47f0d6a3ea129428f",
"assets/fonts/SpaceMono-Regular.ttf": "52eb73dbce8bf4083a59acc2e91699ad",
"assets/images/mongodb.png": "e4d7a7bf78071f28d4045a7ec13ccbd2",
"assets/images/neo4j.png": "7dd51db937f86824482e764a77ff5a55",
"assets/images/oracle_xml.png": "72998f0c501c1dc5e4f9579f3aa8e652",
"assets/images/postgresql.png": "ca32a5c14d9293b65ca030c12b89b9ce",
"assets/images/redis.png": "a5f9a0b367a3f0694ca91a308609bf45",
"assets/NOTICES": "553793a818e3cea92be8ffb940f3e6db",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8aaff332c2dc941014f54c03aa63ef0a",
"/": "8aaff332c2dc941014f54c03aa63ef0a",
"main.dart.js": "1d391e36da10c55e7c23915931dfd7b3",
"manifest.json": "91c1deaa5e1f276b64d766a83a882402",
"version.json": "fa19a50102306b9095ffef5d590f0981"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
