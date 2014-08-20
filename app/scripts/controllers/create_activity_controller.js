'use strict';

angular.module('testApp')
    .controller('createActivityCtrl', function ($scope, $location) {
        $scope.show = !Activity.judge_activities_arr_empty();
        $scope.back_to_activity_list = function () {
               $location.path('/activity_list')
        };
        $scope.go_activity_sign_up = function () {
            var activity1 = new Activity($scope.activity_name);
            if (Activity.judge_duplicate($scope.activity_name)) {
                $scope.warning = true;
            }
            else {
                Activity.localStorage_activity1(activity1);
                Activity.judge_localStorage_recent(activity1);
                $location.path('/activity_sign_up/' + $scope.activity_name);
            }
        }
    });

