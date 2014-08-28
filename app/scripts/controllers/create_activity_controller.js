'use strict';

angular.module('testApp')
    .controller('createActivityCtrl', function ($scope, $location) {
        var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
        $scope.back_to_activity_list = function (){
            $location.path('/activity_list');
        };

        $scope.display_back_button = function(){
            return !_(activity_object).isEmpty() ;
        };

        $scope.go_activity_sign_up = function(){
            if( _(activity_object).where({name:$scope.activity_name})!="" ){
                $scope.warning = true ;
            }
            else{
                activity_object[Activity.get_object_length(activity_object)] = new Activity($scope.activity_name);
                localStorage.setItem('activity_object',JSON.stringify( activity_object));
                $location.path('/'+ $scope.activity_name+'/activity_sign_up');
            }
            if(_(activity_object).where({state:1}) == ""){
                localStorage.setItem('recent', JSON.stringify($scope.activity_name));
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








