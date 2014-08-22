/**
 * Created by tiantian on 14-8-21.
 */
'use strict';
var click_number = 1;
angular.module('testApp')
    .controller('priceListCtrl', function ($scope, $location){
        var recent = JSON.parse(localStorage.getItem('recent'));
        var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
        var activity = _(activity_object).findWhere({name:recent});

        $scope.back_to_activity_list = function(){
            $location.path('/activity_list');
        };

        $scope.go_activity_sign_up = function(){
            $location.path('/activity_sign_up/' + recent);
        };

        $scope.disabled_start_button =  _(activity.bids).findWhere({state:1}) != undefined ;

        $scope.click_start_button = function(){
            $location.path('/price_activity');
            var bid = new Bid(click_number);
            activity.bids.unshift(bid);
            click_number++;
            localStorage.setItem('activity_object',JSON.stringify( activity_object));
        };


        $scope.bids_list = _.pluck(activity.bids,'bid_name');


    });
