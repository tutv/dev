const fs = require('fs')
const {join} = require('path')
const {promisify} = require('util')
const copyFile = promisify(fs.copyFile)
const withSass = require('@zeit/next-sass')

module.exports = withSass({
    exportPathMap: async function (defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
        if (dev) {
            return defaultPathMap
        }

        await copyFile(join(dir, 'static', 'robots.txt'), join(outDir, 'robots.txt'))
        await copyFile(join(dir, 'static', 'sitemap.xml'), join(outDir, 'sitemap.xml'))

        return {
            '/': {page: '/'},
            '/cv': {page: '/cv'},
            '/hs': {page: '/hs'},
        }
    }
})
