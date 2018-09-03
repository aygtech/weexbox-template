const commonConfig = require('./webpack.common.conf');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const os = require('os');
const webpack = require('webpack');

const config = require('./config');
const helper = require('./helper');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path');

/**
 * Webpack Plugins
 */
// const UglifyJsparallelPlugin = require('webpack-uglify-parallel');

/**
 * Webpack configuration for weex.
 */
const weexConfig = webpackMerge({
  // devtool: config.prod.devtool,
  /*
   * Add additional plugins to the compiler.
   *
   * See: http://webpack.github.io/docs/configuration.html#plugins
   */
  plugins: [
    new CleanWebpackPlugin(helper.rootNode(config.distDir), {
      root: path.resolve('/'),
      verbose: true
    }),
    /*
     * Plugin: UglifyJsparallelPlugin
     * Description: Identical to standard uglify webpack plugin
     * with an option to build multiple files in parallel
     *
     * See: https://www.npmjs.com/package/webpack-uglify-parallel
     */
    // new UglifyJsparallelPlugin({
    //   workers: os.cpus().length,
    //   mangle: true,
    //   compressor: {
    //     warnings: false,
    //     drop_console: true,
    //     drop_debugger: true
    //   }
    // }),
  ]
}, commonConfig[1])

/**
* Webpack configuration for web.
*/
const webConfig = webpackMerge(commonConfig[0], {
  /**
   * Developer tool to enhance debugging
   *
   * See: http://webpack.github.io/docs/configuration.html#devtool
   * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
   */
  devtool: config.prod.devtool,
  /**
   * Options affecting the output of the compilation.
   *
   * See: http://webpack.github.io/docs/configuration.html#output
   */
  output: {
    /**
     * The output directory as absolute path (required).
     *
     * See: http://webpack.github.io/docs/configuration.html#output-path
     */
    path: helper.rootNode('./dist'),
    /**
     * Specifies the name of each output file on disk.
     * IMPORTANT: You must not specify an absolute path here!
     *
     * See: http://webpack.github.io/docs/configuration.html#output-filename
     */
    filename: '[name].web.js',
    /**
     * The filename of the SourceMaps for the JavaScript files.
     * They are inside the output.path directory.
     *
     * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
     */
    sourceMapFilename: '[name].web.map'
  },
  /*
   * Add additional plugins to the compiler.
   *
   * See: http://webpack.github.io/docs/configuration.html#plugins
   */
  plugins: [
    /**
     * Plugin: webpack.DefinePlugin
     * Description: The DefinePlugin allows you to create global constants which can be configured at compile time. 
     *
     * See: https://webpack.js.org/plugins/define-plugin/
     */
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': config.prod.env
      }
    }),
    /*
     * Plugin: UglifyJsparallelPlugin
     * Description: Identical to standard uglify webpack plugin
     * with an option to build multiple files in parallel
     *
     * See: https://www.npmjs.com/package/webpack-uglify-parallel
     */
    // new UglifyJsparallelPlugin({
    //   workers: os.cpus().length,
    //   mangle: true,
    //   compressor: {
    //     warnings: false,
    //     drop_console: true,
    //     drop_debugger: true
    //   }
    // })
  ]
});

// module.exports = [weexConfig, webConfig]
module.exports = [weexConfig]
