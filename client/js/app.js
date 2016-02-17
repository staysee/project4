angular.module('Project4', ['ui.router'])
    .config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "templates/home.html"
    })
    .state('gallery', {
      url: "/gallery",
      templateUrl: "templates/gallery.html"
    })

    $urlRouterProvider.otherwise("/")
}
