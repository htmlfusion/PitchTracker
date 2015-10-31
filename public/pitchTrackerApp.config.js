(function() {
  'use strict';

  angular
  .module('pitchTrackerApp')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('home', {
        url: '/',
        template: '<h1>Test</h1>',
        controller: 'Home',
        controllerAs: 'vm'
      })     

  });
})();