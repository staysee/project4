angular.module('Project4')
    .controller('JobsController', JobsController)

function JobsController(JobPosts, $http) {
  var vm = this;
  var url = 'http://localhost:3000/api'

  vm.jobPosts = JobPosts.jobPosts;
  vm.addJobPost = JobPosts.addJobPost;

  function jobPosts () {
    $http.get(url + '/posts/')
        .then(function (data) {
          JobPosts.jobPosts = data.data.posts
          vm.jobPosts = JobPosts.jobPosts
          console.log(data)
        })
  }
  jobPosts();
}
