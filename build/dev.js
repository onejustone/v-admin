 // 调用webpack-dev-server NodeJS API启动服务器
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('./config')
const devConfig = require("./webpack.dev.config");
const compiler = webpack(devConfig);

// 热替换配置
const server = new webpackDevServer(compiler, {
    stats: {
        colors: true
    },
    noInfo: true,
    // 热替换配置
    hot: true,
    publicPath: config.dev.publicPath
});

const url = `http://localhost:${config.dev.port}/`
server.listen(config.dev.port, "0.0.0.0");
// 打包完毕后启动浏览器
const opn = require('opn')

server.middleware.waitUntilValid(function () {
    console.log(`> Listening at ${url}`);
    require('child_process').exec(`start ${url}`);
    opn(`${url}`)
})