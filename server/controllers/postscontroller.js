var Post = require('../models/post');
var mongoose = require('mongoose');

module.exports = {

  posts: function (req, res, next) {
    Post.find({}, function(err, jobs){
      res.json({posts: posts})
    })
  },

  create: function (req, res, next) {
    var post = new Post(req.body)

    post.save(function (err) {
      if(err) res.json({ message: 'Could not create a job post b/c ' + err })

      res.json({ post: post})
    })
  },

  one: function (req, res, next) {
    Post.findById({_id: req.params.id}, function (err, post) {
      if(err) res.json({ message: 'Could not find post bc ' + err })

      res.json({ post: post })
    })
  },

  update: function (req, res, next) {
    Post.findById({_id: req.params.id}, function (err, post){
      var keys = Object.keys(req.body)
        keys.forEach(function(key) {
          post[key] = req.body[key]
        })
      post.save()
    })
  res.send('post updated')
  },

  delete: function (req, res, next) {
    Post.findOneAndRemove({_id: req.params.id }, req.body, function (err, post) {
      if(err) console.log(err)
      res.send('post deleted!')
      })
  }
}

