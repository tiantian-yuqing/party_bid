function Activity( activity_name) {
    this.name = activity_name;
    this.state = 0 ;
    this.people_list_arr = [];
}

Activity.judge_activities_arr_empty = function (){                          //判断localstorage存储的activity是否为空
   return (Activity.get_all_activities_json() == null);
};

Activity.get_all_activities_json = function(){                                //取出存储在localstorage中的activities 并json
    return JSON.parse(localStorage.getItem('activities_arr'))
};

Activity.judge_duplicate = function(activity_name,activities_arr){           //判断重复
    for (var i = 0 ; i < (activities_arr.length) ; i++) {
        if (activity_name == activities_arr[i].name) {
            break;
        }
    }
    return (!i ==activities_arr.length );
};

Activity.localStorage_activity1 = function(activities_arr,activity1){          //存储实例到localstorage
    activities_arr.unshift(activity1);
    localStorage.setItem('activities_arr', JSON.stringify(activities_arr));
};

Activity.find_by_name = function (name) {
  var activities = JSON.parse(localStorage.getItem('activities_arr'));
    for(var i = 0; i<activities.length; i++){
        if(name == activities[i].name){
            return activities[i];
        }
    }
};

Activity.update_state = function (activity){
    var activities = JSON.parse(localStorage.getItem('activities_arr'));
    for(var i = 0; i<activities.length; i++){
        if(activity.name == activities[i].name){
            activities[i].state = activity.state;
        }
    }
    localStorage.setItem('activity', JSON.stringify(activity));
    localStorage.setItem('activities_arr', JSON.stringify(activities));
};

Activity.on_going = function () {
    var activities = JSON.parse(localStorage.getItem('activities_arr'));
    for(var i = 0; i<activities.length; i++){
        if(activities[i].state == 1){
            return true;
        }
    }
    return false;
}

//Activity.find_activity_position = function(){                                  //获取点击的活动在数组中的位置
//    if( activity == null){
//        return 0 ;
//    }
//    for (var i = 0 ; i < (activities_arr.length) ; i++) {
//        if(activities_arr[i].name == activity.name ){//alert("i");
//            return i ;
//        }
//    }
//};

