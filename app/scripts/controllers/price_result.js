/**
 * Created by tiantian on 14-8-23.
 */
angular.module('testApp')
    .controller('priceResultCtrl', function ($scope, $location, $routeParams) {
        var activity_object = get_activity_object();
        var activity = _(activity_object).findWhere({name : $routeParams.name});

        $scope.current_bid =  _(activity.bids).findWhere({bid_name:$routeParams.bid});

        $scope.bid_number = $routeParams.bid;

        $scope.position = function(jj_person){
            return $scope.bid_people_list_sort_by_price.indexOf(jj_person) + 1 ;
        };

        $scope.bid_people_list_sort_by_price = _($scope.current_bid.bid_people_list).sortBy(
            function(element){ return element.price} );

        $scope.back_to_price_list = function(){
            $location.path( '/'+$routeParams.name + '/price_list') ;
        };

        $scope.click_statistics_button = function(){
            $location.path('/'+$routeParams.name + '/price_activity/'+$routeParams.bid+'/price_statistics');
        };

        $scope.bid_result = Price.get_bid_result($scope.current_bid.bid_people_list);

        if( !$scope.current_bid.show_result ){
            if( Price.get_bid_result($scope.current_bid.bid_people_list) != undefined ){
                setTimeout(function(){ $('#bid_resultsModal').modal('show')} ,0);
                setTimeout(function(){ $('#bid_resultsModal').modal('hide')} ,3000);
                $('#bid_resultsModal').on('hidden.bs.modal', function () {
                    $scope.current_bid.show_result = true ;
                    localStorage.setItem('activity_object',JSON.stringify(activity_object));
                    refresh_result_model();
                });
            }
            else{
                $('#bid_failed').modal('show')
            }
        }

    });


