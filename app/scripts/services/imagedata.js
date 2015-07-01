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
    this.getAllImages = function (date, clusterName) {
      var url;

      if (clusterName){
        url = globalvars.backendBaseUrl+'api/filter/cluster/' + clusterName + '/' + date;
      }
      else{
        url = globalvars.backendBaseUrl+'api/all/' + date;
      }

    	var promise = $http.get(url, {cache: true})
		    .success(function(response){
		    	return response;
		    });
	    return promise;
    };
  }]);
