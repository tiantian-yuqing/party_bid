/**
 * Created by tiantian on 14-8-21.
 */
'use strict';

angular.module('testApp')
    .controller('priceActivityCtrl', function ($scope, $location,$routeParams){
        console.log($routeParams);
        var activity_object = Bidding.get_activity_object();
        var activity = _(activity_object).findWhere({name:$routeParams.name});
        $scope.jjnumber = $routeParams.bid;
        $scope.routeParams = $routeParams ;
        console.log("SSs:"+$scope.routeParams);

        $scope.position = function(jj_person){
               return  $scope.jj_list.indexOf(jj_person) + 1 ;
        };

        $scope.back_to_price_list = function(){
            $location.path( '/'+ $routeParams.name + '/price_list') ;
        };

        $scope.jj_list = _(_(activity_object).findWhere({name:$routeParams.name}).bids).findWhere({bid_name:$routeParams.bid}).JJ_list;

        $scope.disabled_end_button =  _(activity.bids).findWhere({bid_name:$routeParams.bid}).bid_state == 2;

        $scope.click_end_button = function(){
            if(confirm("是否结束本次竞价？")){
                $scope.disabled_end_button = true ;
                var activity_object = Bidding.get_activity_object();
                var activity = _(activity_object).findWhere({name:$routeParams.name});
                _(activity.bids).findWhere({bid_name:$routeParams.bid}).bid_state = 2;
                localStorage.setItem('activity_object',JSON.stringify( activity_object));
               $location.path('/'+$routeParams.name + '/price_activity/'+$routeParams.bid+'/price_result');
            }
        };
    });






//{"0":{"name":"a",
//      "state":0,
//      "sign_up":[],
//      "bids":[],
//      "jjnumber":1},
// "1":{"name":"scdcd",
//      "state":0,
//      "sign_up":[],
//      "bids":[],
//      "jjnumber":1},
// "2":{"name":"cd213",
//      "state":2,
//      "sign_up":[{"name":"王五","phone":"189900971077"},
//                 {"name":"李四","phone":"189900971078"},
//                 {"name":"张三","phone":"189900971079"}],
//      "bids":[{"bid_name":"竞价2",
//               "bid_state":2,
//               "JJ_list":[],
//               "show_result":true},
//              {"bid_name":"竞价1",
//               "bid_state":2,
//               "JJ_list":[{"name":"王五","phone":"189900971077","price":"6","$$hashKey":"004"},
//                          {"name":"李四","phone":"189900971078","price":"6","$$hashKey":"005"},
//                          {"name":"张三","phone":"189900971079","price":"8","$$hashKey":"006"}],
//               "show_result":true}],
//      "jjnumber":3},
// "3":{"name":"cc",
//      "state":0,
//      "sign_up":[],
//      "bids":[],
//      "jjnumber":1},
// "4":{"name":"123",
//      "state":0,
//      "sign_up":[],
//      "bids":[],
//      "jjnumber":1}}
