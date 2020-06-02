import { autoUpdater } from 'electron-updater'
import { Plugin } from './index'
import { BrowserWindow, ipcMain, App } from 'electron';

const uploadUrl = `https://github.com/likeadoge/datalisa-desktop/releases/latest/download/`; // 更新包位置

export default class Updater implements Plugin {
    install(mainWindow: BrowserWindow,app:App) {
        // 通过main进程发送事件给renderer进程，提示更新信息
        function sendUpdateMessage(text: string) {
            mainWindow.webContents.send('message', text)
        }
        function updateHandle() {
            let message = {
                error: '检查更新出错',
                checking: '正在检查更新……',
                updateAva: '检测到新版本，正在下载……',
                updateNotAva: '现在使用的就是最新版本',
            };
            autoUpdater.setFeedURL(uploadUrl);
            autoUpdater.on('error', function (message) {
                sendUpdateMessage(message.error)
            });
            autoUpdater.on('checking-for-update', function () {
                sendUpdateMessage(message.checking)
            });
            autoUpdater.on('update-available', function (info) {
                sendUpdateMessage(message.updateAva)
            });
            autoUpdater.on('update-not-available', function (info) {
                sendUpdateMessage(message.updateNotAva);
            });

            // 更新下载进度事件
            autoUpdater.on('download-progress', function (progressObj) {
                mainWindow.webContents.send('downloadProgress', progressObj)
            })
            autoUpdater.on('update-downloaded', function (event, releaseNotes, releaseName, releaseDate, updateUrl, quitAndUpdate) {

                ipcMain.on('isUpdateNow', (e, arg) => {
                    console.log("开始更新");
                    //some code here to handle event
                    autoUpdater.quitAndInstall();
                });

                mainWindow.webContents.send('isUpdateNow')
            });

            ipcMain.on("checkForUpdate", () => {
                //执行自动更新检查
                autoUpdater.checkForUpdates();
            })
        }

        updateHandle()

    }
}






