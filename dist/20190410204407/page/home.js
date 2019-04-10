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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * @Author: remi.zhang
 * @Date: 2018-12-11 11:04:31
 * @Last Modified by: remi.zhang
 * @Last Modified time: 2019-01-23 14:54:16
 */
// const modal = weex.requireModule('wb-modal')
// const _network = weex.requireModule('wb-network')
var _router = weex.requireModule('wb-router');
// const _location = weex.requireModule('wb-location')

var env = weex.config.env;


var domain = 'https://weexbox.surge.sh';
var examplesWeex = 'https://raw.githubusercontent.com/aygtech/incubator-weex/master/ios/playground/bundlejs/examples2.weex.js';
var now = new Date().getTime();
var end = new Date('2019/02/3 12:00:00').getTime();
if (now >= end) {
  domain = 'https://aygtech.github.io/weexbox';
  examplesWeex = 'https://raw.githubusercontent.com/aygtech/incubator-weex/master/ios/playground/bundlejs/examples.weex.js';
}
// weexbox 域名地址
var weexBoxDomain = exports.weexBoxDomain = domain;
// weexbox module域名地址
var weexBoxUrl = exports.weexBoxUrl = domain + '/guide/module.html';

/**
 * 屏幕高度
 */
var screenHeight = exports.screenHeight = function screenHeight() {
  var height = env.deviceHeight / env.deviceWidth * 750;
  return Math.ceil(height);
};

// 页面路由
var router = exports.router = {
  /**
   * 打开页面
   * @param {object} option - 参数
   * @param {string} option.url - 下一个weex/web的路径
   * @param {string} [option.name] - 页面名称。内置"weex"、"web"，其他路由需要原生先注册
   * @param {string} [option.type=push] - 下一个weex/web的路径
   * @param {boolean} [option.navBarHidden=false] - 是否隐藏导航栏
   * @param {object} [option.params={}] - // 需要传到下一个页面的数据
   */
  open: function open(option) {
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
  close: function close() {
    var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    _router.close(level);
  },

  /**
   * 刷新weex页面
   */
  refresh: function refresh() {
    _router.refresh();
  },

  /**
   * 获取页面参数
   */
  getParams: function getParams() {
    return _router.getParams();
  }
};

exports.default = {
  weexBoxDomain: weexBoxDomain,
  weexBoxUrl: weexBoxUrl,
  router: router,
  screenHeight: screenHeight,
  examplesWeex: examplesWeex
};

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_App2.default.el = '#root';
new Vue(_App2.default);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(16)
)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(18)
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
__vue_options__.__file = "/Users/mario/Documents/aygtech/weexbox-template/src/page/home/App.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-80d3ce70"
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
/* 16 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "flexWrap": "wrap"
  },
  "logo-panel": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#e7e5e5"
  },
  "logo": {
    "flex": 1,
    "width": "750",
    "paddingTop": "150",
    "justifyContent": "center",
    "alignItems": "center",
    "alignContent": "center"
  },
  "icon": {
    "width": "200",
    "height": "200"
  },
  "title": {
    "paddingTop": "50",
    "fontSize": "40",
    "fontWeight": "bold"
  },
  "text": {
    "fontSize": "34"
  },
  "item": {
    "width": "375",
    "paddingTop": "80",
    "paddingRight": "0",
    "paddingBottom": "80",
    "paddingLeft": "0",
    "justifyContent": "center",
    "alignItems": "center",
    "alignContent": "center",
    "marginBottom": "1",
    "borderRightWidth": "1",
    "borderRightColor": "#e7e5e5",
    "borderBottomWidth": "1",
    "borderBottomColor": "#e7e5e5",
    "backgroundColor": "#f7f7f7"
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _native = __webpack_require__(5);

var _native2 = _interopRequireDefault(_native);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigator = weex.requireModule('wb-navigator'); //
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

exports.default = {
  components: {},
  data: function data() {
    return {};
  },
  created: function created() {
    navigator.setCenterItem({
      text: 'WeexBox',
      color: '3d3d3d'
    }, function () {});
    navigator.setLeftItems([{
      text: '',
      color: '3d3d3d'
    }], function () {});
  },

  methods: {
    news: function news() {
      _native.router.open({
        name: 'weex',
        title: '资讯',
        url: 'https://raw.githubusercontent.com/aygtech/incubator-weex/master/ios/playground/bundlejs/news.weex.js'
      });
    },
    weexPage: function weexPage() {
      _native.router.open({
        name: 'weex',
        title: 'Weex实例',
        url: _native2.default.examplesWeex
      });
    },
    about: function about() {
      _native.router.open({
        url: 'page/about.js',
        params: {}
      });
    },
    weexboxPage: function weexboxPage() {
      _native.router.open({
        url: 'page/module.js',
        params: {}
      });
    }
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["item"],
    on: {
      "click": _vm.weexPage
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("\n        Weex实例\n      ")])]), _c('div', {
    staticClass: ["item"],
    on: {
      "click": _vm.weexboxPage
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("\n        WeexBox实例\n      ")])]), _c('div', {
    staticClass: ["item"],
    on: {
      "click": _vm.news
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("\n        资讯\n      ")])]), _c('div', {
    staticClass: ["item"],
    on: {
      "click": _vm.about
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("\n        关于\n      ")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["logo-panel"]
  }, [_c('div', {
    staticClass: ["logo"]
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": "https://aygtech.github.io/weexbox/logo.png"
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("\n        WeexBox\n      ")])])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);