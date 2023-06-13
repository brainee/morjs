"use strict";(self.webpackChunkmorjs_site=self.webpackChunkmorjs_site||[]).push([[1987],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=m(t),c=r,d=k["".concat(l,".").concat(c)]||k[c]||u[c]||i;return t?a.createElement(d,o(o({ref:n},s),{},{components:t})):a.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[k]="string"==typeof e?e:r,o[1]=p;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6721:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=t(1966),r=(t(9496),t(9613));const i={},o="Mock",p={unversionedId:"guides/basic/mock",id:"guides/basic/mock",title:"Mock",description:"MorJS \u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684 Mock \u529f\u80fd\uff0c\u80fd\u591f\u901a\u8fc7\u65b9\u4fbf\u7b80\u5355\u7684\u65b9\u5f0f\u6765\u5b8c\u6210 Mock \u6570\u636e\u6216 JSAPI \u7684\u8bbe\u7f6e\u3002",source:"@site/docs/guides/basic/mock.md",sourceDirName:"guides/basic",slug:"/guides/basic/mock",permalink:"/guides/basic/mock",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"\u63d2\u4ef6",permalink:"/guides/basic/plugin"},next:{title:"\u73af\u5883\u53d8\u91cf",permalink:"/guides/basic/env-variables"}},l={},m=[{value:"\u80fd\u529b\u6982\u89c8",id:"\u80fd\u529b\u6982\u89c8",level:2},{value:"\u76ee\u5f55\u7ea6\u5b9a",id:"\u76ee\u5f55\u7ea6\u5b9a",level:2},{value:"\u5feb\u901f\u63a5\u5165",id:"\u5feb\u901f\u63a5\u5165",level:2},{value:"\u7c7b\u578b\u8bf4\u660e",id:"\u7c7b\u578b\u8bf4\u660e",level:2},{value:"JSAPI \u7c7b\u578b\u8be6\u7ec6\u8bf4\u660e",id:"jsapi-\u7c7b\u578b\u8be6\u7ec6\u8bf4\u660e",level:3},{value:"\u901a\u7528 JSAPI",id:"\u901a\u7528-jsapi",level:4},{value:"request \u8bf7\u6c42",id:"request-\u8bf7\u6c42",level:4},{value:"mock \u6587\u4ef6\u7c7b\u578b\u8bf4\u660e",id:"mock-\u6587\u4ef6\u7c7b\u578b\u8bf4\u660e",level:3},{value:"mock \u914d\u7f6e",id:"mock-\u914d\u7f6e",level:2},{value:"Adapter \u6269\u5c55\u914d\u7f6e",id:"adapter-\u6269\u5c55\u914d\u7f6e",level:2},{value:"\u5982\u4f55\u4f7f\u7528 Adapter",id:"\u5982\u4f55\u4f7f\u7528-adapter",level:3},{value:"\u5982\u4f55\u7f16\u5199 Adapter",id:"\u5982\u4f55\u7f16\u5199-adapter",level:3},{value:"<code>runOptions</code> \u53c2\u6570",id:"runoptions-\u53c2\u6570",level:4},{value:"\u7ed9 <code>adapter</code> \u4f20\u53c2",id:"\u7ed9-adapter-\u4f20\u53c2",level:4}],s={toc:m},k="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(k,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mock"},"Mock"),(0,r.kt)("p",null,"MorJS \u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684 Mock \u529f\u80fd\uff0c\u80fd\u591f\u901a\u8fc7\u65b9\u4fbf\u7b80\u5355\u7684\u65b9\u5f0f\u6765\u5b8c\u6210 Mock \u6570\u636e\u6216 JSAPI \u7684\u8bbe\u7f6e\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u4ec0\u4e48\u662f Mock \u6570\u636e"),"\uff1a\u5728\u524d\u540e\u7aef\u7ea6\u5b9a\u597d API \u63a5\u53e3\u4ee5\u540e\uff0c\u524d\u7aef\u53ef\u4ee5\u4f7f\u7528 Mock \u6570\u636e\u6765\u5728\u672c\u5730\u6a21\u62df\u51fa API \u5e94\u8be5\u8981\u8fd4\u56de\u7684\u6570\u636e\uff0c\u8fd9\u6837\u4e00\u6765\u524d\u540e\u7aef\u5f00\u53d1\u5c31\u53ef\u4ee5\u540c\u65f6\u8fdb\u884c\uff0c\u4e0d\u4f1a\u56e0\u4e3a\u540e\u7aef API \u8fd8\u5728\u5f00\u53d1\u800c\u5bfc\u81f4\u524d\u7aef\u7684\u5de5\u4f5c\u88ab\u963b\u585e\u3002"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u4ec0\u4e48\u662f Mock JSAPI"),"\uff1aJSAPI \u901a\u5e38\u662f\u7531\u5bbf\u4e3b\u73af\u5883\u63d0\u4f9b\u7684\uff0c\u7528\u4e8e\u8c03\u8d77\u5bbf\u4e3b\u80fd\u529b\u7684\u63a5\u53e3\uff0c\u5982\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"my.alert")," \u6216 \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"wx.showModal")," \u7b49\uff0cMock JSAPI \u5c31\u662f\u524d\u7aef\u53ef\u4ee5\u57fa\u4e8e\u5bbf\u4e3b\u672c\u8eab\u63d0\u4f9b\u7684 JSAPI \u7684\u51fa\u5165\u53c2\u4f5c\u4e3a\u6807\u51c6\uff0c\u5728\u672c\u5730\u6a21\u62df\u51fa JSAPI \u76f8\u540c\u7684\u8c03\u7528\u65b9\u5f0f\uff0c\u4ee5\u89e3\u51b3\u90e8\u5206 JSAPI \u53ea\u80fd\u591f\u901a\u8fc7\u771f\u673a\u8c03\u7528\u6216\u9700\u8981\u9488\u5bf9\u591a\u7aef\u5dee\u5f02\u6d4b\u8bd5\u7684\u573a\u666f\u3002")),(0,r.kt)("h2",{id:"\u80fd\u529b\u6982\u89c8"},"\u80fd\u529b\u6982\u89c8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5c0f\u7a0b\u5e8f\u672c\u5730 JSAPI mock \u80fd\u529b\uff0c\u89e3\u51b3\u5f00\u53d1\u9636\u6bb5\u65e0\u6cd5\u8054\u8c03\u63a5\u53e3\u8bf7\u6c42\u6570\u636e\u7684\u75db\u70b9"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u7075\u6d3b\u5207\u6362\u7ebf\u4e0a\u7ebf\u4e0b\u6570\u636e\uff0c\u5feb\u901f\u4fbf\u6377\u4fee\u6539\u672c\u5730\u6570\u636e\u590d\u73b0\u4e1a\u52a1\u7279\u5b9a\u573a\u666f\u6216\u6d41\u7a0b"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u7edd\u5927\u90e8\u5206\u540c\u6b65\u548c\u5f02\u6b65\u7684\u5c0f\u7a0b\u5e8f JSAPI\uff0c\u652f\u6301 MorJS \u751f\u6001\u4e0b\u7684\u591a\u7aef\u5c0f\u7a0b\u5e8f\u9002\u914d"),(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u969c\u4f7f\u7528\u5b89\u5168\uff0c\u7ebf\u4e0a\u7ebf\u4e0b\u6570\u636e\u9694\u79bb\uff0cmock \u6570\u636e\u4e0d\u4f1a\u5e26\u5230\u7ebf\u4e0a"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u7531\u6269\u5c55\u7684 Adapter \u80fd\u529b\uff0c\u53ef\u5b9a\u5236\u5316\u7279\u6b8a\u903b\u8f91\u63a5\u5165\u5230 mock \u4e2d"),(0,r.kt)("li",{parentName:"ul"},"\u517c\u5bb9 ",(0,r.kt)("inlineCode",{parentName:"li"},".ts")," ",(0,r.kt)("inlineCode",{parentName:"li"},".mjs")," ",(0,r.kt)("inlineCode",{parentName:"li"},".jsonc")," ",(0,r.kt)("inlineCode",{parentName:"li"},".json5")," ",(0,r.kt)("inlineCode",{parentName:"li"},".json")," ",(0,r.kt)("inlineCode",{parentName:"li"},".js")," ",(0,r.kt)("inlineCode",{parentName:"li"},".cjs")," \u6587\u4ef6\u7c7b\u578b\u683c\u5f0f\uff0c\u4f18\u5148\u7ea7\u987a\u5e8f\u4f9d\u6b21")),(0,r.kt)("h2",{id:"\u76ee\u5f55\u7ea6\u5b9a"},"\u76ee\u5f55\u7ea6\u5b9a"),(0,r.kt)("p",null,"MorJS \u7ea6\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"/mock")," \u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u4e3a Mock \u6587\u4ef6\uff0c\u4f8b\u5982\u8fd9\u6837\u7684\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 mock\n\u2502   \u251c\u2500\u2500 my\n\u2502   \u2502   \u2514\u2500\u2500 getSystemInfo.ts\n\u2502   \u251c\u2500\u2500 wx\n\u2502   \u2502   \u2514\u2500\u2500 login.ts\n\u2502   \u2514\u2500\u2500 request\n\u2502       \u2514\u2500\u2500 user\n\u2502           \u2514\u2500\u2500 info.ts\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 pages\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 todos\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 todos.axml\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 todos.json\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 todos.less\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 todos.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.less\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 mini.project.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 project.config.json\n")),(0,r.kt)("p",null,"\u5219 ",(0,r.kt)("inlineCode",{parentName:"p"},"/mock")," \u76ee\u5f55\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"my/getSystemInfo.ts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"wx/login.ts")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"request/user/info.ts")," \u5c31\u4f1a\u88ab MorJS \u89c6\u4e3a Mock \u6587\u4ef6 \u6765\u5904\u7406\u3002"),(0,r.kt)("h2",{id:"\u5feb\u901f\u63a5\u5165"},"\u5feb\u901f\u63a5\u5165"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"li"},"/mock")," \u6587\u4ef6\u76ee\u5f55\uff0c\u8be5\u76ee\u5f55\u7528\u4e8e\u5b58\u653e\u6240\u6709\u7684 mock \u6587\u4ef6\uff1b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 mock\n\u2502\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 pages\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.json\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u6839\u636e\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"li"},"mock")," \u7684 JSAPI \u7c7b\u578b\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"/mock")," \u6587\u4ef6\u76ee\u5f55\u4e0b\u521b\u5efa\u5bf9\u5e94\u7684\u6587\u4ef6\u76ee\u5f55\u548c mock \u6587\u4ef6\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 mock\n\u2502   \u251c\u2500\u2500 my\n\u2502   \u2502   \u2514\u2500\u2500 getLocation.ts\n\u2502   \u251c\u2500\u2500 wx\n\u2502   \u2502   \u2514\u2500\u2500 getSystemInfo.ts\n\u2502   \u2514\u2500\u2500 request\n\u2502       \u2514\u2500\u2500 getList.ts\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5728\u4e1a\u52a1\u4ee3\u7801\u4e2d\u6dfb\u52a0\u76f8\u5173 JSAPI \u8bf7\u6c42\uff0c\u5bf9\u4e8e\u4e0d\u540c\u7684 JSAPI \u7c7b\u578b\u8bf7\u67e5\u770b\u4e0b\u65b9\u8be6\u7ec6\u8bf4\u660e\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u7ec8\u7aef\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"mor compile --mock")," \u5f00\u542f mock\uff1b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ mor compile --mock\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u628a\u7f16\u8bd1\u4ea7\u7269\u7528 IDE \u6253\u5f00\uff0c\u67e5\u770b\u8c03\u7528\u7684 JSAPI\uff0c\u8fd4\u56de\u7ed3\u679c\u5e94\u4e3a\u7b2c 2 \u6b65\u521b\u5efa\u7684 mock \u6587\u4ef6\uff1b")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"mock \u6587\u4ef6\u517c\u5bb9\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},".ts")," ",(0,r.kt)("inlineCode",{parentName:"p"},".mjs")," ",(0,r.kt)("inlineCode",{parentName:"p"},".jsonc")," ",(0,r.kt)("inlineCode",{parentName:"p"},".json5")," ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," ",(0,r.kt)("inlineCode",{parentName:"p"},".cjs")," \u6587\u4ef6\u7c7b\u578b\u683c\u5f0f\uff0c\u4f18\u5148\u7ea7\u987a\u5e8f\u4f9d\u6b21")),(0,r.kt)("h2",{id:"\u7c7b\u578b\u8bf4\u660e"},"\u7c7b\u578b\u8bf4\u660e"),(0,r.kt)("h3",{id:"jsapi-\u7c7b\u578b\u8be6\u7ec6\u8bf4\u660e"},"JSAPI \u7c7b\u578b\u8be6\u7ec6\u8bf4\u660e"),(0,r.kt)("h4",{id:"\u901a\u7528-jsapi"},"\u901a\u7528 JSAPI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u57fa\u7840 API\uff0c\u63d0\u4f9b\u5c0f\u7a0b\u5e8f\u7684\u57fa\u7840\u80fd\u529b\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"my.getLocation")," ",(0,r.kt)("inlineCode",{parentName:"li"},"wx.getSystemInfo")," \u7b49\u7b49\uff1b"),(0,r.kt)("li",{parentName:"ul"},"mock \u76ee\u5f55\u4e0b\u521b\u5efa my (\u5fae\u4fe1\u4e3a wx) \u76ee\u5f55\uff0c\u628a\u9700\u8981 mock \u7684 API \u6587\u4ef6\u521b\u5efa\u5728\u6b64\u5904\uff1b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 mock\n\u2502   \u251c\u2500\u2500 my\n\u2502   \u2502   \u251c\u2500\u2500 getLocation.ts\n\u2502   \u2502   \u2514\u2500\u2500 getNetworkType.ts\n\u2502   \u2514\u2500\u2500 wx\n\u2502       \u251c\u2500\u2500 getSetting.ts\n\u2502       \u2514\u2500\u2500 getSystemInfo.ts\n")),(0,r.kt)("h4",{id:"request-\u8bf7\u6c42"},"request \u8bf7\u6c42"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u53d1\u8d77 HTTPS \u7f51\u7edc\u8bf7\u6c42\u8c03\u7528\u7684 JSAPI\uff0c\u7531\u4e8e request \u63a5\u53e3\u7684\u7279\u6b8a\u6027\u548c\u901a\u7528\u884c\uff0c\u6211\u4eec\u628a\u8be5 API \u5355\u72ec\u5904\u7406\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u65e0\u8bba\u662f\u652f\u4ed8\u5b9d\u3001\u5fae\u4fe1\u6216\u662f\u5176\u4ed6\u5e73\u53f0\u5c0f\u7a0b\u5e8f\uff0c\u90fd\u9002\u7528\u8be5\u65b9\u5f0f mock HTTPS \u7f51\u7edc\u8bf7\u6c42\uff1b"),(0,r.kt)("li",{parentName:"ul"},"mock \u76ee\u5f55\u4e0b\u521b\u5efa request \u76ee\u5f55\uff0c\u628a\u9700\u8981 mock \u7684 HTTPS \u7f51\u7edc\u8bf7\u6c42\u63a5\u53e3\u6587\u4ef6\u521b\u5efa\u5728\u6b64\u5904\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u7531\u5b8c\u6574 url \u8bf7\u6c42\u5730\u5740\u62c6\u5206\u4e3a\u57df\u540d\u548c\u63a5\u53e3\u4e24\u90e8\u5206\uff0c\u5c06\u63a5\u53e3\u90e8\u5206\u4f5c\u4e3a mock \u6587\u4ef6\u7684\u8def\u5f84",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u63a5\u53e3\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"my.request({ url: 'https://abc.org/api/abc/getList' })"),"\uff0c\u5219 mock \u6587\u4ef6\u8def\u5f84\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"/mock/request/api/abc/getList.ts")),(0,r.kt)("li",{parentName:"ul"},"\u5982\u63a5\u53e3\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"my.request({ url: 'https://abc.org/aaa/getList' })"),"\uff0c\u5219 mock \u6587\u4ef6\u8def\u5f84\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"/mock/request/aaa/getList.ts"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 mock\n\u2502   \u2514\u2500\u2500 request\n\u2502       \u251c\u2500\u2500 getFeedsList.ts\n\u2502       \u251c\u2500\u2500 api\n\u2502       \u2502   \u2514\u2500\u2500 getList.ts\n\u2502       \u2514\u2500\u2500 aaa\n\u2502           \u2514\u2500\u2500 getList.ts\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u5e38\u5e38\u4f1a\u9047\u5230\u4f20\u5165\u7684\u53c2\u6570\u4e0d\u540c\uff0c\u63a5\u53e3\u4e0b\u53d1\u4e0d\u540c\u6570\u636e\u7684\u60c5\u51b5\uff0cmock \u540c\u6837\u652f\u6301\u8be5\u80fd\u529b\uff0c\u8be6\u60c5\u89c1\u4e0b\u53d1 mock \u6587\u4ef6\u7c7b\u578b\u8bf4\u660e\u3002")),(0,r.kt)("h3",{id:"mock-\u6587\u4ef6\u7c7b\u578b\u8bf4\u660e"},"mock \u6587\u4ef6\u7c7b\u578b\u8bf4\u660e"),(0,r.kt)("p",null,"\u6211\u4eec\u76ee\u524d\u517c\u5bb9 ",(0,r.kt)("inlineCode",{parentName:"p"},".ts")," ",(0,r.kt)("inlineCode",{parentName:"p"},".mjs")," ",(0,r.kt)("inlineCode",{parentName:"p"},".jsonc")," ",(0,r.kt)("inlineCode",{parentName:"p"},".json5")," ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," ",(0,r.kt)("inlineCode",{parentName:"p"},".cjs")," \u4e94\u79cd\u6587\u4ef6\u7c7b\u578b\u683c\u5f0f\uff0c\u4f18\u5148\u7ea7\u987a\u5e8f\u4f9d\u6b21\uff0c\u4ee5\u4e0b\u5206\u522b\u8bf4\u660e\u4e0d\u540c\u7c7b\u578b\u6587\u4ef6\u7684\u5199\u6cd5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".json")," \u6587\u4ef6\u3001",(0,r.kt)("inlineCode",{parentName:"li"},".json5")," \u6587\u4ef6\u3001",(0,r.kt)("inlineCode",{parentName:"li"},".jsonc")," \u6587\u4ef6\uff0c\u6807\u51c6 json \u7c7b\u578b\u6587\u4ef6\uff0c\u8fd4\u56de\u7ed3\u679c\u5bf9\u5e94 json \u7684\u5185\u5bb9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// /mock/wx/getSystemInfo.json\n{\n  "data": { "a": 1, "b": 2 }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".ts")," \u6587\u4ef6\u3001",(0,r.kt)("inlineCode",{parentName:"li"},".js")," \u6587\u4ef6\u3001",(0,r.kt)("inlineCode",{parentName:"li"},".mjs")," \u6587\u4ef6\u3001",(0,r.kt)("inlineCode",{parentName:"li"},".cjs")," \u6587\u4ef6\uff0c\u652f\u6301 ESM \u548c CJS \u4e24\u79cd\u5199\u6cd5\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u540c\u65f6\u652f\u6301\u51fd\u6570\u5199\u6cd5\uff0c\u6839\u636e\u5165\u53c2\u7684\u4e0d\u540c\uff0c\u8fd4\u56de\u4e0d\u540c mock \u7ed3\u679c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/* /mock/my/getHAMemoryInfo.js */\n\n// ESModule \u5199\u6cd5\nexport default {\n  evaluatedStatus: 'good',\n  currentMemory: 123\n}\n\n// CommonJS \u5199\u6cd5\nmodule.exports = {\n  evaluatedStatus: 'good',\n  currentMemory: 123\n}\n\n// \u51fd\u6570\u5199\u6cd5\uff0c\u6839\u636e\u53c2\u6570 opts \u7684\u4e0d\u540c\uff0creturn \u4e0d\u540c mock \u7ed3\u679c\nmodule.exports = function (opts) {\n  const {\n    data: { type }\n  } = opts\n  switch (type) {\n    case 'ali':\n      return { res: 'alipay' }\n    case 'wx':\n      return { res: 'wechat' }\n    default:\n      return { res: '\u5176\u4ed6' }\n  }\n}\n")),(0,r.kt)("h2",{id:"mock-\u914d\u7f6e"},"mock \u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mor.config.ts")," \u6587\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"mock")," \u914d\u7f6e\u9879\uff0c\u53ef\u4e0d\u914d\u7f6e\uff0c\u9ed8\u8ba4\u503c ",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),"\uff0c\u6bcf\u9879\u7684\u8be6\u7ec6\u8bf4\u660e\u5982\u4e0b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"debug: \u662f\u5426\u5f00\u542f\u5c0f\u7a0b\u5e8f debug\uff0c\u9ed8\u8ba4\u503c ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," \u65f6\uff0c\u5c06\u663e\u793a\u54ea\u4e9b JSAPI \u547d\u4e2d mock\uff1b"),(0,r.kt)("li",{parentName:"ul"},"path: \u672c\u5730 mock \u76ee\u5f55\u8def\u5f84\uff0c\u9ed8\u8ba4\u503c ",(0,r.kt)("inlineCode",{parentName:"li"},"'./mock'"),"\uff0c\u82e5\u4f60\u4e0d\u60f3\u628a mock \u6587\u4ef6\u653e\u5728\u6839\u76ee\u5f55\u4e0b\uff0c\u53ef\u901a\u8fc7\u6b64\u9879\u66f4\u6539 mock \u6587\u4ef6\u76ee\u5f55\u4f4d\u7f6e\uff1b"),(0,r.kt)("li",{parentName:"ul"},"originMap: \u914d\u7f6e\u54ea\u4e9b JSAPI \u8df3\u8fc7 mock\uff0c\u5f3a\u5236\u4f7f\u7528\u539f\u751f\u7684\u4e8b\u4ef6\u65b9\u6cd5\uff1b"),(0,r.kt)("li",{parentName:"ul"},"adapters: \u6269\u5c55\u80fd\u529b\u652f\u6301\uff0c\u7528\u4e8e\u81ea\u5b9a\u4e49\u6269\u5c55 mock \u903b\u8f91\uff0c\u4f18\u5148\u7ea7\u9ad8\u4e8e mock \u6d41\u7a0b\uff1b")),(0,r.kt)("p",null,"\u793a\u4f8b\u914d\u7f6e\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { defineConfig } from '@morjs/cli'\n\nexport default defineConfig([\n  {\n    name: 'ali',\n    sourceType: 'alipay' ,\n    target: 'alipay',\n    ...,\n    mock: {\n      debug: false, // \u662f\u5426\u5f00\u542f debug\n      path: './mock', // \u672c\u5730 mock \u76ee\u5f55\u8def\u5f84\n      originMap: { // \u914d\u7f6e\u54ea\u4e9b API \u4f7f\u7528\u539f\u751f\u65b9\u6cd5\n        my: ['getSystemInfo', 'request'],\n      },\n      adapters: [], // adapters \u6269\u5c55\u80fd\u529b\u914d\u7f6e\n    }\n  },\n])\n")),(0,r.kt)("h2",{id:"adapter-\u6269\u5c55\u914d\u7f6e"},"Adapter \u6269\u5c55\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"adapters")," \u914d\u7f6e\u7528\u4e8e\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"mock")," \u7684\u6269\u5c55\u80fd\u529b\uff0c\u5176\u8fd4\u56de\u7ed3\u679c\u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"mock")," \u903b\u8f91\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"mock")," \u4f18\u5148\u7ea7\u5219\u9ad8\u4e8e\u539f\u751f\u65b9\u6cd5\uff08\u672a\u547d\u4e2d\u914d\u7f6e originMap \u7684\u60c5\u51b5\u4e0b\uff09"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"adapters")," \u914d\u7f6e\u9879\u63a5\u6536\u4e00\u4e2a\u6570\u7ec4\uff0c\u652f\u6301\u914d\u7f6e\u591a\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"adapter"),"\uff0c\u5176\u6267\u884c\u987a\u5e8f\u548c\u4f18\u5148\u7ea7\u4ece\u4e0a\u5230\u4e0b\uff0c\u5f53\u547d\u4e2d\u67d0\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"adapter"),"\uff0c\u8fd4\u56de\u6b63\u786e\u7684\u7ed3\u679c\u540e\uff0c\u5c06\u4e0d\u4f1a\u518d\u6267\u884c\u540e\u7eed\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"adapter")),(0,r.kt)("h3",{id:"\u5982\u4f55\u4f7f\u7528-adapter"},"\u5982\u4f55\u4f7f\u7528 Adapter"),(0,r.kt)("p",null,"\u6bcf\u4e2a adapter \u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," \u7c7b\u578b\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," \u4e24\u79cd\u7c7b\u578b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string")," \u7c7b\u578b\uff0c\u53c2\u6570\u4e3a\u672c\u5730 adapter \u8def\u5f84\u6216 npm \u5305\u540d\uff0c\u914d\u7f6e\u4ee5\u52a0\u8f7d\u8be5 adapter")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default defineConfig([\n  {\n    name: 'ali',\n    sourceType: 'alipay' ,\n    target: 'alipay',\n    ...,\n    mock: {\n      ...,\n      adapters: [\n        './you_adapter_name.js', // string \u7c7b\u578b\u672c\u5730 adapter \u6587\u4ef6\u8def\u5f84\n      ],\n    }\n  },\n])\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"array")," \u7c7b\u578b\uff0c\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u52a0\u8f7d adapter \u5e76\u5411\u5176\u4f20\u53c2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u672c\u5730 adapter \u8def\u5f84\u6216 npm \u5305\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u4f20\u7ed9 adapter \u7684\u53c2\u6570\uff08\u975e\u5fc5\u586b\uff09")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { defineConfig } from '@morjs/cli'\n\nexport default defineConfig([\n  {\n    name: 'ali',\n    sourceType: 'alipay' ,\n    target: 'alipay',\n    ...,\n    mock: {\n      ...,\n      adapters: [\n        [\n          // \u53c2\u6570\u2460: \u672c\u5730 adapter \u6216 npm \u5305\u540d\n          'your_adapter_name',\n          // \u53c2\u6570\u2461: \u63d0\u4f9b adapter \u7684\u53c2\u6570\n          {\n            type: 'your_parameter_type',\n            api: 'your_parameter_api'\n          }\n        ],\n      ],\n    }\n  },\n])\n")),(0,r.kt)("h3",{id:"\u5982\u4f55\u7f16\u5199-adapter"},"\u5982\u4f55\u7f16\u5199 Adapter"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"adapters")," \u4e2d\u914d\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"adapter"),"\uff0c\u4f1a\u5728 mock \u521d\u59cb\u5316\u9636\u6bb5\u4e2d\u81ea\u52a8\u4f9d\u6b21 ",(0,r.kt)("inlineCode",{parentName:"p"},"import"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"new")," \u5bf9\u5e94\u7684\u5b9e\u4f8b\u5bf9\u8c61\u5e76\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," \u65b9\u6cd5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"adapter")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," \u9700\u8981\u8fd4\u56de\u4e00\u4e2a\u7ed3\u679c\u7528\u4e8e\u4f18\u5148\u66ff\u4ee3\u540e\u7eed\u7684 mock \u7ed3\u679c\uff0c\u82e5\u4e0d\u8fd4\u56de\u6216\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," \u5219\u7ee7\u7eed\u6267\u884c\u540e\u7eed\u7684 mock \u6d41\u7a0b\uff0c\u6240\u4ee5\u4e00\u4e2a\u57fa\u672c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"adapter")," \u7684\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class XXXAdapter {\n  private options: Record<string, any>\n\n  constructor(options) {\n    this.options = options\n  }\n\n  public run(runOptions: IRunOptions) {\n    // \u6267\u884c\u76f8\u5173\u903b\u8f91 \u83b7\u53d6\u6700\u7ec8\u7ed3\u679c result\n    return result || undefined\n  }\n}\n")),(0,r.kt)("h4",{id:"runoptions-\u53c2\u6570"},(0,r.kt)("inlineCode",{parentName:"h4"},"runOptions")," \u53c2\u6570"),(0,r.kt)("p",null,"\u5728 mock \u521d\u59cb\u5316\u5bf9\u5e94\u7684\u5b9e\u4f8b\u5bf9\u8c61\u540e\uff0c\u81ea\u52a8\u8c03\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," \u65b9\u6cd5\u4f1a\u4f20\u4e00\u4e9b\u56fa\u5b9a\u7684\u53c2\u6570\u63d0\u4f9b\u7ed9\u5f00\u53d1\u8005\u4f7f\u7528\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"runOptions")," \u76ee\u524d\u5305\u542b\u56db\u4e2a\u5c5e\u6027:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apiName"),": \u8c03\u7528\u7684 JSAPI \u540d\u79f0\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"getSystemInfo")," ",(0,r.kt)("inlineCode",{parentName:"li"},"request")," \u7b49\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u8be5\u5c5e\u6027\u9009\u62e9\u4ecb\u5165\u54ea\u4e9b JSAPI \u7684 mock \u6d41\u7a0b\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apiArguments"),": \u8c03\u7528\u7684 API \u7684\u4f20\u53c2\uff0c\u4f8b\u5982\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"request")," \u65f6\u7684\u5165\u53c2\uff0c\u53ef\u6839\u636e\u53c2\u6570\u4e0d\u540c\u6267\u884c\u4e0d\u4f1a\u903b\u8f91\u6d41\u7a0b\u6216\u8fd4\u56de\u4e0d\u540c\u7ed3\u679c\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"originalGlobal"),": \u5c0f\u7a0b\u5e8f\u539f\u751f\u5168\u5c40\u5bf9\u8c61 \u5982\u652f\u4ed8\u5b9d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"my"),"\uff08\u5fae\u4fe1\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"wx"),"\uff09\uff0c\u8be5\u539f\u751f\u65b9\u6cd5\u4e0d\u4f1a\u8d70 mock \u6d41\u7a0b\u907f\u514d mock \u5d4c\u5957\u6b7b\u5faa\u73af\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mockContext"),": webpack require \u7684 mock \u76ee\u5f55\u7ed3\u6784\uff0c\u8be6\u60c5\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"li",href:"https://webpack.js.org/guides/dependency-management/"},"webpack - Dependency Management"),"\uff1b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class XXXAdapter {\n  private options: Record<string, any>\n\n  constructor(options) {\n    this.options = options\n  }\n\n  public run(runOptions: IRunOptions) {\n    const { apiName, apiArguments, originalGlobal, mockContext } = runOptions\n    // \u6267\u884c\u76f8\u5173\u903b\u8f91 \u83b7\u53d6\u6700\u7ec8\u7ed3\u679c result\n    return result || undefined\n  }\n}\n")),(0,r.kt)("h4",{id:"\u7ed9-adapter-\u4f20\u53c2"},"\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"h4"},"adapter")," \u4f20\u53c2"),(0,r.kt)("p",null,"\u5728\u5982\u4f55\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"adapter")," \u7684\u65f6\u5019\u8bf4\u8fc7\uff0c\u6bcf\u4e2a adapter \u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," \u7c7b\u578b\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," \u4e24\u79cd\u7c7b\u578b\uff0c\u60f3\u8981\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"adapter")," \u4f20\u53c2\u5fc5\u987b\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," \u7c7b\u578b\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u4f20\u7ed9 adapter \u7684\u53c2\u6570\uff0c\u4f20\u5165\u7684\u53c2\u6570\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"constructor")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," \u4e2d\u83b7\u53d6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// mor.config.ts\nexport default defineConfig([\n  {\n    name: 'ali',\n    target: 'alipay',\n    ...,\n    mock: {\n      ...,\n      adapters: [\n        [\n          // \u53c2\u6570\u2460: \u672c\u5730 adapter \u6216 npm \u5305\u540d\n          'your_adapter_name',\n          // \u53c2\u6570\u2461: \u63d0\u4f9b adapter \u7684\u53c2\u6570\n          {\n            type: 'your_parameter_type',\n            api: 'your_parameter_api'\n          }\n        ],\n      ],\n    }\n  },\n])\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// your_adapter_name/index.ts\nexport default class MtopAdapter {\n  private options: Record<string, any>\n\n  constructor(options) {\n    this.options = options\n  }\n\n  public run(runOptions: IRunOptions) {\n    const { apiName, apiArguments, mockContext, originalGlobal } = runOptions\n    const {\n      type, // your_parameter_type\n      api // your_parameter_api\n    } = this.options || {}\n    // \u6267\u884c\u76f8\u5173\u903b\u8f91 \u83b7\u53d6\u6700\u7ec8\u7ed3\u679c result\n    return result\n  }\n}\n")))}u.isMDXComponent=!0}}]);