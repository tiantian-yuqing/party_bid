'use strict';

angular.module('testApp')
    .controller('activityListCtrl', function ($scope, $location)
    {
        if (Activity.judge_activity_empty()){
            $location.path('/create_activity')
        }
       $scope.create_activity='创建活动';
       $scope.go_create_activity=function(){$location.path('/create_activity')};
       $scope.activities = JSON.parse(localStorage.getItem('activities'));
       $scope.go_activity_sign_up = function (){$location.path('/activity_sign_up')}
    });
