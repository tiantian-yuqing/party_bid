'use strict';
 // var current_number = 0;                   //alert("fgh");
angular.module('testApp')
    .controller('activitySignUpCtrl', function ($scope, $location) {
        $scope.Back = "返回";
        $scope.Start = Message.start_or_end();
        //current_number = 1;  //alert("1")
        $scope.back_to_activity_list = function () {
               $location.path('/activity_list')
        };
               var count = Message.get_count()||[];
               var person = new Message(Message.get_json_message_name(), Message.get_json_message_phone());
        $scope.people_list_arr = Message.get_all_people_json() || [];
               Message.localStorage_person($scope.people_list_arr,person);
        $scope.click_start_button = function () {
                count++;
                localStorage.setItem('count', count);
                $scope.Start = Message.start_or_end();

            }
    });


/*<ul class="list-style-1" style="margin-top: 30px">
    <li ng-repeat="person in person_list_arr " >
        <tr>
            <th> {{person.name}}</th>
            <td> {{person.phone}}</td>
        </tr>
    </li>
</ul>
*/































