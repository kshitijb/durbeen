'use strict';

/**
 * @ngdoc function
 * @name durbeenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the durbeenApp
 */
angular.module('durbeenApp')
  .controller('MainCtrl', function ($scope, imagedataService, amMoment) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var prepareImages = function (arr) {
      console.log(amMoment);
      // Split result array into rows
      var rows = [], j = 0;

      for (var i = 1; i <= arr.length; i++) {
        if (!rows[j])
          rows[j] = [];

        rows[j].push(arr[i]);
        if (i % 3 === 0)
          j++;
      }

      $scope.imageData = rows;
    };

  	imagedataService.getAllImages()
    .then(function(res){
      prepareImages(res.data.results);
      console.log(res.data.results);
    });
  });
