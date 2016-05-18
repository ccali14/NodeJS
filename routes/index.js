var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/wup', function(req, res, next) {
  res.render('index', {title: 'What\'s up bro'});
});

router.get('/thx', function (req, res) {
  res.render('index', {title: 'Thx dude.'});
});

module.exports = router;
