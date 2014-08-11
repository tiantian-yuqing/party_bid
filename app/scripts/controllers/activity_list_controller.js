'use strict';

angular.module('testApp')
    .controller('activityListCtrl', function ($scope, $location)
    {
        if (Activity.judge_activities_arr_empty ()){
            $location.path('/create_activity')
        }
       $scope.create_activity='创建活动';
       $scope.go_create_activity=function(){$location.path('/create_activity')};
       $scope.activities = Activity.get_all_activities_json();
       $scope.go_activity_sign_up = function (activity){
           $location.path('/activity_sign_up');
           localStorage.setItem('activity', JSON.stringify(activity));
          // alert(Activity.find_activity_position());
       }
    });
