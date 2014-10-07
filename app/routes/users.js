var express = require('express');
var router = express.Router();

var usersController = require('../controllers/users-controller');

/* GET users listing. */
router.get('/', function(req, res) {
	res.send('respond with a resource');
});

router.post('/login', usersController.login);
router.get('/logout', usersController.logout);
router.post('/register',  usersController.register);

module.exports = router;
