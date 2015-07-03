'use strict';

/**
 * @ngdoc directive
 * @name durbeenApp.directive:imageOnLoad
 * @description
 * # imageOnLoad
 */
angular.module('durbeenApp')
  .directive('imageOnLoad', function () {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.bind('load', function() {
				//call the function that was passed
				scope.$apply(attrs.imageOnLoad);
			});
		}
	}
});