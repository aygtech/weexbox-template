// { "framework": "Vue"} 

!function(o){var n={};function r(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=o,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=13)}([,,,,,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=weex.requireModule("wb-router"),r=weex.config.env,i="https://weexbox.surge.sh",s=(new Date).getTime();new Date("2019-01-26 12:00:00").getTime()<=s&&(i="https://aygtech.github.io/weexbox");var a=t.weexBoxDomain=i,u=t.weexBoxUrl=i+"/guide/module.html",c=t.screenHeight=function(){var e=r.deviceHeight/r.deviceWidth*750;return Math.ceil(e)},l=t.router={open:function(e){var t=Object.assign({name:"weex",url:null,type:"push",navBarHidden:!1,params:{}},e);n.open(t)},close:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;n.close(e)},refresh:function(){n.refresh()},getParams:function(){return n.getParams()}};t.default={weexBoxDomain:a,weexBoxUrl:u,router:l,screenHeight:c}},,,,,,,,function(e,t,o){e.exports=o(14)},function(e,t,o){"use strict";var n,r=o(15),i=(n=r)&&n.__esModule?n:{default:n};i.default.el="#root",new Vue(i.default)},function(e,t,o){var n,r,i=[];i.push(o(16)),n=o(17);var s=o(18);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/mario/Documents/aygtech/weexbox-template/src/page/home/App.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-80d3ce70",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n},function(e,t){e.exports={wrapper:{display:"flex",flexDirection:"row",justifyContent:"flex-start",flexWrap:"wrap"},"logo-panel":{borderBottomWidth:"1",borderBottomColor:"#e7e5e5"},logo:{flex:1,width:"750",paddingTop:"150",justifyContent:"center",alignItems:"center",alignContent:"center"},icon:{width:"200",height:"200"},title:{paddingTop:"50",fontSize:"40",fontWeight:"bold"},text:{fontSize:"34"},item:{width:"375",paddingTop:"80",paddingRight:"0",paddingBottom:"80",paddingLeft:"0",justifyContent:"center",alignItems:"center",alignContent:"center",marginBottom:"1",borderRightWidth:"1",borderRightColor:"#e7e5e5",borderBottomWidth:"1",borderBottomColor:"#e7e5e5",backgroundColor:"#f7f7f7"}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(5),r=weex.requireModule("wb-navigator");t.default={components:{},data:function(){return{}},created:function(){r.setCenterItem({text:"WeexBox",color:"3d3d3d"},function(){}),r.setLeftItems([{text:"",color:"3d3d3d"}],function(){})},methods:{use:function(){n.router.open({name:"web",title:"谁在使用WeexBox",url:n.weexBoxDomain+"/guide/who-s-using.html"})},course:function(){n.router.open({name:"web",title:"教程",url:n.weexBoxDomain})},about:function(){n.router.open({url:"page/about.js",params:{}})},modulePage:function(){n.router.open({url:"page/module.js",params:{}})}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),o("div",{staticClass:["wrapper"]},[o("div",{staticClass:["item"],on:{click:e.course}},[o("text",{staticClass:["text"]},[e._v("教程")])]),o("div",{staticClass:["item"],on:{click:e.modulePage}},[o("text",{staticClass:["text"]},[e._v("实例")])]),o("div",{staticClass:["item"],on:{click:e.about}},[o("text",{staticClass:["text"]},[e._v("关于")])]),o("div",{staticClass:["item"],on:{click:e.use}},[o("text",{staticClass:["text"]},[e._v("谁在使用WeexBox")])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("scroller",{staticClass:["logo-panel"]},[t("div",{staticClass:["logo"]},[t("image",{staticClass:["icon"],attrs:{src:"https://aygtech.github.io/weexbox/logo.png"}}),t("text",{staticClass:["title"]},[this._v("WeexBox")])])])}]},e.exports.render._withStripped=!0}]);