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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_vue__WEBPACK_IMPORTED_MODULE_0__);

_App_vue__WEBPACK_IMPORTED_MODULE_0___default.a.el = '#root';
new Vue(_App_vue__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(6)
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
__vue_options__.__file = "/Users/mario/Documents/aygtech/weexbox-template/src/page/about/App.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a467bcd0"
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
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "ver": {
    "marginTop": "30",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30",
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30",
    "backgroundColor": "#f7f7f7",
    "borderRadius": "10"
  },
  "title": {
    "color": "#999999",
    "textAlign": "center",
    "fontSize": "34",
    "paddingBottom": "20"
  },
  "info": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "flexWrap": "wrap"
  },
  "info-item": {
    "fontSize": "30",
    "width": "310",
    "borderBottomColor": "#e7e5e5",
    "borderBottomWidth": "1"
  },
  "info-left": {
    "paddingTop": "20",
    "paddingRight": "0",
    "paddingBottom": "20",
    "paddingLeft": "0",
    "textAlign": "right",
    "color": "#999999"
  },
  "info-right": {
    "paddingTop": "20",
    "paddingRight": "0",
    "paddingBottom": "20",
    "paddingLeft": "30",
    "textAlign": "left"
  },
  "item": {
    "fontSize": "34",
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30",
    "borderBottomColor": "#e7e5e5",
    "borderBottomWidth": "1"
  }
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
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



const navigator = weex.requireModule('wb-navigator')
const modal = weex.requireModule('wb-modal')
const { env } = weex.config

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
  },
  data() {
    return {
      env,
    }
  },
  created() {
    navigator.setCenterItem({
      text: 'WeexBox',
      color: '3d3d3d',
    }, () => {})
  },
  methods: {
    website() {
      _utils_native__WEBPACK_IMPORTED_MODULE_0__["router"].open({
        name: 'web',
        title: '官网',
        url: _utils_native__WEBPACK_IMPORTED_MODULE_0__["weexBoxDomain"],
      })
    },
    problem() {
      modal.showToast({
        text: '整理中...',
        duration: 1.5,
      })
    },
  },
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weexBoxDomain", function() { return weexBoxDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weexBoxUrl", function() { return weexBoxUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenHeight", function() { return screenHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/*
 * @Author: remi.zhang
 * @Date: 2018-12-11 11:04:31
 * @Last Modified by: remi.zhang
 * @Last Modified time: 2019-01-23 14:54:16
 */
// const modal = weex.requireModule('wb-modal')
// const _network = weex.requireModule('wb-network')
var _router = weex.requireModule('wb-router'); // const _location = weex.requireModule('wb-location')


var env = weex.config.env;
var domain = 'https://weexbox.surge.sh';
var examplesWeex = 'https://raw.githubusercontent.com/aygtech/incubator-weex/master/ios/playground/bundlejs/examples2.weex.js';
var now = new Date().getTime();
var end = new Date('2019/02/3 12:00:00').getTime();

if (now >= end) {
  domain = 'https://aygtech.github.io/weexbox';
  examplesWeex = 'https://raw.githubusercontent.com/aygtech/incubator-weex/master/ios/playground/bundlejs/examples.weex.js';
} // weexbox 域名地址


var weexBoxDomain = domain; // weexbox module域名地址

var weexBoxUrl = `${domain}/guide/module.html`;
/**
 * 屏幕高度
 */

var screenHeight = function screenHeight() {
  var height = env.deviceHeight / env.deviceWidth * 750;
  return Math.ceil(height);
}; // 页面路由

var router = {
  /**
   * 打开页面
   * @param {object} option - 参数
   * @param {string} option.url - 下一个weex/web的路径
   * @param {string} [option.name] - 页面名称。内置"weex"、"web"，其他路由需要原生先注册
   * @param {string} [option.type=push] - 下一个weex/web的路径
   * @param {boolean} [option.navBarHidden=false] - 是否隐藏导航栏
   * @param {object} [option.params={}] - // 需要传到下一个页面的数据
   */
  open(option) {
    var _option = {
      name: 'weex',
      url: null,
      type: 'push',
      navBarHidden: false,
      params: {}
    };
    var param = Object.assign(_option, option);

    _router.open(param);
  },

  /**
   * 关闭页面
   * @param {string} [level=1] - 关闭页面的级数
   */
  close() {
    var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    _router.close(level);
  },

  /**
   * 刷新weex页面
   */
  refresh() {
    _router.refresh();
  },

  /**
   * 获取页面参数
   */
  getParams() {
    return _router.getParams();
  }

};
/* harmony default export */ __webpack_exports__["default"] = ({
  weexBoxDomain,
  weexBoxUrl,
  router,
  screenHeight,
  examplesWeex
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', {
    staticClass: ["ver"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("\n      Weex SDK Version\n    ")]), _c('div', {
    staticClass: ["info"]
  }, [_c('text', {
    staticClass: ["info-item", "info-left"]
  }, [_vm._v("\n        appVersion\n      ")]), _c('text', {
    staticClass: ["info-item", "info-right"]
  }, [_vm._v("\n        " + _vm._s(_vm.env['appVersion']) + "\n      ")]), _c('text', {
    staticClass: ["info-item", "info-left"]
  }, [_vm._v("\n        weexVersion\n      ")]), _c('text', {
    staticClass: ["info-item", "info-right"]
  }, [_vm._v("\n        " + _vm._s(_vm.env['weexVersion']) + "\n      ")]), _c('text', {
    staticClass: ["info-item", "info-left"]
  }, [_vm._v("\n        platform\n      ")]), _c('text', {
    staticClass: ["info-item", "info-right"]
  }, [_vm._v("\n        " + _vm._s(_vm.env['platform']) + "\n      ")]), _c('text', {
    staticClass: ["info-item", "info-left"]
  }, [_vm._v("\n        osVersion\n      ")]), _c('text', {
    staticClass: ["info-item", "info-right"]
  }, [_vm._v("\n        " + _vm._s(_vm.env['osVersion']) + "\n      ")]), _c('text', {
    staticClass: ["info-item", "info-left"]
  }, [_vm._v("\n        deviceModel\n      ")]), _c('text', {
    staticClass: ["info-item", "info-right"]
  }, [_vm._v("\n        " + _vm._s(_vm.env['deviceModel']) + "\n      ")])])]), _c('text', {
    staticClass: ["item"],
    on: {
      "click": _vm.website
    }
  }, [_vm._v("\n    WeexBox 官网\n  ")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);