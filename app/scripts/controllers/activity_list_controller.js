'use strict';

angular.module('testApp')
    .controller('activityListCtrl', function ($scope, $location) {
        
     
       $scope.create_activity='创建活动';
       $scope.go_create_activity=function(){$location.path('/create_activity')};

      // $scope.activities=[{'activity_name'，。。。。。。。。];

 })
