/**
 * Created by tiantian on 14-8-21.
 */
'use strict';

angular.module('testApp')
    .controller('priceActivityCtrl', function ($scope, $location){
        $scope.back_to_price_list = function(){
            $location.path('/price_list');
        }

    });
