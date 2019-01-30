// 生产环境
process.env.NODE_ENV = 'production'
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const SentryPlugin = require('@sentry/webpack-plugin')
const path = require('path')
const utils = require('./utils')
const config = require('./config')

module.exports = merge(baseWebpackConfig, {
  output: {
    path: config.prod.path,
    publicPath: config.prod.publicPath,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js',
    sourceMapFilename: '[name].[chunkhash].js.map'
  },
  // 为了开启 sentry 线上代码调试
  devtool: '#source-map',
  module: {
    rules: utils.styleLoaders()
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      '__ENV__': false
    }),
    new webpack.optimize.UglifyJsPlugin({
      // UglifyJsPlugin 它既可以压缩js代码也可以压缩css代码。
      // 开启代码压缩
      compress: {
        // 去除代码注释
        warnings: false
      },
      sourceMap: true
    }),
    new ExtractTextPlugin({
      allChunks: true, // extract-text-webpack-plugin 默认不会提取异步模块中的 CSS，需要加上配置
      filename: 'css/[name].css?[contenthash:8]'
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 2,
      // minChunks: function (module, count) {
      //   // any required modules inside node_modules are extracted to vendor
      //   return (
      //     module.resource &&
      //     /\.js$/.test(module.resource) &&
      //     module.resource.indexOf(
      //       path.join(__dirname, '../node_modules')
      //     ) === 0
      //   )
      // }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    // copy custom static assets
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: config.prod.assetsSubDirectory,
      ignore: ['.*']
    }]),
    /* 多入口配置，以下注释代码不需要 */
    // new HtmlWebpackPlugin({
    //   title: 'vue-demo',
    //   // filename 是相对于 webpack 配置项 output.path（打包资源存储路径）
    //   filename: './index.html',
    //   // template 的路径是相对于webpack编译时的上下文目录，就是项目根目录
    //   template: './index.html',
    //   path: config.prod.path,
    //   // favicon: resolveApp('favicon.ico'),
    //   inject: true,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeRedundantAttributes: true,
    //     useShortDoctype: true,
    //     removeEmptyAttributes: true,
    //     removeStyleLinkTypeAttributes: true,
    //     keepClosingSlash: true,
    //     minifyJS: true,
    //     minifyCSS: true,
    //     minifyURLs: true
    //   },
    //   // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    //   // chunksSortMode: 'dependency'
    // })
    // 上传 SourceMaps 到 Sentry 对错误进行定位:
    // https://docs.sentry.io/clients/javascript/sourcemaps/
    // https://docs.sentry.io/cli/installation/#installation-via-npm
    //
    new SentryPlugin({
      release: '1.0.0',
      include: path.resolve(__dirname, '../dist'),
      ignore: ['vendor.dll.js', 'static/', 'node_modules'],
    })
  ].concat(utils.htmlPlugin()) // 多入口配置
})
