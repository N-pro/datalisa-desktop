import { ipcMain, ipcRenderer } from 'electron'
import { Plugin } from './index'

class Event<SE, CE>{
    static gen(namespace: string) {
        return new Event(namespace, {}, {})
    }

    private readonly namespace: string

    private readonly serverEvents: SE

    private readonly clientEvents: CE

    private status: boolean

    constructor(namespace: string, serverEvents: SE, clientEvents: CE) {
        this.namespace = namespace
        this.serverEvents = serverEvents
        this.clientEvents = clientEvents
        this.status = false
    }

    serverListen<S>(s: S) {
        return new Event(
            this.namespace,
            Object.assign({}, this.serverEvents, s),
            this.clientEvents
        )
    }

    register() {

        if (this.status === true) return this
        this.status = true
        // if (process.type === 'renderer') {

        // } 
        if (process.type === 'browser') {
            this.registerInBrowser()
        }
        return this
    }
    private registerInBrowser() {
        Object.keys(this.serverEvents).forEach(key => {
            ipcMain.on(`${this.namespace}:${key}`, (ev, backId: string, ...arg) => {
                const fn = this.serverEvents[key]

                Promise.resolve(fn(...arg))
                    .then(v => {
                        ev.sender.send(backId, true, v)
                    })
                    .catch(msg =>
                        ev.sender.send(backId, false, msg)
                    )

            })
        })
    }

    server() { return null }
    client() {
        return Object.keys(this.serverEvents).reduce((s: any, key) => {
            s[key] = (...arg) => new Promise((res, rej) => {
                const backId = Math.random().toString()
                const lisener = (ev, status, returnValue) => {
                    ipcRenderer.removeListener(backId, lisener)
                    if (status) res(returnValue)
                    else rej(returnValue)
                }
                ipcRenderer.on(backId, lisener)
                ipcRenderer.send(`${this.namespace}:${key}`, backId, ...arg)
            })

            return s

        }, {})
    }
}


export { Event }


class EventPulgin implements Plugin {
    install() {
        import('../modules/entry/event/index')
        import('../modules/common/event/index')
    }
}

export const plugin =  new EventPulgin()