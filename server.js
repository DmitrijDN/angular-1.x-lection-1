var path = require('path'),
	express = require('express'),
	staticPath = path.normalize(__dirname),
	app = express(),
	server = app.listen(3060);

app.use(express.static(staticPath));

module.exports = app;