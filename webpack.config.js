var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './app/index.jsx',
  output: { 
    path: './build',
    filename: 'bundle.js' 
  },
  watch: true,
  devServer: {
    inline: true,
    contentBase: './app',
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
};