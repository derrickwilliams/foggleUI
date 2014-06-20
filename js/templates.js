angular.module('foggle.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('form.html',
    "<a class=\"btn btn-primary\" href=\"#/flags\"><i class=\"glyphicon glyphicon-chevron-left\"></i> back to list</a><p class=\"alert alert-danger error-message\" ng-show=\"errorMessage\">{{errorMessage}}</p><form class=\"form flag-form\" name=\"flagForm\"><div class=\"form-group\"><label class=\"control-label\" for=\"name\">Name:</label><input type=\"text\" class=\"form-control\" ng-model=\"name\"></div><ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\"><li ng-repeat=\"type in types\"><a href=\"#\">{{type}}</a></li></ul><div class=\"form-group\"><label class=\"control-label\" for=\"type\">Type:</label><br><div class=\"btn-group type-selector\"><button type=\"button\" class=\"btn btn-default selected-type-display\">{{selectedType}}</button> <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></button><ul class=\"dropdown-menu type-selector-items\"><li ng-repeat=\"type in types\"><a href=\"\" ng-click=\"setType(type)\">{{type}}</a></li></ul></div></div><div class=\"form-group\"><label class=\"control-label\" for=\"\">Value:</label><input class=\"form-control\" type=\"text\" ng-show=\"isSimpleType()\" ng-model=\"simpleValue\"><div class=\"list-type-items\" ng-show=\"!isSimpleType()\"><div class=\"list-type-item\" ng-repeat=\"listItem in listTypeItems\"><div class=\"row\"><div class=\"col-xs-11\"><input type=\"text\" class=\"form-control\" ng-model=\"listItem.value\"></div><div class=\"col-xs-1\"><button class=\"btn btn-danger btn-block\" ng-click=\"removeListTypeItem($index)\"><i class=\"glyphicon glyphicon-minus\"></i></button></div></div></div><div><button class=\"btn btn-success add-list-item-btn\" ng-click=\"addListItem()\"><i class=\"glyphicon glyphicon-plus\"></i></button></div></div><div class=\"form-group\"><button class=\"btn btn-success btn-block save-btn\" ng-click=\"saveFlag()\">Save</button></div></div></form>"
  );


  $templateCache.put('list.html',
    "<div class=\"flags-action-bar row\"><div class=\"col-xs-2\"><a class=\"btn btn-success btn-block\" href=\"#/flags/new\"><i class=\"glyphicon glyphicon-plus\"></i> Add</a></div><div class=\"col-xs-6 col-xs-offset-4\"><input type=\"text\" class=\"form-control col-xs-6\" placeholder=\"search by name\" ng-keyup=\"filterFlags()\" ng-model=\"searchTerm\"></div></div><ul class=\"list-group flags-list\"><li class=\"list-group-item\" ng-repeat=\"flag in flags\"><div class=\"row\"><div class=\"col-xs-8\"><a href=\"#/flags/{{flag.name}}\" class=\"flag-name\">{{flag.name}}</a></div><div class=\"col-xs-4 text-right\"><a class=\"btn btn-primary glyphicon glyphicon-pencil\" href=\"#/flags/{{flag.name}}\"></a> <a class=\"btn btn-danger glyphicon glyphicon-remove\" href=\"#/flags/delete/{{flag.name}}\"></a></div></div></li></ul>"
  );


  $templateCache.put('open.html',
    "<div class=\"open-file-panel text-center\"><button type=\"button\" class=\"open-file-btn btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-file\"></span> Load Your File</button></div>"
  );

}]);
