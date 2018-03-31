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
    name: 'stylus',
    reg: /\.styl$/,
    loader: 'stylus-loader'
  }
]

function genLoaders (lang) {
  const loaders = ['css-loader', 'postcss-loader']
  if (lang.name !== 'css') {
    loaders.push(lang.loader)
  }

  if (isProd) {
    // 生产环境需要提取 css
    loaders = ExtractTextPlugin.extract({
      use: loaders,
      // 提取 CSS Error: Can't resolve 'postcss-loader'
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
