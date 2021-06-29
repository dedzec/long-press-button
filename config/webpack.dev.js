const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devServer: {
    // contentBase: './dist',
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    port: 3003,
    hot: true,
    // https: true,
    // allowedHosts: ['local.dev.net'],
    // public: 'http://local.dev.net:3003/',
    publicPath: '/',
    // open: 'chrome',
    open: {
      // This doesn't actually work
      app: ['chrome'],
    },
  },
});
