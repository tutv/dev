/**
 * Load configs.
 */
const pathConfig = process.env.NODE_ENV === 'production' ? 'production.env' : 'dev.env'
require('dotenv').config({
    path: pathConfig
})

/**
 * Run app.
 */
setTimeout(async () => {
    await require('./src/app').run()
}, 0)

