'use strict';

angular.module('testApp')
    .controller('createActivityCtrl', function ($scope, $location) {


//       var a ={1:{age:11,name:{sex:9,num:0}},2:{age:22,name:2},3:{age:33}};//console.log(_.keys(a));
//       var b = [8,9,0];
//        var c =[{age:11,name:1},{age:22,name:2},{age:33}];
      // console.log(_.where(b,0));
//       console.log(_.where(_.keys(a),33));
      //  console.log(_(a).where({name:1}));//[Object]数组  {age: 11, name: 1}
       // console.log(_(a).where({age:22}));////[Object]数组  {age:22,name:2}
  //       console.log(_(a).where({age:22,name:2}));//[Object]数组  {age:22,name:2}
     //   console.log(_(c).where({age:22,name:2}));//[Object]数组  {age:22,name:2}
     //   console.log(_(c).where({age:22}));//[Object]数组  {age:22,name:2}
       // console.log(_(a).where({sex:9}));//[]
       // console.log(_(a).where({age:11}));//[Object]数组 {age:11,name:{sex:9,num:0}}
       // console.log(_(_(a).where({age:11})).where({num:0}));//[]
//        console.log(_(b).where(0));//b
//        console.log(_(b).where(2));//b
//        console.log(_(b).where(name));//b
//        console.log(_(b).where());//b

//        console.log(_(b).filter(function(num){
//           return num == 8 ;
//        }));//[8]
//        console.log(_(a).filter(function(num){
//            return num == 1 ;
//        }));//[]
//        console.log(_(a).filter(function(num){
//            return num.name == 1 ;
//        }));//[Object]数组  {age: 11, name: 1}




       // console.log(_(a).where(1));//a
       // console.log(_(a).where(name));//a

//       console.log(_(a).where({age:1}));
//      var value;
//        for(value in a){
//         if(value == 1){
//            console.log(a[value])
//        }
//       }

        var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
        $scope.back_to_activity_list = function (){
            $location.path('/activity_list');
        };

        $scope.show_back_button = function(){
            return activity_object != "" ;
        };

        $scope.go_activity_sign_up = function(){
            if( _(activity_object).where({name:$scope.activity_name})!="" ){
                $scope.warning = true ;
            }
            else{
                activity_object[$scope.activity_name] = new Activity($scope.activity_name);
                localStorage.setItem('activity_object',JSON.stringify( activity_object));
                $location.path('/activity_sign_up/' + $scope.activity_name);
            }
            if(_(activity_object).where({state:1}) == ""){
                localStorage.setItem('recent', JSON.stringify(activity_object[$scope.activity_name].name));
            }
           // console.log(activity_object);

         };

    });














