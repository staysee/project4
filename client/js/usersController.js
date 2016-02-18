angular.module('Project4')
    .controller('UsersController', UsersController)

UsersController.$inject = ['$http']

function UsersController ($http, $stateParams, $state) {
  var vm = this

  vm.user = {
    name: {first: "S", last: "S"},
    username: "ssugiono",
    email: "stacey@gmail.com",
    password: "password",
    profile_image_url: "http://tinyurl.com/zdsxwl5",
    location: {city: "Pasadena", state: "CA", country: "USA"},
    category: "developer",
    links: {portfolio_url: "http://www.staceysugiono.com",
            linkedin_url: "https://www.linkedin.com/in/staceysugiono",
            github_url: "https://github.com/staysee"}
  }


  var url = 'http://localhost:3000/api'
  vm.all = [];
  vm.createUser = createUser;
  vm.newUser = {};
  vm.getUser = getUser;
  vm.updateUser = updateUser;
  vm.deleteUser = deleteUser;
  vm.user = {};
  function allUsers () {
    $http.get(url + '/users/')
          .then(function (data) {
            vm.all = data.data.users;
      // console.log(data)
    })
  }
  allUsers();

  function getUser (user) {
    $http.get(url + '/users/' + user._id)
      .then(function(data){
        console.log(data)
          vm.user = data.data.user
      }, function (err) {
        console.log(err)
      })
    }
    // getUser()
    // $state.go('profiles.detail', {'id': user._id})



  //create a user
  function createUser (userData) {
    $http.post(url + '/users/', userData).then(function (data) {
      console.log(data)
    })
  }

  //update a user
  function updateUser (id, userData) {
    $http.put(url + '/users/' + id, userData).then(function (data) {
      console.log(data)
    })
  }

  //delete a user
  function deleteUser (id) {
    $http.delete(url + '/users/' + id).then(function (data) {
      console.log(data)
    })
  }

  function showUser (user) {
    vm.getUser(user)
  }

}
