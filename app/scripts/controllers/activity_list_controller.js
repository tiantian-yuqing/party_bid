'use strict';

angular.module('testApp')
    .controller('activityListCtrl', function ($scope, $location) {

        if (localStorage.getItem('activities') == null){
            $location.path('/create_activity')
        }

       $scope.create_activity='创建活动';
       $scope.go_create_activity=function(){$location.path('/create_activity')};

       $scope.activities = JSON.parse(localStorage.getItem('activities'));


 });
