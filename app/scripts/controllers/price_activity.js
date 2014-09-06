/**
 * Created by tiantian on 14-8-21.
 */
'use strict';

angular.module('testApp')
    .controller('priceActivityCtrl', function ($scope, $location,$routeParams){
        $scope.current_bid = Bid.find_bids($routeParams);

        $scope.bid_number = $routeParams.bid ;

        $scope.routeParams = $routeParams ;

        $scope.position = function(bid_person){
             return  $scope.current_bid.bid_people_list.indexOf(bid_person) + 1 ;
        };

        $scope.back_to_price_list = function(){
            $location.path( '/'+ $routeParams.name + '/price_list') ;
        };

        $scope.disabled_end_button = ( $scope.current_bid.bid_state == 2) ;

        $scope.click_end_button = function(){
            if(confirm("是否结束本次竞价？")){
                Bid.change_bid_state($routeParams);
                $scope.disabled_end_button = true ;
                $location.path('/'+$routeParams.name + '/price_activity/'+$routeParams.bid+'/price_result');
            }
        };
    });






//{"0":{"name":"a",
//      "state":0,
//      "sign_up":[],
//      "bids":[],
//      "bid_number":1},
//"1":{"name":"scdcd",
//      "state":0,
//      "sign_up":[],
//      "bids":[],
//      "bid_number":1},
//"2":{"name":"cd213",
//      "state":2,
//      "sign_up":[{"name":"王五","phone":"189900971077"},
//                 {"name":"李四","phone":"189900971078"},
//                 {"name":"张三","phone":"189900971079"}],
//      "bids":[{"bid_name":"竞价2",
//               "bid_state":2,
//               "bid_people_list":[],
//               "show_result":true},
//              {"bid_name":"竞价1",
//               "bid_state":2,
//               "bid_people_list":[{"name":"王五","phone":"189900971077","price":"6","$$hashKey":"004"},
//                                  {"name":"李四","phone":"189900971078","price":"6","$$hashKey":"005"},
//                                  {"name":"张三","phone":"189900971079","price":"8","$$hashKey":"006"}],
//               "show_result":true}],
//      "bid_number":3},
// "3":{"name":"cc",
//      "state":0,
//      "sign_up":[],
//      "bids":[],
//      "bid_number":1},
// "4":{"name":"123",
//      "state":0,
//      "sign_up":[],
//      "bids":[],
//      "bid_number":1}}
