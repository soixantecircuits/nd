const path = require('path')
const config = require('../config/index')

const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
// Modules to load settings
const program = require('commander')

// add some command line arguments
app.commandLine.appendArgument('--disable-pinch')
app.commandLine.appendArgument('--overscroll-history-navigation=0')
app.commandLine.appendArgument('--ignore-gpu-blacklist')
app.commandLine.appendSwitch('remote-debugging-port', '8315')

// get command line arguments
if (process.argv.length > 1) {
  program
    // TODO: .version('0.0.1')
    .option('-s, --settings <path>', 'Set settings file path')
    .parse(process.argv)
}

// Settings loader
let settings = null
function loadSettings (filename) {
  function load (filename) {
    try {
      settings = require(path.resolve(filename))
      let settingsString = JSON.stringify(settings)
      process.env['SETTINGS'] = settingsString
    } catch (e) {
      if (e.code === 'ENOENT') {
        console.log('no file or directory named:', program.settings)
      } else {
        console.log('Error while loading:', program.settings)
        console.error(e)
      }
    }
  }
  if (filename) {
    load(filename)
  }
  // if no config is given let the app load default configs
}

// Keep a global reference of the window object, if you don't, the window will be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  loadSettings(program.settings)

  const options = {
    width: 1920,
    height: 1080
  }

  if (process.env['NODE_ENV'] !== 'dev') {
    // Add kiosk settings to the window
    options.fullScreen = true
  } else {
    // Open dev tools and devtron in dev mode
    require('devtron').install()

    BrowserWindow.addDevToolsExtension(path.join(__dirname, '../node_modules/devtron'))
    let installExtension = require('electron-devtools-installer')
    installExtension.default(installExtension.VUEJS_DEVTOOLS)
      .then((name) => mainWindow.webContents.openDevTools())
      .catch((err) => console.log('An error occurred: ', err))
  }

  options.webPreferences = {
    plugins: true,
    directWrite: true,
    webSecurity: false,
    experimentalFeatures: false,
    experimentalCanvasFeatures: false,
    allowRunningInsecureContent: true,
    allowDisplayingInsecureContent: true
  }

  // Create the browser window.
  mainWindow = new BrowserWindow(options)

  if (process.env['NODE_ENV'] !== 'dev') {
    mainWindow.loadURL(`file://${config.build.index}`)
  } else {
    mainWindow.loadURL(`http://127.0.0.1:${config.dev.port}`)
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows in an array if your app supports multi windows, this is the time when you should delete the corresponding element.
    mainWindow = null
  })

  // Dirty hack to enable touch support
  setTimeout(function () {
    mainWindow.reload()
  }, 1000)
}

// This method will be called when Electron has finished initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  app.quit()
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
