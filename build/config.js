const path = require('path')

module.exports = {
  dev: {
    path: path.resolve(__dirname, '../static'),
    publicPath: '/',
    port: 6067,
    proxyTable: {
      '/api': {
        target: `http://${process.argv[2]}`,
        changeOrigin: true
      }
    }
  },
  test: {

  },
  prod: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/static/'
  }
}
