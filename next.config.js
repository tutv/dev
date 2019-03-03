const fs = require('fs')
const {join} = require('path')
const {promisify} = require('util')
const copyFile = promisify(fs.copyFile)

module.exports = {
    exportPathMap: async function (defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
        if (dev) {
            return defaultPathMap
        }

        await copyFile(join(dir, 'static', 'robots.txt'), join(outDir, 'robots.txt'))

        return {
            '/': {page: '/'},
            '/cv': {page: '/cv'},
        }
    }
}
