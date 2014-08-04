'use strict';

angular.module('testApp')
    .controller('createActivityCtrl', function ($scope, $location) {

        $scope.back = "返回";
        $scope.create_activity = "创建";
        $scope.show = (localStorage.getItem('activities') !=null);
        $scope.grey = "activity_name=null ";
        $scope.back_to_activity_list=function(){$location.path('/activity_list')};
        $scope.go_activity_sign_up=function(){

            if((localStorage.getItem('activities')).search($scope.activity_name)!=-1)
            {
                $scope.warning = "重复";
            }

            else
            {
                if (localStorage.getItem('activities') != null)
                {
                    var activities = JSONP.parse(localStorage.getItem('activities'));
                    activities.unshift($scope.activity_name);

                }

                else {
                    var activities = [];
                    activities.unshift($scope.activity_name);
                }

                localStorage.setItem('activities', JSONP.stringify(activities));

                $location.path('/activity_sign_up')

            }

        }


    })