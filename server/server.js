// Packages
var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var Promise = require('bluebird');

var config = require('./config');

//connect to database
var mongoose = Promise.promisifyAll(require('mongoose'));
mongoose.connect('mongodb://localhost:27017/project4');
// mongoose.connect('mongodb://heroku_vh0b46wh:sogalo3bqpc70bbcp3vt66a6f9@ds017248.mlab.com:17248/heroku_vh0b46wh');
// mongoose.connect(config.database);

var routes = require('./config/routes');

// Middlewares
app.use(cors());
app.use(logger('dev'));   //log all requests to console
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname + '../client'))

//Routes
app.use('/api', routes)


// Start Server
app.listen(config.port);
console.log("Server starting...go to port " + config.port);
