'use strict';

/**
 * @ngdoc filter
 * @name testApp.filter:number
 * @function
 * @description
 * # number
 * Filter in the testApp.
 */
angular.module('testApp')
  .filter('number', function () {
    return function (input) {
      return input.length;
    };
  });
