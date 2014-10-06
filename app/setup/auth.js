var LocalStrategy  = require('passport-local').Strategy;
var User = require('../models/user');

exports.authenticator = function() {
  return new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function(username, password,done){
    User.findOne({ username : username},function(err,user){
      return err 
        ? done(err)
        : user
          ? password === user.password
            ? done(null, user)
            : done(null, false, { message: 'Incorrect password.' })
          : done(null, false, { message: 'Incorrect username.' });
    });
  });
};

exports.serialize = function(user, done) {
  done(null, user.id);
};

exports.deserialize = function(id, done) {
  User.findById(id, function(err,user){
    err 
      ? done(err)
      : done(null,user);
  });
};