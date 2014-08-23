/**
 * Created by tiantian on 14-8-21.
 */
'use strict';

angular.module('testApp')
    .controller('priceListCtrl', function ($scope, $location,$routeParams){

        var recent = JSON.parse(localStorage.getItem('recent'));
        var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
        var activity = _(activity_object).findWhere({name:recent});

        $scope.back_to_activity_list = function(){
            $location.path('/activity_list');
        };

        $scope.go_activity_sign_up = function(){
            $location.path('/activity_sign_up/' + recent);
        };

        $scope.disabled_start_button =  _(activity.bids).findWhere({bid_state:1}) != undefined ;

        $scope.click_start_button = function(){
            var biding = new Bid(activity.jjnumber);
            activity.bids.unshift(biding);
            activity.jjnumber++;
            localStorage.setItem('activity_object',JSON.stringify( activity_object));
            $location.path('/'+recent+'/price_activity/'+ biding.bid_name);
        };

        $scope.change_color = function(bid){
            if( _(activity.bids).findWhere({bid_name:bid}).bid_state == 1){
                return "activity-color";
            }
        };

        $scope.bids_list = _.pluck(_(activity_object).findWhere({name:$routeParams.name}).bids,'bid_name');
        $scope.go_price_activity = function(bid){
            $location.path('/'+recent+'/price_activity/'+ bid);           // $location.path('/activity_sign_up/' + activity_name);
        }

    });
