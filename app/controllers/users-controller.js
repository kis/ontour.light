var User = require('../models/user'); 

module.exports.create = function(req, res) {
	var user = new User(req.body);
	user.save();
}