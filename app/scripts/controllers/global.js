'use strict';

/**
 * @ngdoc function
 * @name durbeenApp.controller:GlobalCtrl
 * @description
 * # GlobalCtrl
 * Controller of the durbeenApp
 */
angular.module('durbeenApp')
  .controller('GlobalCtrl', function ($scope, $location, loginService, $auth) {
  	$scope.isLoggedIn = loginService.isAuthenticated;
    $scope.login = function(){
    	loginService.authenticate('slack')
    	.then(function(){
    		loginService.isAuthenticated = $auth.isAuthenticated();
	    	$scope.isLoggedIn = loginService.isAuthenticated;
    	});
    };
    $scope.logout = function(){
    	loginService.logout();
    	loginService.isAuthenticated = $auth.isAuthenticated();
    	$scope.isLoggedIn = loginService.isAuthenticated;
    	if (!$scope.isLoggedIn){
    		$location.path('/login');
    	}
    };
  });
