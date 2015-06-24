'use strict';

/**
 * @ngdoc service
 * @name durbeenApp.prototype
 * @description
 * # prototype
 * Service in the durbeenApp.
 */
angular.module('durbeenApp')
  .service('prototypeService', ['$http', 'global.variables', function ($http, globalVars) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getPrototypes = function(){
    	var promise = $http.get(globalVars.backendBaseUrl+'api/prototypes')
    		.success(function(response){
    			return response;
    		});
    	return promise;
    };
  }]);
