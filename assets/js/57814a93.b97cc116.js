"use strict";(self.webpackChunkmorjs_site=self.webpackChunkmorjs_site||[]).push([[9276],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),m=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(n),s=r,c=u["".concat(p,".").concat(s)]||u[s]||k[s]||a;return n?i.createElement(c,l(l({ref:t},d),{},{components:n})):i.createElement(c,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<a;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var i=n(1163),r=(n(9496),n(9613));const a={},l="MorJS \u5982\u4f55\u5de5\u4f5c?",o={unversionedId:"guides/introduction/how-mor-works",id:"guides/introduction/how-mor-works",title:"MorJS \u5982\u4f55\u5de5\u4f5c?",description:"\u67b6\u6784\u6982\u89c8",source:"@site/docs/guides/introduction/how-mor-works.md",sourceDirName:"guides/introduction",slug:"/guides/introduction/how-mor-works",permalink:"/guides/introduction/how-mor-works",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"MorJS \u4ecb\u7ecd",permalink:"/guides/"},next:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/guides/introduction/getting-started"}},p={},m=[{value:"\u67b6\u6784\u6982\u89c8",id:"\u67b6\u6784\u6982\u89c8",level:2},{value:"\u9759\u6001\u7f16\u8bd1\u539f\u7406",id:"\u9759\u6001\u7f16\u8bd1\u539f\u7406",level:2},{value:"\u8fd0\u884c\u65f6\u8865\u507f\u539f\u7406",id:"\u8fd0\u884c\u65f6\u8865\u507f\u539f\u7406",level:2},{value:"\u529f\u80fd\u5b9a\u5236",id:"\u529f\u80fd\u5b9a\u5236",level:2},{value:"\u5de5\u7a0b\u80fd\u529b\u5b9a\u5236",id:"\u5de5\u7a0b\u80fd\u529b\u5b9a\u5236",level:3},{value:"\u8fd0\u884c\u65f6\u80fd\u529b\u5b9a\u5236",id:"\u8fd0\u884c\u65f6\u80fd\u529b\u5b9a\u5236",level:3}],d={toc:m},u="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"morjs-\u5982\u4f55\u5de5\u4f5c"},"MorJS \u5982\u4f55\u5de5\u4f5c?"),(0,r.kt)("h2",{id:"\u67b6\u6784\u6982\u89c8"},"\u67b6\u6784\u6982\u89c8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7075\u6d3b\u7684\u63d2\u4ef6\u67b6\u6784"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u547d\u4ee4\u884c\u3001\u7f16\u8bd1\u6d41\u7a0b\u3001\u7f16\u8bd1\u5e73\u53f0\u6269\u5c55\u3001\u96c6\u6210\u6d41\u7a0b\u3001\u7528\u6237\u914d\u7f6e\u6587\u4ef6\u7b49\u5404\u4e2a\u65b9\u9762\u7684\u5b9a\u5236"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5fae\u4fe1\u3001\u652f\u4ed8\u5b9d\u53cc DSL \u652f\u6301"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57df\u5916\u591a\u4ee5 \u5fae\u4fe1\u5c0f\u7a0b\u5e8f DSL \u4e3a\u51c6\uff0c\u57df\u5185\u591a\u4ee5\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f DSL \u4e3a\u51c6\uff0c\u800c MorJS \u4e24\u8005\u90fd\u652f\u6301"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5f00\u7bb1\u5373\u7528\u7684\u8f6c\u7aef\u80fd\u529b"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65e0\u9700\u501f\u52a9\u4efb\u4f55\u5916\u90e8\u4f9d\u8d56\uff0c\u5373\u53ef\u5b8c\u6210\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u548c\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u8f6c\u5176\u4ed6\u7aef"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6781\u81f4\u7684\u6027\u80fd\u548c\u7814\u53d1\u4f53\u9a8c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4ece\u65e5\u5fd7\u8f93\u51fa\u5230\u7f13\u5b58\u5229\u7528\uff0c\u4ece\u914d\u7f6e\u517c\u5bb9\u5230\u6784\u5efa\u63d0\u793a\uff0c\u4ece\u7f16\u8bd1\u538b\u7f29\u5230\u5206\u5305\u4f18\u5316\uff0c\u59cb\u7ec8\u4ee5\u63d0\u5347\u5f00\u53d1\u8005\u4f53\u9a8c\u4e3a\u7b2c\u4e00\u539f\u5219"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u66f4\u52a0\u5065\u58ee\u7684\u7ec4\u4ef6\u7814\u53d1\u89c4\u8303"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8bba\u662f\u5df2\u6709\u7684\u591a\u7aef\u7ec4\u4ef6\u89c4\u8303\uff0c\u8fd8\u662f npm \u4f9d\u8d56\uff0c\u4ea6\u6216\u662f\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684 npm \u7ec4\u4ef6\u89c4\u8303\uff0c\u901a\u901a\u652f\u6301"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u9002\u914d\u5927\u4e2d\u5c0f\u4e0d\u540c\u7c7b\u578b\u7684\u5c0f\u7a0b\u5e8f\u9879\u76ee"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c0f\u9879\u76ee\u53ea\u9700\u7f16\u8bd1\u80fd\u529b\uff0c\u4e2d\u7b49\u9879\u76ee\u7ed3\u5408\u7f16\u8bd1\u548c\u9875\u9762\u6ce8\u5165\u80fd\u529b\uff0c\u800c\u5927\u9879\u76ee\u53ef\u4f7f\u7528\u590d\u6742\u5c0f\u7a0b\u5e8f\u96c6\u6210\u80fd\u529b")))),(0,r.kt)("img",{src:"https://img.alicdn.com/imgextra/i1/O1CN01fb5HEq1qNipyFSbaf_!!6000000005484-2-tps-2406-1706.png",width:"1200"}),(0,r.kt)("h2",{id:"\u9759\u6001\u7f16\u8bd1\u539f\u7406"},"\u9759\u6001\u7f16\u8bd1\u539f\u7406"),(0,r.kt)("img",{src:"https://img.alicdn.com/imgextra/i1/O1CN01L57dw41G6w9fB4YGe_!!6000000000574-2-tps-2582-1336.png",width:"1200"}),(0,r.kt)("p",null,"\u9759\u6001\u7f16\u8bd1\u8f6c\u6362\u4e3b\u8981\u7528\u4e8e\u5904\u7406 ",(0,r.kt)("inlineCode",{parentName:"p"},"JS"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"WXS/SJS"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"WXML/AXML"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"WXSS/ACSS"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," \u7b49\u6e90\u7801\u4e2d\u7ea6\u675f\u5f3a\u4e14\u4e0d\u80fd\u52a8\u6001\u4fee\u6539\u7684\u90e8\u5206\uff0c\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6a21\u5757\u5f15\u7528\uff1a")," ",(0,r.kt)("inlineCode",{parentName:"li"},"JS"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"WXS"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"SJS"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"WXML"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"AXML"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"WXSS"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"ACSS"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"JSON")," \u7b49\u6e90\u7801\u4e2d\u7684\u6a21\u5757\u5f15\u7528\u66ff\u6362\u548c\u540e\u7f00\u540d\u4fee\u6539\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6a21\u7248\u5c5e\u6027\u6620\u5c04\u6216\u8bed\u6cd5\u517c\u5bb9\uff1a")," ",(0,r.kt)("inlineCode",{parentName:"li"},"AXML"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"WXML")," \u4e2d\u5982",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a:if")," \u2799 ",(0,r.kt)("inlineCode",{parentName:"li"},"wx:if")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onTap")," \u2799 ",(0,r.kt)("inlineCode",{parentName:"li"},"bind:tap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{{`${name}Props`}}")," \u2799 ",(0,r.kt)("inlineCode",{parentName:"li"},"{{name + 'Props'}}")," \u7b49\uff1b"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u6620\u5c04\uff1a")," \u5982\u9875\u9762\u914d\u7f6e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{ "titleBarColor": "#000000" }')," \u2799 ",(0,r.kt)("inlineCode",{parentName:"li"},'{ "navigationBarBackgroundColor: "#000000", "navigationBarTextStyle": "white" }')," \u7b49")))),(0,r.kt)("p",null,"\u7b49\uff0c\u901a\u8fc7\u9759\u6001\u7f16\u8bd1\u73af\u8282\u53bb\u62b9\u5e73\u5dee\u5f02\u6027\u5904\u7406\u3002"),(0,r.kt)("h2",{id:"\u8fd0\u884c\u65f6\u8865\u507f\u539f\u7406"},"\u8fd0\u884c\u65f6\u8865\u507f\u539f\u7406"),(0,r.kt)("img",{src:"https://img.alicdn.com/imgextra/i4/O1CN01VnYRen1NTZ2DQnoIz_!!6000000001571-2-tps-5679-2088.png",width:"1200"}),(0,r.kt)("p",null,"\u8fd0\u884c\u65f6\u8865\u507f\u4e3b\u8981\u7528\u4e8e\u5904\u7406\u9759\u6001\u7f16\u8bd1\u65e0\u6cd5\u5904\u7406\u7684\u4e00\u4e9b\u8fd0\u884c\u65f6\u52a8\u6001\u5185\u5bb9\uff0c\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"JSAPI\uff1a")," \u5b9e\u9645\u4e1a\u52a1\u4f7f\u7528\u4e0a\uff0c\u4e0d\u7ba1\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"JSAPI")," \u7684\u540d\u5b57\u8fd8\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"JSAPI")," \u7684\u5165\u53c2\u90fd\u4f1a\u5b58\u5728\u52a8\u6001\u8d4b\u503c\u7684\u60c5\u51b5\uff0c\u5bfc\u81f4\u4e86\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"JSAPI")," \u7684\u771f\u5b9e\u8c03\u7528\u4e0a\uff0c\u5f88\u96be\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"AST")," \u53bb\u89e3\u6790\u51fa\u5b9e\u9645\u4f20\u53c2\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6 - Props \u5c5e\u6027\uff1a")," \u652f\u4ed8\u5b9d\u5c5e\u6027\u4f7f\u7528 props \u58f0\u660e\uff0c\u800c\u5fae\u4fe1\u5c5e\u6027\u4f7f\u7528 properties \u58f0\u660e\uff0c\u914d\u7f6e\u65b9\u5f0f\u4e0d\u540c\u4e14\u4f7f\u7528\u65f6\u5206\u522b\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"this.props.x"),"\u53ca ",(0,r.kt)("inlineCode",{parentName:"li"},"this.properties.x"),"\u7684\u65b9\u5f0f\u83b7\u53d6\uff0c\u540c\u65f6\u53ef\u80fd\u5b58\u5728\u52a8\u6001\u53d6\u503c\u7684\u60c5\u51b5\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6 - \u751f\u547d\u5468\u671f\uff1a")," \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"didUpdate"),"\u751f\u547d\u5468\u671f\uff0c\u5728\u89e6\u53d1\u4e86",(0,r.kt)("inlineCode",{parentName:"li"},"props"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"data"),"\u66f4\u65b0\u540e\u90fd\u4f1a\u8fdb\u5165",(0,r.kt)("inlineCode",{parentName:"li"},"didUpdate"),"\u8fd9\u4e2a\u751f\u547d\u5468\u671f\uff0c\u4e14\u80fd\u591f\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"didUpdate"),"\u4e2d\u8bbf\u95ee\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"prevProps")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"prevData"),"\uff0c\u800c\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\u9759\u6001\u8f6c\u4e49\u51fa\u8fd9\u4e2a\u751f\u547d\u5468\u671f\u5c31\u610f\u5473\u7740\u4f60\u9700\u8981\u53bb\u52a8\u6001\u5206\u6790\u51fa",(0,r.kt)("inlineCode",{parentName:"li"},"didUpdate"),"\u91cc\u9762\u8981\u7528\u5230\u7684\u6240\u6709\u5c5e\u6027\uff0c\u7136\u540e\u53bb\u52a8\u6001\u751f\u6210\u51fa\u8fd9\u4e9b\u5c5e\u6027\u7684\u76d1\u542c\u51fd\u6570\u3002\u8fd9\u663e\u7136\u53ef\u9760\u7a0b\u5ea6\u662f\u6781\u5176\u4f4e\u7684\uff1b")),(0,r.kt)("p",null,"\u7b49\uff08\u8fd9\u91cc\u4e0d\u518d\u4e00\u4e00\u5217\u4e3e\uff09\u3002"),(0,r.kt)("h2",{id:"\u529f\u80fd\u5b9a\u5236"},"\u529f\u80fd\u5b9a\u5236"),(0,r.kt)("p",null,"\u4e1a\u52a1\u53ef\u57fa\u4e8e\u81ea\u8eab\u4e1a\u52a1\u8bc9\u6c42\u6765\u5b9a\u5236 ",(0,r.kt)("strong",{parentName:"p"},"\u5de5\u7a0b\u63d2\u4ef6")," \u6216 ",(0,r.kt)("strong",{parentName:"p"},"\u8fd0\u884c\u65f6\u63d2\u4ef6/\u89e3\u51b3\u65b9\u6848"),"\u3002"),(0,r.kt)("h3",{id:"\u5de5\u7a0b\u80fd\u529b\u5b9a\u5236"},"\u5de5\u7a0b\u80fd\u529b\u5b9a\u5236"),(0,r.kt)("img",{src:"https://img.alicdn.com/imgextra/i4/O1CN01PEzcAh1sy1ShieQLG_!!6000000005834-2-tps-4020-2493.png",width:"1200"}),(0,r.kt)("h3",{id:"\u8fd0\u884c\u65f6\u80fd\u529b\u5b9a\u5236"},"\u8fd0\u884c\u65f6\u80fd\u529b\u5b9a\u5236"),(0,r.kt)("img",{src:"https://img.alicdn.com/imgextra/i1/O1CN01WFfxj41Q9MPRRThMi_!!6000000001933-2-tps-4020-2022.png",width:"1200"}))}k.isMDXComponent=!0}}]);