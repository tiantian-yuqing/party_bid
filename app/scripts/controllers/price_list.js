/**
 * Created by tiantian on 14-8-21.
 */
'use strict';

angular.module('testApp')
    .controller('priceListCtrl', function ($scope, $location,$routeParams){
        var activity_object = get_activity_object();
        var activity = _(activity_object).findWhere({name : $routeParams.name});

        $scope.back_to_activity_list = function(){
            $location.path('/activity_list');
        };

        $scope.go_activity_sign_up = function(){
            $location.path('/'+$routeParams.name+'/activity_sign_up');
        };

        $scope.disabled_start_button = Activity.on_going()|| Bidding.activity_object_exist_bid_on_going();

        $scope.click_start_button = function(){
            activity.bid_number++;
            var biding = new Bid(activity.bid_number);
            activity.bids.unshift(biding);
            save_activity_object(activity_object);
            $location.path('/'+$routeParams.name+'/price_activity/'+ biding.bid_name);
        };

        $scope.change_color = function(bid){
            if( _(activity.bids).findWhere({bid_name:bid}).bid_state == 1){
                return "activity-color";
            }
        };

        $scope.bids_list = _.pluck(activity.bids,'bid_name');

        $scope.go_price_activity = function(bid){
            $location.path('/'+$routeParams.name+'/price_activity/'+ bid);

        };


    });
