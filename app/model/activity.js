function Activity(name) {
    this.name = name ;
    this.state = 0 ;
    this.sign_up = [];
    this.bids = [];
    this.bid_number = 1 ;
}

Activity.get_object_length = function (object) {
    var count = 0;
    for (var i in object) {
        count++;
    }
        return count;
};


Activity.find_activity_by_name = function(name){
    var recent = get_recent();
    var activity_object = get_activity_object();
    return  _(activity_object).findWhere({name :name || recent});
};

Activity.prototype.create_new_activity = function(){
    var activity_object = get_activity_object();
    activity_object[Activity.get_object_length(activity_object)] = this;
//    console.log(this);
//        new Activity(activity_name);
    save_activity_object(activity_object);
};

Activity.on_going = function(){
    var activity_object = get_activity_object();
    return  _(activity_object).where({state:1}) != "" ;
};

Activity.change_color = function(activity_name) {
    var activity = Activity.find_activity_by_name(activity_name);
    if (activity.state == 1 || Bid.activity_or_recent_exist_bid_on_going(activity)) {
        return "activity-color";
    }
};