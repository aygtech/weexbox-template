// { "framework": "Vue"} 

!function(o){var n={};function r(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=o,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=76)}({5:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=weex.requireModule("wb-router"),r=weex.config.env,i="https://weexbox.surge.sh",u=(new Date).getTime();console.log("now "+u);var a=new Date("2019/01/30 12:00:00").getTime();console.log("end "+a),a<=u&&(i="https://aygtech.github.io/weexbox");var s=t.weexBoxDomain=i,c=t.weexBoxUrl=i+"/guide/module.html",l=t.screenHeight=function(){var e=r.deviceHeight/r.deviceWidth*750;return Math.ceil(e)},d=t.router={open:function(e){var t=Object.assign({name:"weex",url:null,type:"push",navBarHidden:!1,params:{}},e);n.open(t)},close:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;n.close(e)},refresh:function(){n.refresh()},getParams:function(){return n.getParams()}};t.default={weexBoxDomain:s,weexBoxUrl:c,router:d,screenHeight:l}},76:function(e,t,o){e.exports=o(77)},77:function(e,t,o){"use strict";var n,r=o(78),i=(n=r)&&n.__esModule?n:{default:n};i.default.el="#root",new Vue(i.default)},78:function(e,t,o){var n,r,i=[];i.push(o(79)),n=o(80);var u=o(81);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/mario/Documents/aygtech/weexbox-template/src/page/wb-network/App.vue",r.render=u.render,r.staticRenderFns=u.staticRenderFns,r._scopeId="data-v-e6f49656",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n},79:function(e,t){e.exports={wrap:{paddingTop:"30",paddingRight:"30",paddingBottom:"30",paddingLeft:"30"},empty:{height:"40"},title:{fontSize:"28",color:"#333333",paddingBottom:"15"},button:{justifyContent:"center",alignItems:"center",alignContent:"center",height:"78",borderRadius:"8",backgroundImage:"linear-gradient(to bottom right, #0FCF2C, #21B0C4)","backgroundImage:active":"linear-gradient(to bottom right, #15DF34, #2AC5DB)"},"button-text":{fontSize:"28",color:"#ffffff"}}},80:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(5),r=weex.requireModule("wb-navigator"),i=weex.requireModule("wb-network"),u=weex.requireModule("wb-modal"),a={title:"wb-network",url:"wb-network"};t.default={components:{},data:function(){return{}},created:function(){r.setCenterItem({text:a.title,color:"3d3d3d"},function(){}),r.setRightItems([{text:"查看文档",color:"3d3d3d"}],function(){n.router.open({name:"web",title:a.title,url:n.weexBoxUrl+"#"+a.url})})},methods:{request:function(){i.request({url:"https://weexbox.com/xxx/xxx",method:"post",headers:{"X-Requested-With":"XMLHttpRequest"},params:{ID:12345},responseType:"json"},function(){u.showToast({text:"请求完成",duration:1.5})})},upload:function(){i.upload({url:"https://weexbox.com/xxx/xxx",files:["/docment/1.png"]},function(){u.showToast({text:"完成的callback",duration:1.5})},function(){u.showToast({text:"进度的callback",duration:1.5})})}}}},81:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("scroller",{staticClass:["wrap"]},[o("text",{staticClass:["title"]},[e._v("请求接口(request)")]),o("div",{staticClass:["button"],on:{click:e.request}},[o("text",{staticClass:["button-text"]},[e._v("请求接口")])]),o("div",{staticClass:["empty"]})])},staticRenderFns:[]},e.exports.render._withStripped=!0}});