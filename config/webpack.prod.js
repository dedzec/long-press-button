const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // devtool: 'source-map',
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    // path: path.resolve(__dirname, 'dist'),
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    clean: true,
  },
});
