var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var usersController = require('../controllers/userscontroller');


// router.route('/')
//   .get(usersController.welcome)

router.route('/users')
  .get(usersController.users)     //GET all users
  .post(usersController.create) //POST a new user

router.route('/users/:id')
  .get(usersController.one)     //GET one specific user
  .patch(usersController.update)//PATCH update existing user
  .delete(usersController.delete)//DELETE remove user from DB

//Catchall Route
//Send users to FRONT END (must come after API routes)
router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '../../../client/index.html'))
})

module.exports = router;
