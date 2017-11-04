(function() {
  'use strict';

  angular
    .module('chatbox')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    //Change style of navigation bar
    $("side-bar").removeClass("brand-bar-style");
    $("side-bar").removeClass("ok-bar-style");
  }
})();
