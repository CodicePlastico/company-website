!function(){"use strict";var e,t,n,r,o,a={},c={};function s(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={exports:{}};return a[e].call(n.exports,n,n.exports,s),n.exports}s.m=a,e=[],s.O=function(t,n,r,o){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],o=e[u][2];for(var c=!0,i=0;i<n.length;i++)(!1&o||a>=o)&&Object.keys(s.O).every((function(e){return s.O[e](n[i])}))?n.splice(i--,1):(c=!1,o<a&&(a=o));if(c){e.splice(u--,1);var f=r();void 0!==f&&(t=f)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,n){return s.f[n](e,t),t}),[]))},s.u=function(e){return({49:"component---src-pages-about-tsx",53:"component---src-pages-en-tsx",65:"198d89158df77c953bf23fb86ea0ccb20fcaa5e9",181:"component---src-pages-team-tsx",257:"fcfa8dee",258:"d49c4e0230d5514c930ac6076389ba7f48eacc9a",317:"c8f7fe3b0e41be846d5687592cf2018ff6e22687",351:"commons",532:"styles",639:"component---src-pages-ch-finance-tsx",648:"component---src-pages-ch-a-2-a-tsx",652:"component---src-pages-plastic-blog-tsx",674:"component---src-pages-dev-tsx",691:"component---src-pages-index-tsx",727:"component---src-pages-it-tsx",757:"b2e7b0baa8613a0e8050c4a7db4ea9a16c90aade",855:"component---src-pages-thanks-tsx",880:"component---src-pages-devops-tsx",883:"component---src-pages-404-js",884:"component---src-pages-contatti-tsx",923:"component---src-pages-design-tsx"}[e]||e)+"-"+{49:"283400aef5505d22d672",53:"08832d66f8790b00f438",65:"bf54985a90859c4e5c4c",181:"be067f7f8301d381f5f0",257:"df5ecb11d03efc059445",258:"99e09e13d73c6aafd7b4",317:"43d6682f444746518799",351:"e01fe5e8415f2dc1b1ae",389:"f65c086062736b5276bc",491:"0556d72d3d23a77e4313",532:"9a44b0c96edc28263ac1",639:"99e46f0ebab8869be594",648:"4a43ec4f26627c9f2823",652:"d52c2a1eaabeb1327314",674:"e8727877314103a29b68",684:"527f30d93c07b6d4cd6a",691:"a6a73cba185112ef982d",727:"4a605effe53e27dd3b19",757:"e78fda2c5bd3bbf02ddd",855:"beda0b834056989d9c60",880:"4a4622075b9119b97b50",883:"1ae5af0df314aab4961e",884:"46e7875506b65c9fdd5f",923:"a6035931c42d8b7bb93a"}[e]+".js"},s.miniCssF=function(e){return"styles.ee690acd1d708748b15d.css"},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="gatsby-starter-default:",s.l=function(e,r,o,a){if(t[e])t[e].push(r);else{var c,i;if(void 0!==o)for(var f=document.getElementsByTagName("script"),u=0;u<f.length;u++){var d=f[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){c=d;break}}c||(i=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.setAttribute("data-webpack",n+o),c.src=e),t[e]=[r];var l=function(n,r){c.onerror=c.onload=null,clearTimeout(b);var o=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(r)})),n)return n(r)},b=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),i&&document.head.appendChild(c)}},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="/",r=function(e){return new Promise((function(t,n){var r=s.miniCssF(e),o=s.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(c=n[r]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===t))return c}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var c;if((o=(c=a[r]).getAttribute("data-href"))===e||o===t)return c}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var c=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=c,i.request=s,o.parentNode.removeChild(o),r(i)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},o={658:0},s.f.miniCss=function(e,t){o[e]?t.push(o[e]):0!==o[e]&&{532:1}[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))},function(){var e={658:0};s.f.j=function(t,n){var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=s.p+s.u(t),c=new Error;s.l(a,(function(n){if(s.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}}),"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],c=n[1],i=n[2],f=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)s.o(c,r)&&(s.m[r]=c[r]);if(i)var u=i(s)}for(t&&t(n);f<a.length;f++)o=a[f],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(u)},n=self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-dd267314a15217f381a4.js.map