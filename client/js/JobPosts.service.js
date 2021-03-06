angular.module('Project4')
  .factory('JobPosts', JobPostsService)

function JobPostsService($http) {
  return {
    jobPosts: [
      { title      : "Ruby on Rails Developer",
        description: "Smart people only.",
        company    : "Gemstone",
        link       : "http//www.gem.com",
        type       : "job post",
        schedule   : "contract",
        position   : "developer",
        contact    : { name: "John Smith", phone: "323-123-4567", email: "johnsmith@abc.com",
                      location: { city: "Los Angeles", state: "CA", country: "USA" }
                    }
      },
      { title      : "Front-End Developer",
        description: "Skilled",
        company    : "Cookies Co.",
        schedule   : "Full-Time"
      },
      { title      : "Back-End Developer",
        description: "10 years",
        company    : "Apple Tree, Inc.",
        schedule   : "Contract"
      },
      { title      : "Full Stack Developer",
        description: "No experience necessary",
        company    : "Google",
        schedule   : "Contract"
      },
      { title      : "Genius Developer",
        description: "Super skilled. Super smart.",
        company    : "Top Secret",
        schedule   : "Full-Time"
      },
      { title      : "Super Star Developer",
        description: "Must know every programming language.",
        company    : "Super Duper",
        schedule   : "Full-Time"
      },
      { title      : "Game Developer",
        description: "Great Pay. Good life. Just play games all day!",
        company    : "Blizzard",
        schedule   : "Full Time"
      },
      {
        title      : "Ninja Programmer",
        description: "Must be a Google search master. Free food. Free beers.",
        company    : "N/A",
        schedule   : "Full Time"
      }

    ],

    addJobPost: function () {
      if(!this.company || this.company ==='') {return;}
      var jobPost = {
        company: this.company,
        title: this.title,
        description: this.description,
        schedule: this.schedule
      }
      this.jobPosts.push(jobPost)
      $http.post(URI + 'posts', {job: jobPost}).then(function (data) {
        console.log("JOB POST DATA: ", data)
      }, function (err) {
        if (err) console.log("Post Error: ", err)
      })

      this.title='';
      this.description='';
      this.company='';
      this.schedule='';
    }

  }

}

