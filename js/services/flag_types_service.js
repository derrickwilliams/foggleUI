(function() {

  angular.module('foggle')
    .service('flagTypesService', function() {
      var
        types = ['string', 'number', 'list', 'boolean'],
        simpleTypes = ['string', 'number', 'boolean'];

      return {
        types: types,
        isSimple: function(type) {
          return simpleTypes.indexOf(type) > -1;
        }
      };

    });

})();