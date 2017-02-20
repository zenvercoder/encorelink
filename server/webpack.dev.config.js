var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  context: path.resolve(__dirname, '../client'),
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, '../client/dist'),
    filename: 'bundle.js',
    publicPath: 'http://0.0.0.0:8080/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.resolve(__dirname, '../client/src')
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
