var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	'email': {
	    type: String,
	    unique: true,
		required: true
	},
	'login': {
	    type: String,
	    unique: true,
		required: true
	},
	'password': {
    	type: String,
    	required: true
  	}
});