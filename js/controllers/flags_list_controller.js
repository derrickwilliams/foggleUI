(function() {

  var app = angular.module('foggle');

  app.controller('flagListCtrl', function($scope, flagDataService) {

    $scope.searchTerm = '';

    $scope.allFlags = $scope.flags = flagDataService.get();

    $scope.filterFlags = filterFlags;

    function filterFlags() {
      if ($scope.searchTerm.length == 0) {
        $scope.flags = $scope.allFlags;
      }
      else {
        var exp = new RegExp($scope.searchTerm, 'i');

        $scope.flags = _.filter($scope.allFlags, function(f) {
          return f.name.search(exp) > -1;
        });
      }
    }

  });

})();