'use strict';

angular.module('testApp')
    .controller('activityListCtrl', function ($scope, $location){
      var activity_object = get_activity_object();

      if (_(activity_object).isEmpty()){
          $location.path('/create_activity');
      }

      $scope.go_create_activity = function(){
          $location.path('/create_activity');
      };

      $scope.go_activity_sign_up = function(activity_name){
          $location.path('/'+activity_name+'/activity_sign_up');
      };

      $scope.change_color = function(activity_name){
          var activity = Activity.find_activity_by_name(activity_name) ;
          if(activity.state == 1 || Bid.activity_or_recent_exist_bid_on_going(activity) ){
              return "activity-color";
          }
      };

      $scope.activity_list = _(activity_object).pluck('name').reverse() ;

      $scope.disabled_create_activity_button = Bid.activity_object_exist_bid_on_going();

    });
