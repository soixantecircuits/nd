var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var webpackProdConfig = require('./webpack.prod.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(webpackProdConfig, {
  output: {
    path: config.build.assetsRoot,
    publicPath: config.electron.assetsPublicPath,
    filename: '[name].js'
  },
  target: 'electron-renderer'
})
