if(!self.define){let e,i={};const r=(r,c)=>(r=new URL(r+".js",c).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const f=e=>r(e,n),t={module:{uri:n},exports:o,require:f};i[n]=Promise.all(c.map((e=>t[e]||f(e)))).then((e=>(s(...e),o)))}}define(["./workbox-8a9ef17b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"baloon.png",revision:"09fd71fabfdeb7183bc5a94489b99ccc"},{url:"css/style.css",revision:"49e5abcfdcab0d5aa61bbd8cbd82f5cb"},{url:"image/perfil.jpg",revision:"2e6cee8560490281ab825e999cf767c1"},{url:"imagen_icono.png",revision:"dca2dbfe346deb2f5796423fd2d3340e"},{url:"index.html",revision:"46029ba2be49aa308c8f8c98eb0a725e"},{url:"manifest.json",revision:"207c5b47baae6980d437fb2b048c2fc2"},{url:"regist_serviceWorker.js",revision:"c9a8cf65d342bcc886a9dc0d3666e1ce"},{url:"script.js",revision:"99a58ab42ddaf8bc369e3735855f4b7e"},{url:"Service_Worker.js",revision:"f8f87fb1dc56a3f550786d81217e36a0"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
