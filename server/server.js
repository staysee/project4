// Packages
var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/project4');
// mongoose.connect('mongodb://heroku_48wxpmg2:iejm1ovjfcj3t8cpp59f5emrde@ds039135.mongolab.com:39135/heroku_48wxpmg2');

var routes = require('./config/routes');

// Middlewares
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use('/', routes)

// Start Server
app.listen(3000);
console.log("Server starting...go to localhost:3000");
