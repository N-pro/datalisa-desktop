import { BrowserWindow, App } from 'electron'
import { plugin as update } from './updater'
import { plugin as event } from './event'

export interface Plugin {
    install(app: App): void
}

const plugins: Plugin[] = [update, event]

export default (app: App) => {
    plugins.forEach(v=>v.install(app))
}
