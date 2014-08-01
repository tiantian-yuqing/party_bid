'use strict';

angular.module('testApp')
    .controller('createActivityCtrl', function ($scope, $location) {

        $scope.back = "返回";
       $scope.create_activity = "创建";
       $scope.go_activity_sign_up=function(){$location.path('/activity_sign_up')};

       $scope.back_to_activity_list=function(){$location.path('/activity_list')};

       //$scope.activity_name = localStorage.setItem('activity_name',activity_name);


     //for(i=0;        ;i++){
         // localStorage.setItem('activity_name[i]',activity_name);}



 });
