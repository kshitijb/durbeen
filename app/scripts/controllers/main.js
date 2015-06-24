'use strict';

/**
 * @ngdoc function
 * @name durbeenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the durbeenApp
 */
angular.module('durbeenApp')
  .controller('MainCtrl', function ($scope, imagedataService, amMoment, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.clusterName = ($routeParams.clusterName) ? $routeParams.clusterName : '';

    /**
     * The structure of dateWiseData will be like this
     *
     * [
     *   {
     *     date: '2015-02-06',
     *     totalCount: 102,
     *     results: [...]
     *   },
     *   ...
     * ]
     *
     * @type {Array}
     */
    $scope.dateWiseData = [];
    var currentDate, listingThreshold = 3, currentListings = 0;

    /**
     * Prepare date-wise objects for image results and
     * bucket them row-wise (3 items per row)
     *
     */
    var prepareImages = function (data) {
      var arr = data.results;
      currentDate = data.date;

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

      $scope.dateWiseData.push({totalCount: data.count, date: currentDate, results: rows});
      currentListings++;

      if (currentListings === listingThreshold)
        return;

      // Send the request for the previous date
      requestImagesForDate(moment(currentDate).subtract(1, 'days').format('DD-MM-YYYY'));
    };

    var requestImagesForDate = function (date) {
      if ($scope.clusterName) {
        imagedataService.getAllImages(date, $scope.clusterName)
        .then(function(res){
          prepareImages(res.data);
        });

        return;
      }

      imagedataService.getAllImages(date)
      .then(function(res){
        prepareImages(res.data);
      });
    };

    $scope.loadMoreData = function () {
      if ($scope.dateWiseData.length < 3)
        return;

      if (currentListings === 3) {
        currentListings = 0;
        requestImagesForDate(moment(currentDate).subtract(1, 'days').format('DD-MM-YYYY'));
      }
    }

    // Request data for today
    requestImagesForDate(moment(new Date()).format('DD-MM-YYYY'));
  });
