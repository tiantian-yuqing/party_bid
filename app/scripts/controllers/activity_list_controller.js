'use strict';

angular.module('testApp')
    .controller('activityListCtrl', function ($scope, $location)
    {
        if (Activity.judge_activities_arr_empty ()){
            $location.path('/create_activity');
        }

       $scope.go_create_activity=function(){$location.path('/create_activity')};

       $scope.activities = JSON.parse(localStorage.getItem('activities_arr'));

       $scope.change_color = function(activity){
            if( activity.state == 1 ){
                return "activity-color";
            }
       };

       $scope.go_activity_sign_up = function (activity){
           $location.path('/activity_sign_up/' + activity.name);
       }
    });
