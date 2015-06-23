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

    /**
     * Prepare date-wise objects for image results and
     * bucket them row-wise (3 items per row)
     *
     */
    var prepareImages = function (data) {
      var arr = data.results,
        date = data.date;

      if (!arr.length)
        return;

      // Split result array into rows
      var rows = [], j = 0,
        condition = (arr.length > 6) ? 6 : arr.length;

      for (var i = 1; i <= condition; i++) {
        if (!rows[j])
          rows[j] = [];

        rows[j].push(arr[i-1]);
        if (i % 3 === 0)
          j++;
      }

      $scope.dateWiseData.push({totalCount: data.count, date: date, results: rows});

      // Send the request for the previous date
      requestImagesForDate(moment(date).subtract(1, 'days').format('DD-MM-YYYY'));
    };

    var requestImagesForDate = function (date) {
      imagedataService.getAllImages(date)
      .then(function(res){
        prepareImages(res.data);
      });
    }

    // Request data for today
    requestImagesForDate(moment(new Date()).format('DD-MM-YYYY'));
  });
