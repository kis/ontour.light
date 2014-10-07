var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	'email': {
	    type: String,
	    // unique: true,
		required: true
	},
	'login': {
	    type: String,
	    // unique: true,
		required: false
	},
	'password': {
    	type: String,
    	required: true
  	}
});