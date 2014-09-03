/**
 * Created by tiantian on 14-8-22.
 */
function Bidding(name,phone){
    this.name = name;
    this.phone = phone;
}

Bidding.message_is_valuable = function(JJ_message) {                     //判断报名信息是否有效
    var message_JJ = JJ_message.message.replace(/[ ]/g,"").slice(0,2).toUpperCase();
    return ( message_JJ == "JJ" )
};

Bidding.exact_price = function(JJ_message){
    return JJ_message.message.replace(/[ ]/g,"").slice(2,8);
};

Bidding.localStorage_json_message_name_phone = function(json_message) {    //把发过来的信息的名字和电话号码存进localstorage
    var message_name = json_message.message.replace(/[ ]/g,"").slice(2,8);
    localStorage.setItem('json_message_jj.name',  JSON.stringify(message_name));
    localStorage.setItem('json_message_jj.phone', JSON.stringify( (json_message.phone)));
};

Bidding.get_json_message_name = function() {                              //取出存在localstorage里的信息json_message的名字
    return (JSON.parse(localStorage.getItem('json_message_jj.name')));
};

Bidding.get_json_message_phone = function(){                             //取出存在localstorage里的信息json_message的号码
    return (JSON.parse(localStorage.getItem('json_message_jj.phone')));
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
    var recent = JSON.parse(localStorage['recent']);
    var activity_object = JSON.parse( localStorage['activity_object']) || {};
    var activity =  _(activity_object).findWhere({name : recent});
    return _(activity.bids).findWhere({bid_state:1}) == undefined
};

Bidding.no_bids_ended = function () {
    var recent = JSON.parse(localStorage['recent']);
    var activity_object = JSON.parse( localStorage['activity_object']) || {};
    var activity =  _(activity_object).findWhere({name : recent});
    return  _(activity.bids).findWhere({bid_state:2}) == undefined
};

Bidding.bid_phone_not_existed = function (phone) {
    var recent = JSON.parse(localStorage['recent']);
    var activity_object = JSON.parse( localStorage['activity_object']) || {};
    var activity =  _(activity_object).findWhere({name : recent});
    return  _(_(activity.bids).findWhere({bid_state:1}).JJ_list).findWhere({phone:phone}) == undefined
};

Bidding.create_save_new_bid_person = function (json_message) {
    var recent = JSON.parse(localStorage['recent']);
    var activity_object = JSON.parse( localStorage['activity_object']) || {};
    var activity =  _(activity_object).findWhere({name : recent});
    var jj_person = new JJ();
    jj_person.name  = _(activity.sign_up).findWhere({phone:json_message.messages[0].phone}).name ;
    jj_person.phone = json_message.messages[0].phone ;
    jj_person.price = Bidding.exact_price(json_message.messages[0]);
    _(activity.bids).findWhere({bid_state:1}).JJ_list.push(jj_person);
    localStorage['activity_object'] = JSON.stringify(activity_object);
};

