/**
 * Created by tiantian on 14-8-23.
 */
angular.module('testApp')
    .controller('priceResultCtrl', function ($scope, $location, $routeParams) {
        console.log($routeParams);//Object {name: "a", bid: "竞价1"}

        var recent = JSON.parse(localStorage.getItem('recent'));
        var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
        $scope.jj_list = _(_(activity_object).findWhere({name:$routeParams.name}).bids).findWhere({bid_name:$routeParams.bid}).JJ_list;

        console.log(setTimeout(function(){ $('#bid_resultsModal').modal('show')} ,0));

        $scope.show_footer = setTimeout(function(){ $('#bid_resultsModal').modal('hide')} ,3000);

        $scope.jjnumber = $routeParams.bid;

        $scope.position = function(jj_person){
            return $scope.jj_list_sort.indexOf(jj_person) + 1 ;
        };

        $scope.jj_list_sort = _($scope.jj_list).sortBy('price');

        $scope.back_to_price_list = function(){
            $location.path( '/'+$routeParams.name + '/price_list') ;
        };

        $scope.bid_result = _($scope.jj_list).findWhere({price:get_bid_result($scope.jj_list).price});

        $scope.click_statistics_button = function(){
            $location.path('/'+$routeParams.name + '/price_activity/'+$routeParams.bid+'/price_statistics');
        };

    });


