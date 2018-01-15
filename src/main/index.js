import { app, BrowserWindow, Menu } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

var template = [{
  label: "Application",
  submenu: [
      { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
      { type: "separator" },
      { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
  ]}, {
  label: "Edit",
  submenu: [
      { label: "Undo", accelerator: "CommandOrControl+Z", selector: "undo:" },
      { label: "Redo", accelerator: "Shift+CommandOrControl+Z", selector: "redo:" },
      { type: "separator" },
      { label: "Cut", accelerator: "CommandOrControl+X", selector: "cut:" },
      { label: "Copy", accelerator: "CommandOrControl+C", selector: "copy:" },
      { label: "Paste", accelerator: "CommandOrControl+V", selector: "paste:" },
      { label: "Select All", accelerator: "CommandOrControl+A", selector: "selectAll:" }
  ]}
];

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    useContentSize: true,
    width: 1000
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
