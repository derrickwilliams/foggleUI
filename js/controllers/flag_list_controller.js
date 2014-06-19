(function() {

  var app = angular.module('foggle');

  app.controller('flagListCtrl', function($scope) {

    $scope.flags = [
      { name: 'MyFlag' }
    ];

  });

})();