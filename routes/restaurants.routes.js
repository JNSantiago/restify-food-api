const errors = require('restify-errors')

const restaurantRoutes = (server) => {
    server.get('/restaurants', (req, res, next) => {
		res.send('listagem de restaurantes')
		next()
	})
}

module.exports = restaurantRoutes