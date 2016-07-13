const config = require('../config')

const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// add some command line arguments
app.commandLine.appendArgument('--disable-pinch')
app.commandLine.appendArgument('--overscroll-history-navigation=0')
app.commandLine.appendArgument('--ignore-gpu-blacklist')
app.commandLine.appendSwitch('remote-debugging-port', '8315')

// Keep a global reference of the window object, if you don't, the window will be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  const options = {
    width: 1920,
    height: 1080
  }

  if (process.env['NODE_ENV'] !== 'dev') {
    // Add kiosk settings to the window
    options.kiosk = true
    options.frame = false
    options.fullScreen = true
    options.alwaysOnTop = true
    options.autoHideMenuBar = true
    options.setMenuBarVisibility = false
  } else {
    // Open dev tools and devtron in dev mode
    require('electron-debug')({showDevTools: true})
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