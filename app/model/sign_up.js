function SignUP(name,phone){
    this.name = name;
    this.phone = phone;
}

SignUP.create_save_new_sign_up_person = function (json_message) {
    var recent = JSON.parse(localStorage['recent']);
    var activity_object = JSON.parse( localStorage['activity_object']) || {};
    var activity =   _(activity_object).findWhere({name : recent});
    var sign_up_person = new SignUP(Message.exact_message_name(json_message),json_message.messages[0].phone);

    activity.sign_up.unshift(sign_up_person);
    localStorage['activity_object'] = JSON.stringify( activity_object);
};

SignUP.sign_up_phone_not_existed = function (phone) {
    var activity = Activity.find_activity_by_name();
    return _(activity.sign_up).findWhere({phone:phone}) == undefined ;
};

SignUP.find_person_by_phone = function(phone){
    var recent = JSON.parse(localStorage['recent']);
    var activity_object = JSON.parse( localStorage['activity_object']) || {};
    var activity =   _(activity_object).findWhere({name : recent});
    return _(activity.sign_up).findWhere({phone:phone})
};