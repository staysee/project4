angular.module('Project4', [])
  .controller('MainController', MainController)

function MainController($rootScope, $location, Auth) {
  var vm = this;

  vm.loggedIn = Auth.isLoggedIn();  //get info if person is logged in

  $rootScope.$on('$routeChangeStart', function() {    //checks if use is logged in on every request
    vm.loggedIn = Auth.isLoggedIn();

    Auth.getUser()                  //get use info on route change
      .success(function(data) {
        vm.user = data
      })
  })

  //function to handle login form
  vm.doLogin = function() {
    Auth.login(vm.loginData.username, vm.loginData.password)  //call Auth.login() function
      .succes(function(data) {
                              //if user successfully logins
        $location.path('/users')  //redirect to users page
      })
  }

  //function to handle logout
  vm.doLogout = function() {
    Auth.logout();
    //reset all user info
    vm.user = ();
    $location.path('/login')
  }

})
