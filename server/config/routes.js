var express = require('express');
var router = express.Router();
var usersController = require('../controllers/userscontroller');
var JobController = require('../controllers/jobscontroller');


router.route('/')
    .get(usersController.welcome)


module.exports = router;
