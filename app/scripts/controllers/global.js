'use strict';

/**
 * @ngdoc function
 * @name durbeenApp.controller:GlobalCtrl
 * @description
 * # GlobalCtrl
 * Controller of the durbeenApp
 */
angular.module('durbeenApp')
  .controller('GlobalCtrl', function ($scope, $location, loginService) {
  	$scope.isLoggedIn = loginService.isAuthenticated;
    $scope.login = function(provide){
    	loginService.authenticate(provide);
    	$scope.isLoggedIn = loginService.isAuthenticated;
    };
    $scope.logout = function(){
    	loginService.logout();
    	$scope.isLoggedIn = loginService.isAuthenticated;
    	$location.path('/');
    };
  });
