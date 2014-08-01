'use strict';

angular.module('testApp')
    .controller('activitySignUpCtrl', function ($scope, $location) {
        
    
       $scope.back_to_activity_list=function(){$location.path('/activity_list')};


 })
