/**
 * Created by tiantian on 14-8-22.
 */
function Bid(i){
    this.bid_name  = "竞价"+i ;
    this.bid_state = 1 ;
    this.bid_people_list = [] ;
    this.show_result = false ;
}

function Bid_person_message(name,phone,price){
    this.name = name;
    this.phone = phone ;
    this.price = price ;
}

Bid.exact_price = function(JJ_message){
    return JJ_message.message.replace(/[ ]/g,"").slice(2,8);
};

Bid.activity_object_exist_bid_on_going = function(){
    var activity_object = get_activity_object();
    var flag = false;
    _(activity_object).each(function(element){
       if(  _(element.bids).findWhere({bid_state:1} ) != undefined ){
           flag = true ;
       }
    });
    return  flag
};

Bid.activity_or_recent_exist_bid_on_going = function (activity) {
    var activity_1 = activity || Activity.find_activity_by_name();
    return _(activity_1.bids).findWhere({bid_state:1}) != undefined
};

Bid.no_bids_ended = function () {
    var activity =  Activity.find_activity_by_name();
    return  _(activity.bids).findWhere({bid_state:2}) == undefined
};

Bid.bid_phone_not_existed = function (phone) {
    var activity =  Activity.find_activity_by_name();
    return  _(_(activity.bids).findWhere({bid_state:1}).bid_people_list).findWhere({phone:phone}) == undefined
};

Bid.create_new_bid = function (name) {
    var activity_object = get_activity_object();
    var activity =  _(activity_object).findWhere({name :name});
    var biding = new Bid(activity.bid_number);
    activity.bids.unshift(biding);
    activity.bid_number++;
    save_activity_object(activity_object);
};

Bid.create_save_new_bid_person = function (json_message) {
    var recent = JSON.parse(localStorage['recent']);
    var activity_object = JSON.parse( localStorage['activity_object']) || {};
    var activity =   _(activity_object).findWhere({name : recent});

    var jj_person = new Bid_person_message();
    jj_person.name  = SignUP.find_person_by_phone(json_message.messages[0].phone).name ;
    jj_person.phone = json_message.messages[0].phone ;
    jj_person.price = Bid.exact_price(json_message.messages[0]);

    Bid.on_going(activity).bid_people_list.push(jj_person);
    localStorage['activity_object'] = JSON.stringify(activity_object);
};

Bid.on_going = function(activity){
   return  _(activity.bids).findWhere({bid_state:1})
};

Bid.change_color = function(activity,bid_name){
    if( _(activity.bids).findWhere({bid_name:bid_name}).bid_state == 1){
        return "activity-color";
    }
};

Bid.find_bids = function(routeParams){
    var activity = Activity.find_activity_by_name(routeParams.name);
    return _(activity.bids).findWhere({bid_name:routeParams.bid});
};

Bid.change_bid_state = function(routeParams){
    var activity_object = get_activity_object();
//    var activity = _(activity_object).findWhere({name:routeParams.name});
    Bid.find_bids(routeParams).bid_state = 2;
    save_activity_object( activity_object);
};