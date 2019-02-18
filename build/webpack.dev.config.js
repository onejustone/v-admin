 // 开发配置
process.env.NODE_ENV = 'development'
const portfinder = require('portfinder')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')
const utils = require('./utils')
const config = require('./config')

const devWebpackConfig = merge(baseWebpackConfig, {
    module: {
      rules: utils.styleLoaders()
    },
    devServer: {
        // historyApiFallback: {
        //   rewrites: [
        //     { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') }
        //   ]
        // },
        // 热更新配置
        hot: true,
        quiet: true, // 保证 friendly-errors-webpack-plugin 生效
        host: '0.0.0.0',
        port: config.dev.port,
        open: true,
        noInfo: true,
        publicPath: config.dev.publicPath
    },
    devtool: '#source-map',
    output: {
        path: config.dev.path,
        publicPath: config.dev.publicPath
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            '__ENV__': true,
            'development': true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        /* 多入口配置，以下注释代码不需要 */
        // // HtmlWebpackPlugin 会自动将生成的js代码插入到 index.html
        // new HtmlWebpackPlugin({
        //     title: 'vue-demo',
        //     // filename 是相对于 webpack 配置项 output.path（打包资源存储路径）
        //     filename: './index.html',
        //     // template 的路径是相对于webpack编译时的上下文目录，就是项目根目录
        //     template: './index.html',
        //     inject: true
        // })
    ].concat(utils.htmlPlugin()) // 多入口配置
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [
              `Your application is running here: http://${
              devWebpackConfig.devServer.host
              }:${port}`
            ]
          },
          onErrors: config.dev.notifyOnErrors
            ? utils.createNotifierCallback()
            : undefined
        })
      )

      resolve(devWebpackConfig)
    }
  })
})
