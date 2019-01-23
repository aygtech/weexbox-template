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
 * @Last Modified time: 2019-01-23 14:54:16
 */
// const modal = weex.requireModule('wb-modal')
// const _network = weex.requireModule('wb-network')
var _router = weex.requireModule('wb-router');
// const _location = weex.requireModule('wb-location')

var env = weex.config.env;


var domain = 'https://weexbox.surge.sh';
var now = new Date().getTime();
var end = new Date('2019-01-26 12:00:00').getTime();
if (now >= end) {
  domain = 'https://aygtech.github.io/weexbox';
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
var __vue_template__ = __webpack_require__(63)
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
__vue_options__.__file = "D:\\code\\work\\weexbox-template\\src\\page\\wb-lottie\\App.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3aa35502"
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
  },
  "lottie": {
    "width": "690",
    "height": "690"
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

var checkedDone = __webpack_require__(62);

var params = {
  title: 'wb-lottie',
  url: 'wb-lottie'
};

exports.default = {
  components: {},
  data: function data() {
    return {
      sourceJson: checkedDone,
      loop: false
    };
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
        name: 'web',
        title: params.title,
        url: _native.weexBoxDomain + '/guide/component.html#' + params.url
      });
    });
  },

  methods: {
    play: function play() {
      this.$refs.lottie.play(function (result) {
        console.log(JSON.stringify(result));
      });
    },
    pause: function pause() {
      this.$refs.lottie.pause();
    },
    stop: function stop() {
      this.$refs.lottie.stop();
    }
  }
};

/***/ }),

