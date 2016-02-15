var User = require('../models/user');
var mongoose = require('mongoose');

module.exports = {
    welcome: function (req, res, next) {
      res.render('welcome')
    }
};

