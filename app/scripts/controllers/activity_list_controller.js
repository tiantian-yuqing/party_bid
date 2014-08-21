'use strict';

angular.module('testApp')
    .controller('activityListCtrl', function ($scope, $location){
      $scope.go_create_activity = function(){
          $location.path('/create_activity');
      }










    });
