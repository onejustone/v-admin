"use strict";

// https://www.npmjs.com/package/ora
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('./config')
const webpackConfig = require('./webpack.prod.config')
const connect = require('connect')
const serveStatic = require('serve-static')

const spinner = ora(
  'building for ' + process.env.env_config + ' environment...'
);

spinner.start()

rm(path.join(config.prod.path), err => {
  if (err) {
    console.log(chalk.red(`rm ${config.prod.path} err: `, err));
  };

  webpack(webpackConfig, (err, status) => {
    spinner.stop();

    if (err) {
      console.log(chalk.red(`webpack build error:`, err));
    }

    process.stdout.write(
      status.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n'
    )

    if (status.hasErrors()) {
      console.log(chalk.red(' Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan(' Build complete.\n'))
    console.log(
      chalk.yellow(
        ' Tip: built files are meant to be served over an HTTP server.\n' +
        " Opening index.html over file:// won't work.\n"
      )
    )
  })
})
