/**
 * Created by tiantian on 14-8-23.
 */
angular.module('testApp')
    .controller('priceStatisticsCtrl', function ($scope, $location, $routeParams) {
        var recent = JSON.parse(localStorage.getItem('recent'));
        var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
        var activity = _(activity_object).findWhere({name : $routeParams.name});

        $scope.current_bid =  _(activity.bids).findWhere({bid_name:$routeParams.bid});

        $scope.bid_number = $routeParams.bid;

        $scope.back_to_price_list = function(){
            $location.path( '/'+recent + '/price_list') ;
        };

        $scope.go_price_result = function(){
            $location.path('/'+recent + '/price_activity/'+$routeParams.bid+'/price_result');
        };

        $scope.price_number_list = get_price_and_number($scope.current_bid.bid_people_list);
console.log($scope.price_number_list)
        if(get_bid_result($scope.current_bid.bid_people_list) != "") {
            $scope.bid_result = get_bid_result($scope.current_bid.bid_people_list)[0];
        }

    });