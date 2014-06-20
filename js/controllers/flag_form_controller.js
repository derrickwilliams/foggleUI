(function() {

  angular.module('foggle').controller('flagFormCtrl',
    function($scope, flagDataService, flagTypesService, $stateParams, $window, $location) {
      $scope.errorMessage = "";
      $scope.newFlag = addingFlag();

      if (!$scope.newFlag) {
        setTargetFlag();
      }
      else {
        $scope.name = getName();
        $scope.simpleValue = getSimpleValue();
        $scope.listTypeItems = getListTypeItems();
        $scope.selectedType = flagTypesService.types[0];
      }

      $scope.types = flagTypesService.types;
      $scope.setType = setType;
      $scope.isSimpleType = isSimpleType;
      $scope.typeSelected = typeSelected;
      $scope.addListItem = addListItem;
      $scope.removeListTypeItem = removeListTypeItem
      $scope.saveFlag = saveFlag

      function hasError() {
        return $scope.errorMessage.length > 0;
      }

      function setType(type) {
        $scope.selectedType = type;
      }

      function typeSelected() {
        return $scope.selectedType !== undefined;
      }

      function isSimpleType() {
        return flagTypesService.isSimple($scope.selectedType);
      }

      function addListItem() {
        $scope.listTypeItems.push({ key: '', value: '' });
      }

      function removeListTypeItem(index) {
        $scope.listTypeItems.splice(index, 1);
        if ($scope.listTypeItems.length == 0) {
          $scope.listTypeItems.push(defaultListItem());
        }
      }

      function defaultListItem() {
        return { key: '', value: '' };
      }

      function addingFlag() {
        return Object.keys($stateParams).length === 0;
      }

      function saveFlag() {
        var item;

        try {
          item = formatItem();
        }
        catch(e) {
          $scope.errorMessage = e.message;
          return;
        }

        try{
          if ($scope.newFlag) {
            flagDataService.addFlag(item);
          }
          else {
            flagDataService.updateFlag(item);
          }

          $location.path('/flags');
        }
        catch(e) {
          $scope.errorMessage = e.message;
          console.log('error', e);
        }
      }

      function formatItem() {

        var item = {
          name: $scope.name,
          type: $scope.selectedType,
          value: getValue()
        };

        return item;
      }

      function getValue() {
        if (!isSimpleType()) {
          return _.map($scope.listTypeItems, function(item) {
            return item.value;
          });
        }

        var
          type = $scope.selectedType,
          value = $scope.simpleValue;

        console.log('type', type, 'value', $scope.simpleValue);

        switch(type) {
          case 'boolean':
            if (value === 'true') return true;
            if (value === 'false') return false;
            throw new Error("Invalid boolean");
          case 'number':
            return parseInt(value, 10);
          default:
            return value
        }
      }

      function getName() {
        return "";
      }

      function getSimpleValue() {
        return "";
      }

      function getListTypeItems() {
        if ($scope.newFlag) return [defaultListItem()];
      }

      function setTargetFlag() {
        var target;

        try {
          target = flagDataService.get($stateParams.name);
          $scope.name = target.name;
          $scope.selectedType = target.type;
          setValue(target);
        }
        catch(e) {
          console.log('error', e);
          $location.path('/flags');
        }
      }

      function setValue(target) {
        if (isSimpleType()) {
          $scope.simpleValue = target.value;
        }
        else {
          $scope.listTypeItems = _.map(target.value, function(item) {
            return {
              key: '',
              value: item
            }
          })
        }
      }
    }


  );

})();