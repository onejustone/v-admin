const path = require('path');
const webpack = require('webpack');
const config = require('./config')

module.exports = {
  entry: {
    vendor: [
      'vue/dist/vue.esm.js',
      'rxjs', 'lodash', 'element-ui',
      'vue-rx', 'vue-i18n', 'buefy',
      'vuex', 'vue-router'
    ] // 需要打包起来的依赖
  },
  output: {
    path: path.join(__dirname, '../static/js/'), // 输出的路径
    filename: '[name].dll.js', // 输出的文件，将会根据entry命名为vendor.dll.js
    library: '[name]_library' // 暴露出的全局变量名
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname, // 执行的上下文环境，对之后DllReferencePlugin有用
      path: path.join(__dirname, '../static/js/', '[name]-mainfest.json'), // 描述依赖对应关系的json文件
      name: '[name]_library'
    }),
    new webpack.optimize.UglifyJsPlugin({ // uglifjs压缩
      compress: {
        warnings: false
      }
    })
  ]
}
