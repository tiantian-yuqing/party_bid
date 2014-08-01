'use strict';

angular.module('testApp')
    .controller('createActivityCtrl', function ($scope, $location) {

       $scope.back = "返回";
       $scope.create_activity = "创建";
       $scope.go_activity_sign_up=function(){$location.path('/activity_sign_up')};

       $scope.back_to_activity_list=function(){$location.path('/activity_list')};

       localStorage.setItem('activity_name',JSON.stringify($scope.activity_name));




 });
