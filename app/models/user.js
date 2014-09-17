var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	'email': String,
	'login': String,
	'password': String,
	'password-repeat': String
});