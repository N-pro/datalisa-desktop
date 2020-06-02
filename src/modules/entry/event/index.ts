import {Event} from '@/plugin/event'


console.log(process.type)

const e = Event.gen('entry')
    .serverListen({
        toStr: (a: number) => Promise.resolve(a.toString()),
        type: () => console.log(process.type),
    })
    .register()

const client = e.client()

const server = e.server()

export {
    client,
    server
}