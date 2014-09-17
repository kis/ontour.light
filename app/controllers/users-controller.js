var User = require('../models/user');

var passwordHash = require('password-hash');

module.exports.create = function(req, res) {
	var user = new User(req.body);
	user.password = passwordHash.generate(req.body.password);
	user['password-repeat'] = passwordHash.generate(req.body['password-repeat']);

	user.save(function(err, result) {
		if (err) return console.error(err);
  		res.redirect('/success');
	});
}