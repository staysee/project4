var User = require('../models/user');
var mongoose = require('mongoose');

module.exports = {

  // welcome: function (req, res, next) {
  //   res.send('Welcome to Project 4 Home Page')
  // },

  users: function (req, res, next) {
    User.find(function (err, users) {
      if(err) response.json({message: 'Could not find any users'})

      res.json({users: users});

    })
  },

  create: function (req, res, next) {
    var user = new User(req.body)

    user.save()
    res.send('created user')
  },

  one: function (req, res, next) {
    User.findById({_id: req.params.id}, function (err, user) {
      if(err) res.json({ message: 'Could not find user bc ' + err })

      res.json({ user: user })
    })
  },

  update: function (req, res, next) {
    User.findById({_id: req.params.id}, function (err, user){
      var keys = Object.keys(req.body)
        keys.forEach(function(key) {
          user[key] = req.body[key]
        })
      user.save()
    })
  res.send('user updated')
  },

  delete: function (req, res, next) {
    User.findOneAndRemove({_id: req.params.id }, req.body, function (err, user) {
      if(err) console.log(err)
      res.send('user deleted!')
      })
  }
}

