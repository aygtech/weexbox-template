// { "framework": "Vue"} 

!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=45)}({45:function(e,t,n){e.exports=n(46)},46:function(e,t,n){"use strict";var o,r=n(47),i=(o=r)&&o.__esModule?o:{default:o};i.default.el="#root",new Vue(i.default)},47:function(e,t,n){var o,r,i=[];i.push(n(48)),o=n(49);var a=n(50);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="D:\\code\\work\\weexbox-template\\src\\page\\wb-external\\App.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-81fdbe2a",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o},48:function(e,t){e.exports={wrap:{paddingTop:"30",paddingRight:"30",paddingBottom:"30",paddingLeft:"30"},empty:{height:"40"},title:{fontSize:"28",color:"#333333",paddingBottom:"15"},button:{justifyContent:"center",alignItems:"center",alignContent:"center",height:"78",borderRadius:"8",backgroundImage:"linear-gradient(to bottom right, #0FCF2C, #21B0C4)","backgroundImage:active":"linear-gradient(to bottom right, #15DF34, #2AC5DB)"},"button-text":{fontSize:"28",color:"#ffffff"}}},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),r=weex.requireModule("wb-navigator"),i=weex.requireModule("wb-external"),a=weex.requireModule("wb-modal"),s={title:"wb-external",url:"wb-external"};t.default={components:{},data:function(){return{}},created:function(){r.setCenterItem({text:s.title,color:"3d3d3d"},function(){}),r.setRightItems([{text:"查看文档",color:"3d3d3d"}],function(){o.router.open({url:"page/web.js",params:{title:s.title,url:s.url}})})},methods:{openBrowser:function(){i.openBrowser("https://aygtech.github.io/weexbox")},callPhone:function(){i.callPhone("114")},openCamera:function(){i.openCamera({enableCrop:!0,isCircle:!0,width:500,height:500},function(e){a.showToast({text:JSON.stringify(e),duration:1.5})})},openPhoto:function(){i.openPhoto({count:9,enableCrop:!0,isCircle:!0,width:500,height:500},function(e){a.showToast({text:JSON.stringify(e),duration:1.5})})}}}},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=weex.requireModule("wb-router"),r=weex.requireModule("wb-nativerouter"),i=weex.config.env,a=t.weexBoxUrl="https://aygtech.github.io/weexbox/guide/module.html",s=(t.toolbarHeight=function(){var e=r.nativeNavigationHeight()/i.deviceWidth*750;return Math.ceil(e)},t.screenHeight=function(){var e=i.deviceHeight/i.deviceWidth*750;return Math.ceil(e)}),u=t.router={open:function(e){var t=Object.assign({name:"weex",url:null,type:"push",navBarHidden:!1,params:{}},e);o.open(t)},close:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;o.close(e)},refresh:function(){o.refresh()},getParams:function(){return o.getParams()}};t.default={weexBoxUrl:a,router:u,screenHeight:s}},50:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("scroller",{staticClass:["wrap"]},[n("text",{staticClass:["title"]},[e._v("打开浏览器(openBrowser)")]),n("div",{staticClass:["button"],on:{click:e.openBrowser}},[n("text",{staticClass:["button-text"]},[e._v("打开浏览器")])]),n("div",{staticClass:["empty"]}),n("text",{staticClass:["title"]},[e._v("打电话(callPhone)")]),n("div",{staticClass:["button"],on:{click:e.callPhone}},[n("text",{staticClass:["button-text"]},[e._v("打电话")])]),n("div",{staticClass:["empty"]}),n("text",{staticClass:["title"]},[e._v("拍照(openCamera)")]),n("div",{staticClass:["button"],on:{click:e.openCamera}},[n("text",{staticClass:["button-text"]},[e._v("拍照")])]),n("div",{staticClass:["empty"]}),n("text",{staticClass:["title"]},[e._v("打开相册(openPhoto)")]),n("div",{staticClass:["button"],on:{click:e.openPhoto}},[n("text",{staticClass:["button-text"]},[e._v("打开相册")])]),n("div",{staticClass:["empty"]})])},staticRenderFns:[]},e.exports.render._withStripped=!0}});