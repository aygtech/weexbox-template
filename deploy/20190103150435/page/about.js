// { "framework": "Vue"} 

!function(o){var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=o,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,o){e.exports=o(1)},function(e,t,o){"use strict";var n,i=o(2),r=(n=i)&&n.__esModule?n:{default:n};r.default.el="#root",new Vue(r.default)},function(e,t,o){var n,i,r=[];r.push(o(3)),n=o(4);var s=o(6);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/mario/Documents/aygtech/weexbox-template/src/page/about/App.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-a467bcd0",i.style=i.style||{},r.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),e.exports=n},function(e,t){e.exports={ver:{marginTop:"30",marginRight:"30",marginBottom:"30",marginLeft:"30",paddingTop:"30",paddingRight:"30",paddingBottom:"30",paddingLeft:"30",backgroundColor:"#f7f7f7",borderRadius:"10"},title:{color:"#999999",textAlign:"center",fontSize:"34",paddingBottom:"20"},info:{display:"flex",flexDirection:"row",justifyContent:"flex-start",flexWrap:"wrap"},"info-item":{fontSize:"30",width:"310",borderBottomColor:"#e7e5e5",borderBottomWidth:"1"},"info-left":{paddingTop:"20",paddingRight:"0",paddingBottom:"20",paddingLeft:"0",textAlign:"right",color:"#999999"},"info-right":{paddingTop:"20",paddingRight:"0",paddingBottom:"20",paddingLeft:"30",textAlign:"left"},item:{fontSize:"34",paddingTop:"30",paddingRight:"30",paddingBottom:"30",paddingLeft:"30",borderBottomColor:"#e7e5e5",borderBottomWidth:"1"}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(5),i=weex.requireModule("wb-navigator"),r=weex.requireModule("wb-modal"),s=weex.config.env;t.default={components:{},data:function(){return{env:s}},created:function(){i.setCenterItem({text:"WeexBox",color:"3d3d3d"},function(){})},methods:{website:function(){n.router.open({name:"web",title:"官网",url:"https://aygtech.github.io/weexbox"})},problem:function(){r.showToast({text:"整理中...",duration:1.5})}}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=weex.requireModule("wb-router"),i=weex.config.env,r=t.weexBoxUrl="https://aygtech.github.io/weexbox/guide/module.html",s=t.screenHeight=function(){var e=i.deviceHeight/i.deviceWidth*750;return Math.ceil(e)},a=t.router={open:function(e){var t=Object.assign({name:"weex",url:null,type:"push",navBarHidden:!1,params:{}},e);n.open(t)},close:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;n.close(e)},refresh:function(){n.refresh()},getParams:function(){return n.getParams()}};t.default={weexBoxUrl:r,router:a,screenHeight:s}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("scroller",[o("div",{staticClass:["ver"]},[o("text",{staticClass:["title"]},[e._v("Weex SDK Version")]),o("div",{staticClass:["info"]},[o("text",{staticClass:["info-item","info-left"]},[e._v("appVersion")]),o("text",{staticClass:["info-item","info-right"]},[e._v(e._s(e.env.appVersion))]),o("text",{staticClass:["info-item","info-left"]},[e._v("weexVersion")]),o("text",{staticClass:["info-item","info-right"]},[e._v(e._s(e.env.weexVersion))]),o("text",{staticClass:["info-item","info-left"]},[e._v("platform")]),o("text",{staticClass:["info-item","info-right"]},[e._v(e._s(e.env.platform))]),o("text",{staticClass:["info-item","info-left"]},[e._v("osVersion")]),o("text",{staticClass:["info-item","info-right"]},[e._v(e._s(e.env.osVersion))]),o("text",{staticClass:["info-item","info-left"]},[e._v("deviceModel")]),o("text",{staticClass:["info-item","info-right"]},[e._v(e._s(e.env.deviceModel))])])]),o("text",{staticClass:["item"],on:{click:e.website}},[e._v("WeexBox 官网")])])},staticRenderFns:[]},e.exports.render._withStripped=!0}]);