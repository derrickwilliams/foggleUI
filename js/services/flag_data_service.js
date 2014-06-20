(function() {

  angular.module('foggle').factory('flagDataService', function() {

    var
      flags;

    return {
      store: store,
      get: get,
      addFlag: addFlag,
      updateFlag: updateFlag
    };

    function store(data) {
      flags = [];
      _.each(data, function(flagData, name) {
        flagData.name = name;
        flags.push(flagData);
      });
    }


    function addFlag(data) {
      // for file name first
      var found =  _.find(flags, function(f) {
        return f.name.toLowerCase() === data.name.toLowerCase();
      });

      if (found) {
        throw new Error('Flag: ' + found.name + ' already exists');
      }

      flags.push(data);
    }

    function updateFlag(data) {
      flags = _.map(flags, function(f) {
        if (data.name === f.name) {
          return data;
        }
        else {
          return f;
        }
      });
    }

    function get(name) {
      var single;

      if (!flags) {
        return undefined;
      }

      if(name) {
        single = _.find(flags, function(f) { return f.name === name })
        if(!single) {
          $location.path('/flags');
          return;
        }
        else {
          return single;
        }
      }
      else {
        return flags;
      }
    }

    function findByName(name) {

    }

  });

})();