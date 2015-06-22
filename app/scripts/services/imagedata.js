'use strict';

/**
 * @ngdoc service
 * @name durbeenApp.imagedata
 * @description
 * # imagedata
 * Service in the durbeenApp.
 */
angular.module('durbeenApp')
  .service('imagedataService',['$http', 'global.variables', function ($http, globalvars) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getAllImages = function(){
    	var promise = $http.get(globalvars.backendBaseUrl+'api/all')
		    .success(function(response){
		    	return response;
		    });
	    return promise;
    };
  }]);
