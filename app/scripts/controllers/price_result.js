/**
 * Created by tiantian on 14-8-23.
 */
angular.module('testApp')
    .controller('priceResultCtrl', function ($scope, $location, $routeParams) {
        console.log($routeParams);//Object {name: "a", bid: "竞价1"}

        var recent = JSON.parse(localStorage.getItem('recent'));
        var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
        $scope.jj_list = _(_(activity_object).findWhere({name:$routeParams.name}).bids).findWhere({bid_name:$routeParams.bid}).JJ_list;

        $scope.show_footer = _(_(activity_object).findWhere({name:$routeParams.name}).bids).findWhere({bid_name:$routeParams.bid}).show_result;

    if($scope.show_footer == false){
        if(get_bid_result($scope.jj_list) == undefined){
             $('#bid_failed').modal('show')
        }
        else{
            $scope.bid_result = _($scope.jj_list).findWhere({price:get_bid_result($scope.jj_list).price});

            setTimeout(function(){ $('#bid_resultsModal').modal('show')} ,0);
            setTimeout(function(){ $('#bid_resultsModal').modal('hide')} ,3000);

        $('#bid_resultsModal').on('hidden.bs.modal', function () {
            $scope.show_footer = true ;
            _(_(activity_object).findWhere({name:$routeParams.name}).bids).findWhere({bid_name:$routeParams.bid}).show_result = true ;
            localStorage.setItem('activity_object',JSON.stringify(activity_object));
            refresh_result_model();

        });
        }
    }

        $scope.jjnumber = $routeParams.bid;

        $scope.position = function(jj_person){
            return $scope.jj_list_sort.indexOf(jj_person) + 1 ;
        };

        $scope.jj_list_sort = ($scope.jj_list).sort(function(a,b) { return a.price - b.price });

        $scope.back_to_price_list = function(){
            $location.path( '/'+$routeParams.name + '/price_list') ;
        };
        console.log(get_bid_result($scope.jj_list))

        $scope.click_statistics_button = function(){
            $location.path('/'+$routeParams.name + '/price_activity/'+$routeParams.bid+'/price_statistics');
        };

    });


