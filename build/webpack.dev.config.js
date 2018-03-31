 // 开发配置
const webpack = require('webpack')
const merge = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')
const utils = require('./utils')
const config = require('./config')

// 多入口热更新
// Object.keys(baseWebpackConfig.entry).forEach((name) => {
//     baseWebpackConfig.entry[name] = [
//       `webpack-dev-server/client?http://localhost:${config.dev.port}/`,
//       'webpack/hot/dev-server'
//     ].concat(baseWebpackConfig.entry[name])
// })

module.exports = merge(baseWebpackConfig, {
    devServer: {
        // 热更新配置
        hot: true,
        quiet: true, // 保证 friendly-errors-webpack-plugin 生效
        port: config.dev.port,
        open: true,
        noInfo: true,
        publicPath: config.dev.publicPath
    },
    output: {
        path: config.dev.path,
        publicPath: config.dev.publicPath
    },
    module: {
        rules: utils.styleLoaders()
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            '__ENV__': true,
            'development': true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        // HtmlWebpackPlugin 会自动将生成的js代码插入到 index.html
        new HtmlWebpackPlugin({
            title: 'liangxiang',
            // filename 是相对于 webpack 配置项 output.path（打包资源存储路径）
            filename: './index.html',
            // template 的路径是相对于webpack编译时的上下文目录，就是项目根目录
            template: './index.html',
            inject: true
        })
    ]
})