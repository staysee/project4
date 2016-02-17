angular.module('Project4', ['ui.router', 'uiRouterStyles'])
    .config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "templates/home.html"
    })
    .state('gallery', {
      url: "/gallery",
      templateUrl: "templates/gallery.html",
      controller: "GalleryController",
      controllerAs: "vm"
    })
    .state('hiring', {
      url: "/hiring",
      templateUrl: "templates/hiring.html",
      controller: "JobsController",
      controllerAs: "vm",
      data: {css: ["assets/css/hiring.css"]}
    })

    $urlRouterProvider.otherwise("/")
}
