if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const d=e=>a(e,t),r={module:{uri:t},exports:c,require:d};s[t]=Promise.all(i.map((e=>r[e]||d(e)))).then((e=>(n(...e),c)))}}define(["./workbox-2e6be583"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"ad8ad1bfd3b0bad8e776e412fff19e8c"},{url:"/_next/static/chunks/1273-47432feb60a4e51d.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/1431-f74b1fb8e1530352.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/1517-b003695a2b8dcadd.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/1783-c738d8bd969a8fce.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/2497-2acf1a44f21db1ed.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/2702-68276cc49e8e5cb8.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/3324-1f64fc81c78d26b1.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/3436-1453f9015fd0dc70.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/3699-b459b8847abc1ad4.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/4252-67b472d3e006ed2f.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/5548-ae593ba0fd643eb3.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/5865-1ffa910698d8a044.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/5926-ab9e98880e007695.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/6307-2ec4e7f8f80536e4.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/6611-49997181ceb429fa.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/8095-f558b4eff66de5e7.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/8753-eff29f4e58088d4e.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(auth)/layout-c53a9eea2f32951d.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(auth)/login/page-649b5487a525b69d.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(auth)/register/page-61147bfeac68e7fe.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/activity/loading-c5fe77658f68b68e.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/activity/page-9d9acccb8d027522.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/billing/loading-3d9a9010a3fb074c.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/billing/page-b7ac69a227cf50e1.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/expenses/create/page-701f3ff625b134b9.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/friends/loading-b29431ea73d50f09.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/friends/page-c144f385808df097.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/groups/%5BgroupId%5D/page-bd6d8afd7c13e2db.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/groups/loading-8347dd80da4c1728.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/groups/page-daff808cca4c7e61.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/layout-2a31bf9eb3d2b929.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/loading-c465367184dfa6a5.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/page-b5f28b52267f51d7.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/settings/loading-f8c8baa994c9200e.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/settings/page-b6d7a5888d5328a7.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/users/loading-e171ce7149012f64.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/users/page-af2cf16ccf979cea.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(docs)/docs/%5B%5B...slug%5D%5D/page-d69be9de6dda8744.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(docs)/docs/layout-7698832017fa8ed7.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(docs)/guides/%5B...slug%5D/page-536f4a055852a34f.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(docs)/guides/layout-1b8874d0c3804882.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(docs)/guides/page-7d0a46e2b45a1586.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(docs)/layout-2daff0e887dfb649.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(marketing)/%5B...slug%5D/page-8744ab69d13a6641.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(marketing)/blog/%5B...slug%5D/page-21816bd8b8521ec2.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(marketing)/blog/page-363f7788ec637a1f.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(marketing)/error-fe16720af0ea2883.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(marketing)/layout-cfbc5d159b6ca8fd.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(marketing)/page-972d1b03272fe792.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(marketing)/pricing/loading-6ea31dd46cceba9f.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/(marketing)/pricing/page-0730376ec221e843.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/_not-found-56b2300e178e4409.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/app/layout-88f003641510febe.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/b79a5661-806ea4e60defbc87.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/framework-32b343471a473f15.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/main-app-be9336882f9b6371.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/main-dd76c7d43e7a8e66.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/pages/_app-94b14e9e211a1a04.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/pages/_error-b5adc401c566f3a5.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-7d612f0a83cbc813.js",revision:"gxbedPBwmwHN8T5xEjNjD"},{url:"/_next/static/css/a26d1dd18014d63e.css",revision:"a26d1dd18014d63e"},{url:"/_next/static/css/bba7de5763941935.css",revision:"bba7de5763941935"},{url:"/_next/static/gxbedPBwmwHN8T5xEjNjD/_buildManifest.js",revision:"72fb2dbc03f0f4cf6423f94763c7d4e2"},{url:"/_next/static/gxbedPBwmwHN8T5xEjNjD/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/01af0fc7b4278e65-s.p.woff2",revision:"6fa778aa9ee280df9ff563f3a08b0350"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/8cdee4d3ed444abc-s.woff2",revision:"420e1e96628860fae605e46bd196926d"},{url:"/_next/static/media/90475aac776488b6-s.p.woff2",revision:"183db31d6365283bef4914042be9dfab"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/android-chrome-192x192.png",revision:"b978b46f31a53cc58dee7658950d7ae5"},{url:"/android-chrome-512x512.png",revision:"3bcd5e4781b970a5043988462ed924cd"},{url:"/apple-touch-icon.png",revision:"b5d3ba9c2426ac2cf48d3624dbea5acb"},{url:"/favicon-16x16.png",revision:"e8b487ad7a04f0d411efa33d0fdfa68c"},{url:"/favicon-32x32.png",revision:"e329308917ffa92f6518b0a6046247f7"},{url:"/favicon.ico",revision:"6786dbd147bc4f2bda288a45c68ae582"},{url:"/images/avatars/shadcn.png",revision:"1ebc04fb857b879fe9063a8b92ec80e6"},{url:"/images/blog/blog-post-1.jpg",revision:"d91bb1224212bd1a832f99fe7494554f"},{url:"/images/blog/blog-post-2.jpg",revision:"04442fcb79e9538e65be3476b2b6aa3a"},{url:"/images/blog/blog-post-3.jpg",revision:"a758717dd624c5900385151290cf378d"},{url:"/images/blog/blog-post-4.jpg",revision:"135c157ecc4dfcbac1ebe27a04f40d84"},{url:"/images/hero.png",revision:"5718b93a1e7a8e94f8193223346132ea"},{url:"/manifest.json",revision:"1d596e5393e134f759f4d7bbed8553d9"},{url:"/og.jpg",revision:"02a543f3caca7f2f47dd5f800ee3c6eb"},{url:"/site.webmanifest",revision:"90dd834f18101625553dd0f6a34d974c"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
