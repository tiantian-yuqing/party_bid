'use strict';

angular.module('testApp')
    .controller('createActivityCtrl', function ($scope, $location) {
        var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
        $scope.back_to_activity_list = function (){
            $location.path('/activity_list');
        };

        $scope.show_back_button = function(){
            return activity_object != "" ;
        };

        $scope.go_activity_sign_up = function(){
            if( _(activity_object).where({name:$scope.activity_name})!="" ){
                $scope.warning = true ;
            }
            else{
                activity_object[$scope.activity_name] = new Activity($scope.activity_name);
                localStorage.setItem('activity_object',JSON.stringify( activity_object));
                $location.path('/activity_sign_up/' + $scope.activity_name);
            }
            if(_(activity_object).where({state:1}) == ""){
                localStorage.setItem('recent', JSON.stringify(activity_object[$scope.activity_name].name));
            } ///contains
        };

    });



//
//
//$scope.click_start_button = function(){
//    //  $location.path('/price_activity');
//    activity.bids.unshift({name:1,state:1});
//    //    activity.bids = [{name:1,state:1}];
//    localStorage.setItem('activity_object',JSON.stringify( activity_object));
//    console.log(activity_object);
//};
//
//$scope.bids = _.pluck(activity.bids,'name');








