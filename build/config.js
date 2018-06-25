const path = require('path')

module.exports = {
  dev: {
    path: path.resolve(__dirname, '../static'),
    publicPath: '/',
    port: 6066
  },
  test: {

  },
  prod: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/static/'
  }
}
