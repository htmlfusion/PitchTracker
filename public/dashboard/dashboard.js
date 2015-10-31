(function() {
  'use strict';

  angular
    .module('pitchTrackerApp')
    .controller('Dashboard', Dashboard);

    Dashboard.$inject = [];

    function Dashboard() {
      console.log('this is working');
    }
})();