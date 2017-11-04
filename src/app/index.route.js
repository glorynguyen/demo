(function() {
  'use strict';

  angular
    .module('chatbox')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('brand-design', {
        url: '/brand-design',
        templateUrl: 'app/components/brand-design/brand-design.html',
        controller: 'BrandController',
        controllerAs: 'main'
      })
      .state('oklahoma', {
        url: '/oklahoma',
        templateUrl: 'app/components/okalahoma/okalahoma.html',
        controller: 'OkController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
