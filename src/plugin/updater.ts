import { autoUpdater } from 'electron-updater'
import { Plugin } from './index'
import { BrowserWindow, ipcMain, App } from 'electron';

const uploadUrl = `http://39.101.132.217:8088/desktop/`; // 更新包位置

class UpdaterPlugin implements Plugin {

    private message = {
        error: '检查更新出错',
        checking: '正在检查更新……',
        updateAva: '检测到新版本，正在下载……',
        updateNotAva: '现在使用的就是最新版本',
    }

    install(app: App) {

        autoUpdater.setFeedURL(uploadUrl);
        autoUpdater.autoDownload = false

        console.log('update install')
        autoUpdater.on('error', function (message) {
            console.log(message.error)
        });
        autoUpdater.on('checking-for-update', () => {
            console.log(this.message.checking)
        });
        autoUpdater.on('update-available', () => {
            this.checkCallbacks.forEach(v=>{v(true)})
            this.checkCallbacks = []
        });
        autoUpdater.on('update-not-available', () => {
            this.checkCallbacks.forEach(v=>{v(false)})
            this.checkCallbacks = []
        });

        autoUpdater.on('update-downloaded', function (event, releaseNotes, releaseName, releaseDate, updateUrl, quitAndUpdate) {
            
            console.log('isUpdateNow')
            autoUpdater.quitAndInstall();
        });

        // autoUpdater.checkForUpdates();

    }

    checkCallbacks: ((status: boolean) => void)[] = []
    check() {
        autoUpdater.checkForUpdates();
        return new Promise<boolean>(res => {
            this.checkCallbacks= this.checkCallbacks.concat([(status: boolean) => {
                if (status) res(true)
                else res(false)
            }])
        })
    }

    downloadCallbacks: ((status: boolean) => void)[] = []
    download() {
        autoUpdater.downloadUpdate()
        return new Promise<void>((res, rej) => {
            this.downloadCallbacks = this.downloadCallbacks.concat([(status: boolean) => {
                if (status) res()
                else rej('下载失败！')
            }])
        })
    }

}


export const plugin = new UpdaterPlugin()






