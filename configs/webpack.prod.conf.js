const commonConfig = require('./webpack.common.conf')
const webpackMerge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = require('./config')
const helper = require('./helper')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

const weexConfig = webpackMerge({
  plugins: [
    new CleanWebpackPlugin(helper.rootNode(config.distDir), {
      root: path.resolve('/'),
      verbose: true
    }),
    new UglifyJsPlugin({
      parallel: true
  })
  ]
}, commonConfig)

module.exports = weexConfig
