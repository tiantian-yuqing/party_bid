/**
 * Created by tiantian on 14-8-23.
 */
angular.module('testApp')
    .controller('priceStatisticsCtrl', function ($scope, $location, $routeParams) {
        console.log($routeParams);//Object {name: "a", bid: "竞价1"}

        var recent = JSON.parse(localStorage.getItem('recent'));
        var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};

        $scope.jjnumber = $routeParams.bid;

        $scope.jj_list = _(_(activity_object).findWhere({name:$routeParams.name}).bids).findWhere({bid_name:$routeParams.bid}).JJ_list;

        $scope.back_to_price_list = function(){
            $location.path( '/'+recent + '/price_list') ;
        };

        $scope.click_list_button = function(){
            $location.path('/'+recent + '/price_activity/'+$routeParams.bid+'/price_result');
        };

        $scope.bid_result = _($scope.jj_list).findWhere({price:get_bid_result($scope.jj_list).price});

        $scope.price_object = get_price_and_number($scope.jj_list);

    });