const { app, BrowserWindow, Menu } = require('electron');
const windowStateKeeper = require('electron-window-state');
const path = require('path');

let mainWindow;

function createWindow() {
    let mainWindowState = windowStateKeeper(
        {
            defaultWidth: 1280, 
            defaultHeight: 720
        }
    );

    mainWindow = new BrowserWindow({
        x: mainWindowState.x,
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height,
        maximizable: true,
        title: 'BigScreener',
        icon: __dirname + '/assets/imgs/icon.ico',
        backgroundColor: 'black',
        titleBarStyle: 'hiddenInset',
        show: false,
        defaultEncoding: 'utf8',
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindowState.manage(mainWindow);

    Menu.setApplicationMenu(null);

    mainWindow.loadFile(path.join(__dirname, 'index.html'));

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    mainWindow.on('closed', function () {
        mainWindow = null
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    app.quit()
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});