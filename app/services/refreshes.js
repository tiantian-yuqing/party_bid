/**
 * Created by tiantian on 14-8-27.
 */

var refresh_sign_up = function(){
    var refresh_page = document.getElementById('activity_sign_up_page'); //报名成功后刷新报名页面信息列表
    if(refresh_page){
        var scope = angular.element(refresh_page).scope();
        scope.$apply(function () {
            var recent = JSON.parse( localStorage.getItem('recent')) ;
            var activity_object = JSON.parse( localStorage.getItem('activity_object')) ;
            scope.activity_list = _.find(activity_object,function(activity){
                return activity.name == recent}).sign_up;

            console.log(scope.activity_list);
        });
    }
};

var refresh_price_list = function(){
    console.log('run refresh');
    var refresh_page = document.getElementById('price_activity');
    if(refresh_page){
        var scope = angular.element(refresh_page).scope();

        scope.$apply(function () {
            var recent = JSON.parse( localStorage.getItem('recent')) ;
            var activity_object = JSON.parse( localStorage.getItem('activity_object')) ;

            scope.jj_list = _(_(activity_object).findWhere({name:scope.routeParams.name}).bids).findWhere({bid_name:scope.routeParams.bid}).JJ_list;

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