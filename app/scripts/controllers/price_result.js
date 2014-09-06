/**
 * Created by tiantian on 14-8-23.
 */
angular.module('testApp')
    .controller('priceResultCtrl', function ($scope, $location, $routeParams) {
        $scope.current_bid = Bid.find_bids($routeParams);

        $scope.bid_number = $routeParams.bid;

        $scope.position = function(jj_person){
            return $scope.bid_people_list_sort_by_price.indexOf(jj_person) + 1 ;
        };

        $scope.bid_people_list_sort_by_price = _($scope.current_bid.bid_people_list).sortBy("price" );

        $scope.back_to_price_list = function(){
            $location.path( '/'+$routeParams.name + '/price_list') ;
        };

        $scope.go_price_statistics = function(){
            $location.path('/'+$routeParams.name + '/price_activity/'+$routeParams.bid+'/price_statistics');
        };

        $scope.bid_result = Price.get_bid_result($scope.current_bid.bid_people_list);

        if( !$scope.current_bid.show_result ){
            if( Price.get_bid_result($scope.current_bid.bid_people_list) != undefined ){
                setTimeout(function(){ $('#bid_resultsModal').modal('show')} ,0);
                setTimeout(function(){ $('#bid_resultsModal').modal('hide')} ,3000);
            }
            else{
                $('#bid_failed').modal('show')
            }
        }

        $('#bid_resultsModal').on('hidden.bs.modal', function () {
            $scope.current_bid.show_result = Price.change_show_result($routeParams) ;
            refresh_result_model();
        });

    });


