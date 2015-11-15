var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET vote page */
router.get('/vote', function(req,res) {
    res.render('vote', { title: 'And the Winner is...' });
});

module.exports = router;
