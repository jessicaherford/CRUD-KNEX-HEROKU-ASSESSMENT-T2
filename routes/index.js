var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


router.get('/', function(req, res, next) {
  res.redirect('/posts');
});





module.exports = router;
