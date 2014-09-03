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
    this.JJ_list = [] ;
    this.show_result = false ;
}

function JJ(name,phone,price){
    this.name = name;
    this.phone = phone ;
    this.price = price ;
}

Bidding.exact_price = function(JJ_message){
    return JJ_message.message.replace(/[ ]/g,"").slice(2,8);
};

Bidding.judge_disable = function(){
    var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
    for(var value in activity_object){
        if(( _(activity_object[value].bids).findWhere({bid_state:1}) != undefined )){
            return true
        }
    }
};

Bidding.get_activity_object = function(){
    return  JSON.parse( localStorage.getItem('activity_object')) || {};
};

Bidding.bid_on_going = function () {
    var activity =  Activity.find_activity_by_recent();
    return _(activity.bids).findWhere({bid_state:1}) != undefined
};

Bidding.no_bids_ended = function () {
    var activity =  Activity.find_activity_by_recent();
    return  _(activity.bids).findWhere({bid_state:2}) == undefined
};

Bidding.bid_phone_not_existed = function (phone) {
    var activity =  Activity.find_activity_by_recent();
    return  _(_(activity.bids).findWhere({bid_state:1}).JJ_list).findWhere({phone:phone}) == undefined
};

Bidding.create_save_new_bid_person = function (json_message) {
    var recent = JSON.parse(localStorage['recent']);
    var activity_object = JSON.parse( localStorage['activity_object']) || {};
    var activity =   _(activity_object).findWhere({name : recent});
    var jj_person = new JJ();
    jj_person.name  = _(activity.sign_up).findWhere({phone:json_message.messages[0].phone}).name ;
    jj_person.phone = json_message.messages[0].phone ;
    jj_person.price = Bidding.exact_price(json_message.messages[0]);

    _(activity.bids).findWhere({bid_state:1}).JJ_list.push(jj_person);
    localStorage['activity_object'] = JSON.stringify(activity_object);
};

