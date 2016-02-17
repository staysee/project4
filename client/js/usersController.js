angular.module('Project4')
    .controller('UsersController', UsersController)

UsersController.$inject = ['$http']

function UsersController ($http) {
  var vm = this;

  vm.user = {
    name: {first: "Stacey", last: "Ono"},
    username: "ssugiono",
    email: "stacey@gmail.com",
    password: "password",
    profile_image_url: "http://tinyurl.com/zdsxwl5",
    location: {city: "Pasadena", state: "CA", country: "USA"},
    category: {developer: "True", designer: "False"},
    links: {portfolio_url: "http://www.staceysugiono.com",
            linkedin_url: "https://www.linkedin.com/in/staceysugiono"},
            github_url: "https://github.com/staysee"}
  }


  var url = 'http://localhost:3000'
  vm.all = [];
  vm.createUser = createUser;
  vm.newUser = {};
  vm.updateUser = updateUser;
  vm.deleteUser = deleteUser;

  function allUsers () {
    $http.get(url + '/users/').then(function (data) {
      console.log(data)
    })
  }
  allUsers();

  function getUser (id) {
    $http.get(url + '/users/' + id).then(function (data) {

    })
  }

  //create a user
  function createUser (userData) {
    $http.post(url + '/users/', userData).then(function (data) {

    })
  }

  //update a user
  function updateUser (id, userData) {
    $http.put(url + '/users/' + id, userData).then(function (data) {

    })
  }

  //delete a user
  function deleteUser (id) {
    $http.delete(url + '/users/' + id).then(function (data) {

    })
  }

}
