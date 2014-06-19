angular.module('foggle.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('form.html',
    "<a href=\"#/flags\">back to list</a><h1>form</h1>"
  );


  $templateCache.put('list.html',
    "<div class=\"flags-action-bar row\"><div class=\"col-xs-2\"><a class=\"btn btn-success btn-block\" href=\"#/flags/new\"><i class=\"glyphicon glyphicon-plus\"></i> Add</a></div><div class=\"col-xs-6 col-xs-offset-4\"><input type=\"text\" class=\"form-control col-xs-6\" placeholder=\"search by name\" ng-keyup=\"filterFlags()\" ng-model=\"searchTerm\"></div></div><ul class=\"list-group flags-list\"><li class=\"list-group-item\" ng-repeat=\"flag in flags\"><div class=\"row\"><div class=\"col-xs-8\"><a href=\"#/flags/{{flag.name}}\" class=\"flag-name\">{{flag.name}}</a></div><div class=\"col-xs-4 text-right\"><a class=\"btn btn-primary glyphicon glyphicon-pencil\" href=\"#/flags/{{flag.name}}\"></a> <a class=\"btn btn-danger glyphicon glyphicon-remove\" href=\"#/flags/delete/{{flag.name}}\"></a></div></div></li></ul>"
  );


  $templateCache.put('open.html',
    "<div class=\"open-file-panel text-center\"><button type=\"button\" class=\"open-file-btn btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-file\"></span> Load Your File</button></div>"
  );

}]);
