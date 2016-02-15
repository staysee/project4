var User = require('../models/user');
var mongoose = require('mongoose');

module.exports = {

  welcome: function (req, res) {
    res.send('Welcome to Project 4 Home Page')
  },

  all: function (req, res) {
    res.json({ message: 'get al users here'})
  }
}
