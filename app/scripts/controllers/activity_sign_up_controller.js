'use strict';

angular.module('testApp')
    .controller('activitySignUpCtrl', function ($scope, $location, $routeParams) {
        var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {} ;
        $scope.back_to_activity_list = function () {
            $location.path('/activity_list') ;
        };

        var activity = _(activity_object).findWhere({name:$routeParams.name});
        $scope.activity = activity;

        $scope.activity_list = activity.sign_up;

        $scope.disabled_start_button = (((activity.state !=1) && (_(activity_object).findWhere({state:1}) != undefined)))|| SignUP.bid_ing() ;

        $scope.click_start_button = function(){
            if( activity.state != 1 || confirm("是否确认结束报名")){
                activity.state = activity.state == 1 ? 2 : 1;
            }
            if(activity.state == 2){
                $location.path( '/'+$routeParams.name + '/price_list') ;
            }
            activity_object = JSON.parse( localStorage.getItem('activity_object')) ;
           _(activity_object).findWhere({name:$routeParams.name}).state = activity.state ;

            SignUP.localstorage_activity_object (activity_object);
            SignUP.localstorage_recent($routeParams.name);
        };

        $scope.go_price_list = function(){
            $location.path( '/'+$routeParams.name + '/price_list') ;
        };

    });

































