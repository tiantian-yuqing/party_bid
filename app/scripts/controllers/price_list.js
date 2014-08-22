/**
 * Created by tiantian on 14-8-21.
 */
'use strict';

angular.module('testApp')
    .controller('priceListCtrl', function ($scope, $location){
        var recent = JSON.parse(localStorage.getItem('recent'));
        var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
        var activity = _(activity_object).findWhere({name:recent});

        $scope.back_to_activity_list = function(){
            $location.path('/activity_list');
        };

        $scope.click_sign_up_button = function(){
            $location.path('/activity_sign_up/' + recent);
        };

        $scope.disabled_start_button =  _(activity.bids).findWhere({state:1}) != undefined ;

        $scope.click_start_button = function(){
          //  $location.path('/price_activity');
            activity.bids = [{竞价:1,state:1}];
        };

        $scope.bids = _.pluck(activity.bids,name);



    });
