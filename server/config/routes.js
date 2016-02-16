var express = require('express');
var router = express.Router();
var usersController = require('../controllers/userscontroller');
var JobController = require('../controllers/jobscontroller');

router.route('/')
  .get(usersController.welcome)

router.route('/users')
  .get(usersController.users)     //GET all users
  .post(usersController.create) //POST a new user

// router.route('/users/:id')
//   .get(usersController.one)     //GET one specific user
//   .patch(usersController.update)//PATCH update existing user
//   .delete(usersController.delete)//DELETE remove user from DB


module.exports = router;
