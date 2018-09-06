const webpack = require('webpack')
const config = require('./config')
const helper = require('./helper')
const vueLoaderConfig = require('./vue-loader.conf')
const utils = require('./utils')
const weexbox_config = require('./weexbox-config')

const plugins = [
  new webpack.BannerPlugin({
    banner: '// { "framework": "Vue"} \n',
    raw: true,
    exclude: 'Vue'
  })
]

const weexConfig = {
  entry: utils.getEntries(),
  output: {
    path: helper.rootNode(config.distDir),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': helper.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: weexbox_config.imagePublicPath
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: config.excludeModuleReg
      },
      {
        test: /\.vue(\?[^?]+)?$/,
        use: [
          {
            loader: 'weex-loader',
            options: vueLoaderConfig({ useVue: false })
          }
        ],
        exclude: config.excludeModuleReg
      }
    ]
  },
  plugins: plugins,
  node: config.nodeConfiguration
}

module.exports = weexConfig
