// { "framework": "Vue"} 

!function(r){var n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=19)}([,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=weex.requireModule("wb-router"),o=weex.config.env,u=t.weexBoxUrl="https://aygtech.github.io/weexbox/guide/module.html",i=t.screenHeight=function(){var e=o.deviceHeight/o.deviceWidth*750;return Math.ceil(e)},a=t.router={open:function(e){var t=Object.assign({name:"weex",url:null,type:"push",navBarHidden:!1,params:{}},e);n.open(t)},close:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;n.close(e)},refresh:function(){n.refresh()},getParams:function(){return n.getParams()}};t.default={weexBoxUrl:u,router:a,screenHeight:i}},,,,,,,,,,,,,,function(e,t,r){e.exports=r(20)},function(e,t,r){"use strict";var n,o=r(21),u=(n=o)&&n.__esModule?n:{default:n};u.default.el="#root",new Vue(u.default)},function(e,t,r){var n,o,u=[];u.push(r(22)),n=r(23);var i=r(25);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/mario/Documents/aygtech/weexbox-template/src/page/module/App.vue",o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-0dadf195",o.style=o.style||{},u.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,u),e.exports=n},function(e,t){e.exports={item:{paddingTop:"30",paddingRight:"30",paddingBottom:"30",paddingLeft:"30",borderBottomColor:"#e7e5e5",borderBottomWidth:"1"}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),o=r(24),u=weex.requireModule("wb-navigator");t.default={components:{},data:function(){return{moduleList:o.moduleList}},created:function(){u.setCenterItem({text:"WeexBox例子",color:"3d3d3d"},function(){})},methods:{detail:function(e){n.router.open({url:"page/"+e+".js",params:{title:e,url:e}})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.moduleList=["wb-router","wb-network","wb-event","globalEvent","wb-modal","wb-navigator","wb-external"];t.default={moduleList:n}},function(e,t){e.exports={render:function(){var r=this,e=r.$createElement,n=r._self._c||e;return n("scroller",{staticClass:["wrapper"]},r._l(r.moduleList,function(t,e){return n("text",{key:e,staticClass:["item"],on:{click:function(e){r.detail(t)}}},[r._v(r._s(t))])}))},staticRenderFns:[]},e.exports.render._withStripped=!0}]);