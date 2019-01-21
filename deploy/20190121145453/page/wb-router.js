// { "framework": "Vue"} 

!function(r){var o={};function n(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=r,n.c=o,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=88)}({5:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=weex.requireModule("wb-router"),n=weex.config.env,s=e.weexBoxUrl="https://aygtech.github.io/weexbox/guide/module.html",i=e.screenHeight=function(){var t=n.deviceHeight/n.deviceWidth*750;return Math.ceil(t)},a=e.router={open:function(t){var e=Object.assign({name:"weex",url:null,type:"push",navBarHidden:!1,params:{}},t);o.open(e)},close:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;o.close(t)},refresh:function(){o.refresh()},getParams:function(){return o.getParams()}};e.default={weexBoxUrl:s,router:a,screenHeight:i}},88:function(t,e,r){t.exports=r(89)},89:function(t,e,r){"use strict";var o,n=r(90),s=(o=n)&&o.__esModule?o:{default:o};s.default.el="#root",new Vue(s.default)},90:function(t,e,r){var o,n,s=[];s.push(r(91)),o=r(92);var i=r(93);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/mario/Documents/aygtech/weexbox-template/src/page/wb-router/App.vue",n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-10f50016",n.style=n.style||{},s.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,s),t.exports=o},91:function(t,e){t.exports={wrap:{paddingTop:"30",paddingRight:"30",paddingBottom:"30",paddingLeft:"30"},empty:{height:"40"},title:{fontSize:"28",color:"#333333",paddingBottom:"15"},button:{justifyContent:"center",alignItems:"center",alignContent:"center",height:"78",borderRadius:"8",backgroundImage:"linear-gradient(to bottom right, #0FCF2C, #21B0C4)","backgroundImage:active":"linear-gradient(to bottom right, #15DF34, #2AC5DB)"},"button-text":{fontSize:"28",color:"#ffffff"}}},92:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(5),n=weex.requireModule("wb-navigator"),s=weex.requireModule("wb-modal"),i=weex.config.env,a={title:"wb-router",url:"wb-router"};e.default={components:{},data:function(){return{isIos:"ios"===i.platform.toLowerCase()}},created:function(){n.setCenterItem({text:a.title,color:"3d3d3d"},function(){}),n.setRightItems([{text:"查看文档",color:"3d3d3d"}],function(){o.router.open({name:"web",title:a.title,url:o.weexBoxUrl+"#"+a.url})})},methods:{disableGestureBack:function(){o.router.open({url:"page/web.js",disableGestureBack:!0,params:{title:a.title,url:a.url}})},closeFromBottomToTop:function(){o.router.open({url:"page/wb-router-close.js",params:{}})},refresh:function(){o.router.refresh()},getParams:function(){s.showToast({text:""+JSON.stringify(a),duration:1.5})},open:function(){o.router.open({name:"web",url:o.weexBoxUrl+"#"+a.url})}}}},93:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroller",{staticClass:["wrap"]},[r("text",{staticClass:["title"]},[t._v("打开新页面(open)")]),r("div",{staticClass:["button"],on:{click:t.open}},[r("text",{staticClass:["button-text"]},[t._v("打开新页面")])]),r("div",{staticClass:["empty"]}),r("text",{staticClass:["title"]},[t._v("打开页面与关闭页面(closeFromBottomToTop)")]),r("div",{staticClass:["button"],on:{click:t.closeFromBottomToTop}},[r("text",{staticClass:["button-text"]},[t._v("打开页面与关闭页面")])]),r("div",{staticClass:["empty"]}),r("text",{staticClass:["title"]},[t._v("获取router的params参数(getParams)")]),r("div",{staticClass:["button"],on:{click:t.getParams}},[r("text",{staticClass:["button-text"]},[t._v("获取参数")])]),r("div",{staticClass:["empty"]}),r("text",{staticClass:["title"]},[t._v("刷新weex页面(refresh)")]),r("div",{staticClass:["button"],on:{click:t.refresh}},[r("text",{staticClass:["button-text"]},[t._v("刷新本页")])]),r("div",{staticClass:["empty"]}),t.isIos?[r("text",{staticClass:["title"]},[t._v("打开新页面并禁用返回手势(disableGestureBack)")]),r("div",{staticClass:["button"],on:{click:t.disableGestureBack}},[r("text",{staticClass:["button-text"]},[t._v("打开新页面并禁用返回手势")])]),r("div",{staticClass:["empty"]})]:t._e()],2)},staticRenderFns:[]},t.exports.render._withStripped=!0}});