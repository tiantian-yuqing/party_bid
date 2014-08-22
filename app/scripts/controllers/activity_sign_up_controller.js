'use strict';

angular.module('testApp')
    .controller('activitySignUpCtrl', function ($scope, $location, $routeParams) {
        var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
        var sign_up_person = new SignUP(SignUP.get_json_message_name(),SignUP.get_json_message_phone());

        $scope.back_to_activity_list = function () {
            $location.path('/activity_list') ;
        };

        $scope.activity = _(activity_object).findWhere({name:$routeParams.name});

        $scope.disabled_start_button = ($scope.activity.state !=1) && (_(activity_object).findWhere({state:1}) != undefined);

        $scope.click_start_button = function(){
            if( $scope.activity.state != 1 || confirm("是否确认结束报名")){
                $scope.activity.state = $scope.activity.state == 1 ? 2 : 1;
            }
            localStorage.setItem('activity_object',JSON.stringify( activity_object));
            localStorage.setItem('recent',JSON.stringify($routeParams.name));
        };

        if($scope.activity.state == 1 && (_($scope.activity.sign_up).findWhere({phone:sign_up_person.phone}) == undefined)) {
            $scope.activity.sign_up.unshift(sign_up_person);
            localStorage.setItem('activity_object',JSON.stringify( activity_object));
        }
    });
































