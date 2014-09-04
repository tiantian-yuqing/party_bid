'use strict';

angular.module('testApp')
    .controller('createActivityCtrl', function ($scope, $location) {
        var activity_object = get_activity_object();

        $scope.display_back_button = !_(activity_object).isEmpty() ;

        $scope.back_to_activity_list = function (){
            $location.path('/activity_list');
        };

        $scope.click_create_button = function(){
            if( Activity.find_activity_by_name($scope.activity_name) != undefined ){
                $scope.warning = true ;
            }
            else{
                Activity.create_new_activity($scope.activity_name);
                $location.path('/'+ $scope.activity_name+'/activity_sign_up');
            }
            if( !Activity.on_going() ){
                save_recent($scope.activity_name) ;
            }
        };

    });









