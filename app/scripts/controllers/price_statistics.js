/**
 * Created by tiantian on 14-8-23.
 */
angular.module('testApp')
    .controller('priceStatisticsCtrl', function ($scope, $location, $routeParams) {
        var recent = JSON.parse(localStorage.getItem('recent'));
        var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
        var activity = _(activity_object).findWhere({name:recent});

        $scope.jjnumber = $routeParams.bid;

        $scope.jj_list = _(activity_object[$routeParams.name].bids).findWhere({bid_name:$routeParams.bid}).JJ_list;

        $scope.back_to_price_list = function(){
            $location.path( '/'+recent + '/price_list') ;
        };

        $scope.click_list_button = function(){
            $location.path('/'+recent + '/price_activity/'+$routeParams.bid+'/price_result');
        };

        var price_arr =  _.pluck($scope.jj_list, 'price').sort();
        var price_object = {};

        for(var value in price_arr){
            price_object[price_arr[value]] =  price_object[price_arr[value]] || new PriceList(price_arr[value],0);
            price_object[price_arr[value]].number++;
        }
        $scope.price_object = _.values(price_object) ;

    });