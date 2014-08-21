'use strict';

angular.module('testApp')
    .controller('activitySignUpCtrl', function ($scope, $location, $routeParams) {
        var activity_object = JSON.parse(localStorage.getItem(activity_object));

        $scope.activity = _(activity_object).findWhere({activity_name:$routeParams.name});

        $scope.back_to_activity_list = function(){
            $location.path('/activity_list');
        };

        $scope.show_start_button = (_(activity_object[activity_name]).findWhere({state:1}) != undefined);

        $scope.click_start_button = function(){
            if( $scope.activity.state != 1 || confirm("是否确认结束报名")){
                $scope.activity.state = $scope.activity.state == 1 ? 2 : 1;
            }
            localStorage.setItem('activity_object',activity_object)
        };

        var sign_up = new SignUp();








    });
































