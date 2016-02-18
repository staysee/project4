var mongoose = require('mongoose')
var Schema = mongoose.Schema


var userSchema = Schema({
  name             : {first: String,
                      last : String
                    },
  username         : String,
  email            : String,
  password         : String,
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
  // jobPosts   : [{ type: Schema.Types.ObjectId, ref: 'Job' }]

});

var User = mongoose.model('User', userSchema)
module.exports = User
