const webpack = require('webpack')
const webpackProdConfig = require('./webpack.prod.config')
webpack(webpackProdConfig, function (err, status) {
    process.stdout.write(stats.toString())
})