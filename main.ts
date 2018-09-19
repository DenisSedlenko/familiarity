const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu, globalShortcut, remote } = electron;

let mainWindow, serve;

const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

// Listen for app to be ready
app.on('ready', function() {
    const electronScreen: typeof electron.screen = electron.screen;
    const size = electronScreen.getPrimaryDisplay().workAreaSize;

    // Create new window
    mainWindow = new BrowserWindow({
        width: size.width * 0.7,
        height: size.height * 0.8,
        minHeight: 600,
        minWidth: 600,
        title: 'Trademark',
        center: true,
        frame: false,
        icon: __dirname + '/Icon_512x512.ico'
    });

    mainWindow.setMenuBarVisibility(false);

    // Load main html into window
    if (serve) {
        require('electron-reload')(__dirname, {
          electron: require(`${__dirname}/node_modules/electron`)
        });
        mainWindow.loadURL('http://localhost:4200');
    } else {
        mainWindow.loadURL(url.format({
          pathname: path.join(__dirname, 'dist/index.html'),
          protocol: 'file:',
          slashes: true
        }));
    }

    // Build menu from template
    // const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    // Insert our menu
    // Menu.setApplicationMenu(mainMenu);

    // Quit app when closed
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  // Create menu template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    }
];

// Add developer tools if not in prod
if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push(<any>{
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
