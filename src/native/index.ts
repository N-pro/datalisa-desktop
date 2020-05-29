import {  BrowserWindow } from 'electron'
import Update from './update'

export interface MD {
    
     install(
        mainWin:BrowserWindow
    ):void
}

export default (mainWin:BrowserWindow)=>{
    const update = new Update()
    update.install(mainWin)
}
