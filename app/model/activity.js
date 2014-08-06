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

//返回活动列表
Activity.get_all_activities = function () {
    return activities_data
};

