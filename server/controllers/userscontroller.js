var User = require('../models/user');
var mongoose = require('mongoose');

module.exports = {

  welcome: function (req, res, next) {
    res.send('Welcome to Project 4 Home Page')
  },

  users: function (req, res, next) {
    User.find(function (err, users) {
      if(err) response.json({message: 'Could not find any users'})

      res.json({users: users});

    })
  },

  create: function (req, res, next) {
    var user = new User(req.body)

    user.save(function (err) {
      if(err) res.json({ message: 'Could not create user b/c ' + error })

      res.json({ user: user})
    })
  }

  // create:

  // one:

  // update:

  // delete:
}

