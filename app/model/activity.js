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
    for (var i = 0 ; i < (activities_arr.length) ; i++) {
        if (activity_name == activities_arr[i].name) {
            break;
        }
    }
    return (! (i ==activities_arr.length) );
};

Activity.localStorage_activity1 = function(activity1){                         //存储实例到localstorage
    var activities_arr = JSON.parse(localStorage.getItem('activities_arr')) || [];
    activities_arr.unshift(activity1);
    localStorage.setItem('activities_arr', JSON.stringify(activities_arr));
};

Activity.find_by_name = function (name) {                                       //找到当前活动
  var activities = JSON.parse(localStorage.getItem('activities_arr'));
    for(var i = 0; i<activities.length; i++){
        if(name == activities[i].name){
            return activities[i];
        }
    }
};

Activity.update_state = function (activity){                                        //更新状态
    var activities = JSON.parse(localStorage.getItem('activities_arr'));
    for(var i = 0; i<activities.length; i++){
        if(activity.name == activities[i].name){
            activities[i].state = activity.state;
        }
    }
    localStorage.setItem('activity', JSON.stringify(activity));
    localStorage.setItem('activities_arr', JSON.stringify(activities));
    localStorage.setItem('recent', JSON.stringify(activity.name));
};

Activity.update_people_list  = function (activity){                                    //更新人员列表
    var activities = JSON.parse(localStorage.getItem('activities_arr'));
    for(var i = 0; i<activities.length; i++){
        if(activity.name == activities[i].name){
            activities[i].people_list_arr = activity.people_list_arr;
        }
    }
    localStorage.setItem('activities_arr', JSON.stringify(activities));
};

Activity.on_going = function () {                                                     //判断是否有别的活动在进行
    var activities = JSON.parse(localStorage.getItem('activities_arr'));
    for(var i = 0; i<activities.length; i++){
        if(activities[i].state == 1){
            return true;
        }
    }
    return false;
};

