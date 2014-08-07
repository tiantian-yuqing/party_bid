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
Activity.judge_duplicate=function(activity_name,activities_arr){
    for (var i = 0 ; i < (activities_arr.length) ; i++){
        return (activity_name == activities_arr[i].name);
    }
};

Activity.localStorage_activity1=function(activities_arr,activity1){                         //存储实例到localstorage
    activities_arr.unshift(activity1);
    localStorage.setItem('activities_arr', JSON.stringify(activities_arr));
};

