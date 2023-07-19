"use strict";(self.webpackChunkmorjs_site=self.webpackChunkmorjs_site||[]).push([[4193],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=i.createContext({}),m=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=m(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=m(n),s=l,k=d["".concat(p,".").concat(s)]||d[s]||u[s]||a;return n?i.createElement(k,r(r({ref:t},c),{},{components:n})):i.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:l,r[1]=o;for(var m=2;m<a;m++)r[m]=n[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var i=n(7366),l=(n(9496),n(9613));const a={},r="\u5fae\u4fe1 DSL \u591a\u7aef\u517c\u5bb9\u6027",o={unversionedId:"guides/compatibilities/wechat-to-other",id:"guides/compatibilities/wechat-to-other",title:"\u5fae\u4fe1 DSL \u591a\u7aef\u517c\u5bb9\u6027",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5fae\u4fe1 DSL \u5728\u591a\u7aef\u517c\u5bb9\u6027\u65b9\u9762\u7684\u5dee\u5f02\uff0c\u5fae\u4fe1\u8f6c\u6296\u97f3\u3001\u767e\u5ea6\u7b49\u5c0f\u7a0b\u5e8f\u5dee\u5f02\u8f83\u5c0f\uff0c\u591a\u7aef\u9002\u914d\u95ee\u9898\u8f83\u5c11\uff0c\u8f6c\u652f\u4ed8\u5b9d\u7b49\u5c0f\u7a0b\u5e8f\u6ce8\u610f\u4e8b\u9879\u53ef\u53c2\u8003\u4ee5\u4e0b\u5185\u5bb9\uff0c\u5177\u4f53\u8be6\u60c5\u53ef\u67e5\u8be2\u5404\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u5b98\u7f51\u6587\u6863\uff0c\u8f6c Web \u4e3b\u8981\u5173\u6ce8\u5bf9\u4e8e JSAPI \u548c\u7ec4\u4ef6\u8f6c\u7aef\u4e24\u65b9\u9762\u7684\u652f\u6301\u60c5\u51b5\uff0c\u9664\u6b64\u4e4b\u5916\uff0cMorJS \u63d0\u4f9b\u4e86\u4ee3\u7801\u7ef4\u5ea6\u548c\u6587\u4ef6\u7ef4\u5ea6\u4e24\u79cd\u6761\u4ef6\u7f16\u8bd1\u80fd\u529b\uff0c\u4fbf\u4e8e\u4f7f\u7528\u8005\u6309\u9700\u89e3\u51b3\u591a\u7aef\u4ee3\u7801\u9002\u914d\u95ee\u9898\u3002",source:"@site/docs/guides/compatibilities/wechat-to-other.md",sourceDirName:"guides/compatibilities",slug:"/guides/compatibilities/wechat-to-other",permalink:"/guides/compatibilities/wechat-to-other",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"\u5c0f\u7a0b\u5e8f\u5f62\u6001\u4e00\u4f53\u5316",permalink:"/guides/advance/unity-of-forms"},next:{title:"\u652f\u4ed8\u5b9d\u8f6c\u5fae\u4fe1",permalink:"/guides/compatibilities/alipay-to-wechat"}},p={},m=[{value:"\u8f6c\u652f\u4ed8\u5b9d",id:"\u8f6c\u652f\u4ed8\u5b9d",level:2},{value:"WXML \u4e2d\u907f\u514d\u4f7f\u7528\u4e0d\u652f\u6301\u7684\u7ec4\u4ef6",id:"wxml-\u4e2d\u907f\u514d\u4f7f\u7528\u4e0d\u652f\u6301\u7684\u7ec4\u4ef6",level:3},{value:"\u5f00\u542f component2 \u914d\u7f6e",id:"\u5f00\u542f-component2-\u914d\u7f6e",level:3},{value:"\u4f7f\u7528\u8f83\u65b0\u7684\u57fa\u7840\u5e93\u7248\u672c",id:"\u4f7f\u7528\u8f83\u65b0\u7684\u57fa\u7840\u5e93\u7248\u672c",level:3},{value:"ESModule \u548c CommonJS \u8bed\u6cd5",id:"esmodule-\u548c-commonjs-\u8bed\u6cd5",level:3},{value:"\u4e0d\u540c\u7684\u6837\u5f0f\u9694\u79bb\u652f\u6301",id:"\u4e0d\u540c\u7684\u6837\u5f0f\u9694\u79bb\u652f\u6301",level:3},{value:"\u8f6c Web",id:"\u8f6c-web",level:2},{value:"JSAPI \u5dee\u5f02",id:"jsapi-\u5dee\u5f02",level:3},{value:"\u7ec4\u4ef6\u5dee\u5f02",id:"\u7ec4\u4ef6\u5dee\u5f02",level:3},{value:"\u6761\u4ef6\u7f16\u8bd1",id:"\u6761\u4ef6\u7f16\u8bd1",level:2},{value:"\u4ee3\u7801\u7ef4\u5ea6\u6761\u4ef6\u7f16\u8bd1",id:"\u4ee3\u7801\u7ef4\u5ea6\u6761\u4ef6\u7f16\u8bd1",level:3},{value:"\u6587\u4ef6\u7ef4\u5ea6\u6761\u4ef6\u7f16\u8bd1",id:"\u6587\u4ef6\u7ef4\u5ea6\u6761\u4ef6\u7f16\u8bd1",level:3}],c={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5fae\u4fe1-dsl-\u591a\u7aef\u517c\u5bb9\u6027"},"\u5fae\u4fe1 DSL \u591a\u7aef\u517c\u5bb9\u6027"),(0,l.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5fae\u4fe1 DSL \u5728\u591a\u7aef\u517c\u5bb9\u6027\u65b9\u9762\u7684\u5dee\u5f02\uff0c\u5fae\u4fe1\u8f6c\u6296\u97f3\u3001\u767e\u5ea6\u7b49\u5c0f\u7a0b\u5e8f\u5dee\u5f02\u8f83\u5c0f\uff0c\u591a\u7aef\u9002\u914d\u95ee\u9898\u8f83\u5c11\uff0c\u8f6c\u652f\u4ed8\u5b9d\u7b49\u5c0f\u7a0b\u5e8f\u6ce8\u610f\u4e8b\u9879\u53ef\u53c2\u8003\u4ee5\u4e0b\u5185\u5bb9\uff0c\u5177\u4f53\u8be6\u60c5\u53ef\u67e5\u8be2\u5404\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u5b98\u7f51\u6587\u6863\uff0c\u8f6c Web \u4e3b\u8981\u5173\u6ce8\u5bf9\u4e8e JSAPI \u548c\u7ec4\u4ef6\u8f6c\u7aef\u4e24\u65b9\u9762\u7684\u652f\u6301\u60c5\u51b5\uff0c\u9664\u6b64\u4e4b\u5916\uff0cMorJS \u63d0\u4f9b\u4e86\u4ee3\u7801\u7ef4\u5ea6\u548c\u6587\u4ef6\u7ef4\u5ea6\u4e24\u79cd\u6761\u4ef6\u7f16\u8bd1\u80fd\u529b\uff0c\u4fbf\u4e8e\u4f7f\u7528\u8005\u6309\u9700\u89e3\u51b3\u591a\u7aef\u4ee3\u7801\u9002\u914d\u95ee\u9898\u3002"),(0,l.kt)("h2",{id:"\u8f6c\u652f\u4ed8\u5b9d"},"\u8f6c\u652f\u4ed8\u5b9d"),(0,l.kt)("p",null,"\u56e0\u963f\u91cc\u7cfb\uff08\u652f\u4ed8\u5b9d\u3001\u6dd8\u5b9d\u3001\u9489\u9489\u2026\uff09\u5c0f\u7a0b\u5e8f\u4e4b\u95f4\u5dee\u5f02\u8f83\u5c0f\uff0c\u8fd9\u91cc\u4ee5\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u4e3a\u4f8b\uff0c\u5176\u4ed6\u7aef\u53ef\u914c\u60c5\u53c2\u8003\u3002"),(0,l.kt)("h3",{id:"wxml-\u4e2d\u907f\u514d\u4f7f\u7528\u4e0d\u652f\u6301\u7684\u7ec4\u4ef6"},"WXML \u4e2d\u907f\u514d\u4f7f\u7528\u4e0d\u652f\u6301\u7684\u7ec4\u4ef6"),(0,l.kt)("p",null,"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f DSL \u4e2d\u5c3d\u53ef\u80fd\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/"},"\u5b98\u65b9\u6807\u51c6\u7ec4\u4ef6")," \u8fdb\u884c\u4e1a\u52a1\u5f00\u53d1\uff0c\u4e0d\u8981\u4f7f\u7528\u7c7b\u4f3c ",(0,l.kt)("inlineCode",{parentName:"p"},"i")," ",(0,l.kt)("inlineCode",{parentName:"p"},"span")," ",(0,l.kt)("inlineCode",{parentName:"p"},"img")," ",(0,l.kt)("inlineCode",{parentName:"p"},"h2")," ",(0,l.kt)("inlineCode",{parentName:"p"},"strong")," ",(0,l.kt)("inlineCode",{parentName:"p"},"em")," ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," \u7b49\u5b98\u65b9\u672a\u63d0\u53ca\u7684\u5143\u7d20\uff0c\u5f53\u9700\u8981\u663e\u793a\u76f8\u5173\u89c6\u56fe\u65f6\uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u65b9\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/component/view.html"},"view")," \u6765\u4ee3\u66ff ",(0,l.kt)("inlineCode",{parentName:"li"},"label")," \u7684\u4f7f\u7528\uff0c\u652f\u4ed8\u5b9d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"label")," \u4e0d\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"li"},"tap")," \u4e8b\u4ef6\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/component/view.html"},"view")," \u6765\u4ee3\u66ff ",(0,l.kt)("inlineCode",{parentName:"li"},"h2")," ",(0,l.kt)("inlineCode",{parentName:"li"},"strong")," ",(0,l.kt)("inlineCode",{parentName:"li"},"em")," \u7b49\u5143\u7d20\u7684\u4f7f\u7528\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/component/image.html"},"image")," \u4ee3\u66ff ",(0,l.kt)("inlineCode",{parentName:"li"},"img")," \u7684\u4f7f\u7528\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/component/text.html"},"text")," \u4ee3\u66ff ",(0,l.kt)("inlineCode",{parentName:"li"},"span")," \u7684\u4f7f\u7528\uff1b")),(0,l.kt)("h3",{id:"\u5f00\u542f-component2-\u914d\u7f6e"},"\u5f00\u542f component2 \u914d\u7f6e"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"MorJS")," \u8f6c\u7aef\u5b9e\u73b0\u4e2d\uff0c\u90e8\u5206\u8fd0\u884c\u65f6\u63a5\u53e3\u62b9\u5e73\u65b9\u5f0f\u4f9d\u8d56\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"p"},"component2")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"enableAppxNg")," \u6240\u63d0\u4f9b\u7684\u80fd\u529b\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4ece\u4ee5\u4e0b\u4e24\u4e2a\u65b9\u5f0f\u4e2d\u4efb\u9009\u4e00\u79cd\u8fdb\u884c\u5f00\u542f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u652f\u4ed8\u5b9d IDE \u4e2d\uff0c\u70b9\u51fb \u8be6\u60c5 => \u9879\u76ee\u914d\u7f6e\uff0c\u52fe\u9009\u3010\u542f\u7528\u5c0f\u7a0b\u5e8f\u57fa\u7840\u5e93 2.0 \u6784\u5efa\u3011\u548c\u3010\u542f\u7528 component2\u3011"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u5c0f\u7a0b\u5e8f\u9879\u76ee\u76ee\u5f55\u7684 mini.project.json \u6587\u4ef6\uff08\u82e5\u65e0\u5219\u53ef\u4ee5\u65b0\u5efa\uff09\u4e0b\uff0c\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"component2")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"enableAppxNg"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "component2": true,\n  "enableAppxNg": true\n}\n')),(0,l.kt)("h3",{id:"\u4f7f\u7528\u8f83\u65b0\u7684\u57fa\u7840\u5e93\u7248\u672c"},"\u4f7f\u7528\u8f83\u65b0\u7684\u57fa\u7840\u5e93\u7248\u672c"),(0,l.kt)("p",null,"\u63a8\u8350\u4f7f\u7528\u8f83\u65b0\u7684\u652f\u4ed8\u5b9d\u57fa\u7840\u5e93\uff0c\u5f53\u57fa\u7840\u5e93\u7248\u672c\u8f83\u4f4e\u65f6\uff0c\u4e2a\u522b\u529f\u80fd\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e00\u5b9a\u7a0b\u5ea6\u7684\u5dee\u5f02\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4ee5\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u57fa\u7840\u5e93\u7248\u672c\u5c0f\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"2.8.5")," \u65f6\uff0c\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"lifetimes")," \u8282\u70b9\u6811\u751f\u547d\u5468\u671f\u91c7\u7528 MorJS \u7684\u81ea\u5b9e\u73b0\uff0c\u4e14\u4e0d\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"li"},"moved")," \u751f\u547d\u5468\u671f\u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u7840\u5e93\u7248\u672c\u5c0f\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"2.8.5")," \u65f6\uff0c\u4e0d\u652f\u6301\u4f7f\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"relations")," \u6765\u5efa\u7acb\u7ec4\u4ef6\u5173\u7cfb"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u7840\u5e93\u7248\u672c\u5c0f\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"2.8.1")," \u65f6\uff0c\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"observers")," \u6570\u636e\u53d8\u5316\u89c2\u6d4b\u5668\u91c7\u7528 MorJS \u7684\u81ea\u5b9e\u73b0\u800c\u975e\u652f\u4ed8\u5b9d\u63d0\u4f9b\u7684\u5b98\u65b9\u80fd\u529b"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u7840\u5e93\u7248\u672c\u5c0f\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"2.8.0")," \u65f6\uff0c\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"$selectComponent")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"selectAllComponents")," \u91c7\u7528 MorJS \u7684\u81ea\u5b9e\u73b0\u800c\u975e\u652f\u4ed8\u5b9d\u63d0\u4f9b\u5b98\u65b9\u80fd\u529b"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u7840\u5e93\u7248\u672c\u5c0f\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"2.7.22")," \u65f6\uff0c\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"selectOwnerComponent")," \u91c7\u7528 MorJS \u7684\u81ea\u5b9e\u73b0\u800c\u975e\u652f\u4ed8\u5b9d\u63d0\u4f9b\u5b98\u65b9\u80fd\u529b")),(0,l.kt)("h3",{id:"esmodule-\u548c-commonjs-\u8bed\u6cd5"},"ESModule \u548c CommonJS \u8bed\u6cd5"),(0,l.kt)("p",null,"MorJS \u867d\u7136\u4e0d\u9650\u5236\u6a21\u5757\u7684\u5177\u4f53\u5199\u6cd5\uff0c\u4f46\u662f\u9879\u76ee\u4e2d\u5c3d\u53ef\u80fd\u4e0d\u8981\u51fa\u73b0 ESModule \u548c CommonJS \u6df7\u7528\u7684\u60c5\u51b5\uff0c\u63a8\u8350\u5168\u90e8\u4f7f\u7528 ESModule \u6216\u5168\u90e8\u4f7f\u7528 CommonJS \u6765\u7f16\u5199\u4ee3\u7801\uff0c\u4e24\u8005\u6df7\u7528\u53ef\u80fd\u4f1a\u5728\u4ea7\u7269\u751f\u6210\u65f6\u51fa\u73b0\u9884\u671f\u4e4b\u5916\u7684\u95ee\u9898\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"/* ESModule \u7684\u4f7f\u7528 */\nexport const obj = { name: 'E1e' } // \u5bfc\u51fa export\nexport default { name: 'E1e' } // \u9ed8\u8ba4\u5bfc\u51fa\n\nimport { obj } from './utils.js' // \u5f15\u5165 import\n\n/* CommonJS \u7684\u4f7f\u7528 */\nconst obj = { a: 1 }\nmodule.exports = obj // \u5bfc\u51fa\n\nconst obj = require('./utils.js') // \u5f15\u5165\n")),(0,l.kt)("h3",{id:"\u4e0d\u540c\u7684\u6837\u5f0f\u9694\u79bb\u652f\u6301"},"\u4e0d\u540c\u7684\u6837\u5f0f\u9694\u79bb\u652f\u6301"),(0,l.kt)("p",null,"\u5982\u9047\u5230\u8f6c\u7aef\u7f16\u8bd1\u540e\u7684\u4ea7\u7269\u5728\u4e0d\u540c\u5c0f\u7a0b\u5e8f\u7aef\u6837\u5f0f\u7d0a\u4e71\uff0c\u53ef\u80fd\u662f\u5fae\u4fe1\u548c\u652f\u4ed8\u5b9d\u5bf9\u6837\u5f0f\u9694\u79bb\u7684\u652f\u6301\u548c\u9ed8\u8ba4\u503c\u4e0d\u540c\u5bfc\u81f4\u7684\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5fae\u4fe1\u652f\u6301 6 \u79cd\u6837\u5f0f\u9694\u79bb\u7684\u914d\u7f6e\u65b9\u5f0f\uff0c\u9ed8\u8ba4\u503c\u4e3a\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"isolated"),"\uff0c\u8fd9\u4ee3\u8868\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u95f4\u7684\u6837\u5f0f\u4e92\u4e0d\u5f71\u54cd\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u4ed8\u5b9d\u652f\u6301 2 \u79cd\u6837\u5f0f\u9694\u79bb\u7684\u914d\u7f6e\u65b9\u5f0f\uff0c\u9ed8\u8ba4\u503c\u4e3a\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"shared"),"\uff0c\u4ee3\u8868\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u548c\u9875\u9762\u7684\u6837\u5f0f\u662f\u76f8\u4e92\u5f71\u54cd\u7684\uff0c\u5bb9\u6613\u9020\u6210\u6837\u5f0f\u51b2\u7a81\uff1b")),(0,l.kt)("p",null,"\u63a8\u8350\u5f00\u53d1\u8005\u5728\u6700\u521d\u5f00\u53d1\u65f6\u9488\u5bf9\u4e0d\u540c\u7684\u9875\u9762\u6a21\u5757\u4f7f\u7528\u4e0d\u540c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"class")," \u547d\u540d\u5904\u7406\u6837\u5f0f\u9694\u79bb\uff0c\u5bf9\u4e8e\u5df2\u6709\u7684\u5c0f\u7a0b\u5e8f\u5de5\u7a0b\uff0c\u5728\u57fa\u4e8e\u652f\u4ed8\u5b9d\u57fa\u7840\u5e93 2.7.2 \u53ca\u4ee5\u4e0a\u7248\u672c\u65f6\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684 JSON \u6587\u4ef6\u4e2d\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},'"styleIsolation": "apply-shared"'),"\uff0c\u907f\u514d\u9875\u9762\u7684\u6837\u5f0f\u5f71\u54cd\u5230\u5916\u90e8\u3002"),(0,l.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB"},"\u300a\u5fae\u4fe1\u6837\u5f0f\u9694\u79bb\u300b")," ",(0,l.kt)("a",{parentName:"p",href:"https://opendocs.alipay.com/mini/framework/page-acss#%E9%A1%B5%E9%9D%A2%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB"},"\u300a\u652f\u4ed8\u5b9d\u6837\u5f0f\u9694\u79bb\u300b")),(0,l.kt)("h2",{id:"\u8f6c-web"},"\u8f6c Web"),(0,l.kt)("p",null,"\u8f6c Web \u4e3b\u8981\u5173\u6ce8\u5bf9\u4e8e JSAPI \u548c\u7ec4\u4ef6\u8f6c\u7aef\u4e24\u65b9\u9762\u7684\u652f\u6301\u60c5\u51b5\u3002"),(0,l.kt)("h3",{id:"jsapi-\u5dee\u5f02"},"JSAPI \u5dee\u5f02"),(0,l.kt)("p",null,"\u4f7f\u7528\u5c0f\u7a0b\u5e8f DSL \u8f6c Web \u80fd\u529b\u65f6\uff0c\u9700\u8981\u5173\u6ce8\u4e00\u4e0b\u6240\u4f7f\u7528\u7684 API \u5177\u4f53\u7684\u652f\u6301\u60c5\u51b5\uff0cMorJS \u76ee\u524d\u5df2\u5b8c\u6210 92 \u4e2a JSAPI \u5728\u8f6c Web \u7aef\u7684\u517c\u5bb9\uff0c\u8986\u76d6\u4e86\u5927\u90e8\u5206\u5e38\u7528\u7684\u4e1a\u52a1\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u5982\u9047\u5230\u8fd8\u672a\u652f\u6301\u7684 API\uff0c\u53ef\u5728\u793e\u533a\u670d\u52a1\u7fa4\uff08\u9489\u9489\u7fa4\u53f7 ",(0,l.kt)("inlineCode",{parentName:"p"},"29445021084"),"\uff09\u63d0\u51fa\uff0c\u5f00\u53d1\u540c\u5b66\u5c06\u6309\u7167\u4f18\u5148\u7ea7\u6392\u671f\u517c\u5bb9\u3002"),(0,l.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://mor.eleme.io/web/basic/support"},"\u300aMorJS | Web \u5f00\u53d1 - API \u652f\u6301\u60c5\u51b5\u300b")),(0,l.kt)("h3",{id:"\u7ec4\u4ef6\u5dee\u5f02"},"\u7ec4\u4ef6\u5dee\u5f02"),(0,l.kt)("p",null,"\u76ee\u524d MorJS \u652f\u6301 32 \u4e2a\u7ec4\u4ef6\u5728\u8f6c Web \u7aef\u7684\u517c\u5bb9\uff0c\u540c\u65f6\u652f\u6301\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u66ff\u6362\u80fd\u529b\u3002"),(0,l.kt)("h2",{id:"\u6761\u4ef6\u7f16\u8bd1"},"\u6761\u4ef6\u7f16\u8bd1"),(0,l.kt)("p",null,"MorJS \u63d0\u4f9b\u4e86\u4ee3\u7801\u7ef4\u5ea6\u548c\u6587\u4ef6\u7ef4\u5ea6\u4e24\u79cd\u80fd\u529b\u7684\u6761\u4ef6\u7f16\u8bd1\uff0c\u4fbf\u4e8e\u4f7f\u7528\u8005\u6309\u9700\u89e3\u51b3\u591a\u7aef\u4ee3\u7801\u9002\u914d\u95ee\u9898\u3002"),(0,l.kt)("h3",{id:"\u4ee3\u7801\u7ef4\u5ea6\u6761\u4ef6\u7f16\u8bd1"},"\u4ee3\u7801\u7ef4\u5ea6\u6761\u4ef6\u7f16\u8bd1"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4ee3\u7801\u8f6c\u7aef\u4e2d\u6709\u9002\u914d\u5dee\u5f02\u96be\u9898\uff0c\u6216\u671f\u671b\u80fd\u591f\u6839\u636e\u5f53\u524d\u73af\u5883\u548c\u914d\u7f6e\u7684\u53d8\u91cf\uff0c\u6765\u6784\u5efa\u8f93\u51fa\u4e0d\u540c\u7684\u4ee3\u7801\u7684\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee3\u7801\u7ef4\u5ea6\u7684\u6761\u4ef6\u7f16\u8bd1\uff0c\u8be5\u80fd\u529b\u4e3b\u8981\u6839\u636e\u6ce8\u91ca\u6765\u5b9e\u73b0\u6761\u4ef6\u7f16\u8bd1\uff0c\u7f16\u8bd1\u540e\u4f1a\u628a\u7b26\u5408\u6761\u4ef6\u7684\u4ee3\u7801\u76f4\u63a5\u6e05\u7a7a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- #ifdef wechat --\x3e\n<view>\u53ea\u4f1a\u5728\u5fae\u4fe1\u4e0a\u663e\u793a</view>\n\x3c!-- #endif --\x3e\n\n\x3c!-- #ifdef alipay --\x3e\n<view>\u53ea\u4f1a\u5728\u652f\u4ed8\u5b9d\u4e0a\u663e\u793a</view>\n\x3c!-- #endif --\x3e\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"/* #ifdef wechat */\nconsole.log('\u8fd9\u53e5\u8bdd\u53ea\u4f1a\u5728\u5fae\u4fe1\u4e0a\u663e\u793a')\n/* #endif */\n\n/* #ifndef wechat */\nconsole.log('\u9664\u4e86\u5728\u5fae\u4fe1\u4ee5\u5916\u7684\u7aef\u90fd\u5c55\u793a')\n/* #endif */\n")),(0,l.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://mor.eleme.io/guides/conditional-compile/code-level"},"\u300aMorJS | \u6761\u4ef6\u7f16\u8bd1 - \u4ee3\u7801\u7ef4\u5ea6\u300b")),(0,l.kt)("h3",{id:"\u6587\u4ef6\u7ef4\u5ea6\u6761\u4ef6\u7f16\u8bd1"},"\u6587\u4ef6\u7ef4\u5ea6\u6761\u4ef6\u7f16\u8bd1"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4e0d\u540c\u7aef\u7684\u4e1a\u52a1\u9700\u6c42\uff0c\u82e5\u5b58\u5728\u5927\u91cf\u7684\u5dee\u5f02\u6027\u4ee3\u7801\uff0c\u9664\u4e86\u4f7f\u7528\u4ee3\u7801\u7ef4\u5ea6\u7684\u6761\u4ef6\u7f16\u8bd1\u5916\uff0cMorJS \u8fd8\u63d0\u4f9b\u4e86\u6587\u4ef6\u7ef4\u5ea6\u7684\u6761\u4ef6\u7f16\u8bd1\uff0c\u652f\u6301\u7edd\u5927\u591a\u6570\u7684\u6587\u4ef6\u7c7b\u578b\uff0c\u4ee5\u5404\u7aef\u7279\u6b8a\u540e\u7f00\u4e3a\u7f16\u8bd1\u6761\u4ef6\uff0c\u7f16\u8bd1\u65f6\u6839\u636e\u7aef\u533a\u5206\u4e0d\u540c\u7684\u6587\u4ef6\u540e\u7f00\uff0c\u4f18\u5148\u4f7f\u7528\u5bf9\u5e94\u7aef\u7684\u6e90\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://mor.eleme.io/guides/conditional-compile/file-level"},"\u300aMorJS | \u6761\u4ef6\u7f16\u8bd1 - \u4ee3\u7801\u7ef4\u5ea6\u300b")))}u.isMDXComponent=!0}}]);