'use strict';

angular.module('testApp')
    .controller('createActivityCtrl', function ($scope, $location)
    {
        $scope.back = "返回";
        $scope.create_activity = "创建";
        $scope.show = (localStorage.getItem('activities') != null);
        $scope.back_to_activity_list = function () {$location.path('/activity_list')};
        $scope.go_activity_sign_up = function (){
            var activities = Activity.get_all_activities_json()||[];
            if ( Activity.judge_activity_empty() ){
                var activity = new Activity($scope.activity_name);
                activities.unshift(activity);
                Activity.localStorage_activity(activities);
                $location.path('/activity_sign_up')
            }
            else{
                   if(Activity.judge_duplicate($scope.activity_name)){
                       $scope.warning = true ;
                   }

                   else {
                       var activity = new Activity($scope.activity_name);
                       activities.unshift(activity);

                       Activity.localStorage_activity(activities);

                       $location.path('/activity_sign_up')
                   }
            }
        }
    })


