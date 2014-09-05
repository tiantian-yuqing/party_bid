'use strict';

angular.module('testApp')
    .controller('activitySignUpCtrl', function ($scope, $location, $routeParams) {
        $scope.activity = Activity.find_activity_by_name($routeParams.name);

        $scope.back_to_activity_list = function () {
            $location.path('/activity_list') ;
        };
        $scope.routeParams = $routeParams ;

        $scope.disabled_start_button = (($scope.activity.state !=1) && Activity.on_going()) || Bid.activity_object_exist_bid_on_going() ;

        $scope.go_price_list = function(){
            $location.path( '/'+$routeParams.name + '/price_list') ;
        };

        $scope.click_start_button = function(){
            if( $scope.activity.state != 1 || confirm("是否确认结束报名")){
                $scope.activity.state = $scope.activity.state == 1 ? 2 : 1;
            }
            if($scope.activity.state == 2){
                $location.path( '/'+$routeParams.name + '/price_list') ;
            }
            var activity_object = get_activity_object();
            _(activity_object).findWhere({name : $routeParams.name}).state = $scope.activity.state ;

            save_activity_object(activity_object);
            save_recent($routeParams.name);
        };

    });

































