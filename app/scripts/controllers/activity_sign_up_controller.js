'use strict';

angular.module('testApp')
    .controller('activitySignUpCtrl', function ($scope, $location, $routeParams) {
        $scope.initiate = function () {
            $scope.activity = Activity.find_by_name($routeParams.name);
            $scope.people_list_arr = $scope.activity.people_list_arr;
            var person = new Message(Message.get_json_message_name(), Message.get_json_message_phone());
            if ($scope.activity.state == 1 && !Message.judge_phone_number()) {
                $scope.activity.people_list_arr.unshift(person);
                Activity.update_state($scope.activity);
                Activity.update_people_list($scope.activity);
            }
        };

        $scope.initiate();

        $scope.back_to_activity_list = function () {
            $location.path('/activity_list')
        };

        $scope.show_start_button = ( $scope.activity.state != 1 && Activity.on_going() );

        $scope.click_start_button = function () {
            if ($scope.activity.state != 1 || confirm("是否结束报名")) {
                $scope.activity.state = $scope.activity.state == 1? 2: 1;
            }

            Activity.update_state($scope.activity);
            $scope.activity = Activity.find_by_name($routeParams.name);
        };

    });
































