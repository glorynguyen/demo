(function() {
  'use strict';

  angular
    .module('chatbox')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
