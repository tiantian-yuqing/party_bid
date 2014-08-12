'use strict';

var i = Activity.find_activity_position(); //alert(i);
var activities_arr = JSON.parse(localStorage.getItem('activities_arr'));//alert(activities_arr[0].name);
var activity =  JSON.parse(localStorage.getItem('activity'))||[];
if(activity == "" ){
    activity = activities_arr[0];
    localStorage.setItem('activity', JSON.stringify( activity));
}  //alert(activity.name)

angular.module('testApp')
    .controller('activitySignUpCtrl', function ($scope, $location) {
        $scope.Back = "返回";
        $scope.back_to_activity_list = function () {
            $location.path('/activity_list')
        };

        if (activity.people_list_arr == "") {
            $scope.number = 0
        }
        else {
            $scope.number = activity.people_list_arr.length
        }

        $scope.show_start_button = function () {
            if (activity.state == 0 || activity.state == 2) {
                $scope.Start = "开始";
                 /*for (var i = 0; i < (activities_arr.length); i++) {
                      if (activities_arr[i].state == 1) {
                           return true
                      }
                 }
                 return false*/
            }
            if (activity.state == 1) {
                $scope.Start = "结束";
                return false
            }
        };

            $scope.click_start_button = function () {
                //alert(activity.state);
                if (activity.state == 0) {
                    activity.state = 1;
                }
                else if (activity.state == 1) {
                    if (confirm("是否结束报名")) {
                        activity.state = 2;
                    }
                    else {
                        activity.state = 1;
                    }
                }
                else if (activity.state == 2) {
                    activity.state = 1;
                }
                // alert( activity.state);
                activities_arr[i].state = activity.state;
                localStorage.setItem('activity', JSON.stringify(activity));
                localStorage.setItem('activities_arr', JSON.stringify(activities_arr));
            };

            $scope.people_list_arr = activities_arr[i].people_list_arr;

            var person = new Message(Message.get_json_message_name(), Message.get_json_message_phone());
            if (activity.state == 1) {
                activities_arr[i].people_list_arr.unshift(person);
                localStorage.setItem('activities_arr', JSON.stringify(activities_arr));
            }

    });
































