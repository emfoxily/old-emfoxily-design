const app = angular.module('modalApp', ['ngAnimate'])

app.controller('modalController', function() {

  this.modal = () => {
    this.showModal = !this.showModal
  }

})
