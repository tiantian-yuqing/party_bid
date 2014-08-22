'use strict';

angular.module('testApp')
    .controller('activityListCtrl', function ($scope, $location){
        var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
        if (activity_object == ""){
            $location.path('/create_activity');
        }

      $scope.go_create_activity = function(){
          $location.path('/create_activity');
      };
      $scope.go_activity_sign_up = function(activity_name){
          $location.path('/activity_sign_up/' + activity_name);
      };
      $scope.change_color = function(activity_name){
        if(activity_name.state == 1){
           return "activity-color";
        }
      };

      $scope.activity_list = _.keys(activity_object) ;


    });
