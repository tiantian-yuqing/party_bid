'use strict';

angular.module('testApp')
    .controller('activitySignUpCtrl', function ($scope, $location) {

         $scope.Back="返回";
         $scope.Start="开始";
         $scope.back_to_activity_list=function(){$location.path('/activity_list')};


 });
