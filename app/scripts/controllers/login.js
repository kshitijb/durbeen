'use strict';

/**
 * @ngdoc function
 * @name durbeenApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the durbeenApp
 */
angular.module('durbeenApp')
  .controller('LoginCtrl', function ($scope, loginService, $location) {
    $scope.isLoggedIn = loginService.isAuthenticated;
    if ($scope.isLoggedIn){
    	$location.path('/');
    }
  });
