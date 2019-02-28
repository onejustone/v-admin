const path = require('path');
const webpack = require('webpack');
const config = require('./config')

module.exports = {
  entry: {
    vendor: [
      'vue',
      'rxjs', 'lodash', 'element-ui',
      'vue-rx', 'vue-i18n',
      'vuex', 'vue-router'
    ] // 需要打包起来的依赖
  },
  output: {
    path: path.join(__dirname, '../static/js/'), // 输出的路径
    filename: '[name]-[chunkhash:7].dll.js', // 输出的文件，将会根据entry命名为vendor.dll.js
    library: '[name]_library' // 暴露出的全局变量名
  },
  resolve: {
    modules: [path.resolve(__dirname, '../node_modules')],
    // extensions: ['.js', '.vue', '.css', '.scss', '.styl', '.style', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname, // 执行的上下文环境，对之后DllReferencePlugin有用
      path: path.join(__dirname, '../static/js/', '[name]-mainfest.json'), // 描述依赖对应关系的json文件
      name: '[name]_library'
    }),
    // 这个是用来稳定hash值，防止出现webpack的hash出现莫名的变化
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NamedChunksPlugin(),
    // new webpack.optimize.UglifyJsPlugin({ // uglifjs压缩
      // compress: {
      //   warnings: false
      // }
    // })
  ]
}
