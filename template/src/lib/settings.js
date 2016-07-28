// Try to load electron remote
var remote
try {
  remote = require('electron').remote
} catch (e) {
  console.warn('app is not running in electron, loading default config')
}

// List of settings to use
let files = []
try {
  // Load default settings
  files.push(require('./../../settings/default.json'))

  // Load more settings if you need
  // files.push(require('./../../settings/' + process.env.project + '.json'))

  // If used in electron, load settings given as arg => ./myapp -- -s mySettings.json
  if (remote && remote.process.env['SETTINGS']) {
    console.log('loading custom settings')
    files.push(JSON.parse(remote.process.env['SETTINGS']))
  }
} catch (e) {
  console.warn('Unable to load settings', e)
}

// Override function
function override (target, object) {
  for (var key of Object.keys(object)) {
    if (target[key] && typeof object[key] === 'object') {
      override(target[key], object[key])
    } else {
      target[key] = object[key]
    }
  }
}

// Load settings
let settings = {}
for (let f of files) {
  override(settings, f)
}

if (process.env['NODE_ENV'] === 'development') {
  console.log(settings)
}

module.exports = settings
