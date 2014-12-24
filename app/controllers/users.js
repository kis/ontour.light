var User = require('../models/user');

var passwordHash = require('password-hash'),
	  passport = require('passport'),
    winston = require('winston');

module.exports.login = function(req, res, next) {
  winston.log('111');

  passport.authenticate('local-login',
    function(err, user, info) {
      return err 
        ? next(err)
        : user
          ? req.logIn(user, function(err) {
              return err
                ? next(err)
                : res.redirect('/private');
            })
          : res.redirect('/');
    }
  )(req, res, next);
};

module.exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports.register = function(req, res, next) {
  console.log(req.body);
  var user = new User({ email: req.body.email, password: req.body.password});
  user.save(function(err) {
    return err
      ? next(err)
      : req.logIn(user, function(err) {
        return err
          ? next(err)
          : res.redirect('/private');
      });
  });
};