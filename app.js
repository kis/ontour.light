var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    passport = require('passport'),
    flash = require('connect-flash'),
    path = require('path'),

    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    
    configDB = require('./app/config/database.js');

mongoose.connect(configDB.url);

require('./app/config/passport')(passport);

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./app/routes.js')(app, passport);

app.listen(port);