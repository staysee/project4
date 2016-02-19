var mongoose = require('mongoose')
var Schema = mongoose.Schema


var jobSchema = Schema({

  title         : String,
  description   : String,
  company       : String,
  link          : String,
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
var Job = mongoose.model('Job', jobSchema)
module.exports = Job;

