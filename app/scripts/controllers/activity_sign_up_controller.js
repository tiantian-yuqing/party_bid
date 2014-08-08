'use strict';

angular.module('testApp')
    .controller('activitySignUpCtrl', function ($scope, $location) {
        var count = 0;
        $scope.Back = "返回";
        $scope.Start = "开始";
        $scope.back_to_activity_list = function () {
            $location.path('/activity_list')
        };
        $scope.click_start_button = function () {
            count++;
            var zero_odd_even = Message.judge_count(count);
            if (zero_odd_even == "odd") {
                $scope.Start = Message.click_start();
            }
            if (zero_odd_even == "even") {
                if (Message.click_end()) {
                    $scope.Start = "开始";
                    //alert(count);
                }
                else {
                    count--;
                    //alert(count);
                }
            }
        }
    });





























