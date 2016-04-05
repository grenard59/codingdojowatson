var express   =   require('express');
var watson    =   require('watson-developer-cloud')

var constants =   require('./../config/constants.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', {response : {}});
});

router.post('/', function(req, res, next) {

  // TODO : WATSON HERE

  var response  = {
    test: ''
  };
  res.send('index.ejs', { response: response });
});

module.exports = router;
