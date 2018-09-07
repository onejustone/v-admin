// 生产环境
process.env.NODE_ENV = 'production'
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
      'process.env.NODE_ENV': '"production"',
      '__ENV__': false
    }),
    new webpack.optimize.UglifyJsPlugin({
      // UglifyJsPlugin 它既可以压缩js代码也可以压缩css代码。
      // 开启代码压缩
      // compress: {
        // 去除代码注释
        // warnings: false
      // }
    }),
    new ExtractTextPlugin({
      filename: 'css/style.css?[contenthash:8]'
    }),
    new HtmlWebpackPlugin({
      title: 'ahah',
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
})
