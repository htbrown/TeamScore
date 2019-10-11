const { app, BrowserWindow } = require('electron');

let win;

async function createWindow(width, height, options) {
    win = new BrowserWindow({
        width: width,
        height: height,
        titleBarStyle: 'hidden',
        resizable: false
    });

    await win.loadFile('assets/index.html');

    win.on('closed', async () => {
        win = null;
    })
};

app.on('ready', async () => {
    await createWindow(1024, 600);
});
