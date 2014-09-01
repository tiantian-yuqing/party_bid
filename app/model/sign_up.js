function SignUP(name,phone){
    this.name = name;
    this.phone = phone;
}

SignUP.message_is_valuable = function(BM_message) {                     //判断报名信息是否有效
    var message_BM = BM_message.message.replace(/[ ]/g,"").slice(0,2).toUpperCase();
    var recent = JSON.parse(localStorage.getItem('recent'));
    var activity_object = JSON.parse(localStorage.getItem('activity_object'));
    var phone_duplicate =( _(_(activity_object).findWhere({name:recent}).sign_up).where({phone:BM_message.phone}) != "" );
    return ( message_BM == "BM" && !phone_duplicate )
};

SignUP.get_json_message_name = function(json_message){
    return json_message.message.replace(/[ ]/g,"").slice(2,8);
};

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