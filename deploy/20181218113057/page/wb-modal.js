// { "framework": "Vue"} 

!function(o){var n={};function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=o,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=57)}({5:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=weex.requireModule("wb-router"),i=weex.config.env,s=e.weexBoxUrl="https://aygtech.github.io/weexbox/guide/module.html",r=e.screenHeight=function(){var t=i.deviceHeight/i.deviceWidth*750;return Math.ceil(t)},a=e.router={open:function(t){var e=Object.assign({name:"weex",url:null,type:"push",navBarHidden:!1,params:{}},t);n.open(e)},close:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;n.close(t)},refresh:function(){n.refresh()},getParams:function(){return n.getParams()}};e.default={weexBoxUrl:s,router:a,screenHeight:r}},57:function(t,e,o){t.exports=o(58)},58:function(t,e,o){"use strict";var n,i=o(59),s=(n=i)&&n.__esModule?n:{default:n};s.default.el="#root",new Vue(s.default)},59:function(t,e,o){var n,i,s=[];s.push(o(60)),n=o(61);var r=o(62);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="D:\\code\\work\\weexbox-template\\src\\page\\wb-modal\\App.vue",i.render=r.render,i.staticRenderFns=r.staticRenderFns,i._scopeId="data-v-2e7b60e7",i.style=i.style||{},s.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,s),t.exports=n},60:function(t,e){t.exports={wrap:{paddingTop:"30",paddingRight:"30",paddingBottom:"30",paddingLeft:"30"},empty:{height:"40"},title:{fontSize:"28",color:"#333333",paddingBottom:"15"},button:{justifyContent:"center",alignItems:"center",alignContent:"center",height:"78",borderRadius:"8",backgroundImage:"linear-gradient(to bottom right, #0FCF2C, #21B0C4)","backgroundImage:active":"linear-gradient(to bottom right, #15DF34, #2AC5DB)"},"button-text":{fontSize:"28",color:"#ffffff"}}},61:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(5),i=weex.requireModule("wb-navigator"),s=weex.requireModule("wb-modal"),r={title:"wb-modal",url:"wb-modal"};e.default={components:{},data:function(){return{}},created:function(){i.setCenterItem({text:r.title,color:"3d3d3d"},function(){}),i.setRightItems([{text:"查看文档",color:"3d3d3d"}],function(){n.router.open({url:"page/web.js",params:{title:r.title,url:r.url}})})},methods:{alert:function(){s.alert({title:"标题",message:"弹窗内容",okTitle:"确定"},function(){s.showToast({text:"确定回调",duration:1.5})})},confirm:function(){s.confirm({title:"标题",message:"弹窗内容",cancelTitle:"取消",okTitle:"确定"},function(t){s.showToast({text:-1===t.status?"取消回调":"确定回调",duration:1.5})})},prompt:function(){s.prompt({title:"标题",placeholder:"请输入密码",cancelTitle:"取消",okTitle:"确定"},function(t){s.showToast({text:t.data.text,duration:1.5})})},actionSheet:function(){s.actionSheet({actions:[{type:"normal",title:"拍照"},{type:"normal",title:"相册"},{type:"cancel",title:"取消"}]},function(t){var e=t.data.index;s.showToast({text:e,duration:1.5})})},showToast:function(){s.showToast({text:"提示信息",duration:1.5})},showLoading:function(){var t=this;s.showLoading("加载中..."),setTimeout(function(){t.dismiss()},1500)},showProgress:function(){s.showProgress({progress:50,text:"加载中..."})},dismiss:function(){s.dismiss()}}}},62:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("scroller",{staticClass:["wrap"]},[o("text",{staticClass:["title"]},[t._v("警告弹窗(alert)")]),o("div",{staticClass:["button"],on:{click:t.alert}},[o("text",{staticClass:["button-text"]},[t._v("警告弹窗")])]),o("div",{staticClass:["empty"]}),o("text",{staticClass:["title"]},[t._v("确定弹窗(confirm)")]),o("div",{staticClass:["button"],on:{click:t.confirm}},[o("text",{staticClass:["button-text"]},[t._v("确定弹窗")])]),o("div",{staticClass:["empty"]}),o("text",{staticClass:["title"]},[t._v("输入弹窗(prompt)")]),o("div",{staticClass:["button"],on:{click:t.prompt}},[o("text",{staticClass:["button-text"]},[t._v("输入弹窗")])]),o("div",{staticClass:["empty"]}),o("text",{staticClass:["title"]},[t._v("操作表弹窗(actionSheet)")]),o("div",{staticClass:["button"],on:{click:t.actionSheet}},[o("text",{staticClass:["button-text"]},[t._v("操作表弹窗")])]),o("div",{staticClass:["empty"]}),o("text",{staticClass:["title"]},[t._v("吐司(showToast)")]),o("div",{staticClass:["button"],on:{click:t.showToast}},[o("text",{staticClass:["button-text"]},[t._v("吐司")])]),o("div",{staticClass:["empty"]}),o("text",{staticClass:["title"]},[t._v("菊花圈(showLoading)")]),o("div",{staticClass:["button"],on:{click:t.showLoading}},[o("text",{staticClass:["button-text"]},[t._v("菊花圈")])]),o("div",{staticClass:["empty"]})])},staticRenderFns:[]},t.exports.render._withStripped=!0}});