/**
 * Created by tiantian on 14-8-23.
 */
angular.module('testApp')
    .controller('priceStatisticsCtrl', function ($scope, $location, $routeParams) {
        $scope.recent = JSON.parse(localStorage.getItem('recent'));

        $scope.activity = Activity.find_activity_by_name($routeParams.name);

        $scope.current_bid = Bid.find_bids($routeParams);

        $scope.bid_number = $routeParams.bid;

        $scope.back_to_price_list = function(){
            $location.path( '/'+$scope.recent + '/price_list') ;
        };

        $scope.go_price_result = function(){
            $location.path('/'+$scope.recent + '/price_activity/'+$routeParams.bid+'/price_result');
        };

        $scope.price_number_list = Price.get_price_and_number($scope.current_bid.bid_people_list);

        $scope.bid_result = Price.get_bid_result($scope.current_bid.bid_people_list);

    });