var Job = require('../models/job');
var mongoose = require('mongoose');

module.exports = {

  jobs: function (req, res, next) {
    Job.find({}, function(err, jobs){
      res.json({jobs: jobs})
    })
  },

  create: function (req, res, next) {
    var job = new Job(req.body)

    job.save(function (err) {
      if(err) res.json({ message: 'Could not create a job post b/c ' + err })

      res.json({ job: job})
    })
  },

  one: function (req, res, next) {
    Job.findById({_id: req.params.id}, function (err, job) {
      if(err) res.json({ message: 'Could not find job bc ' + err })

      res.json({ job: job })
    })
  },

  update: function (req, res, next) {
    Job.findById({_id: req.params.id}, function (err, job){
      var keys = Object.keys(req.body)
        keys.forEach(function(key) {
          job[key] = req.body[key]
        })
      job.save()
    })
  res.send('job post updated')
  },

  delete: function (req, res, next) {
    Job.findOneAndRemove({_id: req.params.id }, req.body, function (err, job) {
      if(err) console.log(err)
      res.send('job post deleted!')
      })
  }
}

