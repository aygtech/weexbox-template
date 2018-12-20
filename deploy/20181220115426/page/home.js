// { "framework": "Vue"} 

!function(o){var r={};function n(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=o,n.c=r,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([,,,,,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=weex.requireModule("wb-router"),n=weex.config.env,i=t.weexBoxUrl="https://aygtech.github.io/weexbox/guide/module.html",s=t.screenHeight=function(){var e=n.deviceHeight/n.deviceWidth*750;return Math.ceil(e)},a=t.router={open:function(e){var t=Object.assign({name:"weex",url:null,type:"push",navBarHidden:!1,params:{}},e);r.open(t)},close:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;r.close(e)},refresh:function(){r.refresh()},getParams:function(){return r.getParams()}};t.default={weexBoxUrl:i,router:a,screenHeight:s}},,,,,,,,function(e,t,o){e.exports=o(14)},function(e,t,o){"use strict";var r,n=o(15),i=(r=n)&&r.__esModule?r:{default:r};i.default.el="#root",new Vue(i.default)},function(e,t,o){var r,n,i=[];i.push(o(16)),r=o(17);var s=o(18);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/mario/Documents/aygtech/weexbox-template/src/page/home/App.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-80d3ce70",n.style=n.style||{},i.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),e.exports=r},function(e,t){e.exports={wrapper:{display:"flex",flexDirection:"row",justifyContent:"flex-start",flexWrap:"wrap"},"logo-panel":{borderBottomWidth:"1",borderBottomColor:"#e7e5e5"},logo:{flex:1,width:"750",paddingTop:"150",justifyContent:"center",alignItems:"center",alignContent:"center"},icon:{width:"200",height:"200"},title:{paddingTop:"50",fontSize:"40",fontWeight:"bold"},text:{fontSize:"34"},item:{width:"375",paddingTop:"80",paddingRight:"0",paddingBottom:"80",paddingLeft:"0",justifyContent:"center",alignItems:"center",alignContent:"center",marginBottom:"1",borderRightWidth:"1",borderRightColor:"#e7e5e5",borderBottomWidth:"1",borderBottomColor:"#e7e5e5",backgroundColor:"#f7f7f7"}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(5),n=weex.requireModule("wb-navigator"),i=weex.requireModule("wb-modal");t.default={components:{},data:function(){return{}},created:function(){n.setCenterItem({text:"WeexBox",color:"3d3d3d"},function(){}),n.setLeftItems([{text:"",color:"3d3d3d"}],function(){})},methods:{use:function(){i.showToast({text:"整理中...",duration:1.5})},course:function(){r.router.open({name:"web",title:"教程",url:"https://aygtech.github.io/weexbox"})},about:function(){r.router.open({url:"page/about.js",params:{}})},modulePage:function(){r.router.open({url:"page/module.js",params:{}})}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),o("div",{staticClass:["wrapper"]},[o("div",{staticClass:["item"],on:{click:e.course}},[o("text",{staticClass:["text"]},[e._v("教程")])]),o("div",{staticClass:["item"],on:{click:e.modulePage}},[o("text",{staticClass:["text"]},[e._v("实例")])]),o("div",{staticClass:["item"],on:{click:e.about}},[o("text",{staticClass:["text"]},[e._v("关于")])]),o("div",{staticClass:["item"],on:{click:e.use}},[o("text",{staticClass:["text"]},[e._v("谁在使用WeexBox")])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("scroller",{staticClass:["logo-panel"]},[t("div",{staticClass:["logo"]},[t("image",{staticClass:["icon"],attrs:{src:"https://aygtech.github.io/weexbox/logo.png"}}),t("text",{staticClass:["title"]},[this._v("WeexBox")])])])}]},e.exports.render._withStripped=!0}]);