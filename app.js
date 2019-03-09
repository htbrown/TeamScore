const {app, BrowserWindow} = require('electron');

var win;

function createWindow(width, height, options) {
    win = new BrowserWindow({
        width: width,
        height: height,
        titleBarStyle: 'hidden',
        resizable: false
    });

    win.loadFile('assets/index.html');

    win.on('closed', () => {
        win = null;
    })
};

app.on('ready', () => {
    createWindow(1024, 600);
});