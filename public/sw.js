if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,a,n)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+c.slice(1)};return Promise.all(a.map(c=>{switch(c){case"exports":return s;case"module":return r;default:return e(c)}})).then(e=>{const c=n(...e);return s.default||(s.default=c),s})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/F1I1VXeVa3DP9a4Dhq5Oe/_buildManifest.js",revision:"35967ca3fa6637cdecc76800305993db"},{url:"/_next/static/F1I1VXeVa3DP9a4Dhq5Oe/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.6c19ca461a4218960278.js",revision:"cc117e50a7ac357a04bbe016a745aae8"},{url:"/_next/static/chunks/commons.4d7c6132b9c9fa8786a9.js",revision:"b478469b883e793611be4819317782b5"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.f843ccb495c503a830e2.js",revision:"dc391a8cacaee72fd647bd2c3ee684f9"},{url:"/_next/static/chunks/framework.9ec1f7868b3e9d138cdd.js",revision:"d0fde0e086852f5cc2882d8830400a6e"},{url:"/_next/static/chunks/main-9f2beda9434bcbde751c.js",revision:"f3e4f992f9720cebc46ed985f37be380"},{url:"/_next/static/chunks/pages/_app-0798567fb3ce23e653d4.js",revision:"5ea49647e6de72d45a07d101788a523e"},{url:"/_next/static/chunks/pages/_error-c4bf0fecf2cbd66ce057.js",revision:"48b68e9cfb4f186076ba28654bb545f4"},{url:"/_next/static/chunks/pages/index-5ecd5ec1c40c140b6fec.js",revision:"afc58b8b561df5001716bec2b847d076"},{url:"/_next/static/chunks/polyfills-78705b198ab7d012011b.js",revision:"fbfcf46e8cf294e94ceca2f41c04988c"},{url:"/_next/static/chunks/webpack-eb080e3f091731f228fb.js",revision:"2019297a9ccffe0e261600bad1b1f98a"},{url:"/_next/static/css/18f42506070cfa487c82.css",revision:"60c5752e631f3ec16f5f96ca770712d2"},{url:"/android-chrome-192x192.png",revision:"ac5678df17a67cbf46bcc2e425e61ac8"},{url:"/android-chrome-512x512.png",revision:"1a9735f08ecae9d64a43ed5e472335b7"},{url:"/apple-touch-icon.png",revision:"1d2d572339f20f26cbe6a8113d73eea5"},{url:"/banner.png",revision:"c9bf6945e17fcb13a1d135e0c329a787"},{url:"/favicon-16x16.png",revision:"e12cab0632db91fb3a4fd3fbe93c6da9"},{url:"/favicon-32x32.png",revision:"6b6a3722d4e149b3678dc321b8dae02c"},{url:"/favicon.ico",revision:"362c78208d905935a03ef74185943d4e"},{url:"/manifest.json",revision:"829c28f5adb7664f60fcbcf21facebaa"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
