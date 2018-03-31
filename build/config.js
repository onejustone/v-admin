const path = require('path')

module.exports = {
  dev: {
    path: path.resolve(__dirname, '../static'),
    publicPath: '/',
    port: 8000
    /*
     path: 打包后js、css、image等存放的目录; Webpack 2+ 要求output.path必须为绝对路径。
     publicPath: 静态资源文件夹路径， 如果不配置，则默认为 '/',
     在实际项目中，静态资源一般集中放在一个文件夹下，
     比如static目录，那么这里就应该改成publicPath: '/static/'，
     相应的 index.html 中引用的 JS 也要改成src="/static/build.js"，
     publicPath 可以解释为最终发布的服务器上 build.js 所在的目录，
     其他静态资源也应当在这个目录下。
    */
  },
  test: {

  },
  prod: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/static/'
  }
}