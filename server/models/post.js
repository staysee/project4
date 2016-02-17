var mongoose = require('mongoose')
var Schema = mongoose.Schema


var postSchema = Schema({

  title         : String,
  description   : String,
  screenshots   : [String],
  link          : String,
  type          : String,   //gallery post or job post
  completed     : Boolean,  //finished proj or in-progress
  schedule      : String,   //fulltime or contract?
  position      : String,   //developer/designer etc
  contact       : { name: String,
                    phone: String,
                    email: String,
                    location: { city: String,
                                state: String,
                                country: String
                              }
                  }

});

var Post = mongoose.model('Post', postSchema)
module.exports = Post

