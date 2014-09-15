var express = require('express');
var router = express.Router();

var usersController = require('../controllers/users-controller');

/* GET users listing. */
router.get('/', function(req, res) {
	res.send('respond with a resource');
});

router.post('/api/users', usersController.create);

module.exports = router;
