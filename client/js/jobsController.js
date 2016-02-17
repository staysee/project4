angular.module('Project4')
    .controller('JobsController', JobsController)

function JobsController() {
  var vm = this;

  vm.jobPost = {
    title      : "Full Stack Developer - Ruby on Rails",
    description: "Looking for a talented and passionate full-stack Developer to join our project team. The system utilized AngularJS for its front-end and is a single-page application communicating with a Ruby on Rails API.",
    company    : "ABC Company",
    link       : "http//www.abc.com",
    type       : "job post",
    schedule   : "contract",
    position   : "developer",
    contact    : { name: "John Smith", phone: "323-123-4567", email: "johnsmith@abc.com",
                  location: { city: "Los Angeles", state: "CA", country: "USA" }
                }
  }

}
