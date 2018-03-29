 // 开发配置
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        // path: 打包后js、css、image等存放的目录; Webpack 2+ 要求output.path必须为绝对路径。
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
        // publicPath: '/static/'
        /*
          publicPath: 静态资源文件夹路径， 如果不配置，则默认为 '/',
          在实际项目中，静态资源一般集中放在一个文件夹下，
          比如static目录，那么这里就应该改成publicPath: '/static/'，
          相应的 index.html 中引用的 JS 也要改成src="/static/build.js"，
          publicPath 可以解释为最终发布的服务器上 build.js 所在的目录，
          其他静态资源也应当在这个目录下。
         */
    },
    resolve: {
        extensions: ['.js', '.vue', '.styl', '.stylus', 'pug'],
        modules: [path.resolve(__dirname, '../node_modules')],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'router': path.resolve(__dirname, '../src/router'),
            'plugins': path.resolve(__dirname, '../src/plugins'),
            'store': path.resolve(__dirname, '../src/store'),
            'view': path.resolve(__dirname, '../src/views'),
            'util': path.resolve(__dirname, '../src/util'),
            'theme': path.resolve(__dirname, '../src/util')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                include: [path.resolve('./src')]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
                // 样式解析，其中css-loader用于解析，而vue-style-loader则将解析后的样式嵌入js代码a
                // 关于 webpack 对样式文件的处理请参考: https://github.com/zhengweikeng/blog/issues/9
                // 支持 import/require 引入CSS文件，实际应用中并不推荐使用 import 引入 css，参考：https://github.com/postcss/postcss-loader/issues/35
                /*
                  也可以使用如下的配置
                  {
                    test: /\.css$/,
                    use: ["vue-style-loader", "css-loader"]
                  }
                  可以发现，webpack的loader的配置是从右往左的，从上面代码看的话，就是先使用css-loader之后使用style-loader
                  webpack1 loader 后缀可以不写, webpack2 则不可省略
                  { test: /\.css$/, loader: 'vue-style!css' }
                */
            },
            {
            },
            {
                test: /\.scss$|\.sass$/,
                loader: ExtractTextPlugin.extract('vue-style-loader!css-loader!sass-loader') // 支持 sass
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'images/[name].[hash:7].[ext]'    // 将图片都放入images文件夹下，[hash:7]防缓存
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[hash:7].[ext]'    // 将字体放入fonts文件夹下
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'liangxiang',
            filename: './index.html',
            template: './index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            // 提取 CSS
            // allChunks: true, // extract-text-webpack-plugin 默认不会提取异步模块中的 CSS，需要加上配置
            filename: "css/[name].[contenthash].css"
        })
    ]
}