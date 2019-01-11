const routes = (server) => {
    server.get('/', async (req, res, next) => {
        res.send('Olá')
        next()
    })
}

module.exports = routes