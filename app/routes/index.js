var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  	res.render('index', { title: 'Express' });
});

router.get('/welcome', function(req, res) {
  	res.render('welcome', { title: 'Express' });
});

module.exports = router;
