import {plugin as updatePlugin} from '@/plugin/updater'


export default {
    checkVersion: () => updatePlugin.check(),
    installLatest: () => updatePlugin.download()
} 