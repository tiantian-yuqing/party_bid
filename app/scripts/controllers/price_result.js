/**
 * Created by tiantian on 14-8-23.
 */
angular.module('testApp')
    .controller('priceResultCtrl', function ($scope, $location, $routeParams) {
        var recent = JSON.parse(localStorage.getItem('recent'));
        var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
        var activity = _(activity_object).findWhere({name:recent});
        $scope.jjnumber = $routeParams.bid;

        $scope.position = function(jj_person){
            return $scope.jj_list.indexOf(jj_person)+1 ;
        };

        $scope.back_to_price_list = function(){
            $location.path( '/'+recent + '/price_list') ;
        };
       // console.log($routeParams);
        $scope.jj_list = _(activity_object[$routeParams.name].bids).findWhere({bid_name:$routeParams.bid}).JJ_list;

        $scope.click_statistics_button = function(){
            $location.path('/'+recent + '/price_activity/'+$routeParams.bid+'/price_statistics');

        };
        $scope.orderProp = 'price';
        var t =  setTimeout("alert('5 seconds!')");
        setTimeout("clearTimeout(t)",2000);
    });


