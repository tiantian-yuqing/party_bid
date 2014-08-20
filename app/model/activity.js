function Activity( activity_name) {
    this.name = activity_name;
    this.state = 0 ;
    this.people_list_arr = [];
}

Activity.judge_activities_arr_empty = function (){                          //判断localstorage存储的activity是否为空
   var activities = JSON.parse(localStorage.getItem('activities_arr'));
   return (activities == null);
};

Activity.judge_duplicate = function(activity_name){                          //判断活动名称重复
    var activities_arr = JSON.parse(localStorage.getItem('activities_arr')) || [];
    return ( activities_arr.where({name:activity_name}) != null );
};

Activity.localStorage_activity1 = function(activity1){                         //存储实例到localstorage
    var activities_arr = JSON.parse(localStorage.getItem('activities_arr')) || [];
    activities_arr.unshift(activity1);
    localStorage.setItem('activities_arr', JSON.stringify(activities_arr));
};

Activity.find_by_name = function (name) {                                       //找到当前活动
    var activities = JSON.parse(localStorage.getItem('activities_arr'));
    return _(activities).findWhere({name:name});
};


Activity.update_state = function (activity){                                        //更新状态
    var activities = JSON.parse(localStorage.getItem('activities_arr'));
    _(activities).findWhere({name:activity.name}).state = activity.state;

    localStorage.setItem('activity', JSON.stringify(activity));
    localStorage.setItem('activities_arr', JSON.stringify(activities));
    localStorage.setItem('recent', JSON.stringify(activity.name));
};

Activity.update_people_list  = function (activity){                                    //更新人员列表
    var activities = JSON.parse(localStorage.getItem('activities_arr'));
    _(activities).findWhere({name:activity.name}).people_list_arr = activity.people_list_arr;
    localStorage.setItem('activities_arr', JSON.stringify(activities));
};

Activity.on_going = function () {                                                     //判断是否有别的活动在进行
    var activities = JSON.parse(localStorage.getItem('activities_arr'));
    return ( _(activities).where({state:1}) != null );
};

Activity.judge_localStorage_recent = function(activity1) {
    var activities = JSON.parse(localStorage.getItem('activities_arr'));
    if (_(activities).where({state: 1}) == null) {
    localStorage.setItem('recent', JSON.stringify(activity1.name));
    }
};
