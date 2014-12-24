var Event = require('../models/event'); 

module.exports.create = function(req, res) {
	var event = new Event(req.body);
	event.save();
}