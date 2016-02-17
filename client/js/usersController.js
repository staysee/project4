angular.module('Project4')
    .controller('UsersController', UsersController)

UsersController.$inject = ['$http']

function UsersController ($http) {
  var url = 'http://localhost:3000'
  var vm = this;
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
