function SignUP(name,phone){
    this.name = name;
    this.phone = phone;
}

SignUP.bid_ing = function(){
   var activity_object = JSON.parse( localStorage['activity_object']) || {};
  for(var value in activity_object) {
      if (_(activity_object[value].bids).findWhere({bid_state: 1}) != undefined ) {
          return true;
      }
  }
};

SignUP.localstorage_activity_object = function(activity_object){
    localStorage.setItem('activity_object',JSON.stringify( activity_object));
};

SignUP.localstorage_recent = function(name){
    localStorage.setItem('recent',JSON.stringify(name));
};

SignUP.create_save_new_sign_up_person = function (json_message) {
    var sign_up_person = new SignUP(Message.exact_message_name(json_message),json_message.messages[0].phone);
    var recent = JSON.parse(localStorage['recent']);
    var activity_object = JSON.parse( localStorage['activity_object']) || {};
    var activity =   _(activity_object).findWhere({name : recent});
    activity.sign_up.unshift(sign_up_person);
    localStorage['activity_object'] = JSON.stringify( activity_object);
};

SignUP.sign_up_phone_not_existed = function (phone) {
    var activity = Activity.find_activity_by_recent();
    return _(activity.sign_up).findWhere({phone:phone}) == undefined ;
};
