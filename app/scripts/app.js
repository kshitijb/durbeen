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
    .config(function($locationProvider, $routeProvider, $httpProvider, $authProvider, globalVars) {
        moment.locale('en', {
          calendar : {
            lastDay : '[Yesterday]',
            sameDay : '[Today]',
            nextDay : '[Tomorrow]',
            lastWeek : 'LL',
            nextWeek : 'LL',
            sameElse : 'LL'
          }
        });

        $locationProvider.html5Mode(true);

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
            .when('/single/:id', {
                templateUrl: 'views/single.html',
                controller: 'SingleCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $httpProvider.defaults.headers.common = {
            Accept: 'application/json'
        };

        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

        $authProvider.oauth2({
            name: 'slack',
            url: globalVars.backendBaseUrl + 'api/auth/slack',
            authorizationEndpoint: 'https://slack.com/oauth/authorize',
            team: 'T02U2EQAN',
            state: 'housing',
            clientId: '2954500362.7027853426',
            requiredUrlParams: ['state', 'team'],
            redirectUri: globalVars.prodRedirectUri
        });
        $authProvider.tokenPrefix = 'durbeen';
        $authProvider.logoutRedirect = '/login';

    }).run(function($rootScope, $location) {
        $rootScope.location = $location;
    })
    .constant('globalVars', {
        backendBaseUrl: BACKEND_PROD,
        devRedirectUri: 'http://127.0.0.1:9000',
        prodRedirectUri: 'http://durbeen.io',
    });