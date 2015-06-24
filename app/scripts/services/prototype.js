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
    	var promise = $http.get('http://127.0.0.1:8000/'+'api/prototype')
    		.success(function(response){
    			return response;
    		});
    	return promise;
    };
  }]);
