'use strict';

angular.module('testApp')
    .controller('createActivityCtrl', function ($scope, $location)
    {
        $scope.back = "返回";
        $scope.create_activity = "创建";
        $scope.show =! Activity.judge_activities_arr_empty();
        $scope.back_to_activity_list = function () {$location.path('/activity_list')};
        $scope.go_activity_sign_up = function (){
            var activity1 = new Activity($scope.activity_name);
            var activities_arr = Activity.get_all_activities_json()||[];
            if ( Activity.judge_activities_arr_empty() ){
                 activities_arr.unshift(activity1);
                 Activity.localStorage_activity(activities_arr);
                 $location.path('/activity_sign_up')
            }
            else{
                   if(Activity.judge_duplicate($scope.activity_name)){
                       $scope.warning = true ;
                   }
                   else {
                       activities_arr.unshift(activity1);
                       Activity.localStorage_activity(activities_arr);
                       $location.path('/activity_sign_up')
                   }
            }
        }
    })


