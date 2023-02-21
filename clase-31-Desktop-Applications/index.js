const { app, BrowserWindow } = require('electron');

let mainWindow;

const createWindow = ()=>{
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });
  mainWindow.loadFile('./index.html');
}

app.on('ready',createWindow);