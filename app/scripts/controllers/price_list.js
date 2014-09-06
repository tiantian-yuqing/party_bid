/**
 * Created by tiantian on 14-8-21.
 */
'use strict';

angular.module('testApp')
    .controller('priceListCtrl', function ($scope, $location,$routeParams){
        $scope.activity = Activity.find_activity_by_name($routeParams.name);

        $scope.back_to_activity_list = function(){
            $location.path('/activity_list');
        };

        $scope.go_activity_sign_up = function(){
            $location.path('/'+$routeParams.name+'/activity_sign_up');
        };

        $scope.disabled_start_button = Activity.on_going() || Bid.activity_object_exist_bid_on_going();

        $scope.click_start_button = function(){
            Bid.create_new_bid($routeParams.name);
            $location.path('/'+ $routeParams.name + '/price_activity/'+ "竞价"+ $scope.activity.bid_number);
        };

        $scope.change_color = function(bid){
            if( _($scope.activity.bids).findWhere({bid_name:bid}).bid_state == 1){
                return "activity-color";
            }
        };

        $scope.bids_list = _.pluck($scope.activity.bids,'bid_name');

        $scope.go_price_activity = function(bid){
            $location.path('/'+$routeParams.name+'/price_activity/'+ bid);
        };
    });
