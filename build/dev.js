 // 调用webpack-dev-server NodeJS API启动服务器
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require("./webpack.dev.config");
const compiler = webpack(config);
const port = 1080
const url = `0.0.0.0:${port}/`

// 热替换配置
config.entry.app = [`webpack-dev-server/client?${url}`, "webpack/hot/dev-server", config.entry.app];

const server = new webpackDevServer(compiler, {
    stats: {
        colors: true
    },
    noInfo: true,
    // 热替换配置
    hot: true,
    publicPath: config.output.publicPath
});

server.listen(port, "0.0.0.0");
// 打包完毕后启动浏览器


server.middleware.waitUntilValid(function () {
    console.log(`> Listening at ${url}`);
    require('child_process').exec(`start ${url}`);
})