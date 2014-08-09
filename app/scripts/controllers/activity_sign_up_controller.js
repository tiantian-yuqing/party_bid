'use strict';

angular.module('testApp')
    .controller('activitySignUpCtrl', function ($scope, $location) {
        $scope.Back = "返回";
        $scope.Start = "开始";
        $scope.back_to_activity_list = function () {
               $location.path('/activity_list')
        };

        var count = 0;Message.localStorage_count(count);//alert("gg");
        if(!Message.get_json_message_name) {
            var person = Message(Message.get_json_message_name, Message.get_json_message_phone);
            // alert(person);
            $scope.people_list_arr = Message.get_all_people_json() || [];
            Message.localStorage_person();
        }

        $scope.click_start_button = function () {
                count++;
                localStorage.setItem('count', count);
                $scope.Start = Message.start_or_end();
            }

    });



































