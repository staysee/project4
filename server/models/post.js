var mongoose = require('mongoose')
var Schema = mongoose.Schema


var postSchema = Schema({
  job     :{
            title         : String,
            company       : String,
            description   : String,
            link          : String,
            schedule      : String,   //fulltime or contract?
            position      : String,   //developer/designer
            contact       : { name: String,
                              phone: String,
                              email: String,
                              location: { city: String,
                                          state: String,
                                          country: String
                                        }
                            }
  },
  gallery :{
            title         : String,
            description   : String,
            screenshots   : [String],
            link          : String,
  }

});

var Post = mongoose.model('Post', postSchema)
module.exports = Post
