// { "framework": "Vue"} 

!function(n){var t={};function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=t,r.d=function(e,o,n){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(o,e){if(1&e&&(o=r(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var t in o)r.d(n,t,function(e){return o[e]}.bind(null,t));return n},r.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.p="",r(r.s=12)}({12:function(e,o,n){e.exports=n(13)},13:function(e,o){throw new Error('Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: [BABEL] /Users/mario/Documents/aygtech/weexbox-template/src/page/wb-event/index.js: \nAs of v7.0.0-beta.55, we\'ve removed Babel\'s Stage presets.\nPlease consider reading our blog post on this decision at\nhttps://babeljs.io/blog/2018/07/27/removing-babels-stage-presets\nfor more details. TL;DR is that it\'s more beneficial in the\n  long run to explicitly add which proposals to use.\n\nFor a more automatic migration, we have updated babel-upgrade,\nhttps://github.com/babel/babel-upgrade to do this for you with\n"npx babel-upgrade".\n\nIf you want the same configuration as before:\n\n{\n  "plugins": [\n    // Stage 0\n    "@babel/plugin-proposal-function-bind",\n\n    // Stage 1\n    "@babel/plugin-proposal-export-default-from",\n    "@babel/plugin-proposal-logical-assignment-operators",\n    ["@babel/plugin-proposal-optional-chaining", { "loose": false }],\n    ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],\n    ["@babel/plugin-proposal-nullish-coalescing-operator", { "loose": false }],\n    "@babel/plugin-proposal-do-expressions",\n\n    // Stage 2\n    ["@babel/plugin-proposal-decorators", { "legacy": true }],\n    "@babel/plugin-proposal-function-sent",\n    "@babel/plugin-proposal-export-namespace-from",\n    "@babel/plugin-proposal-numeric-separator",\n    "@babel/plugin-proposal-throw-expressions",\n\n    // Stage 3\n    "@babel/plugin-syntax-dynamic-import",\n    "@babel/plugin-syntax-import-meta",\n    ["@babel/plugin-proposal-class-properties", { "loose": false }],\n    "@babel/plugin-proposal-json-strings"\n  ]\n}\n\nIf you\'re using the same configuration across many separate projects,\nkeep in mind that you can also create your own custom presets with\nwhichever plugins and presets you\'re looking to use.\n\nmodule.exports = function() {\n  return {\n    plugins: [\n      require("@babel/plugin-syntax-dynamic-import"),\n      [require("@babel/plugin-proposal-decorators"), { "legacy": true }],\n      [require("@babel/plugin-proposal-class-properties"), { "loose": false }],\n    ],\n    presets: [\n      // ...\n    ],\n  };\n};\n   (While processing: "/Users/mario/Documents/aygtech/weexbox-template/node_modules/@babel/preset-stage-0/lib/index.js")\n    at _default (/Users/mario/Documents/aygtech/weexbox-template/node_modules/@babel/preset-stage-0/lib/index.js:9:9)\n    at loadDescriptor (/Users/mario/Documents/aygtech/weexbox-template/node_modules/@babel/core/lib/config/full.js:165:14)\n    at cachedFunction (/Users/mario/Documents/aygtech/weexbox-template/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at loadPresetDescriptor (/Users/mario/Documents/aygtech/weexbox-template/node_modules/@babel/core/lib/config/full.js:235:63)\n    at config.presets.reduce (/Users/mario/Documents/aygtech/weexbox-template/node_modules/@babel/core/lib/config/full.js:77:21)\n    at Array.reduce (<anonymous>)\n    at recurseDescriptors (/Users/mario/Documents/aygtech/weexbox-template/node_modules/@babel/core/lib/config/full.js:74:38)\n    at loadFullConfig (/Users/mario/Documents/aygtech/weexbox-template/node_modules/@babel/core/lib/config/full.js:108:6)\n    at process.nextTick (/Users/mario/Documents/aygtech/weexbox-template/node_modules/@babel/core/lib/transform.js:28:33)\n    at process._tickCallback (internal/process/next_tick.js:61:11)')}});