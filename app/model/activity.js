function Activity(name) {
    this.name = name ;
    this.state = 0 ;
    this.sign_up = [];
    this.bids = [];
    this.bid_number = 0 ;
}

Activity.get_object_length = function (object) {
    var count = 0;
    for (var i in object) {
        count++;
    }
        return count;
};

//Activity.find_activity_by_name = function(){
//    var recent = JSON.parse(localStorage['recent']);
//    var activity_object = get_activity_object();
//    return  _(activity_object).findWhere({name : recent});
//};
//
//Activity.find_activity_by_name = function(name){
//    var activity_object = get_activity_object();
//    return  _(activity_object).findWhere({name : name})  ;
//};
Activity.find_activity_by_name = function(name){
    var recent = get_recent();
    var activity_object = get_activity_object();
    return  _(activity_object).findWhere({name :name || recent});
};

Activity.create_new_activity = function(activity_name){
    var activity_object = get_activity_object();
    activity_object[Activity.get_object_length(activity_object)] = new Activity(activity_name);
    localStorage.setItem('activity_object',JSON.stringify( activity_object));
};

Activity.on_going = function(){
    var activity_object = get_activity_object();
    return  _(activity_object).where({state:1}) != "" ;
};