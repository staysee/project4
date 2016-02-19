var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var usersController = require('../controllers/userscontroller');
var postsController = require('../controllers/postscontroller');


// router.route('/')
//   .get(usersController.welcome)

router.route('/authenticate')
  .post(usersController.authenticate)

router.route('/users')
  .get(usersController.users)     //GET all users
  .post(usersController.create) //POST a new user

router.route('/users/:id')
  .get(usersController.one)     //GET one specific user
  .patch(usersController.update)//PATCH update existing user
  .delete(usersController.delete)//DELETE remove user from DB


router.route('/posts')
  .get(postsController.posts)     //GET all posts
  .post(postsController.create)  //POST a new post

router.route('/posts/:id')
  .get(postsController.one)      //GET one specific post
  .patch(postsController.update) //PATCH update exisiting post
  .delete(postsController.delete)//DELETE remove a post from DB

//Catchall Route
//Send users to FRONT END (must come after API routes)
router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '../../../client/index.html'))
})

module.exports = router;
