import { autoUpdater } from 'electron-updater'
import { Plugin } from './index'
import { BrowserWindow, ipcMain, App } from 'electron';

const uploadUrl = `https://github.com/likeadoge/datalisa-desktop/releases/latest/download/`; // 更新包位置

class Updater implements Plugin {

    install(app: App) {
        function updateHandle() {
            console.log('update install')
            let message = {
                error: '检查更新出错',
                checking: '正在检查更新……',
                updateAva: '检测到新版本，正在下载……',
                updateNotAva: '现在使用的就是最新版本',
            };
            autoUpdater.setFeedURL(uploadUrl);
            autoUpdater.on('error', function (message) {
                console.log(message.error)
            });
            autoUpdater.on('checking-for-update', function () {
                console.log(message.checking)
            });
            autoUpdater.on('update-available', function (info) {
                console.log(message.updateAva)
            });
            autoUpdater.on('update-not-available', function (info) {
                console.log(message.updateNotAva);
            });

            // 更新下载进度事件
            autoUpdater.on('download-progress', function (progressObj) {
                console.log('downloadProgress', progressObj)
            })

            autoUpdater.on('update-downloaded', function (event, releaseNotes, releaseName, releaseDate, updateUrl, quitAndUpdate) {

                ipcMain.on('isUpdateNow', (e, arg) => {
                    console.log("开始更新");
                    //some code here to handle event
                    autoUpdater.quitAndInstall();
                });

                console.log('isUpdateNow')
            });

            autoUpdater.checkForUpdates();
        }

        updateHandle()

    }
}


export const plugin = new Updater()






