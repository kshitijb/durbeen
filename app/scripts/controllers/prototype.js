'use strict';

/**
 * @ngdoc function
 * @name durbeenApp.controller:PrototypeCtrl
 * @description
 * # PrototypeCtrl
 * Controller of the durbeenApp
 */
angular.module('durbeenApp')
  .controller('PrototypeCtrl', function ($scope, prototypeService, $sce) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    prototypeService.getPrototypes()
    .then(function(res){
    	$scope.prototypes = res.data.results;
    });
    $scope.trustSrc = function(src) {
	    return $sce.trustAsResourceUrl(src);
	};
  });
