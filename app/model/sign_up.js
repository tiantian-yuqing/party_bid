function SignUP(name,phone){
    this.name = name;
    this.phone = phone;
}

SignUP.message_is_valuable = function(BM_message) {                     //判断报名信息是否有效
    var message_BM = BM_message.message.replace(/[ ]/g," ").slice(0,2).toUpperCase();
    var recent = JSON.parse(localStorage.getItem('recent'));
    var activity_object = JSON.parse(localStorage.getItem('activity_object'));
    var phone_duplicate =( _(activity_object[recent].sign_up).where({phone:BM_message.phone}) != "" );
    return ( message_BM == "BM" && !phone_duplicate )
};

SignUP.localStorage_json_message_name_phone = function(json_message) {    //把发过来的信息的名字和电话号码存进localstorage
    var message_name = json_message.message.replace(/[ ]/g," ").slice(2,8);
    localStorage.setItem('json_message.name',  JSON.stringify(message_name));
    localStorage.setItem('json_message.phone', JSON.stringify( (json_message.phone)));
};

SignUP.get_json_message_name = function() {                              //取出存在localstorage里的信息json_message的名字
    return (JSON.parse(localStorage.getItem('json_message.name')));
};

SignUP.get_json_message_phone = function(){                             //取出存在localstorage里的信息json_message的号码
    return (JSON.parse(localStorage.getItem('json_message.phone')));
};




