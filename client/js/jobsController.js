angular.module('Project4')
    .controller('JobsController', JobsController)

function JobsController(JobPosts, $http) {
  var vm = this;
  var url = 'http://localhost:3000/api'

  vm.all = [];
  vm.jobPosts = JobPosts.jobPosts;
  vm.addJobPost = JobPosts.addJobPost;

  function jobPosts () {
    $http.get(url + '/posts/')
        .then(function (data) {
          vm.all = data.data.posts
          console.log(data)
        })
  }
  jobPosts();
}
