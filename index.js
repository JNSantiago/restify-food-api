const config = require('./config')
const restify = require('restify')
const mongoose = require('mongoose')
const restifyPlugins = require('restify-plugins')
const path = require('path')

const server = restify.createServer({
	name: config.name,
	version: config.version,
})

server.use(restifyPlugins.jsonBodyParser({ mapParams: false }));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser({ mapParams: true }));
server.use(restifyPlugins.fullResponse());

server.listen(config.port, () => {
	mongoose.Promise = global.Promise;
	mongoose.connect(config.db.uri);

	const db = mongoose.connection;

	db.on('error', (err) => {
	    console.error(err);
	    process.exit(1);
	});

	db.once('open', () => {
		require('./routes')(server, path.join(__dirname, './routes'))
	    console.log(`Server is listening on port ${config.port}`);
	});
});