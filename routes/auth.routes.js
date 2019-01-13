const errors = require('restify-errors')
const User = require('../models/user')

const authRoutes = (server) => {
	server.get('/authenticate', (req, res, next) => {
		res.send('autenticação')
		next()
	})
}

module.exports = authRoutes