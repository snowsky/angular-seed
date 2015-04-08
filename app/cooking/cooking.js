'use strict';

angular.module('myApp.cooking', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cooking', {
    templateUrl: 'cooking/cooking.html',
    controller: 'CookingCtrl'
  });
}])

.controller('CookingCtrl', function ($scope) {
  $scope.addUser = function (user) {
    console.log(user.name);
  };
});

