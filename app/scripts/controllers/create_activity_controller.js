'use strict';

angular.module('testApp')
    .controller('createActivityCtrl', function ($scope, $location) {

       $scope.back = "返回";
       $scope.create_activity = "创建";
       $scope.show = localStorage.getItem('activities') !=null;
       $scope.back_to_activity_list=function(){$location.path('/activity_list')};
       $scope.go_activity_sign_up=function(){
          
       if(localStorage.getItem('activities') != null) {
           var activities = JSON.parse(localStorage.getItem('activities'));
           activities.unshift($scope.activity_name);
           console.log(activities);
            }

       else{
           var activities = [];
           activities.unshift($scope.activity_name);
          }

       localStorage.setItem('activities',JSON.stringify(activities));

          $location.path('/activity_sign_up')
       };


 });