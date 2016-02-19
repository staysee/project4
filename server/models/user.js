var mongoose = require('mongoose')
var Schema = mongoose.Schema
var bcrypt = require('bcrypt')


var userSchema = Schema({
  name             : {first: String,
                      last : String
                    },
  username         : { type: String, required: true, index: {unique: true}},
  email            : { type: String, require: true, index: {unique: true}},
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

  //generate hash
  bcrypt.hash(user.password, null, null, function (err, hash) {
    if (err) return next(err);

    //change password to hashed version
    user.password = hash;
    next();
  })
})

//compare given password with database hash
userSchema.methods.comparePassword = function (password) {
  var user = this;
  return bcrypt.compareSync(password, user.password);
}


var User = mongoose.model('User', userSchema)
module.exports = User
