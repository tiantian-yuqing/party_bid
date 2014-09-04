/**
 * Created by tiantian on 14-8-22.
 */
function Bidding(name,phone){
    this.name = name;
    this.phone = phone;
}

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

Bidding.exact_price = function(JJ_message){
    return JJ_message.message.replace(/[ ]/g,"").slice(2,8);
};

Bidding.activity_object_exist_bid_on_going = function(){
    var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
    for(var value in activity_object){
        if(( _(activity_object[value].bids).findWhere({bid_state:1}) != undefined )){
            return true
        }
    }
};

Bidding.activity_exist_bid_on_going = function (activity) {
    var activity_1 = activity || Activity.find_activity_by_name();
    return _(activity_1.bids).findWhere({bid_state:1}) != undefined
};

//Bidding.activity_exist_bid_on_going = function () {
//    var activity =  Activity.find_activity_by_name();
//    return _(activity.bids).findWhere({bid_state:1}) != undefined
//};
////
////Bidding.activity_exist_bid_on_going = function (activity) {
////    return _(activity.bids).findWhere({bid_state:1}) != undefined
////};


Bidding.no_bids_ended = function () {
    var activity =  Activity.find_activity_by_name();
    return  _(activity.bids).findWhere({bid_state:2}) == undefined
};

Bidding.bid_phone_not_existed = function (phone) {
    var activity =  Activity.find_activity_by_name();
    return  _(_(activity.bids).findWhere({bid_state:1}).bid_people_list).findWhere({phone:phone}) == undefined
};

Bidding.create_new_bid = function (activity) {
    var biding = new Bid(activity.bid_number);
    activity.bids.unshift(biding);
    activity.bid_number++;
};

Bidding.create_save_new_bid_person = function (json_message) {
    var recent = JSON.parse(localStorage['recent']);
    var activity_object = JSON.parse( localStorage['activity_object']) || {};
    var activity =   _(activity_object).findWhere({name : recent});
    var jj_person = new Bid_person_message();
    jj_person.name  = _(activity.sign_up).findWhere({phone:json_message.messages[0].phone}).name ;
    jj_person.phone = json_message.messages[0].phone ;
    jj_person.price = Bidding.exact_price(json_message.messages[0]);

    _(activity.bids).findWhere({bid_state:1}).bid_people_list.push(jj_person);
    localStorage['activity_object'] = JSON.stringify(activity_object);
};

