// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
/******/ })
/************************************************************************/
/******/ ({

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(96);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_App2.default.el = '#root';
new Vue(_App2.default);

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(97)
)

/* script */
__vue_exports__ = __webpack_require__(98)

/* template */
var __vue_template__ = __webpack_require__(99)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\code\\work\\weexbox-template\\src\\page\\wb-webSocket\\App.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0763cda1"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 97:
/***/ (function(module, exports) {

module.exports = {
  "wrap": {
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30"
  },
  "empty": {
    "height": "40"
  },
  "title": {
    "fontSize": "28",
    "color": "#333333",
    "paddingBottom": "15"
  },
  "button": {
    "justifyContent": "center",
    "alignItems": "center",
    "alignContent": "center",
    "height": "78",
    "borderRadius": "8",
    "backgroundImage": "linear-gradient(to bottom right, #0FCF2C, #21B0C4)",
    "backgroundImage:active": "linear-gradient(to bottom right, #15DF34, #2AC5DB)"
  },
  "button-text": {
    "fontSize": "28",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import { router, weexBoxUrl } from '../../utils/native'

var navigator = weex.requireModule('wb-navigator');
var websocket = weex.requireModule('webSocket');
// const params = router.getParams()
var params = {
  title: 'wb-websocket',
  url: 'wb-websocket'
};

exports.default = {
  components: {},
  data: function data() {
    return {
      onopeninfo: '未连接',
      connectinfo: '',
      sendinfo: '',
      onmessage: '',
      oncloseinfo: '',
      onerrorinfo: '',
      closeinfo: '',
      message: 0
    };
  },
  created: function created() {
    if (params) {
      navigator.setCenterItem({
        text: params.title,
        color: '3d3d3d'
      }, function () {});
    }
    // navigator.setRightItems([{
    //   text: '查看文档',
    //   color: '3d3d3d',
    // }], () => {
    //   router.open({
    //     name: 'web',
    //     title: params.title,
    //     url: `${weexBoxUrl}#${params.url}`,
    //   })
    // })
  },

  methods: {
    connect: function connect() {
      websocket.WebSocket('ws://echo.websocket.org', '');
      var self = this;
      self.onopeninfo = '连接中...';
      websocket.onopen(function () {
        self.onopeninfo = 'websocket连接成功';
      });
      websocket.onmessage(function (e) {
        self.onmessage = e.data;
      });
      websocket.onerror(function (e) {
        self.onerrorinfo = e.data;
      });
      websocket.onclose(function (e) {
        self.onopeninfo = 'onclose';
        self.oncloseinfo = 'closed';
        self.onerrorinfo = e.code;
      });
    },
    send: function send() {
      var self = this;
      this.message += 1;
      websocket.send('\u53D1\u9001\u4E00\u6761\u6D88\u606F' + self.message);
      this.sendinfo = '\u53D1\u9001\u4E00\u6761\u6D88\u606F' + self.message;
    },
    close: function close() {
      websocket.close();
      this.message = 0;
      this.sendinfo = 'close';
    }
  }
};

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["wrap"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("onopeninfo：" + _vm._s(_vm.onopeninfo))]), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("onmessage：" + _vm._s(_vm.onmessage))]), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("onerrorinfo：" + _vm._s(_vm.onerrorinfo))]), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("oncloseinfo：" + _vm._s(_vm.oncloseinfo))]), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("sendinfo：" + _vm._s(_vm.sendinfo))]), _c('div', {
    staticClass: ["empty"]
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("连接WebSocket")]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.connect
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("连接")])]), _c('div', {
    staticClass: ["empty"]
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("发送消息(send)")]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.send
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("发送一条消息")])]), _c('div', {
    staticClass: ["empty"]
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("关闭连接(close)")]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.close
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("关闭")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });