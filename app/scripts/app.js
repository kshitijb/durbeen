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
        'angularMoment',
        'infinite-scroll',
        'satellizer'
    ])
    .config(function($routeProvider, $httpProvider, $authProvider, globalVars) {
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
            .when('/login',{
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/datewise/:date', {
                templateUrl: 'views/datewise.html',
                controller: 'DatewiseCtrl'
            })
            .when('/prototypes', {
                templateUrl: 'views/prototype.html',
                controller: 'PrototypeCtrl'
            })
            .when('/cluster/:clusterName', {
                templateUrl: 'views/all.html',
                controller: 'MainCtrl'
            })
            .when('/cluster/:clusterName/datewise/:date', {
                templateUrl: 'views/datewise.html',
                controller: 'DatewiseCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $httpProvider.defaults.headers.common = {
            Accept: 'application/json',
        };

        $authProvider.oauth2({
            tokenName: 'token',
            url: globalVars.backendBaseUrl + 'auth/slack',
            authorizationEndpoint: 'https://slack.com/oauth/authorize',
            team: 'housing-d',
            state: 'housing',
            optionalUrlParams: ['team'],
            requiredUrlParams: ['state']
        });
        $authProvider.tokenPrefix = 'durbeen';

    }).run(function($rootScope, $location) {
        $rootScope.location = $location;
    })
    .constant('globalVars', {
        backendBaseUrl: BACKEND_DEV
    });