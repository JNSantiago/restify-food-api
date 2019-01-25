const errors = require('restify-errors')
const Restaurant = require('./../models/restaurant')

const restaurantRoutes = (server) => {
    server.get('/restaurants', (req, res, next) => {
		Restaurant.find()
			.then(restaurants => {
				res.send(restaurants)
				next()
			})
			.catch(next)
	})

	server.get('/restaurants/:id', (req, res, next) => {

	})

	server.post('/restaurants', (req, res, next) => {
		let restaurant = new Restaurant(req.body)
		restaurant.save()
			.then(response => {
				res.send(response)
				next()
			}).catch(err => {
				console.log(err)
				next()
			})
	})
	
	server.del('/restaurants/:id', (req, res, next) => {

	})

	server.get('/restaurants/:id/menu', (req, res, next) => {
		Restaurant.findById(req.params.id, "+menu")
			.then(response => {
				if(!response) {
					next()
				}else {
					res.json(response.menu)
					return next()
				}
			}).catch(next)
	})

	server.put('/restaurants/:id/menu', (req, res, next) => {
		Restaurant.findById(req.params.id)
			.then(response => {
				if(!response) {
					next()
				}else {
					response.menu = req.body
					response.save()
					res.json(response.menu)
					return next()
				}
			}).catch(next)
	})
}

module.exports = restaurantRoutes