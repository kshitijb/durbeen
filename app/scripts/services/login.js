'use strict';

/**
 * @ngdoc service
 * @name durbeenApp.login
 * @description
 * # login
 * Service in the durbeenApp.
 */
angular.module('durbeenApp')
  .service('loginService', function ($auth) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.authenticate = function(provider){
    	return $auth.authenticate(provider);
    };
    this.logout = function(){
    	$auth.logout();
    };
    this.isAuthenticated = $auth.isAuthenticated();
  });
