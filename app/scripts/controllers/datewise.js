'use strict';

/**
 * @ngdoc function
 * @name durbeenApp.controller:DateWiseCtrl
 * @description
 * # DatewiseCtrl
 * Controller of the durbeenApp
 */
angular.module('durbeenApp')
  .controller('DatewiseCtrl', function ($scope, $routeParams, imagedataService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.clusterName = ($routeParams.clusterName) ? $routeParams.clusterName : '';
    var selectedDate = $routeParams.date;

    $scope.selectedDate = moment(selectedDate, 'DD-MM-YYYY');
    $scope.imageData = [];
    $scope.currentPage = 1;
    $scope.hasMoreContent = false;

    var prepareImages = function (data) {
      var arr = data.results;
      if (!arr.length){
        return;
      }

      // Split result array into rows
      var rows = [], j = 0;

      for (var i = 1; i <= arr.length; i++) {
        if (!rows[j]){
          rows[j] = [];
        }

        rows[j].push(arr[i-1]);
        if (i % 3 === 0){
          j++;
        }
      }

      $scope.imageData = $scope.imageData.concat(rows);
    };

    var requestImagesForPage = function (page) {
      $scope.shouldShowLoader = true;
      if ($scope.clusterName) {
        imagedataService.getAllImages(selectedDate, $scope.clusterName, page)
        .then(function(res){
          prepareImages(res.data);
          $scope.shouldShowLoader = false;

          // check if more content is there
          if (res.data.next){
            $scope.hasMoreContent = true;
          }
          else{
            $scope.hasMoreContent = false;
          }
        });
      }

      else {
  	    imagedataService.getAllImages(selectedDate, '', page)
  	    .then(function(res){
  	      prepareImages(res.data);
          $scope.shouldShowLoader = false;

          // check if more content is there
          if (res.data.next){
            $scope.hasMoreContent = true;
          }
          else{
            $scope.hasMoreContent = false;
          }
  	    });
      }
    };

    $scope.increasePageNumber = function () {
      if ($scope.hasMoreContent) {
        $scope.currentPage++;

        requestImagesForPage($scope.currentPage);
        $scope.hasMoreContent = false;
      }
    };

    requestImagesForPage($scope.currentPage);

  });
