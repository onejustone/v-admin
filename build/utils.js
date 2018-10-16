const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'
const path = require('path')

const cssLang = [
  {
    name: 'css',
    reg: /\.css$/,
    loader: 'css-loader'
  },
  {
    name: 'stylus',
    reg: /\.stylus$/,
    loader: 'stylus-loader'
  },
  {
    name: 'less',
    reg: /\.less$/,
    loader: 'less-loader'
  },
  {
    name: 'stylus',
    reg: /\.styl$/,
    loader: 'stylus-loader'
  }
]

function genLoaders (lang) {
  let loaders = ['css-loader', 'postcss-loader']
  if (lang.name !== 'css') {
    loaders.push(lang.loader)
  }

  if (isProd) {
    // 生产环境需要提取 css
    loaders = ExtractTextPlugin.extract({
      // 提取 CSS
     // 样式解析，其中css - loader用于解析，而vue - style - loader则将解析后的样式嵌入js代码
     // 关于 webpack 对样式文件的处理请参考: https://github.com/zhengweikeng/blog/issues/9
     // 支持 import/require 引入CSS文件，实际应用中并不推荐使用 import 引入 css，参考：https://github.com/postcss/postcss-loader/issues/35
     //
     // 也可以使用如下的配置
     // {
     //  test: /\.css$/,
     //  use: ["vue-style-loader", "css-loader"]
     // }
     // 可以发现，webpack的loader的配置是从右往左的，从上面代码看的话，就是先使用css-loader之后使用style-loader
     // webpack1 loader 后缀可以不写, webpack2 则不可省略
     // { test: /\.css$/, loader: 'vue-style!css' }
      use: loaders,
      allChunks: true, // extract-text-webpack-plugin 默认不会提取异步模块中的 CSS，需要加上配置
      filename: "css/[name].[contenthash].css"
    })
  } else {
    // 开发环境需要 vue-style-loader 将 css 提取到页面头部
    loaders.unshift('vue-style-loader')
  }

  return loaders
}

exports.styleLoaders = function () {
  const output = []
  cssLang.forEach(lang => {
    output.push({
      test: lang.reg,
      use: genLoaders(lang)
    })
  })

  return output
}

// vue-loader 的 options
exports.vueLoaderOptions = function () {
  const options = {
    loaders: {}
  }

  cssLang.forEach(lang => {
    options.loaders[lang.name] = genLoaders(lang)
  })

  return options
}

/* ===我是分割线，以下是多页面配置 ===*/

// glob是webpack安装时依赖的一个第三方模块，该模块允许你使用 *等符号, 例如lib/*.js就是获取lib文件夹下的所有js后缀名的文件
const glob = require('glob')

// 页面模板
// 取得相应的页面路径，因为之前的配置，所以是src文件夹下的pages文件夹
const PAGE_PATH = path.resolve(__dirname, '../src/apps')

// 用于做相应的merge处理
const merge = require('webpack-merge')

// 多入口配置
// 通过glob模块读取../src/apps文件夹下的所有对应文件夹下的aap.js文件，如果该文件存在
// 那么就作为入口处理
exports.entries = function () {
  const entryFiles = glob.sync(PAGE_PATH + '/*/index.js')
  const map = {}
  entryFiles.forEach((filePath) => {
    const filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
    map[filename] = filePath
  })
  return map
}

// 多页面输出配置
// 与上面的多页面入口配置相同，读取../src/apps文件夹下的对应的html后缀文件，然后放入数组中
exports.htmlPlugin = function () {
  const entryHtml = glob.sync(PAGE_PATH + '/*/index.html')
  const arr = []
  entryHtml.forEach((filePath) => {
    const filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
    let conf = {
      // 模板来源
      template: filePath,
      // 文件名称
      filename: filename + '.html',
      // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
      chunks: ['manifest', 'vendor', filename],
      inject: true
    }
    if (process.env.NODE_ENV === 'production') {
      conf = merge(conf, {
        minify: {
          removeAttributeQuotes: true,
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
        // favicon: resolveApp('favicon.ico'),
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        // chunksSortMode: 'dependency'
      })
    }
    arr.push(new HtmlWebpackPlugin(conf))
  })
  return arr
}
