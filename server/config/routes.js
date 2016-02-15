var express = require('express');
var router = express.Router();
var usersController = require('../controllers/userscontroller');
var JobController = require('../controllers/jobscontroller');

router.route('/')
  .get(usersController.welcome)

router.route('/api')
  .get(usersController.all)


module.exports = router;
