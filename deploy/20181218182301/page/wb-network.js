// { "framework": "Vue"} 

!function(r){var n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=69)}({5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=weex.requireModule("wb-router"),o=weex.config.env,i=t.weexBoxUrl="https://aygtech.github.io/weexbox/guide/module.html",u=t.screenHeight=function(){var e=o.deviceHeight/o.deviceWidth*750;return Math.ceil(e)},a=t.router={open:function(e){var t=Object.assign({name:"weex",url:null,type:"push",navBarHidden:!1,params:{}},e);n.open(t)},close:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;n.close(e)},refresh:function(){n.refresh()},getParams:function(){return n.getParams()}};t.default={weexBoxUrl:i,router:a,screenHeight:u}},69:function(e,t,r){e.exports=r(70)},70:function(e,t,r){"use strict";var n,o=r(71),i=(n=o)&&n.__esModule?n:{default:n};i.default.el="#root",new Vue(i.default)},71:function(e,t,r){var n,o,i=[];i.push(r(72)),n=r(73);var u=r(74);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="D:\\code\\work\\weexbox-template\\src\\page\\wb-network\\App.vue",o.render=u.render,o.staticRenderFns=u.staticRenderFns,o._scopeId="data-v-4253e428",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=n},72:function(e,t){e.exports={wrap:{paddingTop:"30",paddingRight:"30",paddingBottom:"30",paddingLeft:"30"},empty:{height:"40"},title:{fontSize:"28",color:"#333333",paddingBottom:"15"},button:{justifyContent:"center",alignItems:"center",alignContent:"center",height:"78",borderRadius:"8",backgroundImage:"linear-gradient(to bottom right, #0FCF2C, #21B0C4)","backgroundImage:active":"linear-gradient(to bottom right, #15DF34, #2AC5DB)"},"button-text":{fontSize:"28",color:"#ffffff"}}},73:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),o=weex.requireModule("wb-navigator"),i=weex.requireModule("wb-network"),u=weex.requireModule("wb-modal"),a={title:"wb-network",url:"wb-network"};t.default={components:{},data:function(){return{}},created:function(){o.setCenterItem({text:a.title,color:"3d3d3d"},function(){}),o.setRightItems([{text:"查看文档",color:"3d3d3d"}],function(){n.router.open({name:"web",title:a.title,url:n.weexBoxUrl+"#"+a.url})})},methods:{request:function(){i.request({url:"https://weexbox.com/xxx/xxx",method:"post",headers:{"X-Requested-With":"XMLHttpRequest"},params:{ID:12345},responseType:"json"},function(){u.showToast({text:"请求完成",duration:1.5})})},upload:function(){i.upload({url:"https://weexbox.com/xxx/xxx",files:["/docment/1.png"]},function(){u.showToast({text:"完成的callback",duration:1.5})},function(){u.showToast({text:"进度的callback",duration:1.5})})}}}},74:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("scroller",{staticClass:["wrap"]},[r("text",{staticClass:["title"]},[e._v("请求接口(request)")]),r("div",{staticClass:["button"],on:{click:e.request}},[r("text",{staticClass:["button-text"]},[e._v("请求接口")])]),r("div",{staticClass:["empty"]})])},staticRenderFns:[]},e.exports.render._withStripped=!0}});