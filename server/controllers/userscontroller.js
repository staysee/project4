var User = require('../models/user');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var superSecret = 'thissecretissuperdupersecret'


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

    user.save(function (err) {
      if (err) {
        console.log("user save error: ", err)
      } else {
        res.send('created user')
      }
    })
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
  },

  authenticate: function (req, res) {
    //find user. select name username password explicitly
    User.findOne({
      username: req.body.username
    }).select('name username password').exec(function (err, user) {
      if (err) throw err;
      //no user with that username found
      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found'})
      } else if (user) {
        //check if password matches
        var validPassword = user.comparePasswordSync(req.body.password);

        if (!validPassword) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.'})
        } else {
          //if user found, password right. create token
          var token = jwt.sign({
            name: user.name,
            username: user.username
          }, superSecret, {
            expiresinMinutes: 1440  //expires in 24 hours
          })

          //return the info including token as JSON
          res.json({
            succes: true,
            message: 'Enjoy your token!',
            token: token
          });
        }
      }
    })
  }

}

