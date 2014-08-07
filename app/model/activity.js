function Activity( activity_name) {
    this.name = activity_name;
}
                                                             //存储输入的活动名称
Activity.prototype.save=function(){
    localStorage.setItem("activity_name", this.name);
};
                                                              //返回输入的活动名称,供其他页面使用
Activity.get_activity_name = function () {
    return localStorage.getItem('activity_name');
};
                                                                        //判断localstorage存储的activity是否为空
Activity.judge_activities_arr_empty = function (){
   return (localStorage.getItem('activities_arr') == null);
};
                                                                          //取出存储在localstorage中的activities 并json
Activity.get_all_activities_json=function(){
    return JSON.parse(localStorage.getItem('activities_arr'))
};
                                                                          //判断重复
Activity.judge_duplicate=function(activity_name){
    for (var i = 0 ; i < (Activity.get_all_activities_json()).length ; i++){
        //alert("b");
        var activities_arr = Activity.get_all_activities_json();
        if(activity_name == activities_arr[i].name){
            return true ;
        }
    }
};

Activity.localStorage_activity1=function(activities_arr,activity1){                         //存储数组到localstorage
    activities_arr.unshift(activity1);
    localStorage.setItem('activities_arr', JSON.stringify(activities_arr));
};

//Activity.put_activity_to_localstorage=function(){

//}
//activities_arr.unshift(activity1);
//Activity.localStorage_activity(activities_arr);