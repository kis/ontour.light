var	requireTree = require('require-tree'),
	controllers = requireTree('controllers');

// app/routes.js
module.exports = function(app, passport) {

	app.get('/', controllers.render('index'));
	app.get('/welcome', controllers.render('landing/welcome'));
	app.get('/signin', controllers.render('landing/signin'));
	app.get('/signup', controllers.render('landing/signup'));
	app.get('/success', controllers.render('landing/success'));
	app.get('/about', controllers.render('landing/about'));

	app.post('/register', passport.authenticate('local-signup', {
		successRedirect : '/success', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/', // redirect to the secure profile section
		failureRedirect : '/signin', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	/*router.post('/login', usersController.login);
	router.get('/logout', usersController.logout);
	router.post('/register',  usersController.register);*/

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on 
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
