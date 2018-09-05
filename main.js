var electron = require('electron');
var url = require('url');
var path = require('path');
var app = electron.app, BrowserWindow = electron.BrowserWindow, Menu = electron.Menu;
var mainWindow, serve;
var args = process.argv.slice(1);
serve = args.some(function (val) { return val === '--serve'; });
// Listen for app to be ready
app.on('ready', function () {
    var electronScreen = electron.screen;
    var size = electronScreen.getPrimaryDisplay().workAreaSize;
    // Create new window
    mainWindow = new BrowserWindow({
        width: size.width * 0.7,
        height: size.height * 0.8,
        minHeight: 600,
        minWidth: 500,
        title: 'Trademark',
        center: true,
        icon: __dirname + '/Icon_512x512.ico'
    });
    // mainWindow.setMenuBarVisibility(false);
    // Load main html into window
    if (serve) {
        require('electron-reload')(__dirname, {
            electron: require(__dirname + "/node_modules/electron")
        });
        mainWindow.loadURL('http://localhost:4200');
    }
    else {
        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'dist/index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }
    // Build menu from template
    var mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert our menu
    Menu.setApplicationMenu(mainMenu);
    // Quit app when closed
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
// Create menu template
var mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click: function () {
                    app.quit();
                }
            }
        ]
    }
];
// Add developer tools if not in prod
if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                label: 'Toggle DevTools',
                accelerator: 'F12',
                click: function (item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}
//# sourceMappingURL=main.js.map