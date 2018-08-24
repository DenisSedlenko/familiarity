const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow } = electron;

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
        center: true
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
