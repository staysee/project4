const URI = 'http://localhost:3000/api/';
// const URI = 'http://postit-project.herokuapp.com/api/';

angular.module('Project4', ['ui.router', 'uiRouterStyles'])
    .config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "templates/home.html",
      data: {css: ["assets/css/main.css"]}
    })
    // GALLERY //
    .state('gallery', {
      url: "/gallery",
      templateUrl: "templates/gallery.html",
      controller: "GalleryController",
      controllerAs: "vm",
      data: {css: ["assets/css/gallery.css"]}
    })
    // JOB BOARD //
    .state('hiring', {
      url: "/hiring",
      templateUrl: "templates/hiring.html",
      controller: "JobsController",
      controllerAs: "vm",
      data: {css: ["assets/css/hiring.css"]}
    })
    // PROFILES //
    .state('profiles', {
      url: "/profiles",
      templateUrl: "templates/profiles.html",
      controller: "UsersController",
      controllerAs: "vm",
      data: {css: ["assets/css/profiles.css"]}
    })
    .state('profiles.detail', {
      url: "/:id",
      templateUrl: "templates/profile-detail.html",
      controller: "UsersController",
      controllerAs: "vm",
      data: {css: ["assets/css/profile-detail.css"]}
    })

    $urlRouterProvider.otherwise("/")
}
