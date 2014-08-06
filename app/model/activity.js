function Activity(activity_name) {
    this.name = activities_name;
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
Activity.judge_activity_empty = function (){
   return (localStorage.getItem('activities') == null)
   };
                                                                           //取出存储在localstorage中的activities
Activity.get_all_activities=function() {
    return localStorage.getItem('activities')
};
                                                                          //取出存储在localstorage中的activities 并json
Activity.get_all_activities_json=function(){
    return JSON.parse(localStorage.getItem('activities'))
};
                                                                          //判断重复
Activity.judge_duplicate=function(activity_name){
    for (var i=0 ; i < (Activity.get_all_activities_json().length) ; i++){
        var activities = Activity.get_all_activities_json();
        if(activity_name == activities[i]){
            return true ;
        }
    }

};

Activity.unshift=function(activities_name){                                     //把输入的activities_name存进数组
   activities.unshift(activity_name);
};

Activity.localStorage_activity=function(){                                      //存储数组到localstorage
    localStorage.setItem('activities', JSON.stringify(activities));
};