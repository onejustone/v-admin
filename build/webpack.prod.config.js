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
      title: 'vue-demo',
      // filename 是相对于 webpack 配置项 output.path（打包资源存储路径）
      filename: './index.html',
      // template 的路径是相对于webpack编译时的上下文目录，就是项目根目录
      template: './index.html',
      path: config.prod.path,
      // favicon: resolveApp('favicon.ico'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      // chunksSortMode: 'dependency'
    })
  ]
})
