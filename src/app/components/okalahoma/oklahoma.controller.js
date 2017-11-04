(function() {
    'use strict';
  
    angular
      .module('chatbox')
      .controller('OkController', Controller);
  
    /** @ngInject */
    function Controller($timeout, webDevTec, toastr) {
        //Change style of navigation bar
        $("side-bar").removeClass("brand-bar-style");
        $("side-bar").addClass("ok-bar-style");
        
    }
  })();