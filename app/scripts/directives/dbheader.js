'use strict';

/**
 * @ngdoc directive
 * @name durbeenApp.directive:dbheader
 * @description
 * # dbheader
 */
angular.module('durbeenApp')
  .directive('dbheader', function () {
    return {
      templateUrl: 'views/header.html',
      restrict: 'E'
    };
  });
