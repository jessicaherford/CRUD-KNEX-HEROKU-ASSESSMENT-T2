var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Comments(){
  return knex('comments');
}

router.get('/', function(req, res, next) {
  res.redirect('/comments');
});

router.get('/', function(req, res, next) {
  Posts().select().then(function (comments) {
    res.json({'SUCCESS': comments });
  })
});

router.get('/:post_id/comments', function(req, res, next) {
  Comments().where('post_id', req.params.post_id).then(function (comments) {
    res.json({'SUCCESS': comments });
  })
});

router.post('/:post_id/comments', function(req, res, next) {
  Comments().where('post_id', req.params.post_id).insert(req.body).then(function(post){
    res.redirect('/posts/'+req.params.post_id+'/comments');
  })
});

router.get('/:post_id/comments/:id/', function(req, res, next) {
  Comments().where('id', req.params.id).first().then(function (comments) {
    res.json({'SUCCESS': comments });
  })
});

router.post('/:post_id/comments/:id', function(req, res, next) {
  Comments().insert(req.body).then(function(comments){
    res.redirect('/posts/'+req.params.post_id+'/comments');
  })
});

router.post('/:post_id/comments/:id/delete', function(req, res, next) {
  Comments().where('id', req.params.id).del().then(function(posts){
    res.redirect('/posts/'+req.params.post_id+'/comments');
  })
});

// /posts/:post_id/comments/:id/delete'




module.exports = router;
