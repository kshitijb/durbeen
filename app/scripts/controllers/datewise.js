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

    var selectedDate = $routeParams.date;
    $scope.imageData = [];

    var prepareImages = function (data) {
      var arr = data.results;
      if (!arr.length)
        return;

      // Split result array into rows
      var rows = [], j = 0;

      for (var i = 1; i <= arr.length; i++) {
        if (!rows[j])
          rows[j] = [];

        rows[j].push(arr[i-1]);
        if (i % 3 === 0)
          j++;
      }

      $scope.imageData = rows;
      console.log($scope.imageData);
    };

    imagedataService.getAllImages(selectedDate)
    .then(function(res){
      prepareImages(res.data);
    });


  });
