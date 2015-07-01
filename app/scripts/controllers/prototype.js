'use strict';

/**
 * @ngdoc function
 * @name durbeenApp.controller:PrototypeCtrl
 * @description
 * # PrototypeCtrl
 * Controller of the durbeenApp
 */
angular.module('durbeenApp')
  .controller('PrototypeCtrl', function ($scope, prototypeService, $sce, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log($scope.isLoggedIn);
    if (!$scope.isLoggedIn){
      $location.path('/login');
    }
    prototypeService.getPrototypes()
    .then(function(res){
    	$scope.prototypes = res.data.results;
    });
    $scope.trustSrc = function(src) {
	    return $sce.trustAsResourceUrl(src);
	};
  });
