'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/activity_list.html',
                    controller: 'activityListCtrl'
                })

                .when('/activity_sign_up/:name', {
                    templateUrl: 'views/activity_sign_up.html',
                    controller: 'activitySignUpCtrl'
                })
                .when('/create_activity', {
                    templateUrl: 'views/create_activity.html',
                    controller: 'createActivityCtrl'
                })
                .when('/price_activity', {
                    templateUrl: 'views/price_activity.html',
                    controller: 'priceActivityCtrl'
                })
                .when('/price_list', {
                    templateUrl: 'views/price_list.html',
                    controller: 'priceListCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
