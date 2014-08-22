/**
 * Created by tiantian on 14-8-21.
 */
'use strict';

angular.module('testApp')
    .controller('priceActivityCtrl', function ($scope, $location,$routeParams){
        var recent = JSON.parse(localStorage.getItem('recent'));
        var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
        var activity = _(activity_object).findWhere({name:recent});

        $scope.back_to_price_list = function(){
         //   $location.path('/price_list');
            $location.path( '/'+recent + '/price_list') ;
        };

        $scope.disabled_end_button =  _(activity.bids).findWhere({bid_name:$routeParams.bid}).bid_state == 2;
        $scope.click_end_button = function(){
            if(confirm("是否结束本次竞价？")){
                $scope.disabled_end_button = true ;

                _(activity.bids).findWhere({bid_name:$routeParams.bid}).bid_state = 2;

                localStorage.setItem('activity_object',JSON.stringify( activity_object));
            }
        }
    });
