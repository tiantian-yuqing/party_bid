'use strict';

angular.module('testApp')
    .controller('activitySignUpCtrl', function ($scope, $location) {
        var count = 0;
        $scope.Back = "返回";
        $scope.Start = "开始";
        $scope.back_to_activity_list = function () {
               $location.path('/activity_list')
        };


        var json_message=({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})

        //Message.localStorage_json_message();
       // var json_message = Message.get_json_message();
            $scope.people_list_arr = Message.get_all_people_json() || [];
            var person = Message(Message.extract_name(json_message.messages[0].massage), json_message.messages[0].phone);

            $scope.click_start_button = function () {
                count++;
                localStorage.setItem('count', count);
                $scope.Start = Message.start_or_end();
            }

    });



































