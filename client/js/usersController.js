angular.module('Project4')
    .controller('UsersController', UsersController)

UsersController.$inject = ['$http']

function UsersController ($http) {
  var vm = this;
  vm.all = [];
  vm.createUser = createUser;
  vm.newUser = {};
  vm.updateUser = updateUser;
  vm.deleteUser = deleteUser;

  function allUsers () {
    return $http.get('/users/')
  }

  function getUser (id) {
    return $http.get('/users/' + id)
  }

  //create a user
  function createUser (userData) {
    return $http.post('/users/', userData)
  }

  //update a user
  function updateUser (id, userData) {
    return $http.put('/users/' + id, userData)
  }

  //delete a user
  function deleteUser (id) {
    return $http.delete('/users/' + id)
  }

}
