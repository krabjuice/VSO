var db = require('../models');

module.exports = app => {
	app.get('/api/users', (req, res) => {
		db['users'].findAll({}).then(dbUsers => {
			res.json(dbUsers);
		});
	});

	app.post('/api/submissions', (req, res) => {
		db['submissions'].create({
			username: req['body']['username'],
			telegram: req['body']['telegram'],
			selly: req['body']['selly'],
			proof: req['body']['proof']
		}).then(dbSubmissions => {
			res.json(dbSubmissions);
		});
	});
};