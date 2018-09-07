const ExtractTextPlugin = require('extract-text-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

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
