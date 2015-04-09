'use strict';

var cooking = angular.module('cooking', ['ngRoute']);

cooking.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'cooking/register.html',
    controller: 'CookingRegisterCtrl'
  });
}]);

cooking.controller('CookingRegisterCtrl', ['$scope', function ($scope) {

  var mysql = require('mysql');
  var connection = mysql.createConnection({
  	host: "localhost",
  	user: "root",
  	password: "root",
  	database: "cooking"
  });
  connection.connect(function(err) {
    if(err) {
      console.log("Problem with MySQL : " + err);
    } else {
      console.log("Connected with Database : ");
    }
  });


  //  connection.query("SELECT * from user_info", function(err, rows) {
  $scope.addUser = function (user) {
    $scope.user = user;
    console.log(user.name);
    connection.query("insert into user_info value(user.name, user.password, user.email)", function(err, rows) {
      if(err) {
        console.log("Problem with MySQL : " + err);
      } else {
        console.log("Connected with Database : ");
      }
    });
  };
  $scope.showUser = function (user) {
    connection.query("SELECT * from user_info", function(err, rows) {
      $scope.users = rows;
    });
  };
}]);
