import { BrowserWindow, App } from 'electron'
import Update from './updater'
import Event from './Event'

export interface Plugin {
    install(
        mainWin: BrowserWindow,
        app: App
    ): void
}

export default (mainWin: BrowserWindow,
    app: App) => {
    const update = new Update()
    update.install(mainWin, app)
    const event = new Event()
    event.install(mainWin, app)
}
