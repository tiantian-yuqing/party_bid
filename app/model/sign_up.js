function SignUP(name,phone){
    this.name = name;
    this.phone = phone;
    this.recent = JSON.parse(localStorage['recent']);
    this.activity_object = JSON.parse( localStorage['activity_object']) || {};
    this.activity =  _( this.activity_object).findWhere({name :  this.recent});
}

SignUP.bid_ing = function(){
  var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
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
    this.activity.sign_up.unshift(sign_up_person);
    localStorage['activity_object'] = JSON.stringify( this.activity_object);
};

SignUP.sign_up_phone_not_existed = function (phone) {
    return _(this.activity.sign_up).findWhere({phone:phone}) == undefined
};
