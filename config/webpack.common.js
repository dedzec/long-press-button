const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      //Allows use javascript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, //don't test node_modules folder
        use: {
          loader: 'babel-loader',
        },
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      //Allows use of CSS
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      //Allows use of images
      {
        test: /\.(png|jpg|svg)$/i,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    //Allows remove/clean the build folder
    new CleanWebpackPlugin(),
    //Allows update react components in real time
    new HotModuleReplacementPlugin(),
    // ESlint
    new ESLintPlugin(),
    //Allows to create an index.html in our build folder
    new HtmlWebpackPlugin({
      title: 'React App',
      // template: path.resolve(__dirname, 'public/index.html'), //we put the file that we created in public folder
      // favicon: path.resolve(__dirname, 'public/favicon.ico'),
      template: './public/index.html', //we put the file that we created in public folder
      favicon: './public/favicon.ico',
    }),
    //This get all our css and put in a unique file
    new MiniCssExtractPlugin({
      filename: 'styles.bundle.css',
    }),
    // new Dotenv(),
  ],
};
