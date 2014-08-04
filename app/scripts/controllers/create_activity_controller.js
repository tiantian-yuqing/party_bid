'use strict';

angular.module('testApp')
    .controller('createActivityCtrl', function ($scope, $location)
    {

        $scope.back = "返回";
        $scope.create_activity = "创建";
        $scope.show = (localStorage.getItem('activities') != null);
        $scope.back_to_activity_list = function () {$location.path('/activity_list')};
        function   judge_duplicate()
        {
            for (var i=0 ; i < (JSON.parse(localStorage.getItem('activities')).length) ; i++)
            {
                var activities =JSON.parse(localStorage.getItem('activities'));
                return ($scope.activity_name == activities[i])
            }

        }


        $scope.go_activity_sign_up = function ()
        {
            var activities =JSON.parse(localStorage.getItem('activities'))||[];

            if (localStorage.getItem('activities') == null)
            {
                activities.unshift($scope.activity_name);

                localStorage.setItem('activities', JSON.stringify(activities));

                $location.path('/activity_sign_up')

            }

            else
            {
                   if(judge_duplicate())
                   {
                       $scope.warning = true ;
                       console.log('m');
                   }

                   else {
                       activities.unshift($scope.activity_name);

                       localStorage.setItem('activities', JSON.stringify(activities));

                       $location.path('/activity_sign_up')
                   }

            }


        }


    })


