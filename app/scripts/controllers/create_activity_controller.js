'use strict';

angular.module('testApp')
    .controller('createActivityCtrl', function ($scope, $location) {
        var activity_obeject = JSON.parse(localStorage.getItem(activity_obeject))||[];

        $scope.back_to_activity_list = function (){
            $location.path('/activity_list');
        };

        $scope.show_back_button = function(){
            return activity_obeject != "" ;
        };

        $scope.go_activity_sign_up = function(){
            $location.path('/activity_sign_up/' + $scope.activity_name);
        };

        if(_(activity_obeject).where({activity_name:$scope.activity_name}) == ""){
           activity_obeject[$scope.activity_name] = new Activity() ;
        }
        else{
            $scope.warning = true ;
        }














    });

