const path = require('path')
const config = require('../config/index')
const webpack = require('webpack')
const utils = require('./utils')
const projectRoot = path.resolve(__dirname, '../')

{{#unless electron}}
const standardSettings = require('standard-settings')
const settings = require('nconf').get()
{{/unless}}

const program = require('commander')
program
  .option('-t, --target [value]', 'bundle target.')
  .parse(process.argv)

module.exports = {
  {{#unless electron}}
  plugins: [
    new webpack.DefinePlugin({SETTINGS: JSON.stringify(settings)})
  ],
  {{/unless}}
  entry: {
    app: './src/main.js'
  },
  output: {
    path: '/',
    // this causes absolute path in builds, which makes them non-distribuable on an other machine
    //publicPath: config.build.assetsPublicPath,
    filename: '[name].js'
  },
  target: program.target || {{#if electron}}'electron-renderer'{{else}}'web'{{/if}},
  resolve: {
    enforceExtension: false,
    extensions: ['.js', '.vue'],
    modules: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  // resolveLoader: {
  //   fallback: [path.join(__dirname, '../node_modules')]
  // },
  module: {
    rules: [
      {{#lint}}
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: projectRoot,
        exclude: /node_modules/
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {{/lint}}
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.cssLoaders(),
          autoprefixer: {
            browsers: ['last 2 versions']
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'vue-html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  externals: [
    (function () {
      const IGNORES = [
        'electron'
      ]
      return function (context, request, callback) {
        if (IGNORES.indexOf(request) >= 0) {
          return callback(null, "require('" + request + "')")
        }
        return callback()
      }
    })()
  ]
}
