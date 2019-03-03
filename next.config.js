module.exports = {
    exportPathMap: async function (defaultPathMap) {
        return {
            '/': {page: '/'},
            '/cv': {page: '/cv'},
        }
    }
}
