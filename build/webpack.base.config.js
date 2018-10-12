
/**
 * base.config.js 将vue-loader的options提取出来,其主要是用来配置CSS及CSS预处理语言的loader，
* 开发环境可以不用配置，但是生产环境需要提取CSS、增加postcss-loader等，
* 因此需要提取出来针对不同环境返回相应的options。
*/

// base.config.js不配置css的loader的原因和vue-loader一样
// 同样考虑到各种环境的差异E性以及个性配置，在各自的环境中配置 path和publicPath更合适

const webpack = require('webpack')
const path = require('path')
const utils = require('./utils')

function resolve(relPath) {
  return path.resolve(__dirname, relPath)
}

module.exports = {
  entry: {
    // screen: resolve('../src/screen.js'),
    main: resolve('../src/main.js'),
    // 第三方代码，将第三方代码和业务代码分别打包构建，然后通过 CommonsChunkPlugin 打包到 vendor.js
    vendor: ['rxjs', 'element-ui', 'vue-rx', 'vue-i18n', 'buefy', 'vuex', 'vue', 'vue-router']
  },
  output: {
    filename: 'js/[name].js'
  },
  resolve: {
        extensions: ['.js', '.vue', '.styl', '.stylus', 'pug'],
        modules: [path.resolve(__dirname, '../node_modules')],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            // 用于 stylus 导入 .stylus 文件
            '@': resolve('../src'),
            'router': path.resolve(__dirname, '../src/router'),
            'plugins': path.resolve(__dirname, '../src/plugins'),
            'store': path.resolve(__dirname, '../src/store'),
            'views': path.resolve(__dirname, '../src/views'),
            'static': path.resolve(__dirname, '../static'),
            'util': path.resolve(__dirname, '../src/util'),
            'api': path.resolve(__dirname, '../src/api'),
            'http': path.resolve(__dirname, '../src/api/http'),
            'rapi': path.resolve(__dirname, '../src/rapi'),
            'rhttp': path.resolve(__dirname, '../src/rapi/http'),
            'packages': path.resolve(__dirname, '../packages'),
            'components': path.resolve(__dirname, '../src/components'),
            'theme': path.resolve(__dirname, '../src/theme')
        }
    },
  module: {
    rules: [
      {
        test: require.resolve('lodash'),
        use: [{
          loader: 'expose-loader',
          options: '_'
        }]
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        include: [resolve('../src')]
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
          options: utils.vueLoaderOptions()
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: 'images/[name].[hash:7].[ext]' // 将图片都放入images文件夹下，[hash:7]防缓存
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: 'fonts/[name].[hash:7].[ext]' // 将字体放入fonts文件夹下
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      Rx: 'Rxjs',
      _: 'lodash',
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' })
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'main-vendor',
    //   chunks: ['main'],
    //   minChunks: function (module) {
    //     return module.context && module.context.indexOf("node_modules") !== -1;
    //   }
    // }),

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'screen-vendor',
    //   chunks: ['screen'],
    //   minChunks: function (module) {
    //     return module.context && module.context.indexOf("node_modules") !== -1;
    //   }
    // }),

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   chunks: ['admin-vendor', 'web-vendor']
    // }),

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   chunks: ['vendor']
    // })
  ]
}
