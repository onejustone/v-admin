
/**
 * base.config.js 将vue-loader的options提取出来,其主要是用来配置CSS及CSS预处理语言的loader，
* 开发环境可以不用配置，但是生产环境需要提取CSS、增加postcss-loader等，
* 因此需要提取出来针对不同环境返回相应的options。
*/

// base.config.js不配置css的loader的原因和vue-loader一样
// 同样考虑到各种环境的差异性以及个性配置，在各自的环境中配置path和publicPath更合适

const webpack = require('webpack')
const path = require('path')
const utils = require('./utils')

function resolve(relPath) {
  return path.resolve(__dirname, relPath)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  cache: true,
  entry: utils.entries(),
  // entry: Object.assign(
  //   utils.entries(),
  //   { vendor: ['rxjs', 'lodash', 'element-ui', 'vue-rx', 'vue-i18n', 'buefy', 'vuex', 'vue', 'vue-router'] }
  // ),
    // 提取第三方代码，将第三方代码和业务代码分别打包构建，然后通过 CommonsChunkPlugin 打包到 vendor.js
  // entry: {
  //   main: resolve('../src/main.js'),
  //   // 提取第三方代码，将第三方代码和业务代码分别打包构建，然后通过 CommonsChunkPlugin 打包到 vendor.js
  //   vendor: ['rxjs', 'element-ui', 'vue-rx', 'vue-i18n', 'buefy', 'vuex', 'vue', 'vue-router']
  // },
  output: {
    filename: '[name].js'
  },
  resolve: {
        extensions: ['.js', '.vue', '.styl', '.stylus', 'pug'],
        modules: [path.resolve(__dirname, '../node_modules')],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('../src'),
            'routeImport': path.resolve(__dirname, '../src/routeImport'),
            'library': path.resolve(__dirname, '../library'),
            'plugins': path.resolve(__dirname, '../src/plugins'),
            'webviews': path.resolve(__dirname, '../src/apps/web/src/views'),
            'mobileviews': path.resolve(__dirname, '../src/apps/mobile/src/views'),
            'screenviews': path.resolve(__dirname, '../src/apps/screen/src/views'),
            'static': path.resolve(__dirname, '../static'),
            'util': path.resolve(__dirname, '../src/util'),
            'api': path.resolve(__dirname, '../src/api'),
            'http': path.resolve(__dirname, '../src/api/http'),
            'rapi': path.resolve(__dirname, '../src/rapi'),
            'rhttp': path.resolve(__dirname, '../src/rapi/http'),
            'packages': path.resolve(__dirname, '../packages'),
            'components': path.resolve(__dirname, '../src/components'),
            'theme': path.resolve(__dirname, '../src/theme'),
            'style': path.resolve(__dirname, '../src/style')
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
        use: "babel-loader?cacheDirectory=true",
        include: [resolve('../src')], // src是项目开发的目录
        exclude: [path.resolve(__dirname, '../node_modules')] // 不需要编译node_modules下的js
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
              // 将图片都放入images文件夹下，[hash:7]防缓存
              name: 'static/images/[name].[hash:7].[ext]'
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
              // 将字体放入fonts文件夹下
              name: 'static/fonts/[name].[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:7].[ext]'
        }
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
    new webpack.DllReferencePlugin({
      // context: __dirname,
      manifest: path.resolve(__dirname, '../static/js/vendor-mainfest.json') // 指向 DllReferencePlugin json
    }),
  ]
}
