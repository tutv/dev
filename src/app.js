const express = require('express')
const next = require('next')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({
    dev,
    dir: __dirname
})
const handle = nextApp.getRequestHandler()
const PORT = process.env.PORT || 9000

exports.run = async () => {
    try {
        await nextApp.prepare()
        const app = express()

        app.disable('x-powered-by')
        app.set('trust proxy', 1)
        app.use(compression())
        app.use(express.static(__dirname + '/static'))

        app.get('*', (req, res) => {
            return handle(req, res)
        })

        setTimeout(async () => {
            app.listen(PORT, err => {
                if (err) throw err
                console.log(`> Ready on http://localhost:${PORT}`)
            })
        }, 0)
    } catch (error) {
        console.error(error)

        process.exit(1)
    }
}

