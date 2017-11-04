(function() {
    'use strict';
  
    angular
      .module('chatbox')
      .controller('BrandController', Controller);
  
    /** @ngInject */
    function Controller($timeout, webDevTec, toastr) {
        //Change style of navigation bar
        $("side-bar").addClass("brand-bar-style");
        $("side-bar").removeClass("ok-bar-style");
    }
  })();
  