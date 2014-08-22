/**
 * Created by tiantian on 14-8-21.
 */
'use strict';

angular.module('testApp')
    .controller('priceListCtrl', function ($scope, $location){
        $scope.back_to_activity_list = function(){
            $location.path('/activity_list');
        };
        $scope.click_start_button = function(){
            $location.path('/price_activity');
        };
        $scope.click_sign_up_button = function(){
            $location.path('/activity_sign_up');
        };
    });
