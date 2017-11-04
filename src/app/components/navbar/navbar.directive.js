(function() {
  'use strict';

  angular
    .module('chatbox')
    .directive('sideBar', sideBar);
  /** @ngInject */
  function sideBar($timeout,$state) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'main',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this, commonMessage = "This feature is in development, please select another one";

      vm.messageList = [];
      vm.showDirection = false;
      vm.setShowDirection = setShowDirection;
      vm.directionClick = directionClick;
      vm.showDirectionWork = false;
      vm.directionWorkClick = directionWorkClick;
      vm.maximunMessage = 3;
      vm.listKeepCurrent = ['brand-center'];
      vm.listState = [{
        title: "Advertising",
        key: "adv"
      },{
        title: "Branding & Design",
        key: "brand",
        direction: [{
          title: "The Center for Children and Families",
          key: "brand-center"
        },{
          title: "1st Okalahoma homes",
          key: "brand-okalahoma"
        }]
      },{
        title: "Digitar Marketing",
        key: "marketing"
      },{
        title: "Graphic Design",
        key: "graphic"
      }];
      //List item for direction tell me more
      vm.directionTellMeMoreItems = [];
      //Clone list item direction
      angular.copy(vm.listState,vm.directionTellMeMoreItems);
      addMessage("Hello, this is Tom.", false, 1000, function(){
        addMessage("Welcome to Freestyle", false, 1200,function() {
          addMessage("Should I tell more about us or do you want to...", false, 1500, function(){
            $timeout(vm.setShowDirection,500);
          })
        })
      });
  
      /**
       * Handle add message
       * @param {*} message 
       * @param {*} isThey the flag to identify which message is of customer (true for customer, false for system)
       * @param {*} timeout timeout of message to be waiting to show
       * @param {*} callback function call after message showed
       */
      function addMessage(message, isThey, timeout, callback) {
        var timeout = timeout || 0;
  
        var item = {
          message: "...",
          isThey: isThey
        };
        //Add empty message
        vm.messageList.push(item);
        $timeout(function() {
          item.message = message;
          //Remove first chat item if number of messages greater than maximun config
          if (vm.messageList.length > vm.maximunMessage) {
            vm.messageList.shift();
          }
          //Call callback function if any
          if (callback) {
            callback();
          }
        },timeout);
      }
      
      /**
       * Show direction element
       */
      function setShowDirection() {
        vm.showDirection = true;
      }
  
      /**
       * Redirect target frame to url
       * @param {*} url 
       */
      function goTo(url) {
        var frame = $("#targetFrame");
        if (frame.length > 0) {
          frame.attr('src', url);
        }
      }
  
      /**
       * Return to main direction
       */
      function returnToMainDirection() {
        $timeout(vm.setShowDirection,500);
        // addMessage("Should I tell more about us or do you want to be", false, 1000, function(){$timeout(vm.setShowDirection,500);});
      }
  
      /**
       * Handle click direction to redirect new state
       * @param {any} type type of direction
       */
      function directionClick(type) {
        switch(type) {
          case 'tell':
            //Add message
            vm.messageList.push({
              message: 'Tell me more',
              isThey: true
            });
            //Remove first chat item
            vm.messageList.shift();
            //Hide direction
            vm.showDirection = false;
            //Add next message
            addMessage("Which category would you like to check out?", false, 1000, function(){
              vm.showDirectionWork = true;
            });
            break;
          case 'contact': 
            //Add message
            addMessage("Contact me", true, 0);
            //Hide direction
            vm.showDirection = false;
            // Redirect iframe to work zone
            goTo("http://www.freestyleokc.com/contact/#post-3974");
            //Show message directed contact
            addMessage("Please send us a request.", false, 1500,function(){$timeout(returnToMainDirection,500)});
            break;
        }
      }
  
      /**
       * Redirect work
       * @param {*} type 
       */
      function directionWorkClick(type) {
        if (type && type.key) {
          switch (type.key) {
            case 'brand':
              //Add message
              addMessage(type.title, true);
              //Go to brand state
              $state.go("brand-design");
              break;
            case 'adv':
            case 'marketing':
            case 'graphic':
            case 'brand-center':
              //Add message
              addMessage(type.title, true, 0, function() {
                addMessage(commonMessage, false, 1000);
              });
              break;
            case 'brand-okalahoma':
              //Add message
              addMessage(type.title, true);

              //Hide direction work
              vm.showDirectionWork = false;

              //Go to Oklahoma state
              $state.go("oklahoma");
    
              //Show message directed photo
              addMessage("Welcome to our 1st Oklahoma Home pages!", false, 1500,function() {$timeout(returnToMainDirection,500)});
              break;
          }

          //Update direction by lookup in list state then update
          if (type.direction) {
            vm.directionTellMeMoreItems = type.direction;
          } else {
            //If not direction here and it's not in list keep current, reset directionTellMeMoreItems
            if (!vm.listKeepCurrent.includes(type.key)) {
              angular.copy(vm.listState,vm.directionTellMeMoreItems);
            }
          }
        } else {
          console.log("Not found type of your selected item");
        }
      }
    }
  }

})();
