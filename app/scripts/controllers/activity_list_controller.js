'use strict';

angular.module('testApp')
    .controller('activityListCtrl', function ($scope, $location){
      var activity_object = get_activity_object();

      if (_(activity_object).isEmpty()){
          $location.path('/create_activity');
      }

      $scope.go_create_activity = function(){
          $location.path('/create_activity');
      };

      $scope.go_activity_sign_up = function(activity_name){
          $location.path('/'+activity_name+'/activity_sign_up');
      };

      $scope.change_color = function(activity_name){
          var activity = Activity.find_activity_by_name(activity_name) ;
          if(activity.state == 1 || Bid.activity_or_recent_exist_bid_on_going(activity) ){
              return "activity-color";
          }
      };

      $scope.activity_list = _(activity_object).pluck('name').reverse() ;

      for(var value in activity_object){
         if( _(activity_object[value].bids).findWhere({bid_state:1}) != undefined ){
           $scope.disabled_create_activity_button = true ;
         }
      }

    var a = [{"name":"王五","phone":"189900971077","price":"6","$$hashKey":"004"},
            {"name":"李四","phone":"189900971078","price":"6","$$hashKey":"005"},
            {"name":"张三","phone":"189900971079","price":"8","$$hashKey":"006"}];
        var sss = _.chain(a)
            .sortBy(function(value){return value.price})
            .pluck('price')
            .countBy()
            .value();
console.log(sss);
        var ss = _.chain(a)
            .sortBy(function(value){return value.price})
            .groupBy(function(value){return value.price})
            .find(function(value){return value.length ==1 })
            .value();
        console.log(ss)




      //  var e = _(d).pick(function(value, key, object){ return _.isNumber(value); })

    });
