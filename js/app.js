(function() {
  fLog = function() {

    console.log.apply(console, arguments);

  };

  var app = angular.module('foggle', ['ui.router', 'foggle.Templates']);

  app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider, flagDataService) {

      $urlRouterProvider.rule(function($injector, $location) {
        var flagData = $injector.get('flagDataService');
        if (flagData.get() === undefined) {
          $location.path('/').replace();
        }
      });

    var states = {
      open: {
        name: 'openFile',
        url: '/',
        templateUrl: 'open.html',
        controller: 'openCtrl'
      },

      'new': {
        name: 'new',
        url: '/flags/new',
        templateUrl: 'form.html',
        controller: 'flagFormCtrl'
      },

      list: {
        name: 'flagList',
        url: '/flags',
        templateUrl: 'list.html',
        controller: 'flagListCtrl'
      },

      form: {
        name: 'flagForm',
        url: '/flags/:name',
        templateUrl: 'form.html',
        controller: 'flagFormCtrl'
      }
    };


    $stateProvider.state(states.open);
    $stateProvider.state(states.new);
    $stateProvider.state(states.list);
    $stateProvider.state(states.form);

  }]);

})();