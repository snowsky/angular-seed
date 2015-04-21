'use strict';

var cooking = angular.module('cooking', ['ngRoute', 'ngResource']);

cooking.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'pages/login.html',
    controller: 'CookingLoginCtrl'
  })
  .when('/products', {
    templateUrl: 'pages/products_test.html',
    controller: 'CookingProductsCtrl'
  })
  .when('/register', {
    templateUrl: 'index.html',
    controller: 'CookingRegisterCtrl'
  })
  .when('/register/:var', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  });
  $locationProvider.html5Mode(true);
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

var myhttp = {
    get: function (url) {
        var user =  {
            email: "a",
            password: "a"
        };
        return user;
    }
};

//cooking.controller('CookingLoginCtrl', ['$scope', '$log', '$resource', function ($scope, $log, $resource) {
cooking.controller('CookingLoginCtrl', ['$scope', '$log', '$resource', '$window', '$location', '$http', function ($scope, $log, $resource, $window, $location, $http) {
//cooking.controller('CookingLoginCtrl', ['$scope', '$log', function ($scope, $log) {
    $scope.login = function (email, password) {
        email = $scope.email;
        password = $scope.password;
        
        console.log(email + ' ' + password);
        
        var user = myhttp.get("");
        if (user.email === email && user.password === password) {
            $http.get('/products').
                success(function(data, status, headers, config) {
                    //url = encodeURIComponent($location.absUrl().replace("login", "products"));
                    //$window.location.replace($location.absUrl().replace("login", "products"));
                    console.log($location.absUrl());
                    //$window.location.replace("#/products");
                    //$window.location.href = '#/products';
                }).
                error(function(data, status, headers, config) {
                    console.log("Can not load the product page.");
                });
            //$window.location.href = $location.absUrl().replace("login", "products");
            //$location.path("products");
            //$window.location.href = '/app/pages/products.html';
            //$scope.$apply(function() { $location.path("#/products"); });
            //$scope.$apply(function() { $window.location.href = '#/products'; });
        } else {
            alert("Login incorrect!");
        }
    }
}]);

cooking.controller('CookingProductsCtrl', ['$scope', '$log', function($scope, $log) {

}]);

cooking.controller('mainController', ['$scope', '$log', function($scope, $log) {

}]);
