angular.module('Project4')
    .controller('JobsController', JobsController)

function JobsController(JobPosts, $http) {
  var vm = this;

  vm.jobPosts = JobPosts.jobPosts;
  vm.addJobPost = JobPosts.addJobPost;

  function jobPosts () {
    $http.get(URI + 'posts/')
        .then(function (data) {
          JobPosts.jobPosts = data.data.posts
          vm.jobPosts = JobPosts.jobPosts
          console.log(data)
        })
  }
  jobPosts();
}
