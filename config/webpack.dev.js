const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: './dist',
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    https: true,
    port: 3003,
    // hot: true,
    // allowedHosts: ['local.dev.net'],
    // public: 'http://local.dev.net:3003/',
    // publicPath: '/',
    // open: 'chrome',
    open: {
      // This doesn't actually work
      app: ['chrome'],
    },
  },
});
