// You can see all the config in `./configs`.
const  buildPlugins = require('./config/plugin');
let webpackConfig;
module.exports = env => {
  switch (env.NODE_ENV) {
    case 'prod':
    case 'production':
      webpackConfig = require('./config/webpack.prod.conf');
      break;
    case 'test':
    case 'testing':
      webpackConfig = require('./config/webpack.test.conf');
      break;
    case 'plugin':
      buildPlugins();
    case 'common':
      webpackConfig = require('./config/webpack.common.conf');
      break;
    case 'release':
      webpackConfig = require('./config/webpack.release.conf');
      break;
    case 'dev':
    case 'development':
    default:
      webpackConfig = require('./config/webpack.dev.conf');
  }
  return webpackConfig;
}
