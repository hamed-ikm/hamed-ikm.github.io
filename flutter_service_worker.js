'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e59a0d92bc50104cb2ad19499aa157c2",
".git/config": "7b48ae290720d1c66ec8d18f824ac403",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "839eb1278e5826d11c5d1e6728f9ddfe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3d09079c52cac47a1b0146869b7a98bc",
".git/logs/refs/heads/main": "4619c29dde2dd37ec637b0b911b948f6",
".git/logs/refs/remotes/origin/main": "6ba5c3eb906391f75ef6c504527aa895",
".git/objects/00/42cf2dba0aaebe73b7736100fc19a3bb6dd30d": "bf40c657b80e326488914fe2a0c7b989",
".git/objects/01/f9ccc3d96c2331cbbb184e305db39e675c2349": "5201ea84d94df330878eb9b091a9b172",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/4280021532221864d9ae294de3d916ea1a5836": "b86cb0694a0abf1c689820ddb19500d4",
".git/objects/0a/cdca51513ef6a4fcda4c57d0cb5cc3d49a1619": "a39b5b4ad71f677d4dc37f620b141acc",
".git/objects/0e/a9158fa6838da21c055d10c73d344a3c2c1496": "cc8031443ae0fd438fee3ac1d35689dc",
".git/objects/10/2c1477ca2effb2782c41e9f905ea66a560b7ce": "d2373e2d588852f6c0ed43dac1bef1de",
".git/objects/10/bfc48c07c7f9a328446a25cbe6ad4e962efc6b": "23868615e389f9ca2a8aa2f455287942",
".git/objects/11/b61b6d8bd37c36ed7cdd7fd1d874e8292d95d7": "0c693e3bf5f87095dbabf4f539d0a495",
".git/objects/13/04aacfdfb79f41b0c0fd58f96cf9b8da802398": "7eafe106176ca87b9307b8568a0da8f7",
".git/objects/14/1682e0836edd78e2a311d70b0e78f410120265": "f6144ac2ff242c66407db37d33fe69a6",
".git/objects/14/97bff9617896492415462ebb3d1df0b4843bb8": "3b8b067c3b6876800f8e70cadad58327",
".git/objects/19/b8e6f8fcc8b5014e24c11539425fb97ad8d4cd": "1c26231edc6ac07f5c4937dbb318e8a7",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/8ecbee5405097014f77ea7a4a4ffd129e92c3b": "6f8837fdc2b53c51fdc005a2f3a5f3a0",
".git/objects/1d/ee67c42f8186410fcf9653e69410cd66e1af53": "c32dc6822a32f35084da2aec4b738acf",
".git/objects/2b/f5505d0531729159d536d3d5b679d8cfad93be": "1cefea89a7e90673816647594f4f212e",
".git/objects/30/f49dd4fd9e04f877051683a217265d83b54feb": "de0125fef20f2a81b71e0f8b7e1a4715",
".git/objects/34/561cd3e82dbebd3179c12e367f70d63c20458b": "9c2f757617efe58c0642023a31115d71",
".git/objects/34/ddee71e03970e3b325ab846cc04815d45faadc": "27e33edcd26ee7db6de124aa7e6a5c05",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/41/6bdba7cdd0acb34e19ae403cce4d08e67335e6": "66991afb7310bcaf75a765bc8128a056",
".git/objects/43/5d9392dd7b86d934ed819fb855cefc8590cd95": "f162e2b84f258f34bf76eea81999a113",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/d5dc3a3f91da3fca143ea9b828d65dfd55b9fd": "5297ee5898b636c77eaf4a6a1310462c",
".git/objects/48/9e59c470bb645aa5eeb913ecdf4a803c33f1af": "48922b2e629034f0c231f3aaa06df5e9",
".git/objects/4a/acc92d29d7dbe1a6004c25f91004f5ad0fb90a": "d741593f9245c15e7ce8ca2f2ea01e08",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/21517375927b88a0c8e3b723725e3c9df2e99d": "5ccfa112204fa340bfc38e8b6fcfd62a",
".git/objects/57/3a51f6ce760546f7b22a294652b7dab88ca287": "617e83fe246e052c055a9b10f0ca5ce4",
".git/objects/5a/1f4450f04f416cba04f38be225fc57d88b1bed": "89cad4b3502488a1493f61d63b762879",
".git/objects/5f/002b6c0503239d81e0484fdfa6609e794fb538": "b26074eb83bfe93d95bb037687cb8782",
".git/objects/65/c4058408e938f41e99d749d48421ce1864673b": "03341d7aa2042b8df588c3cdcd62a883",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/bc08ff5be8f9f829dc719f627baf21b6a65498": "b0d1a279339288a44691337457e3f1e1",
".git/objects/6e/79d657b20c63c301df0317abe4024e1206f2c4": "e52054a4afec117a1f8fd89347c7582e",
".git/objects/6f/37d17a347a38fe4650351a74117b99f1079cb9": "a9c4ad58942ee9b132fac5ddcce3f3bf",
".git/objects/70/1e172f7b580a483a02b8a36dbcaf1b0c14facc": "4211bf1c954cc8599dc7566a19a71dfd",
".git/objects/70/216039c512293b313d79133a052310892b5a62": "231c68b9083a2ba041a9d243f8ebaf56",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/3195c0afce80f2e9b7f45034ab0c59bcb69459": "693e369ac7253f6bc7d60323edf77408",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/77/bdc922e0f4f2aad5ed7fb269db40014fc97d02": "8fef988ac56af7025d02526ba13b7010",
".git/objects/83/4fd9b855da1399078405512a24017fc3b52ace": "3d5c3b010aeb2da36de54ab8e54fb941",
".git/objects/85/f7d8fb6733568e759a161813f293d4dbab6e63": "149ff5c73146cba7594532b8757a37e5",
".git/objects/86/9040edb6e360b65ad303ac08070941b8d71027": "a5f7a84b3e7fc8a872df668cab02d9b8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f9c4f026e8020b3dfe8c321b0f983028eb3e78": "ebe6b82f79eb662287fdb115de201b5e",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/95/4f603dd57c2a139e053fc7cabef3110c81205d": "ec2f32556083746983a5be9cadaf8064",
".git/objects/97/15b07ce67a748f4c71b2848617c73f7bbb7490": "2e9427fe56ea97a553b87fd137c0098a",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/40f01f59abd30102bdd9e136a0631c69b32641": "a4f03eb84fbd1aaf71f79a0b9d88ec82",
".git/objects/9e/1b642b49d93621eedb84bf34a4e4fa48bf85ec": "753c3ade4393208b50684c33862fa513",
".git/objects/ad/2a2dcd83d16c42b5afd4b7fe08b3415e1aeaeb": "99a8cce4677aa67b2ef59eab6af58950",
".git/objects/af/eb98b6f8c756635236f37f041a22c5e5c48aea": "e2289a59fbacb41c02b136d5e3d22b0d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/ed3425764c00ed772c8c6b2e6dcf54e4b049a4": "325e8e806994f98dbd838f655ff5ca88",
".git/objects/bc/68ff2794ee48d34774aee35de31fe09c4a2543": "ff42d52674499cd5b04a75ea65bfc573",
".git/objects/bf/0f05d447386fc2a53db8a4e25c483f20704882": "97d6038b3ea77025d24056b7a3822ff7",
".git/objects/c0/6b456849c78283a9094a45e90a5e2dfbe04335": "38094b896283e6726ebe95c95c62c93c",
".git/objects/c6/5adab7b18449218583977db277986b0faa7ca9": "b1d42a18508c4374fdc68b4b8949919a",
".git/objects/c7/ee7113772225b100a13bb6722e48ea494e1dd4": "bccb69c28b4f9c0ef7fe7c5ca04eb6f2",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ca/b3e480cb73aaa0ea4f94d72d4fdb296c441927": "49c828af227498066b6f6c58d7f703ae",
".git/objects/cb/20d7afdd51378c4f3dd199bae12cc8b98f4af4": "a50acbcab969243b296db0ae311f7743",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/72aa6e16b43f779c7f2b0cc727584ec5215665": "7db9dd31c86edc6db51cf5c8d0ce600c",
".git/objects/cc/0a58f854350d80042d351a74ae8ce201227de5": "e1eaeb4373b1e8e63cdaf1dd71ac9bd3",
".git/objects/ce/6fa17c6a67f0ebe170f1d01257b6b912eba7cd": "c62e09edaccd648639ee2dbdf43ba214",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/275246fdcee873e9b87d513c09ccc2841a6159": "12e5ead86bff4835e6bf73acbc3e0b61",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/369b3b1d83fb173a13a5493f977978daf1057a": "aa4ae4fe4340791d28dc0b3b0d7e7360",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/696176159c66bae6b451223d17f1067d88cf3e": "15e10e4a260fdb05c87aa36eab3888fa",
".git/objects/e7/a7f09577aebdae9a05cdef12036e559a75d6e4": "d7d1d49d1affe856f8b9335c234c7fa3",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/fbdedf9ea0613e45797847a242d872df9428f2": "e58a4f9e865d9b809dfb8b3bd1aaee45",
".git/objects/eb/426433fb65bf6d67619bde1a1310ab3c517bfd": "b11f3b123bbd860d761613ec6772186e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/ae0e5d846f1e3fdae942eff2c167524cad55f7": "5e655d2139356ffa016be9c0bcb06a1a",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/6ea8b12edff9faa74191bcf918e2ee191c057e": "61ba43e38ea7d56cb5dcd21222e0c11c",
".git/objects/fa/c7cba1b87d19c21ff3508642f4aa6aa0d704ed": "9e41be0209af82b635967323278e4b9b",
".git/objects/fd/33ad42648a22faf27cfd6a66d8505c47d838ca": "5a3b3c4deb29a192b8bad59db2845ebe",
".git/objects/fe/9ec6d1a91a5a66734e8f555bfd6f2ba17928ca": "1dbf0a042395ba2b3d926e5ec33c0063",
".git/objects/fe/f63574d75b3b55771c060e84ca8578b847f1f8": "e7740c5d8d53067a41891b4f995bbca9",
".git/refs/heads/main": "1a6fc147484c3bf9859f67e2f18eed65",
".git/refs/remotes/origin/main": "1a6fc147484c3bf9859f67e2f18eed65",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "7f673730900047942f728fe9f06d3f75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "cf6c582ebacc7a9cf60cff1b416e153e",
"icons/favicon-192.png": "0d98112e10a14b7baf98fdc6d9e425a8",
"icons/favicon-512.png": "44c5a49c814579e938aa06a0faf4bceb",
"index.html": "f0f5e82f861826bb6ab2a66fe9dd26f6",
"/": "f0f5e82f861826bb6ab2a66fe9dd26f6",
"main.dart.js": "b8439655853b426fbd3721e38368a2b8",
"manifest.json": "09ec0b27b26e2f11f2fe1344db481fd5",
"README.md": "2f3875027e2342362e0e042417a04fa0",
"version.json": "33b1b192da744aa0714f462d117df6b0"};
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