/***/ 62:
/***/ (function(module) {

module.exports = {"v":"4.6.3","fr":24,"ip":0,"op":21,"w":320,"h":320,"nm":"checklist","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 13","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":300},"p":{"a":0,"k":[160,159.5,0]},"a":{"a":0,"k":[0,-34,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p667_1_0p167_0p167","0p667_1_0p167_0p167"],"t":6,"s":[15.021,15.021],"e":[0,0]},{"t":17}]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":6,"s":[0.0823529,0.6784314,0.3843137,1],"e":[0,0.7921569,0.4470588,1]},{"t":17}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"n":"0p667_1_0p167_0p167","t":6,"s":[-8.142,-92.147],"e":[-7.675,-162.544],"to":[0.07779947668314,-11.7327470779419],"ti":[-0.07779947668314,11.7327470779419]},{"t":17}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[83.981,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"n":["0p667_1_0p167_0p167"],"t":6,"s":[20.367],"e":[6.367]},{"t":17}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 2","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":6,"s":[15.021,15.021],"e":[0,0]},{"t":21}]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":6,"s":[0.0823529,0.6784314,0.3843137,1],"e":[0,0.9070925,0.5119235,1]},{"t":17}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":6,"s":[16.585,-99.759],"e":[28.521,-187.495],"to":[1.9892578125,-14.6227216720581],"ti":[-1.9892578125,14.6227216720581]},{"t":21}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[97.419,116],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":6,"s":[14.733],"e":[8.733]},{"t":21}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":2,"mn":"ADBE Vector Group"}],"ip":6,"op":22,"st":-21,"bm":0,"sr":1},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 12","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":250},"p":{"a":0,"k":[160,159.5,0]},"a":{"a":0,"k":[0,-34,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p667_1_0p167_0p167","0p667_1_0p167_0p167"],"t":6,"s":[15.021,15.021],"e":[0,0]},{"t":17}]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":6,"s":[0.0823529,0.6784314,0.3843137,1],"e":[0,0.7921569,0.4470588,1]},{"t":17}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"n":"0p667_1_0p167_0p167","t":6,"s":[-8.142,-92.147],"e":[-7.675,-162.544],"to":[0.07779947668314,-11.7327470779419],"ti":[-0.07779947668314,11.7327470779419]},{"t":17}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[83.981,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"n":["0p667_1_0p167_0p167"],"t":6,"s":[20.367],"e":[6.367]},{"t":17}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 2","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":6,"s":[15.021,15.021],"e":[0,0]},{"t":21}]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":6,"s":[0.0823529,0.6784314,0.3843137,1],"e":[0,0.9070925,0.5119235,1]},{"t":17}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":6,"s":[16.585,-99.759],"e":[28.521,-187.495],"to":[1.9892578125,-14.6227216720581],"ti":[-1.9892578125,14.6227216720581]},{"t":21}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[97.419,116],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":6,"s":[14.733],"e":[8.733]},{"t":21}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":2,"mn":"ADBE Vector Group"}],"ip":6,"op":22,"st":-21,"bm":0,"sr":1},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 11","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":200},"p":{"a":0,"k":[160,159.5,0]},"a":{"a":0,"k":[0,-34,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p667_1_0p167_0p167","0p667_1_0p167_0p167"],"t":6,"s":[15.021,15.021],"e":[0,0]},{"t":17}]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":6,"s":[0.0823529,0.6784314,0.3843137,1],"e":[0,0.7921569,0.4470588,1]},{"t":17}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"n":"0p667_1_0p167_0p167","t":6,"s":[-8.142,-92.147],"e":[-7.675,-162.544],"to":[0.07779947668314,-11.7327470779419],"ti":[-0.07779947668314,11.7327470779419]},{"t":17}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[83.981,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"n":["0p667_1_0p167_0p167"],"t":6,"s":[20.367],"e":[6.367]},{"t":17}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 2","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":6,"s":[15.021,15.021],"e":[0,0]},{"t":21}]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":6,"s":[0.0823529,0.6784314,0.3843137,1],"e":[0,0.9070925,0.5119235,1]},{"t":17}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":6,"s":[16.585,-99.759],"e":[28.521,-187.495],"to":[1.9892578125,-14.6227216720581],"ti":[-1.9892578125,14.6227216720581]},{"t":21}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[97.419,116],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":6,"s":[14.733],"e":[8.733]},{"t":21}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":2,"mn":"ADBE Vector Group"}],"ip":6,"op":22,"st":-21,"bm":0,"sr":1},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 10","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":150},"p":{"a":0,"k":[160,159.5,0]},"a":{"a":0,"k":[0,-34,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p667_1_0p167_0p167","0p667_1_0p167_0p167"],"t":6,"s":[15.021,15.021],"e":[0,0]},{"t":17}]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":6,"s":[0.0823529,0.6784314,0.3843137,1],"e":[0,0.7921569,0.4470588,1]},{"t":17}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"n":"0p667_1_0p167_0p167","t":6,"s":[-8.142,-92.147],"e":[-7.675,-162.544],"to":[0.07779947668314,-11.7327470779419],"ti":[-0.07779947668314,11.7327470779419]},{"t":17}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[83.981,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"n":["0p667_1_0p167_0p167"],"t":6,"s":[20.367],"e":[6.367]},{"t":17}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 2","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":6,"s":[15.021,15.021],"e":[0,0]},{"t":21}]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":6,"s":[0.0823529,0.6784314,0.3843137,1],"e":[0,0.9070925,0.5119235,1]},{"t":17}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":6,"s":[16.585,-99.759],"e":[28.521,-187.495],"to":[1.9892578125,-14.6227216720581],"ti":[-1.9892578125,14.6227216720581]},{"t":21}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[97.419,116],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":6,"s":[14.733],"e":[8.733]},{"t":21}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":2,"mn":"ADBE Vector Group"}],"ip":6,"op":22,"st":-21,"bm":0,"sr":1},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 9","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":100},"p":{"a":0,"k":[160,159.5,0]},"a":{"a":0,"k":[0,-34,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p667_1_0p167_0p167","0p667_1_0p167_0p167"],"t":6,"s":[15.021,15.021],"e":[0,0]},{"t":17}]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":6,"s":[0.0823529,0.6784314,0.3843137,1],"e":[0,0.7921569,0.4470588,1]},{"t":17}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"n":"0p667_1_0p167_0p167","t":6,"s":[-8.142,-92.147],"e":[-7.675,-162.544],"to":[0.07779947668314,-11.7327470779419],"ti":[-0.07779947668314,11.7327470779419]},{"t":17}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[83.981,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"n":["0p667_1_0p167_0p167"],"t":6,"s":[20.367],"e":[6.367]},{"t":17}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 2","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":6,"s":[15.021,15.021],"e":[0,0]},{"t":21}]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":6,"s":[0.0823529,0.6784314,0.3843137,1],"e":[0,0.9070925,0.5119235,1]},{"t":17}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":6,"s":[16.585,-99.759],"e":[28.521,-187.495],"to":[1.9892578125,-14.6227216720581],"ti":[-1.9892578125,14.6227216720581]},{"t":21}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[97.419,116],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":6,"s":[14.733],"e":[8.733]},{"t":21}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":2,"mn":"ADBE Vector Group"}],"ip":6,"op":22,"st":-21,"bm":0,"sr":1},{"ddd":0,"ind":7,"ty":4,"nm":"Shape Layer 8","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":50},"p":{"a":0,"k":[160,159.5,0]},"a":{"a":0,"k":[0,-34,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p667_1_0p167_0p167","0p667_1_0p167_0p167"],"t":6,"s":[15.021,15.021],"e":[0,0]},{"t":17}]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":6,"s":[0.0823529,0.6784314,0.3843137,1],"e":[0,0.7921569,0.4470588,1]},{"t":17}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"n":"0p667_1_0p167_0p167","t":6,"s":[-8.142,-92.147],"e":[-7.675,-162.544],"to":[0.07779947668314,-11.7327470779419],"ti":[-0.07779947668314,11.7327470779419]},{"t":17}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[83.981,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"n":["0p667_1_0p167_0p167"],"t":6,"s":[20.367],"e":[6.367]},{"t":17}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 2","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":6,"s":[15.021,15.021],"e":[0,0]},{"t":21}]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":6,"s":[0.0823529,0.6784314,0.3843137,1],"e":[0,0.9070925,0.5119235,1]},{"t":17}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":6,"s":[16.585,-99.759],"e":[28.521,-187.495],"to":[1.9892578125,-14.6227216720581],"ti":[-1.9892578125,14.6227216720581]},{"t":21}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[97.419,116],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":6,"s":[14.733],"e":[8.733]},{"t":21}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":2,"mn":"ADBE Vector Group"}],"ip":6,"op":22,"st":-21,"bm":0,"sr":1},{"ddd":0,"ind":8,"ty":4,"nm":"Shape Layer 7","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[160,159.5,0]},"a":{"a":0,"k":[0,-34,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p667_1_0p167_0p167","0p667_1_0p167_0p167"],"t":6,"s":[15.021,15.021],"e":[0,0]},{"t":17}]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":6,"s":[0.0823529,0.6784314,0.3843137,1],"e":[0,0.7921569,0.4470588,1]},{"t":17}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"n":"0p667_1_0p167_0p167","t":6,"s":[-8.142,-92.147],"e":[-7.675,-162.544],"to":[0.07779947668314,-11.7327470779419],"ti":[-0.07779947668314,11.7327470779419]},{"t":17}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[83.981,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"n":["0p667_1_0p167_0p167"],"t":6,"s":[20.367],"e":[6.367]},{"t":17}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 2","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":6,"s":[15.021,15.021],"e":[0,0]},{"t":21}]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":6,"s":[0.0823529,0.6784314,0.3843137,1],"e":[0,0.9070925,0.5119235,1]},{"t":17}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":6,"s":[16.585,-99.759],"e":[28.521,-187.495],"to":[1.9892578125,-14.6227216720581],"ti":[-1.9892578125,14.6227216720581]},{"t":21}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[97.419,116],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":6,"s":[14.733],"e":[8.733]},{"t":21}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":2,"mn":"ADBE Vector Group"}],"ip":6,"op":22,"st":-21,"bm":0,"sr":1},{"ddd":0,"ind":9,"ty":4,"nm":"Shape Layer 5","parent":11,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":-44},"p":{"a":0,"k":[0.378,-0.641,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[7.39,7.39,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[-274.219,-254.097]],"c":false}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"st","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":8},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-17,-16],[-17,10.5],[41,10.5]],"c":false}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"st","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":8},"lc":2,"lj":1,"ml":5,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"ix":2,"mn":"ADBE Vector Group"}],"ip":7,"op":22,"st":-21,"bm":0,"sr":1},{"ddd":0,"ind":10,"ty":4,"nm":"Shape Layer 6","ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":4,"s":[50],"e":[0]},{"t":14}]},"r":{"a":0,"k":0},"p":{"a":0,"k":[160,160,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,0.667]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p667_1_0p333_0","0p667_1_0p333_0","0p667_0p667_0p333_0p333"],"t":4,"s":[100,100,100],"e":[1085,1085,100]},{"t":14}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[19.779,19.779]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":0,"k":[0,0.7921569,0.4470588,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[-0.068,0.036],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":4,"op":22,"st":-23,"bm":0,"sr":1},{"ddd":0,"ind":11,"ty":4,"nm":"Shape Layer 4","ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":6,"s":[30],"e":[100]},{"t":9}]},"r":{"a":0,"k":0},"p":{"a":0,"k":[160.312,161.188,0]},"a":{"a":0,"k":[0.812,-0.562,0]},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,0.667]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p667_1_0p333_0","0p667_1_0p333_0","0p667_0p667_0p333_0p333"],"t":6,"s":[100,100,100],"e":[1087,1087,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,0.667]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p667_1_0p333_0","0p667_1_0p333_0","0p667_0p667_0p333_0p333"],"t":11,"s":[1087,1087,100],"e":[866,866,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":13,"s":[866,866,100],"e":[878,878,100]},{"t":16}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10.068,10.068]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":0,"k":[0,0.7921569,0.4470588,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0.784,-0.716],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":6,"op":22,"st":-19,"bm":0,"sr":1},{"ddd":0,"ind":12,"ty":4,"nm":"Shape Layer 3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[161,160,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,0.667]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p667_1_0p333_0","0p667_1_0p333_0","0p667_0p667_0p333_0p333"],"t":3,"s":[100,100,100],"e":[224,224,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,0.667]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p667_1_0p333_0","0p667_1_0p333_0","0p667_0p667_0p333_0p333"],"t":4,"s":[224,224,100],"e":[476,476,100]},{"t":8}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[6.009,6.009]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":4,"s":[0.0558609,0.688557,0.3778246,1],"e":[0.1089485,0.6693168,0.3941063,1]},{"t":8}]},"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":4,"s":[0],"e":[100]},{"t":5}]},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":4,"s":[3],"e":[0]},{"t":8}]},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0,0.7921569,0.4470588,1]},"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":3,"s":[100],"e":[99]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":4,"s":[99],"e":[0]},{"t":5}]},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[-0.338,0.065],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[649.112,649.112],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 2","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":3,"op":22,"st":-21,"bm":0,"sr":1},{"ddd":0,"ind":13,"ty":4,"nm":"Shape Layer 2","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[160.142,159.987,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[377.603,377.603,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[22.315,22.315]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0.8352941,0.8352941,0.8352941,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":1},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[-0.038,0.003],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":-21,"op":22,"st":-21,"bm":0,"sr":1}]};

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["wrap"]
  }, [_c('wb-lottie', {
    ref: "lottie",
    staticClass: ["lottie"],
    attrs: {
      "sourceJson": _vm.sourceJson,
      "loop": _vm.loop
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("播放动画")]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.play
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("播放")])]), _c('div', {
    staticClass: ["empty"]
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("暂停动画")]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.pause
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("暂停")])]), _c('div', {
    staticClass: ["empty"]
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("停止动画")]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.stop
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("停止")])]), _c('div', {
    staticClass: ["empty"]
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });