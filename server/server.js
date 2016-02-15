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

var routes = require('./config/routes');

// Middlewares
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(routes);

// Start Server
app.listen(3000);
console.log("Server starting...go to localhost:3000");
