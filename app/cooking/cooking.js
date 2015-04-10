'use strict';

var cooking = angular.module('cooking', ['ngRoute']);

cooking.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'cooking/register.html',
    controller: 'CookingRegisterCtrl'
  });
}]);

cooking.controller('CookingRegisterCtrl', ['$scope', function ($scope) {
  $scope.users = [];

  $scope.addUser = function (user) {
    $scope.users.push(user);
  };
  $scope.showUser = function (user) {
//    users.forEach(
    console.log(user.name);
  };
}]);
