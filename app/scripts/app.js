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
  //.config(function ($routeProvider) {
   // $routeProvider
      //.when('/', {
     //   templateUrl: 'views/main.html',
      //  controller: 'MainCtrl'
     // })
     // .when('/about', {
     //   templateUrl: 'views/about.html',
     //   controller: 'AboutCtrl'
    //  })
     // .otherwise({
      //  redirectTo: '/'
    //  });
 // });

        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/create_activity.html',
                    controller: 'createActivityCtrl'
                })

                .when('/activity_sign_up', {
                    templateUrl: 'views/activity_sign_up.html',
                    controller: 'activitySignUpCtrl'
                })
                .when('/activity_list', {
                    templateUrl: 'views/activity_list.html',
                    controller: 'activityListCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });

