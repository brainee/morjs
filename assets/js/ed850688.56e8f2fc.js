"use strict";(self.webpackChunkmorjs_site=self.webpackChunkmorjs_site||[]).push([[4653],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),k=l,c=u["".concat(o,".").concat(k)]||u[k]||d[k]||i;return n?a.createElement(c,r(r({ref:t},m),{},{components:n})):a.createElement(c,r({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:l,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(1966),l=(n(9496),n(9613));const i={},r="\u652f\u4ed8\u5b9d\u8f6c\u5fae\u4fe1",p={unversionedId:"guides/compatibilities/alipay-to-wechat",id:"guides/compatibilities/alipay-to-wechat",title:"\u652f\u4ed8\u5b9d\u8f6c\u5fae\u4fe1",description:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",source:"@site/docs/guides/compatibilities/alipay-to-wechat.md",sourceDirName:"guides/compatibilities",slug:"/guides/compatibilities/alipay-to-wechat",permalink:"/guides/compatibilities/alipay-to-wechat",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"\u5fae\u4fe1 DSL \u591a\u7aef\u517c\u5bb9\u6027",permalink:"/guides/compatibilities/wechat-to-other"},next:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/web/basic/quickstart"}},o={},s=[{value:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",level:2},{value:"props \u5fc5\u987b\u5b8c\u6574",id:"props-\u5fc5\u987b\u5b8c\u6574",level:3},{value:"props \u4e2d\u7684\u51fd\u6570\u540d\u5b57\u5fc5\u987b\u4e3a on \u5f00\u5934\u7684 onEvent \u683c\u5f0f",id:"props-\u4e2d\u7684\u51fd\u6570\u540d\u5b57\u5fc5\u987b\u4e3a-on-\u5f00\u5934\u7684-onevent-\u683c\u5f0f",level:3},{value:"\u6837\u5f0f\u8986\u76d6\u4f18\u5148\u7ea7",id:"\u6837\u5f0f\u8986\u76d6\u4f18\u5148\u7ea7",level:3},{value:"\u83b7\u53d6 props \u4e2d\u7684\u51fd\u6570\u8fd4\u56de\u503c",id:"\u83b7\u53d6-props-\u4e2d\u7684\u51fd\u6570\u8fd4\u56de\u503c",level:3},{value:"\u83b7\u53d6\u5404\u79cd\u4e8b\u4ef6\u4e2d\u76ee\u6807\u5143\u7d20 data \u5c5e\u6027\u65f6\u4f18\u5148\u4ece currentTarget \u83b7\u53d6",id:"\u83b7\u53d6\u5404\u79cd\u4e8b\u4ef6\u4e2d\u76ee\u6807\u5143\u7d20-data-\u5c5e\u6027\u65f6\u4f18\u5148\u4ece-currenttarget-\u83b7\u53d6",level:3},{value:"\u4e0d\u80fd\u4f7f\u7528 <code>default slot</code> \u9ed8\u8ba4\u63d2\u69fd",id:"\u4e0d\u80fd\u4f7f\u7528-default-slot-\u9ed8\u8ba4\u63d2\u69fd",level:3},{value:"\u5fae\u4fe1\u7aef\u6ca1\u6709 <code>$spliceData</code>",id:"\u5fae\u4fe1\u7aef\u6ca1\u6709-splicedata",level:3},{value:"AXML",id:"axml",level:2},{value:"AXML \u4e2d\u52a8\u6001\u5b9a\u4e49\u9ad8\u5ea6\u8981\u52a0 PX \u5355\u4f4d",id:"axml-\u4e2d\u52a8\u6001\u5b9a\u4e49\u9ad8\u5ea6\u8981\u52a0-px-\u5355\u4f4d",level:3},{value:"AXML \u4e2d\u7684 style \u5c5e\u6027\u4e0d\u80fd\u4f20\u9012\u5bf9\u8c61",id:"axml-\u4e2d\u7684-style-\u5c5e\u6027\u4e0d\u80fd\u4f20\u9012\u5bf9\u8c61",level:3},{value:"AXML \u4e2d\u4e0d\u652f\u6301 <code></code>`` \u6a21\u7248\u5b57\u7b26\u4e32",id:"axml-\u4e2d\u4e0d\u652f\u6301--\u6a21\u7248\u5b57\u7b26\u4e32",level:3},{value:"AXML \u4e0d\u80fd\u4f7f\u7528 <code>{{{}}}</code> \u65b9\u5f0f\u4f20\u9012\u5bf9\u8c61\uff0c\u9664 template \u7684 data \u5c5e\u6027\u4e4b\u5916\uff0c\u4e5f\u4e0d\u80fd\u4f7f\u7528\u89e3\u6784\u8bed\u6cd5",id:"axml-\u4e0d\u80fd\u4f7f\u7528--\u65b9\u5f0f\u4f20\u9012\u5bf9\u8c61\u9664-template-\u7684-data-\u5c5e\u6027\u4e4b\u5916\u4e5f\u4e0d\u80fd\u4f7f\u7528\u89e3\u6784\u8bed\u6cd5",level:3},{value:"SJS",id:"sjs",level:2},{value:"\u4e0d\u80fd\u4f7f\u7528 namedExport",id:"\u4e0d\u80fd\u4f7f\u7528-namedexport",level:3},{value:"\u539f\u751f\u7ec4\u4ef6",id:"\u539f\u751f\u7ec4\u4ef6",level:2},{value:"slider",id:"slider",level:3},{value:"scroll-view \u4e2d flex \u5e03\u5c40\u5931\u6548",id:"scroll-view-\u4e2d-flex-\u5e03\u5c40\u5931\u6548",level:3},{value:"\u914d\u7f6e\u76f8\u5173",id:"\u914d\u7f6e\u76f8\u5173",level:2},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u9876\u90e8\u5bfc\u822a\u680f\u65f6",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u9876\u90e8\u5bfc\u822a\u680f\u65f6",level:3}],m={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u652f\u4ed8\u5b9d\u8f6c\u5fae\u4fe1"},"\u652f\u4ed8\u5b9d\u8f6c\u5fae\u4fe1"),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),(0,l.kt)("h3",{id:"props-\u5fc5\u987b\u5b8c\u6574"},"props \u5fc5\u987b\u5b8c\u6574"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u95ee\u9898\u8868\u73b0\uff1a")," \u5728\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"props"),"\u4e2d\u6ca1\u6709\u5b9a\u4e49\u67d0\u4e2a\u5c5e\u6027\uff0c\u4f46\u662f\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\u76f4\u63a5\u5f15\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"this.props.xx"),"\uff0c\u4f46\u662f\u7531\u4e8e\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\u9700\u8981\u5bf9",(0,l.kt)("inlineCode",{parentName:"li"},"props"),"\u8fdb\u884c\u5206\u6790\u5e76\u52a8\u6001\u8d4b\u503c\uff0c\u56e0\u6b64\u5fc5\u987b\u8981\u6709\u5b8c\u6574\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"props"),"\u5217\u8868"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848\uff1a")," \u5c06\u6240\u6709\u4f7f\u7528\u5230\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"props"),"\u5c5e\u6027\u90fd\u58f0\u660e\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"props"),"\u4e2d")),(0,l.kt)("h3",{id:"props-\u4e2d\u7684\u51fd\u6570\u540d\u5b57\u5fc5\u987b\u4e3a-on-\u5f00\u5934\u7684-onevent-\u683c\u5f0f"},"props \u4e2d\u7684\u51fd\u6570\u540d\u5b57\u5fc5\u987b\u4e3a on \u5f00\u5934\u7684 onEvent \u683c\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u95ee\u9898\u8868\u73b0\uff1a")," \u5728\u652f\u4ed8\u5b9d\u4e2d\uff0c\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5bf9\u5916\u7684\u51fd\u6570\u5165\u53c2\u90fd\u5fc5\u987b\u8981\u6c42\u4ee5 on \u5f00\u5934"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848\uff1a"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"aComponent({\n  props: {\n    onClick() {} // \u5fc5\u987b\u4e3aonX\u7684\u683c\u5f0f\n  }\n})\n")),(0,l.kt)("h3",{id:"\u6837\u5f0f\u8986\u76d6\u4f18\u5148\u7ea7"},"\u6837\u5f0f\u8986\u76d6\u4f18\u5148\u7ea7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u95ee\u9898\u8868\u73b0\uff1a")," \u5fae\u4fe1\u4e2d\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u6837\u5f0f\u65e0\u6cd5\u76f4\u63a5\u88ab\u8986\u76d6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848\uff1a")," \u4f20\u5165\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u6837\u5f0f\u4f18\u5148\u7ea7\u6bd4\u7ec4\u4ef6\u5185\u7684\u9ad8\u5373\u53ef")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<view class="content">\n  <lazy-load className="image"></lazy-load>\n</view>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".content .image {\n  width: 100rpx;\n  height: 100rpx;\n}\n")),(0,l.kt)("h3",{id:"\u83b7\u53d6-props-\u4e2d\u7684\u51fd\u6570\u8fd4\u56de\u503c"},"\u83b7\u53d6 props \u4e2d\u7684\u51fd\u6570\u8fd4\u56de\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u95ee\u9898\u8868\u73b0\uff1a")," \u5728\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"const result = this.props.onClick()")," \u6765\u83b7\u53d6\u5230\u4f20\u5165\u7684\u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002\u7531\u4e8e\u5728\u5fae\u4fe1\u7b49\u7aef\u5916\u5c0f\u7a0b\u5e8f\u4e2d\u4e8b\u4ef6\u5904\u7406\u673a\u5236\u5dee\u5f02\u8fc7\u5927\uff0c\u56e0\u6b64\u9700\u8981\u901a\u8fc7\u5f02\u6b65\u65b9\u5f0f\u6765\u5904\u7406\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848\uff1a")," ",(0,l.kt)("strong",{parentName:"li"},"\u5728\u6240\u6709\u83b7\u53d6\u51fd\u6570\u8fd4\u56de\u503c\u7684\u5730\u65b9\u90fd\u901a\u8fc7 await \u6765\u83b7\u53d6\u5373\u53ef"),"\u3002\u800c\u4f20\u5165\u7684\u51fd\u6570\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u6539\u52a8\uff0c\u6309\u7167\u6b63\u5e38\u7684\u65b9\u5f0f return \u5373\u53ef"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003\u4ee3\u7801\uff1a")),(0,l.kt)("p",null,"\u4f20\u5165\u65b9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"aPage({\n  onComponentClick(...args) {\n    console.log(args)\n    return 'page-data' // \u6b63\u5e38\u8fd4\u56de\u5373\u53ef\uff0c\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u7279\u6b8a\u5904\u7406\n  }\n})\n")),(0,l.kt)("p",null,"\u8c03\u7528\u65b9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"aComponent({\n  methods: {\n    async onClick() {\n      const result = await this.props.onClick('1111111', '22222') // \u9700\u8981await\u6765\u62ff\u8fd4\u56de\u503c\n      console.log(result) // \u6253\u5370\u8f93\u51fa 'page-data'\n    },\n  },\n},\n")),(0,l.kt)("h3",{id:"\u83b7\u53d6\u5404\u79cd\u4e8b\u4ef6\u4e2d\u76ee\u6807\u5143\u7d20-data-\u5c5e\u6027\u65f6\u4f18\u5148\u4ece-currenttarget-\u83b7\u53d6"},"\u83b7\u53d6\u5404\u79cd\u4e8b\u4ef6\u4e2d\u76ee\u6807\u5143\u7d20 data \u5c5e\u6027\u65f6\u4f18\u5148\u4ece currentTarget \u83b7\u53d6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u95ee\u9898\u8868\u73b0\uff1a")," \u5fae\u4fe1\u4e2d\u5143\u7d20\u4ea7\u751f tap \u6216 touch \u4e8b\u4ef6\u65f6\uff0ctarget \u4e2d\u5143\u7d20 data \u5c5e\u6027\u4e3a\u7a7a\uff0c\u53ea\u6709 currentTarget \u5c5e\u6027\u6709\u503c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848\uff1a")," \u4f18\u5148\u4ece currentTarget \u83b7\u53d6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"aPage({\n  onOpenItem(e) {\n    const target = e.currentTarget || e.target\n    const { index, type } = target.dataset || {}\n\n    console.log(index, type)\n  }\n})\n")),(0,l.kt)("h3",{id:"\u4e0d\u80fd\u4f7f\u7528-default-slot-\u9ed8\u8ba4\u63d2\u69fd"},"\u4e0d\u80fd\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h3"},"default slot")," \u9ed8\u8ba4\u63d2\u69fd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u95ee\u9898\u8868\u73b0\uff1a")," \u5728\u652f\u4ed8\u5b9d\u4e2d\u53ef\u4ee5\u8bbe\u7f6e\u7ec4\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"slot")," \u7684\u9ed8\u8ba4\u5185\u5bb9\uff0c\u5728\u7ec4\u4ef6\u8c03\u7528\u65b9\u4e0d\u4f20\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"slot")," \u7684\u5185\u5bb9\u7684\u65f6\u5019\u9ed8\u8ba4\u5c55\u793a\u51fa\u6765\u3002\u4f46\u662f\u7531\u4e8e\u5fae\u4fe1\u5c1a\u672a\u652f\u6301\u8be5\u529f\u80fd\u3002\u53ef\u53c2\u8003\u5fae\u4fe1\u7684\u56de\u7b54\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/community/develop/doc/0008a04f2b0f289fa907b450b56000"},"https://developers.weixin.qq.com/community/develop/doc/0008a04f2b0f289fa907b450b56000")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848\uff1a")," \u76ee\u524d\u6ca1\u6709\u529e\u6cd5\u62b9\u5e73\u8fd9\u79cd\u5e95\u5c42\u7ea7\u522b\u7684\u5dee\u5f02\uff0c\u56e0\u6b64\u9700\u8981\u7ec4\u4ef6\u90fd\u81ea\u5df1\u4f20 ",(0,l.kt)("inlineCode",{parentName:"li"},"slot")," \u7684\u5185\u5bb9\u6765\u786e\u4fdd\u53cc\u7aef\u517c\u5bb9\u6027")),(0,l.kt)("h3",{id:"\u5fae\u4fe1\u7aef\u6ca1\u6709-splicedata"},"\u5fae\u4fe1\u7aef\u6ca1\u6709 ",(0,l.kt)("inlineCode",{parentName:"h3"},"$spliceData")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u95ee\u9898\u8868\u73b0\uff1a")," \u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6ca1\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"spliceData")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848\uff1a")," \u53ea\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"setData")," \u6216\u8005\u5224\u65ad\u73af\u5883\u518d\u4f7f\u7528")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"axml"},"AXML"),(0,l.kt)("h3",{id:"axml-\u4e2d\u52a8\u6001\u5b9a\u4e49\u9ad8\u5ea6\u8981\u52a0-px-\u5355\u4f4d"},"AXML \u4e2d\u52a8\u6001\u5b9a\u4e49\u9ad8\u5ea6\u8981\u52a0 PX \u5355\u4f4d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u95ee\u9898\u8868\u73b0\uff1a")," \u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\u4e0d\u52a0\u5355\u4f4d\uff0c\u9ad8\u5ea6\u4e0d\u751f\u6548"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848\uff1a")," \u52a0\u5355\u4f4d")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://intranetproxy.alipay.com/skylark/lark/0/2020/png/27413/1595323486788-7c509cb9-7d96-4ce2-872d-75cb285f3d45.png#height=1096&id=eF6j5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1096&originWidth=2008&originalType=binary&ratio=1&size=1657788&status=done&style=none&width=2008",alt:"image.png"})),(0,l.kt)("h3",{id:"axml-\u4e2d\u7684-style-\u5c5e\u6027\u4e0d\u80fd\u4f20\u9012\u5bf9\u8c61"},"AXML \u4e2d\u7684 style \u5c5e\u6027\u4e0d\u80fd\u4f20\u9012\u5bf9\u8c61"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u95ee\u9898\u8868\u73b0\uff1a")," \u5728\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u4e2d\u4f20\u5165 style \u5bf9\u8c61\uff0c\u89e3\u6790\u4e3a\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u5219\u4f1a\u51fa\u73b0\u9519\u8bef"),(0,l.kt)("li",{parentName:"ul"},"\u95ee\u9898\u89e3\u51b3\uff1a\u5728\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u5b57\u7b26\u4e32\u62fc\u63a5\uff08\u53ef\u5f15\u5165\u53d8\u91cf\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003\u4ee3\u7801\uff1a")),(0,l.kt)("p",null,"\u6709\u95ee\u9898\u7684\u5199\u6cd5 \ud83d\udc47\ud83c\udffb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u652f\u4ed8\u5b9d --\x3e\n<view style="{{width: width}}">\n  \x3c!-- \u5fae\u4fe1\u672a\u505a\u5904\u7406\uff0c\u4f1a\u62a5\u9519 --\x3e\n  <view style="{{width: width}}"> </view>\n</view>\n')),(0,l.kt)("p",null,"\u6539\u4e3a \ud83d\udc47\ud83c\udffb \u5373\u53ef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u652f\u4ed8\u5b9d --\x3e\n<view style="width: {{width}}"></view>\n')),(0,l.kt)("h3",{id:"axml-\u4e2d\u4e0d\u652f\u6301--\u6a21\u7248\u5b57\u7b26\u4e32"},"AXML \u4e2d\u4e0d\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"h3"},"\\"),"`","` \u6a21\u7248\u5b57\u7b26\u4e32"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u95ee\u9898\u8868\u73b0\uff1a")," \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\u7684 {{ }} \u4e2d\u65e0\u6cd5\u4f7f\u7528\u6a21\u7248\u5b57\u7b26\u4e32"),(0,l.kt)("li",{parentName:"ul"},"\u95ee\u9898\u89e3\u51b3\uff1a\u5c06\u6a21\u7248\u5b57\u7b26\u4e32\u66ff\u6362\u4e3a\u5b57\u7b26\u4e32\u62fc\u63a5 ",(0,l.kt)("inlineCode",{parentName:"li"},"+")),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<view style=\"{{zIndex ? `z-index: ${zIndex};` : ''}}\"></view>\n")),(0,l.kt)("p",null,"\u6539\u4e3a \ud83d\udc47\ud83c\udffb \u5373\u53ef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<view style=\"{{zIndex ? 'z-index: ' + zIndex : ''}}\"></view>\n")),(0,l.kt)("h3",{id:"axml-\u4e0d\u80fd\u4f7f\u7528--\u65b9\u5f0f\u4f20\u9012\u5bf9\u8c61\u9664-template-\u7684-data-\u5c5e\u6027\u4e4b\u5916\u4e5f\u4e0d\u80fd\u4f7f\u7528\u89e3\u6784\u8bed\u6cd5"},"AXML \u4e0d\u80fd\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h3"},"{{{}}}")," \u65b9\u5f0f\u4f20\u9012\u5bf9\u8c61\uff0c\u9664 template \u7684 data \u5c5e\u6027\u4e4b\u5916\uff0c\u4e5f\u4e0d\u80fd\u4f7f\u7528\u89e3\u6784\u8bed\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u95ee\u9898\u8868\u73b0\uff1a")," \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"{{{ }}}")," \u4f1a\u62a5\u8bed\u6cd5\u9519\u8bef\uff0c\u4e5f\u4e0d\u80fd\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"{{...data}}")),(0,l.kt)("li",{parentName:"ul"},"\u95ee\u9898\u89e3\u51b3\uff1a\u5728 js \u6587\u4ef6\u4e2d\u58f0\u660e\u5b8c\u6574\u5bf9\u8c61\uff0c\u7136\u540e\u518d axml \u4e2d\u76f4\u63a5\u4f20\u9012\uff0c\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"{{data}}"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"sjs"},"SJS"),(0,l.kt)("h3",{id:"\u4e0d\u80fd\u4f7f\u7528-namedexport"},"\u4e0d\u80fd\u4f7f\u7528 namedExport"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u95ee\u9898\u8868\u73b0\uff1a")," \u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\u53ea\u652f\u6301",(0,l.kt)("inlineCode",{parentName:"li"},"module.exports"),"\u800c\u5728\u652f\u4ed8\u5b9d\u4e2d\u662f\u9664\u4e86",(0,l.kt)("inlineCode",{parentName:"li"},"export default {}")," \u4ee5\u5916\u8fd8\u652f\u6301\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"export const x = 1;")," \u7136\u540e\u5728 xml \u4e2d\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},'<import-sjs from="./namedExport.sjs" name="{x}" />'),"\u6765\u5f15\u7528\u3002\u800c\u8fd9\u5957\u673a\u5236\u5728\u5fae\u4fe1\u4e2d\u65e0\u6cd5\u62b9\u5e73\uff0c\u800c",(0,l.kt)("inlineCode",{parentName:"li"},"export default"),"\u5df2\u7ecf\u80fd\u591f\u6ee1\u8db3\u6240\u6709\u4e1a\u52a1\u8bc9\u6c42\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848\uff1a")," \u6240\u6709",(0,l.kt)("inlineCode",{parentName:"li"},"sjs"),"\u4e2d\u53ea\u91c7\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"export default {}"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u539f\u751f\u7ec4\u4ef6"},"\u539f\u751f\u7ec4\u4ef6"),(0,l.kt)("h3",{id:"slider"},"slider"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"track-size")," \u5c5e\u6027\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e0b\u4e0d\u80fd\u652f\u6301")),(0,l.kt)("h3",{id:"scroll-view-\u4e2d-flex-\u5e03\u5c40\u5931\u6548"},"scroll-view \u4e2d flex \u5e03\u5c40\u5931\u6548"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u95ee\u9898\u8868\u73b0\uff1a")," \u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"sroll-view")," \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"flex")," \u5e03\u5c40\u4f1a\u5931\u6548\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u4e00\uff1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"scroll-view")," \u5185\u5c42\u518d\u5d4c\u5957\u4e00\u5c42 ",(0,l.kt)("inlineCode",{parentName:"li"},"view"),"\uff0c\u5bf9\u8fd9\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"view")," \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"flex")," \u5e03\u5c40\uff1b\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"https://segmentfault.com/q/1010000007532480"},"https://segmentfault.com/q/1010000007532480")),(0,l.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u4e8c\uff1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"enable-flex")," \u5c5e\u6027"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u95ee\u9898\u793a\u4f8b \ud83d\udc47\ud83c\udffb"))),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("p",null,"\u539f\u59cb\u6548\u679c\uff08\u6a2a\u5411\u5e03\u5c40\uff09"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://intranetproxy.alipay.com/skylark/lark/0/2020/png/269922/1601632677440-9660077f-a4aa-46de-a533-2cfe56aab189.png#height=42&id=QErf3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=86&originWidth=796&originalType=binary&ratio=1&size=14215&status=done&style=none&width=386",alt:"image.png"})),(0,l.kt)("p",null,"\u8fc1\u79fb\u4e4b\u540e\u4ee3\u7801\uff08\u7eb5\u5411\u5e03\u5c40\uff09"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://intranetproxy.alipay.com/skylark/lark/0/2020/png/269922/1601632746857-85c9c822-00c4-4d49-8812-471373aca2f1.png#height=269&id=s5fTv&margin=%5Bobject%20Object%5D&name=image.png&originHeight=662&originWidth=244&originalType=binary&ratio=1&size=22908&status=done&style=none&width=99",alt:"image.png"})),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u914d\u7f6e\u76f8\u5173"},"\u914d\u7f6e\u76f8\u5173"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u9876\u90e8\u5bfc\u822a\u680f\u65f6"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u9876\u90e8\u5bfc\u822a\u680f\u65f6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u95ee\u9898\u8868\u73b0\uff1a")," \u5728.json \u6587\u4ef6\u4e2d\u8bbe\u7f6e ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},'"transparantTitle":"always"'))," \u65f6\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5fae\u4fe1\u7aef\u5de6\u4e0a\u89d2\u7684\u8fd4\u56de\u6309\u94ae\u548c home \u6309\u94ae\u4f1a\u65e0\u6cd5\u663e\u793a\uff0c\u9700\u8981\u81ea\u5b9a\u4e49"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u4ed8\u5b9d\u4ecd\u53ef\u4ee5\u83b7\u53d6\u5230 ",(0,l.kt)("strong",{parentName:"li"},"statusBarHeight")," \u548c ",(0,l.kt)("strong",{parentName:"li"},"titleBarHeight")," \u7684\u503c\uff0c\u4f46\u5fae\u4fe1\u83b7\u53d6\u5230\u7684 ",(0,l.kt)("strong",{parentName:"li"},"titleBarHeight")," \u503c\u4e3a\u96f6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u8fd4\u56de\u6309\u94ae\u7684\u95ee\u9898\u53ea\u80fd\u662f\u524d\u7aef\u624b\u52a8\u6dfb\u52a0"),(0,l.kt)("li",{parentName:"ul"},"\u5fae\u4fe1\u4fa7\u53ef\u4ee5\u901a\u8fc7 api\uff1a",(0,l.kt)("strong",{parentName:"li"},"wx.getMenuButtonBoundingClientRect()")," \u83b7\u53d6\u5230\u80f6\u56ca\u4f4d\u7f6e\uff0c\u624b\u52a8\u8ba1\u7b97\u51fa title \u90e8\u5206\u9ad8\u5ea6\uff0c\u53c2\u8003\u4ee3\u7801\u903b\u8f91\u5982\u4e0b \ud83d\udc47\ud83c\udffb")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function getHeaderBar() {\n  const systemInfo = getSystemInfoSync()\n  if (systemInfo.app === 'wechat') {\n    // \u5fae\u4fe1\u7aef\n    // \u4f4e\u7248\u672c\u517c\u5bb9\uff0c\u57fa\u7840\u5e93 2.1.0 \u5f00\u59cb\u652f\u6301\n    // eslint-disable-next-line no-undef\n    if (wx.getMenuButtonBoundingClientRect) {\n      // \u8be5\u65b9\u6cd5\u53ef\u4f7f\u7528\n      // eslint-disable-next-line no-undef\n      const { height, top, left } = wx.getMenuButtonBoundingClientRect()\n      console.log('\u5fae\u4fe1\u8bfb\u53d6\u80f6\u56ca\u7ed3\u679c', { height, top, left })\n      let { statusBarHeight } = systemInfo\n      const extraHeight = 10\n      statusBarHeight = top - statusBarHeight > 0 ? statusBarHeight : 0 // \u534e\u4e3ap10\u72b6\u6001\u680f\u662f\u6d6e\u5c42\n      const titleBarHeight = (top - statusBarHeight) * 2 + height + extraHeight\n      return {\n        height: statusBarHeight + titleBarHeight,\n        titleBarHeight: titleBarHeight,\n        statusBarHeight: statusBarHeight,\n        buttonLeft: left,\n        extraHeight\n      }\n    }\n    // \u4f4e\u7248\u672c\u517c\u5bb9\n    return {\n      height: 84,\n      titleBarHeight: 40,\n      statusBarHeight: 44\n    }\n  }\n\n  // \u975e\u5fae\u4fe1\u7aef\n  const { titleBarHeight, statusBarHeight } = systemInfo\n  return {\n    height: titleBarHeight + statusBarHeight,\n    titleBarHeight,\n    statusBarHeight\n  }\n}\n")),(0,l.kt)("p",null,"\u200b"))}d.isMDXComponent=!0}}]);