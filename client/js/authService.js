angular.module('Project4', [])
//=========================================
// auth factory to login and get info,
// inject $http for communicating with API
// inject $q to return promise objects
// inject AuthToken to manage tokens
//=========================================
.factory('Auth', function ($http, $q, AuthToken) {

  var authFactory = {};   //create auth factory object

  authFactory.login = function(username, password) {    //login user
    //return promise object and its data
    return $http.post('http://localhost:3000/api/authenticate', {
      username: username,
      password: password
    })
    .success(function(data) {
      AuthToken.settoken(data.token)
      return data
    })
  }

  authFactory.logout = function() {   //logout user by clearing token
    AuthToken.setToken()              //clear token
  }

  authFactory.isLoggedIn = function() {   //check if user is logged in
    if (AuthToken.getToken())
      return true
    else
      return false
  }

  authFactory.getUser = function() {      //get logged in user info
    if (AuthToken.getToken())             //returns cached info, if none - makes API call
      return $http.get('http://localhost3000/api/me', { cache: true })
    else
      return $q.reject({ message: 'User has no token.' })
  }

  return authFactory;     //return auth factory object
})

//=========================================
//factory for handling tokens
//inject $window to store token client-side
//=========================================
.factory('AuthToken', function($window) {

  var authTokenFactory = {};

  authTokenFactory.getToken = function() {      //get token out of local storage
    return $window.localStorage.getItem('token')
  };

  //set or clear token -- if token pass, set token
  //if no token, clear it from storage
  authTokenFactory.setToken = function(token) {
    if (token)
      $window.localStorage.setItem('token', token)
    else
      $window.localStorage.removeItem('token')
  }
  return authTokenFactory;
})

//=========================================
//application config to integreate token into requests
//=========================================
.factory('AuthInterceptor', function($q, AuthToken) {

  var interceptorFactory = {};

  interceptorFactory.request = function(config) {   //attach token to every request
    var token = AuthToken.getToken();               //grab token

    if (token)                                  //if token exists add to
      config.headers['x-access-token'] = token; // header as x-access-token

    return config
  }

  interceptorFactory.responseError = function(response) { //return errors from server as a promise
    if (response.status == 403) {
      AuthToken.setToken()
      $location.path('/login')
    }
    return $q.reject(response)
  }
  return interceptorFactory
})
