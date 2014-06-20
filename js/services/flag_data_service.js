(function() {

  angular.module('foggle').factory('flagDataService', function() {

    var
      flags;


    return {
      store: store,
      get: get
    };

    function store(data) {
      flags = data;
    }

    function get() {
      return flags;
    }

  });

})();