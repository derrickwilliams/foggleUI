(function() {

  var app = angular.module('foggle', ['ui.router']);

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
        template: '<h1>list</h1>' +
          '<ul>' +
            '<li ng-repeat="flag in flags">' +
              '<a href="#/flag/{{flag.name}}">{{flag.name}}</a>' +
            '</li>' +
          '</ul>',
        controller: 'flagListCtrl'
      },

      form: {
        name: 'flagForm',
        url: '/flag/:name',
        template: '<h1>form</h1>'
      }
    };

    $stateProvider.state(states.list);
    $stateProvider.state(states.form);

  }]);

})();