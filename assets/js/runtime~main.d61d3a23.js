(()=>{"use strict";var e,a,f,t,d,r={},c={};function b(e){var a=c[e];if(void 0!==a)return a.exports;var f=c[e]={id:e,loaded:!1,exports:{}};return r[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=r,b.c=c,e=[],b.O=(a,f,t,d)=>{if(!f){var r=1/0;for(i=0;i<e.length;i++){f=e[i][0],t=e[i][1],d=e[i][2];for(var c=!0,o=0;o<f.length;o++)(!1&d||r>=d)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(c=!1,d<r&&(r=d));if(c){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,t,d]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var d=Object.create(null);b.r(d);var r={};a=a||[null,f({}),f([]),f(f)];for(var c=2&t&&e;"object"==typeof c&&!~a.indexOf(c);c=f(c))Object.getOwnPropertyNames(c).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(d,r),d},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({25:"1815a08e",53:"935f2afb",265:"affac4ca",359:"9c42502b",414:"ef41f62d",639:"8676580a",641:"7147ed95",702:"cf687d4a",1020:"3a5a5413",1107:"95d28a3b",1215:"7e223c88",1258:"4b951f70",1353:"13b12092",1608:"de285be4",1902:"e1ed1df3",1929:"d438f276",1987:"a35dc68c",2010:"45f69b3d",2537:"58aa5d04",2740:"38d7e895",2840:"b43d81d6",3130:"0f3a156a",3194:"7c6b6c0c",3237:"1df93b7f",3521:"59e5be02",4193:"872598ca",4267:"98908f99",4371:"6b70c37f",4626:"765aad5b",4653:"ed850688",4672:"e6a3fdf7",4699:"1b0059a7",5032:"f86c9b5c",5223:"6a0725f2",5510:"8d9816a3",5530:"4a79c017",5859:"489e77b1",5888:"3710e6a0",6047:"b4f09707",6051:"c30099e0",6378:"eb518094",6455:"3690dbf9",6645:"8f437409",6920:"795c60f7",6955:"526b38d1",6983:"982ac012",7031:"72ab6706",7222:"5f06de0b",7360:"9298061f",7378:"ac886dc6",7522:"2a0375de",7870:"db4234aa",7918:"17896441",7920:"1a4e3797",8655:"835abeb0",8793:"9654b5f5",9276:"57814a93",9338:"ed7ceafb",9514:"1be78505",9644:"0024569f",9665:"e7e96047",9666:"ae820061"}[e]||e)+"."+{25:"4fc645f8",53:"de98f914",265:"429a1d97",359:"41c1acba",414:"e519a285",639:"2f3fd4af",641:"f19c4579",702:"c5d3ab9b",800:"6bd08ae1",1020:"4abdcbf0",1107:"fe7d3e44",1215:"683d5162",1258:"b99fb2e5",1353:"4e4cc671",1608:"f861194f",1902:"e837b85e",1929:"1f3a7b4c",1987:"6efc3b1d",2010:"539e3015",2537:"472fbf83",2740:"272321e6",2840:"c77163c0",3130:"25ac6739",3194:"d43ccf98",3237:"fd681544",3521:"32688b94",4193:"8e01caa1",4267:"bf4753b0",4371:"7410cd66",4626:"d821ec97",4653:"e60b8356",4672:"184201ce",4699:"734629f0",5032:"e7edde4c",5223:"08e34925",5510:"d49451bb",5530:"62fe57a1",5859:"04dfc05a",5888:"c10fa5b5",6047:"b0865c85",6051:"f613aaa9",6378:"8ac3ff26",6455:"db175382",6645:"f969c944",6752:"cb018763",6920:"5900f7ea",6955:"84315887",6983:"88b8a3de",7031:"aab68c62",7222:"52135a4f",7360:"8b28a4f1",7378:"415f5683",7522:"20ed54ae",7870:"99da21e6",7918:"1f9345ca",7920:"3b6ffc50",8655:"52f661d0",8793:"00a674d5",9276:"d21e4af1",9338:"6096adf1",9408:"af833f1e",9514:"9909ac0a",9592:"6038b531",9644:"81983a81",9665:"d8ad1584",9666:"115c1e05"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},d="morjs-site:",b.l=(e,a,f,r)=>{if(t[e])t[e].push(a);else{var c,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+f){c=u;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,b.nc&&c.setAttribute("nonce",b.nc),c.setAttribute("data-webpack",d+f),c.src=e),t[e]=[a];var l=(a,f)=>{c.onerror=c.onload=null,clearTimeout(s);var d=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),d&&d.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),o&&document.head.appendChild(c)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/",b.gca=function(e){return e={17896441:"7918","1815a08e":"25","935f2afb":"53",affac4ca:"265","9c42502b":"359",ef41f62d:"414","8676580a":"639","7147ed95":"641",cf687d4a:"702","3a5a5413":"1020","95d28a3b":"1107","7e223c88":"1215","4b951f70":"1258","13b12092":"1353",de285be4:"1608",e1ed1df3:"1902",d438f276:"1929",a35dc68c:"1987","45f69b3d":"2010","58aa5d04":"2537","38d7e895":"2740",b43d81d6:"2840","0f3a156a":"3130","7c6b6c0c":"3194","1df93b7f":"3237","59e5be02":"3521","872598ca":"4193","98908f99":"4267","6b70c37f":"4371","765aad5b":"4626",ed850688:"4653",e6a3fdf7:"4672","1b0059a7":"4699",f86c9b5c:"5032","6a0725f2":"5223","8d9816a3":"5510","4a79c017":"5530","489e77b1":"5859","3710e6a0":"5888",b4f09707:"6047",c30099e0:"6051",eb518094:"6378","3690dbf9":"6455","8f437409":"6645","795c60f7":"6920","526b38d1":"6955","982ac012":"6983","72ab6706":"7031","5f06de0b":"7222","9298061f":"7360",ac886dc6:"7378","2a0375de":"7522",db4234aa:"7870","1a4e3797":"7920","835abeb0":"8655","9654b5f5":"8793","57814a93":"9276",ed7ceafb:"9338","1be78505":"9514","0024569f":"9644",e7e96047:"9665",ae820061:"9666"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,f)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>t=e[a]=[f,d]));f.push(t[2]=d);var r=b.p+b.u(a),c=new Error;b.l(r,(f=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var d=f&&("load"===f.type?"missing":f.type),r=f&&f.target&&f.target.src;c.message="Loading chunk "+a+" failed.\n("+d+": "+r+")",c.name="ChunkLoadError",c.type=d,c.request=r,t[1](c)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var t,d,r=f[0],c=f[1],o=f[2],n=0;if(r.some((a=>0!==e[a]))){for(t in c)b.o(c,t)&&(b.m[t]=c[t]);if(o)var i=o(b)}for(a&&a(f);n<r.length;n++)d=r[n],b.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return b.O(i)},f=self.webpackChunkmorjs_site=self.webpackChunkmorjs_site||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();