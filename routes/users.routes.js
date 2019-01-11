const errors = require('restify-errors')
const User = require('../models/user')

const userRoutes = (server) => {
	server.get('/users', (req, res, next) => {
		User.apiQuery(req.params, function(err, docs) {
			if (err) {
				console.error(err);
				return next(
					new errors.InvalidContentError(err.errors.name.message),
				)
			}

			res.send(docs)
			next()
		})
	})
	
	server.post('/users', (req, res, next) => {
		let data = req.body || {}

		let user = new User(data)
		user.save(function(err) {
			if (err) {
				console.error(err)
				return next(new errors.InternalError(err.message))
				next();
			}

			res.send(201);
			next();
		})
    })
}

module.exports = userRoutes