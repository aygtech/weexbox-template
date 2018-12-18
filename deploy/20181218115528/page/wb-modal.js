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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * @Author: remi.zhang
 * @Date: 2018-12-11 11:04:31
 * @Last Modified by: remi.zhang
 * @Last Modified time: 2018-12-11 17:03:15
 */
// const modal = weex.requireModule('wb-modal')
// const _network = weex.requireModule('wb-network')
var _router = weex.requireModule('wb-router');
// const _location = weex.requireModule('wb-location')

var env = weex.config.env;

// weexbox module域名地址

var weexBoxUrl = exports.weexBoxUrl = 'https://aygtech.github.io/weexbox/guide/module.html';

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
  weexBoxUrl: weexBoxUrl,
  router: router,
  screenHeight: screenHeight
};

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(58);


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(59);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_App2.default.el = '#root';
new Vue(_App2.default);

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(60)
)

/* script */
__vue_exports__ = __webpack_require__(61)

/* template */
var __vue_template__ = __webpack_require__(62)
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
__vue_options__.__file = "/Users/mario/Documents/aygtech/weexbox-template/src/page/wb-modal/App.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1888a994"
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

/***/ 60:
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

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _native = __webpack_require__(5);

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

var modal = weex.requireModule('wb-modal');
// const params = router.getParams()
var params = {
  title: 'wb-modal',
  url: 'wb-modal'
};

exports.default = {
  components: {},
  data: function data() {
    return {};
  },
  created: function created() {
    if (params) {
      navigator.setCenterItem({
        text: params.title,
        color: '3d3d3d'
      }, function () {});
    }
    navigator.setRightItems([{
      text: '查看文档',
      color: '3d3d3d'
    }], function () {
      _native.router.open({
        url: 'page/web.js',
        params: {
          title: params.title,
          url: params.url
        }
      });
    });
  },

  methods: {
    alert: function alert() {
      modal.alert({
        title: '标题',
        message: '弹窗内容',
        okTitle: '确定'
      }, function () {
        modal.showToast({
          text: '确定回调',
          duration: 1.5
        });
      });
    },
    confirm: function confirm() {
      modal.confirm({
        title: '标题',
        message: '弹窗内容',
        cancelTitle: '取消',
        okTitle: '确定'
      }, function (result) {
        modal.showToast({
          text: result.status === -1 ? '取消回调' : '确定回调',
          duration: 1.5
        });
      });
    },
    prompt: function prompt() {
      modal.prompt({
        title: '标题',
        placeholder: '请输入密码',
        cancelTitle: '取消',
        okTitle: '确定'
      }, function (result) {
        modal.showToast({
          text: result.data.text,
          duration: 1.5
        });
      });
    },
    actionSheet: function actionSheet() {
      modal.actionSheet({
        actions: [{ type: 'normal', title: '拍照' }, { type: 'normal', title: '相册' }, { type: 'cancel', title: '取消' }]
      }, function (result) {
        var index = result.data.index;

        modal.showToast({
          text: index,
          duration: 1.5
        });
      });
    },
    showToast: function showToast() {
      modal.showToast({
        text: '提示信息',
        duration: 1.5
      });
    },
    showLoading: function showLoading() {
      var _this = this;

      modal.showLoading('加载中...');
      setTimeout(function () {
        _this.dismiss();
      }, 1500);
    },
    showProgress: function showProgress() {
      modal.showProgress({
        progress: 50,
        text: '加载中...'
      });
    },
    dismiss: function dismiss() {
      modal.dismiss();
    }
  }
};

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["wrap"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("警告弹窗(alert)")]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.alert
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("警告弹窗")])]), _c('div', {
    staticClass: ["empty"]
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("确定弹窗(confirm)")]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.confirm
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("确定弹窗")])]), _c('div', {
    staticClass: ["empty"]
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("输入弹窗(prompt)")]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.prompt
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("输入弹窗")])]), _c('div', {
    staticClass: ["empty"]
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("操作表弹窗(actionSheet)")]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.actionSheet
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("操作表弹窗")])]), _c('div', {
    staticClass: ["empty"]
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("吐司(showToast)")]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.showToast
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("吐司")])]), _c('div', {
    staticClass: ["empty"]
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("菊花圈(showLoading)")]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.showLoading
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("菊花圈")])]), _c('div', {
    staticClass: ["empty"]
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });