// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var package = require('../package.json')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    {{#if electron}}
    assetsPublicPath: path.resolve(__dirname, '../dist'),
    appRoot: path.resolve(__dirname, '../'),
    version: package.version,
    name: package.name,
    packageDestination: path.resolve(__dirname, '../releases'),
    ignoredPaths: (() => {
      const paths = [
        path.resolve(__dirname, '../src/'),
        path.resolve(__dirname, '../index.html'),
        path.resolve(__dirname, '../static/'),
        path.resolve(__dirname, '../.cache/'),
        path.resolve(__dirname, '../README.md'),
        path.resolve(__dirname, '../releases/'),
        path.resolve(__dirname, '../.babelrc'),
        path.resolve(__dirname, '../.editorconfig'),
        path.resolve(__dirname, '../.gitignore'),
        path.resolve(__dirname, '../build/'),
      ]

      const regexps = paths.map((path) => {
        return new RegExp(path)
      })
      return regexps
    })(),
    {{else}}
    assetsPublicPath: '/',
    {{/if}}
    productionSourceMap: true
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    proxyTable: {}
  }
}
