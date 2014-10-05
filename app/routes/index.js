var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  	res.render('index', { title: 'Ontour' });
});

router.get('/welcome', function(req, res) {
  	res.render('landing/welcome', { title: 'Ontour' });
});

router.get('/signin', function(req, res) {
  	res.render('landing/signin', { title: 'Ontour' });
});

router.get('/signup', function(req, res) {
  	res.render('landing/signup', { title: 'Ontour' });
});

router.get('/success', function(req, res) {
  	res.render('landing/success', { title: 'Ontour' });
});

router.get('/about', function(req, res) {
  	res.render('landing/about', { title: 'Ontour' });
});

module.exports = router;
