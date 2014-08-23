'use strict';

angular.module('testApp')
    .controller('activityListCtrl', function ($scope, $location){
      var activity_object = JSON.parse( localStorage.getItem('activity_object')) ;
      if (activity_object == null){
          $location.path('/create_activity');
      }

      $scope.go_create_activity = function(){
          $location.path('/create_activity');
      };

      $scope.go_activity_sign_up = function(activity_name){
          $location.path('/'+activity_name+'/activity_sign_up');
      };

      $scope.change_color = function(activity_name){
        if( activity_object[activity_name].state == 1 || _(activity_object[activity_name].bids).findWhere({bid_state:1})!= undefined ){
           return "activity-color";
        }
      };

      $scope.activity_list = _.keys(activity_object) ;

      for(var value in activity_object){
         if( _(activity_object[value].bids).findWhere({bid_state:1}) != undefined ){
           $scope.disabled_create_activity_button = true ;
         }
      }

    });
