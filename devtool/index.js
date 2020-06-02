const chokidar = require('chokidar')
const klawSync = require('klaw-sync')
const path = require('path')

const modsPath = path.resolve(__dirname, '../src/modules')

const buildRoute = () => {
    console.log(
        klawSync(modsPath)
            .map(v => v.path)
            .map(v => path.relative(modsPath, v))
            .map(v => v.split(path.sep))
            .filter(v => v[1] === 'view')
            .filter(v => v[v.length - 1].indexOf('.page.vue') > 0)
            .map(v => v.filter((v, i) => i !== 1))
    )
}

chokidar.watch(modsPath)
    .on('add', buildRoute)
    .on('aunlinkdd', buildRoute)
