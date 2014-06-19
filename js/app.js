(function() {
  fLog = function() {

    console.log.apply(console, arguments);

  };

  var app = angular.module('foggle', ['ui.router', 'foggle.Templates']);

  app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

    var states = {
      open: {
        name: 'openFile',
        url: '/',
        templateUrl: 'open.html',
        controller: 'openCtrl'
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
        templateUrl: 'form.html'
      }
    };


    $stateProvider.state(states.open);
    $stateProvider.state(states.list);
    $stateProvider.state(states.form);

  }]);

})();