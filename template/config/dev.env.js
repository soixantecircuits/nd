{{#if electron}}
// Do not use `webpack-merge` since there is no devDependencies in packaged app
var prodEnv = require('./prod.env')
{{else}}
var merge = require('webpack-merge')
{{/if}}

{{#if electron}}
module.exports = Object.assign({}, prodEnv, {
  NODE_ENV: '"development"'
})
{{else}}
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
{{/if}}
