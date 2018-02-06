// 生产配置
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require("./webpack.dev.config");
const compiler = webpack(config);

const server = new webpackDevServer(compiler, {
  publicPath: config.output.publicPath
});

server.listen(port, "0.0.0.0");
// 打包完毕后启动浏览器
//
server.middleware.waitUntilValid(function () {
  console.log(`> Listening at ${url}`);
  require('child_process').exec(`start ${url}`);
})