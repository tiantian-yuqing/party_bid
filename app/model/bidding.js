/**
 * Created by tiantian on 14-8-22.
 */
function Bidding(name,phone){
    this.name = name;
    this.phone = phone;
}

Bidding.message_is_valuable = function(JJ_message) {                     //判断报名信息是否有效
    var message_JJ = JJ_message.message.replace(/[ ]/g," ").slice(0,2).toUpperCase();
    return ( message_JJ == "JJ" )
};

Bidding.exact_price = function(JJ_message){
    return JJ_message.message.replace(/[ ]/g," ").slice(2,8);
};

Bidding.localStorage_json_message_name_phone = function(json_message) {    //把发过来的信息的名字和电话号码存进localstorage
    var message_name = json_message.message.replace(/[ ]/g," ").slice(2,8);
    localStorage.setItem('json_message_jj.name',  JSON.stringify(message_name));
    localStorage.setItem('json_message_jj.phone', JSON.stringify( (json_message.phone)));
};

Bidding.get_json_message_name = function() {                              //取出存在localstorage里的信息json_message的名字
    return (JSON.parse(localStorage.getItem('json_message_jj.name')));
};

Bidding.get_json_message_phone = function(){                             //取出存在localstorage里的信息json_message的号码
    return (JSON.parse(localStorage.getItem('json_message_jj.phone')));
};




