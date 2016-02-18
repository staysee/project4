angular.module('Project4')
    .controller('JobsController', JobsController)

function JobsController(JobPosts) {
  var vm = this;

  vm.jobPosts = JobPosts.jobPosts;
  vm.addJobPost = JobPosts.addJobPost;


}
