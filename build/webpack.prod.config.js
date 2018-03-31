// 生产环境
process.env.NODE_ENV = 'production'
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extra-text-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')
const uitls = require('./utils')
const config = require('./config')

module.exports = merge(baseWebpackConfig, {
  output: {
    path: config.prod.path,
    publicPath: config.prod.publicPath
  },
  module: {
    rules: uitls.styleLoaders()
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'production',
      '__ENV__': false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename: 'css/style.css?[contenthash:8]'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
})