'use strict';

angular.module('testApp')
    .controller('activityListCtrl', function ($scope, $location){
      $scope.activity_object = get_activity_object();

      if (_($scope.activity_object).isEmpty()){
          $location.path('/create_activity');
      }

      $scope.go_create_activity = function(){
          $location.path('/create_activity');
      };

      $scope.go_activity_sign_up = function(activity_name){
          $location.path('/'+activity_name+'/activity_sign_up');
      };

      $scope.change_color = function(activity_name){
         return  Activity.change_color(activity_name)
      };

      $scope.activity_list = _($scope.activity_object).pluck('name').reverse() ;

      $scope.disabled_create_activity_button = Bid.activity_object_exist_bid_on_going();

    });
