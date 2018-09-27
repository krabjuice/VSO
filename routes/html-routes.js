var db = require('../models');
var path = require('path');

module.exports = app => {
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, '../', 'public', 'build', 'index.html'));
	});
};