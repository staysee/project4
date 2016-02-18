angular.module('Project4')
  .factory('JobPosts', JobPostsService)

function JobPostsService() {
  return {
    jobPosts: [
      { title      : "Full Stack Developer - Ruby on Rails",
        description: "Talented and smart people only.",
        company    : "ABC Company",
        link       : "http//www.abc.com",
        type       : "job post",
        schedule   : "contract",
        position   : "developer",
        contact    : { name: "John Smith", phone: "323-123-4567", email: "johnsmith@abc.com",
                      location: { city: "Los Angeles", state: "CA", country: "USA" }
                    }
      },
      { title      : "Front-End Developer",
        description: "Skilled",
        company    : "Cookie Co.",
        schedule   : "Full-Time"
      },
      { title      : "Back-End Developer",
        description: "10 years",
        company    : "Table Top",
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
      { title      : "Front-End Developer",
        description: "Skilled",
        company    : "Cookie Co.",
        schedule   : "Contract"
      }
    ],

    addJobPost: function (jobPosts) {
    if(!this.title || this.title ==='') {return;}
      this.jobPosts.push({
        title: this.title,
        description: this.description,
        company: this.company,
        schedule: this.schedule
      })
    this.title='';
    this.description='';
    this.company='';
    this.schedule='';
  }

  }
}

