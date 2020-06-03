import {Event} from '@/plugin/event'
import update from './update'

const e = Event.gen('common')
    .serverListen(update)
    .register()

export const client = e.client()