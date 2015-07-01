'use strict';

/**
 * @ngdoc service
 * @name durbeenApp.imagedata
 * @description
 * # imagedata
 * Service in the durbeenApp.
 */
angular.module('durbeenApp')
  .service('imagedataService',function ($http, globalVars) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getAllImages = function (date, clusterName, page) {
      var url;
      if (!page)
        page = 1;

      if (clusterName)
        url = globalVars.backendBaseUrl+'api/filter/cluster/' + clusterName + '/' + date + '?page=' + page
      else
        url = globalVars.backendBaseUrl+'api/all/' + date + '?page=' + page

    	var promise = $http.get(url, {cache: true})
		    .success(function(response){
		    	return response;
		    });
	    return promise;
    };
  });
