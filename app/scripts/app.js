'use strict';

/**
 * @ngdoc overview
 * @name durbeenApp
 * @description
 * # durbeenApp
 *
 * Main module of the application.
 */
angular
    .module('durbeenApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'angularMoment'
    ])
    .config(function($routeProvider, $httpProvider) {

        moment.locale('en', {
          calendar : {
            lastDay : '[Yesterday]',
            sameDay : '[Today]',
            nextDay : '[Tomorrow]',
            lastWeek : '[last] dddd',
            nextWeek : 'dddd',
            sameElse : 'LL'
          }
        });

        $routeProvider
            .when('/', {
                templateUrl: 'views/all.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/datewise/:date', {
                templateUrl: 'views/datewise.html',
                controller: 'DatewiseCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $httpProvider.defaults.headers.common = {
            Accept: 'application/json',
        };
    })
    .constant('global.variables', {
        backendBaseUrl: 'http://128.199.247.181:8000/'
    });