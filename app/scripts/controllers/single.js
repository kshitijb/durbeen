'use strict';

/**
 * @ngdoc function
 * @name durbeenApp.controller:SingleCtrl
 * @description
 * # SingleCtrl
 * Controller of the durbeenApp
 */
angular.module('durbeenApp')
  .controller('SingleCtrl', function ($scope, $routeParams, $location, imagedataService) {
    if (!$scope.isLoggedIn){
      $location.path('/login');
    }

    $scope.zoom = 50;
    $scope.data = {};
    $scope.screenId = ($routeParams.id) ? $routeParams.id : '';
    $scope.imageLoaded = false;

    imagedataService.getSingleImage($scope.screenId)
      .then(function(res){
        $scope.data = res.data;
      });

      return;
  });
