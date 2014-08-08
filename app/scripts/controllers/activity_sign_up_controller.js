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
            count++;alert(count);
            $scope.Start = Message.button(count);
            //alert(count);
            count = Message.ddd(count);
            //alert(count);
        }
    });

var person = Message(Message.extract_name,json_message.messages[0].phone);
var people_list_arr = Message.get_all_people_json () || [];































