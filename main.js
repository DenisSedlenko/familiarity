const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu, screen} = electron;

let mainWindow, serve;

const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

const shouldQuit = makeSingleInstance()
if (shouldQuit) return app.quit()

// Listen for app to be ready
app.on('ready', function() {
    const electronScreen = screen;
    const size = electronScreen.getPrimaryDisplay().workAreaSize;

    // Create new window
    mainWindow = new BrowserWindow({
        width: size.width*0.7,
        height: size.height*0.8,
        center: true
    });
    // Load main html into window
    if (serve) {
        require('electron-reload')(__dirname, {
          electron: require(`${__dirname}/node_modules/electron`)
        });
        mainWindow.loadURL('http://localhost:4200');
    } else {
        mainWindow.loadURL(url.format({
          pathname: path.join(__dirname, 'dist/trademark/index.html'),
          protocol: 'file:',
          slashes: true
        }));
    }

    // Quit app when closed
    mainWindow.on('closed', function() {
        mainWindow = null
    })

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate([]);

    // Insert our menu
    Menu.setApplicationMenu(mainMenu);
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  });

  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow()
    }
  });

// Create menu template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    }
];


function makeSingleInstance () {
    if (process.mas) return false
  
    return app.makeSingleInstance(() => {
      if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore()
        mainWindow.focus()
      }
    })
}

// Add developer tools if not in prod
if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                label: 'Toggle DevTools',
                accelerator: 'F12',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}