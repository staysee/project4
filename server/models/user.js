var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Promise = require('bluebird')
var bcrypt = Promise.promisifyAll(require('../node_modules/bcrypt'))


var userSchema = Schema({
  name             : String,
  username         : { type: String, required: true, index: {unique: true}},
  email            : { type: String, required: true, index: {unique: true}},
  password         : { type: String, required: true, select: false },
  profile_image_url: String,
  location         : {city   : String,
                      state  : String,
                      country: String
                    },
  category: String,
  links   : { portfolio_url: String,
              linkedin_url : String,
              github_url   : String
          }
  // posts   : [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

//hash password before user is saved
userSchema.pre('save', function (next) {
  var user = this;

  //hash password only if password changed or is new
  if (!user.isModified('password')) return next();

  return bcrypt.genSaltAsync(10).then(function(result) {
    //generate hash

    return bcrypt.hashAsync(user.password, result).then(function(hash) {

      //change password to hashed version
      user.password = hash;
      next();
    })
  })
})

//compare given password with database hash
userSchema.methods.comparePasswordSync = function (candidatePassword) {
  var user = this;
  return bcrypt.compareSync(candidatePassword, user.password);
}


var User = mongoose.model('User', userSchema)
module.exports = User
