angular.module('Project4')
    .controller('GalleryController', GalleryController)

function GalleryController() {
  var vm = this;

  vm.galleryPost = {
    title: "Battleship",
    description: "A 2 player game in HTML, CSS, Javascript.",
    screenshots: ["http://tinyurl.com/hexzasu", "../assets/images/battleship.png"],
    link: "http://staysee.github.io/project-1/"
  }

}
