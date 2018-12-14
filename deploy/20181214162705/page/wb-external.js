// { "framework": "Vue"} 

!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=27)}({27:function(t,e,n){t.exports=n(28)},28:function(t,e,n){"use strict";var o,r=n(29),i=(o=r)&&o.__esModule?o:{default:o};i.default.el="#root",new Vue(i.default)},29:function(t,e,n){var o,r,i=[];i.push(n(30)),o=n(31);var a=n(32);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="/Users/mario/Documents/aygtech/weexbox-template/src/page/wb-external/App.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-ef07f450",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),t.exports=o},30:function(t,e){t.exports={wrap:{paddingTop:"30",paddingRight:"30",paddingBottom:"30",paddingLeft:"30"},empty:{height:"40"},title:{fontSize:"28",color:"#333333",paddingBottom:"15"},button:{justifyContent:"center",alignItems:"center",alignContent:"center",height:"78",borderRadius:"8",backgroundImage:"linear-gradient(to bottom right, #0FCF2C, #21B0C4)","backgroundImage:active":"linear-gradient(to bottom right, #15DF34, #2AC5DB)"},"button-text":{fontSize:"28",color:"#ffffff"}}},31:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=weex.requireModule("wb-navigator"),i=weex.requireModule("wb-external"),a=weex.requireModule("wb-modal"),s={title:"wb-external",url:"wb-external"};e.default={components:{},data:function(){return{}},created:function(){r.setCenterItem({text:s.title,color:"3d3d3d"},function(){}),r.setRightItems([{text:"查看文档",color:"3d3d3d"}],function(){o.router.open({url:"page/web.js",params:{title:s.title,url:s.url}})})},methods:{openBrowser:function(){i.openBrowser("https://aygtech.github.io/weexbox")},callPhone:function(){i.callPhone("114",function(){})},openCamera:function(){i.openCamera({enableCrop:!0,isCircle:!0,width:500,height:500},function(t){a.showToast({text:JSON.stringify(t),duration:1.5})})},openPhoto:function(){i.openPhoto({count:9,enableCrop:!0,isCircle:!0,width:500,height:500},function(t){a.showToast({text:JSON.stringify(t),duration:1.5})})}}}},32:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroller",{staticClass:["wrap"]},[n("text",{staticClass:["title"]},[t._v("打开浏览器(openBrowser)")]),n("div",{staticClass:["button"],on:{click:t.openBrowser}},[n("text",{staticClass:["button-text"]},[t._v("打开浏览器")])]),n("div",{staticClass:["empty"]}),n("text",{staticClass:["title"]},[t._v("打电话(callPhone)")]),n("div",{staticClass:["button"],on:{click:t.callPhone}},[n("text",{staticClass:["button-text"]},[t._v("打电话")])]),n("div",{staticClass:["empty"]}),n("text",{staticClass:["title"]},[t._v("拍照(openCamera)")]),n("div",{staticClass:["button"],on:{click:t.openCamera}},[n("text",{staticClass:["button-text"]},[t._v("拍照")])]),n("div",{staticClass:["empty"]}),n("text",{staticClass:["title"]},[t._v("打开相册(openPhoto)")]),n("div",{staticClass:["button"],on:{click:t.openPhoto}},[n("text",{staticClass:["button-text"]},[t._v("打开相册")])]),n("div",{staticClass:["empty"]})])},staticRenderFns:[]},t.exports.render._withStripped=!0},5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=weex.requireModule("wb-router"),r=weex.config.env,i=e.weexBoxUrl="https://aygtech.github.io/weexbox/guide/module.html",a=e.screenHeight=function(){var t=r.deviceHeight/r.deviceWidth*750;return Math.ceil(t)},s=e.router={open:function(t){var e=Object.assign({name:"weex",url:null,type:"push",navBarHidden:!1,params:{}},t);o.open(e)},close:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;o.close(t)},refresh:function(){o.refresh()},getParams:function(){return o.getParams()}};e.default={weexBoxUrl:i,router:s,screenHeight:a}}});