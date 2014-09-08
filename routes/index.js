var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/welcome', function(req, res) {
  res.render('welcome', { title: 'Ontour.im | Music Trip Planner' });
});

module.exports = router;
