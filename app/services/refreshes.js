/**
 * Created by tiantian on 14-8-27.
 */

var refresh_sign_up = function(){
    var refresh_page = document.getElementById('activity_sign_up_page'); //报名成功后刷新报名页面信息列表
    if(refresh_page){
        var scope = angular.element(refresh_page).scope();
        scope.$apply(function () {
            scope.activity = Activity.find_activity_by_name(scope.routeParams.name);
        });
    }
};

var refresh_price_list = function(){
    var refresh_page = document.getElementById('price_activity');
    if(refresh_page){
        var scope = angular.element(refresh_page).scope();
        scope.$apply(function () {
            var activity_object = JSON.parse( localStorage.getItem('activity_object')) ;
            var activity = _(activity_object).findWhere({name : scope.routeParams.name});
            scope.current_bid =  _(activity.bids).findWhere({bid_name:scope.routeParams.bid});
        });
    }

};

var refresh_result_model = function(){
    var refresh_page = document.getElementById('price_result'); console.log("!")
    if(refresh_page){
        var scope = angular.element(refresh_page).scope();
         scope.$apply(function () {
             scope.show_footer = true ;
        })

    }

};