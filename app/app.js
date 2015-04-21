'use strict';

var cooking = angular.module('cooking', ['ngRoute', 'ngResource']);

cooking.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'pages/login.html',
            controller: 'CookingLoginCtrl'
        })
        .when('/products', {
            templateUrl: 'pages/products.html',
            controller: 'CookingProductsCtrl'
        })
        .when('/signup', {
            templateUrl: 'index.html',
            controller: 'CookingSignupCtrl'
        })
        .when('/register/:var', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .otherwise({
            redirectTo: '/login'
        });
    //$locationProvider.html5Mode(true);
}]);

cooking.controller('CookingSignupCtrl', ['$scope', '$log', function ($scope, $log) {
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
        var user = {
            email: "a",
            password: "a"
        };
        return user;
    }
};

cooking.controller('CookingLoginCtrl', ['$scope', '$resource', '$window', '$http', function ($scope, $resource, $window, $http) {
    $scope.login = function (email, password) {
        email = $scope.email;
        password = $scope.password;

        console.log(email + ' ' + password);

        var user_api = myhttp.get("");
        if (user_api.email === email && user_api.password === password) {
            $http.get('#/products').
            success(function (data, status, headers, config) {
                $window.location.href = '#/products';
            }).
            error(function (data, status, headers, config) {
                console.log("Can not load the product page.");
            });
        } else {
            alert("Login incorrect!");
        }
    }
}]);

cooking.controller('CookingProductsCtrl', ['$scope', '$log', function ($scope, $log) {

}]);

cooking.controller('mainController', ['$scope', '$log', function ($scope, $log) {

}]);