if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-2e6be583"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"83bc8373071c72d9b28f2e89180cb647"},{url:"/_next/static/chunks/252-10653f0b45b64e30.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/273-e8f436ea793d2404.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/30-9f367fbf028717f3.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/307-04d3fbd68f01b9a2.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/391-a5ec7867a00b57af.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/431-dc51a52510b0c025.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/497-eba8d9a632665100.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/517-09c0ae6f087670eb.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/54-4e76212c774fb271.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/586-3575d97c72bc5745.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/685-510b8813429652c3.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/753-9cb82aa1a61fcbcc.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/835-cada54f38cacf933.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/926-272ca730a5282b3a.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/981-35e78570b42919f8.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(auth)/layout-5a67e1f5d8c4304b.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(auth)/login/page-828d7d2730ca7e2e.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(auth)/register/page-f56bc906b82e2822.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/billing/loading-14ac475e49c2c081.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/billing/page-49f0ac9ca7a05c13.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/layout-02122d1372ba9802.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/loading-6498d9fc8d43ff98.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/page-b478691eb0a9afc0.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/settings/loading-73c495895110b36d.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/settings/page-a1caf627c61bae0c.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(docs)/docs/%5B%5B...slug%5D%5D/page-16e13b502ba59c92.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(docs)/docs/layout-9844a7d640e00ece.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(docs)/guides/%5B...slug%5D/page-a204f7a1bc9cbcca.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(docs)/guides/layout-e5408b4213f640da.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(docs)/guides/page-9183dcbf8da44dea.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(docs)/layout-06ac0c61cf9dbe3b.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(marketing)/%5B...slug%5D/page-e8b25782407a7928.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(marketing)/blog/%5B...slug%5D/page-4eb9b2121e42ce6c.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(marketing)/blog/page-060f78a807d57e62.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(marketing)/error-1dfc73f121a10a18.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(marketing)/layout-60b27e2635c63327.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(marketing)/page-db53daef505ccda7.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(marketing)/pricing/loading-b124e294f678ad45.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/(marketing)/pricing/page-5819e63c52a204b3.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/_not-found-df27d842f5c9652f.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/app/layout-b73efb9382b75845.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/b79a5661-a860124a06ea4388.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/framework-c25027af42eb8c45.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/main-app-7a13a03de5640c73.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/main-b965ee755030bd84.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/pages/_app-14dbc5f7569eccec.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/pages/_error-5dfcfe7b7098db9e.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-1d24551f2cf8558d.js",revision:"nwOOsyouKIrXXB-afUzbP"},{url:"/_next/static/css/2bf3738d7db97e09.css",revision:"2bf3738d7db97e09"},{url:"/_next/static/css/bba7de5763941935.css",revision:"bba7de5763941935"},{url:"/_next/static/media/01af0fc7b4278e65-s.p.woff2",revision:"6fa778aa9ee280df9ff563f3a08b0350"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/8cdee4d3ed444abc-s.woff2",revision:"420e1e96628860fae605e46bd196926d"},{url:"/_next/static/media/90475aac776488b6-s.p.woff2",revision:"183db31d6365283bef4914042be9dfab"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/nwOOsyouKIrXXB-afUzbP/_buildManifest.js",revision:"be2ab02b3c8abb8ed0a9d2d06de3e1a0"},{url:"/_next/static/nwOOsyouKIrXXB-afUzbP/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-chrome-192x192.png",revision:"b978b46f31a53cc58dee7658950d7ae5"},{url:"/android-chrome-512x512.png",revision:"3bcd5e4781b970a5043988462ed924cd"},{url:"/apple-touch-icon.png",revision:"b5d3ba9c2426ac2cf48d3624dbea5acb"},{url:"/favicon-16x16.png",revision:"e8b487ad7a04f0d411efa33d0fdfa68c"},{url:"/favicon-32x32.png",revision:"e329308917ffa92f6518b0a6046247f7"},{url:"/favicon.ico",revision:"6786dbd147bc4f2bda288a45c68ae582"},{url:"/images/avatars/shadcn.png",revision:"1ebc04fb857b879fe9063a8b92ec80e6"},{url:"/images/blog/blog-post-1.jpg",revision:"d91bb1224212bd1a832f99fe7494554f"},{url:"/images/blog/blog-post-2.jpg",revision:"04442fcb79e9538e65be3476b2b6aa3a"},{url:"/images/blog/blog-post-3.jpg",revision:"a758717dd624c5900385151290cf378d"},{url:"/images/blog/blog-post-4.jpg",revision:"135c157ecc4dfcbac1ebe27a04f40d84"},{url:"/images/hero.png",revision:"5718b93a1e7a8e94f8193223346132ea"},{url:"/manifest.json",revision:"a359fa0c8986548b8f868e2630769aa2"},{url:"/og.jpg",revision:"02a543f3caca7f2f47dd5f800ee3c6eb"},{url:"/site.webmanifest",revision:"90dd834f18101625553dd0f6a34d974c"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
