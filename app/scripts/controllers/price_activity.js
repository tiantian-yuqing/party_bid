/**
 * Created by tiantian on 14-8-21.
 */
'use strict';

angular.module('testApp')
    .controller('priceActivityCtrl', function ($scope, $location,$routeParams){
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
        $scope.jj_list = _(activity_object[$routeParams.name].bids).findWhere({bid_name:$routeParams.bid}).JJ_list;

        $scope.disabled_end_button =  _(activity.bids).findWhere({bid_name:$routeParams.bid}).bid_state == 2;
        $scope.click_end_button = function(){
            if(confirm("是否结束本次竞价？")){
                $scope.disabled_end_button = true ;

                _(activity.bids).findWhere({bid_name:$routeParams.bid}).bid_state = 2;

                localStorage.setItem('activity_object',JSON.stringify( activity_object));
               // $location.path('/'+recent + '/price_activity/'+$routeParams.bid+'/price_result');

            }
        }


    });
