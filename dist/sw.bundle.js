if(!self.define){let e,a={};const i=(i,f)=>(i=new URL(i+".js",f).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(f,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const s=e=>i(e,c),o={module:{uri:c},exports:r,require:s};a[c]=Promise.all(f.map((e=>o[e]||s(e)))).then((e=>(n(...e),r)))}}define(["./workbox-ad71b4ff"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.webmanifest",revision:"773728434a3cc3f65c90518d57a14221"},{url:"app~56591076.e90a41ec59d7ae899ec2.js",revision:null},{url:"app~56591076.e90a41ec59d7ae899ec2.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~94e66194.f567a818b0045dbd126f.js",revision:null},{url:"app~94e66194.f567a818b0045dbd126f.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~a13b59a9.a553dc98d96ca7b6730a.js",revision:null},{url:"app~a51fa3f5.d29fcbad1e2b0589d7dc.js",revision:null},{url:"app~a51fa3f5.d29fcbad1e2b0589d7dc.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.fcaeb89e9e442f5fd981.js",revision:null},{url:"app~ca0940c6.fcaeb89e9e442f5fd981.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d1658f4b.8b3b96153c5f4ddf8afc.js",revision:null},{url:"app~e4317507.85f3c6967dfaf1207d9e.js",revision:null},{url:"app~e4317507.85f3c6967dfaf1207d9e.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e8524f7f.4f1a3719b88435dd33bb.js",revision:null},{url:"app~e8524f7f.4f1a3719b88435dd33bb.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~f82e0cd2.a08bc2a63e65732fdf17.js",revision:null},{url:"data/FOOD.json",revision:"4830bad5f3ad46c79c0a89e0b9dea6da"},{url:"favicon.png",revision:"c4c5fc7e888ae5257ee805c121291035"},{url:"icons/icon-128x128.png",revision:"d455a68e980c86e2fb1ca7eeb8e218e2"},{url:"icons/icon-144x144.png",revision:"7ae4430157c2e928336eb951b0344e21"},{url:"icons/icon-152x152.png",revision:"c36c63fbbc3f3c4fe2b740eee3558976"},{url:"icons/icon-192x192.png",revision:"5ce377a37f0ea70e6d672afbfbf3fcee"},{url:"icons/icon-384x384.png",revision:"80a57da3fb4f72ca5e60452f8c99aebc"},{url:"icons/icon-512x512.png",revision:"038c2baf3a50f9e5d178dcbc9ecdc8c1"},{url:"icons/icon-72x72.png",revision:"f9ad2cba163b8a5b461ff42ef644e7aa"},{url:"icons/icon-96x96.png",revision:"5c3cf21074a31c6e6089d7b83cf7446b"},{url:"images/heros/hero-image_2-large.jpg",revision:"eae7b7e7376388c00591ab420b2d5136"},{url:"images/heros/hero-image_2-small.jpg",revision:"625c4858c4b1f9d92fa9ef9b679139b0"},{url:"images/heros/hero-image_2.jpg",revision:"0613b6cdd8e5ff68be1754908102a4d3"},{url:"index.html",revision:"338c851bc23c186861564eef39628e9f"},{url:"main.66f3ae0ab47e44b10480.css",revision:null}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"Therestaurantdb-api",plugins:[]}),"GET"),e.registerRoute(/\/navigation-bar\.html$/,new e.CacheFirst({cacheName:"custom-elements-cache",plugins:[new e.ExpirationPlugin({maxEntries:10})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
