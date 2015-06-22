'use strict';

/**
 * @ngdoc function
 * @name durbeenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the durbeenApp
 */
angular.module('durbeenApp')
  .controller('MainCtrl', function ($scope, imagedataService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getAllImages = function(){
    	imagedataService.getAllImages()
	    .then(function(res){
	    	$scope.imageData = res.data.results;
	    });
    };
  });
// I’m working from home today. I’ve a doctor’s appointment. So, in case anything happens, keep me updated. Thanks