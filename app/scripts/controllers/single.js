'use strict';

/**
 * @ngdoc function
 * @name durbeenApp.controller:SingleCtrl
 * @description
 * # SingleCtrl
 * Controller of the durbeenApp
 */
angular.module('durbeenApp')
  .controller('SingleCtrl', function ($scope, $routeParams, imagedataService) {
    if (!$scope.isLoggedIn){
      $location.path('/login');
    }

    $scope.data = {};
    $scope.screenId = ($routeParams.id) ? $routeParams.id : '';
    $scope.shouldShowLoader = true;

    imagedataService.getSingleImage($scope.screenId)
      .then(function(res){
        $scope.shouldShowLoader = false;
        $scope.data = res.data;
      });

      return;
  });
