function Activity(name) {
    this.name = name ;
    this.state = 0 ;
    this.sign_up = [];
    this.bids = [];
    this.jjnumber = 1 ;
}

Activity.get_object_length = function (object) {
     var count = 0;
     for (var i in object) {
            count++;
     }
        return count;
};

Activity.find_activity_by_recent = function(){
    var recent = JSON.parse(localStorage['recent']);
    var activity_object = JSON.parse( localStorage['activity_object']) || {};
    return  _(activity_object).findWhere({name : recent});
};