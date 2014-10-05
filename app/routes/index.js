var express = require('express'),
	router = express.Router(),
	requireTree = require('require-tree'),
	controllers = requireTree('../controllers');

router.get('/', controllers.render('index'));
router.get('/welcome', controllers.render('landing/welcome'));
router.get('/signin', controllers.render('landing/signin'));
router.get('/signup', controllers.render('landing/signup'));
router.get('/success', controllers.render('landing/success'));
router.get('/about', controllers.render('landing/about'));

module.exports = router;
