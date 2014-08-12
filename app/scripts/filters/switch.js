'use strict';

/**
 * @ngdoc filter
 * @name testApp.filter:switch
 * @function
 * @description
 * # switch
 * Filter in the testApp.
 */
angular.module('testApp')
  .filter('switch', function () {
    return function (input) {
      console.log(input);
      return input == 1? '结束': '开始';
    };
  });
