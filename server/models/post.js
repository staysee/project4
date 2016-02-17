var mongoose = require('mongoose')
var Schema = mongoose.Schema


var postSchema = Schema({
  title         : String,
  description   : String,
  screenshots   : [String],
  link          : String
});

var Post = mongoose.model('Post', postSchema)
module.exports = Post

