(function() {

  var app = angular.module('foggle', ['ui.router', 'foggle.Templates']);

  app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      // $routeProvider
      //   .when('/', {
      //     templateUrl: 'templates/list.html'
      //   })
      //   .when('/flag/:name', {
      //     templateUrl: 'templates/form.html'
      //   })
      //   .otherwise({
      //     redirectTo: ''
      //   });

  console.log('here we are');

    var states = {
      list: {
        name: 'flagList',
        url: '/',
        templateUrl: 'list.html',
        controller: 'flagListCtrl'
      },

      form: {
        name: 'flagForm',
        url: '/flag/:name',
        templateUrl: 'form.html'
      }
    };

    $stateProvider.state(states.list);
    $stateProvider.state(states.form);

  }]);

})();