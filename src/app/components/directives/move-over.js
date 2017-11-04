(function() {
    'use strict';
  
    angular
    .module('chatbox')
    .directive('moveOver', moveOver);
  /** @ngInject */
  function moveOver($timeout) {
    function link(scope, element, attrs) {
        if (element && element.mouseover) {
          //Handle move over
          element.mouseover(function(){
             //Find item back ground fade and change opacity value
             itemHover(this,true);
          });
          //Handle move out
          element.mouseout(function(){
            //Find item back ground fade and change opacity value
            itemHover(this,false);
         });
        }

        function itemHover(me,isHover) {
          var opacityOverlayValue = (isHover) ? 0.85 : 0,
              opacityText = (isHover) ? 1 : 0,
              transformText = (isHover) ? "scale(1)" : "scale(0.9)",
              transformImage = (isHover) ? "scale(1.05, 1.05)" : "scale(1)",
              overlay = me.querySelector(".item-overlay"),
              image = me.querySelector("img"),
              text = me.querySelector(".text");
          //Find item back ground fade and change opacity value
          if (overlay) {
            $(overlay).css("opacity",opacityOverlayValue);
          }
          //Find and update text
          if (text) {
            $(text).css({"opacity" : opacityText ,transform: transformText});
          }
          //Find and update image
          if (image) {
            $(image).css({transform: transformImage});
          }
        }
    }
    return {
      link: link
    };
  }
  
  })();
  