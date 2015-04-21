'use strict';

var cooking = angular.module('cooking', ['ngRoute', 'ngCookies']);

cooking.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'main.html',
    controller: 'CookingLoginCtrl'
  })
  $routeProvider.when('/register', {
    templateUrl: 'cooking/main.html',
    controller: 'CookingRegisterCtrl'
  })
  .when('/register/:var', {
    templateUrl: 'cooking/main.html',
    controller: 'mainController'
  });
}]);

cooking.controller('CookingRegisterCtrl', ['$scope', '$log', function ($scope, $log) {
  $scope.users = [];

  $scope.addUser = function (user) {
    $scope.users.push(user);
  };
  $scope.resetUser = function (user) {
    user.name = '';
    user.password = '';
    user.email = '';
    console.log(user.name);
  };
}]);

cooking.controller('CookingLoginCtrl', ['$scope', '$log', function ($scope, $log) {
    $scope.login = function (user) {
        email = $scope.user.email;
        passowrd = $scope.user.password;
        console.log(email + ' ' + password);
    }
}]);

cooking.controller('mainController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
  $scope.var = $routeParams.var || "test";
  $log.main = "mainController";
  $log.info($log);
  $log.info($scope.var);
}]);
