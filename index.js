// electron kütüphanesi dahil et
const electron = require("electron");
// routing için url, path
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({});

  console.log(process.platform);
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "main.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  /* Menu Templatesi oluştur */
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  /* Oluşturulan menüyü set et */
  Menu.setApplicationMenu(mainMenu);
});

const mainMenuTemplate = [
  { label: "Dosya", submenu: [{ label: "Yeni" }, { label: "Kaydet" }, { label: "Farklı Kaydet" }, { label: "Tümünü Sil", role: "all delete" }] },
];

if (process.platform == "darwin") {
  mainMenuTemplate.unshift({ label: app.getName(), role: "Todo" });
}
