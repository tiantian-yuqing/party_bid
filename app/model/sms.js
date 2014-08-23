//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
        //native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        console.log(phone, message);
    },
    receive_message: function (message_json) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(message_json);
        }
    },
    process_received_message: function (json_message) {
        var recent = JSON.parse(localStorage.getItem('recent'));
        var activity_object = JSON.parse( localStorage.getItem('activity_object')) || {};
        var activity = _(activity_object).findWhere({name:recent});
        if( json_message.messages[0].message.replace(/[ ]/g," ").slice(0,2).toUpperCase() == "BM"){
            if (activity.state == 0) {
                native_accessor.send_sms(json_message.messages[0].phone, '活动尚未开始，请稍候');
            }

            if (activity.state == 1) {
                if (SignUP.message_is_valuable(json_message.messages[0])) {
                     native_accessor.send_sms(json_message.messages[0].phone, '恭喜，报名成功');
                     SignUP.localStorage_json_message_name_phone(json_message.messages[0]);
                     location.reload(true);
                }
            }

            if (activity.state == 2) {
                native_accessor.send_sms(json_message.messages[0].phone, 'sorry，报名结束');
            }
        }
        var send_message = "";
        if( json_message.messages[0].message.replace(/[ ]/g," ").slice(0,2).toUpperCase() == "JJ"){
               if(_(activity.sign_up).findWhere({phone:json_message.messages[0].phone}) == undefined){
                   send_message = '对不起，您没有报名此次活动！'
               }
               else {
                    if (_(activity.bids).findWhere({bid_state:1}) == undefined){
                        send_message = _(activity.bids).findWhere({bid_state:2}) == undefined? '对不起，竞价尚未开始！':'对不起，竞价已结束！';
                    }
                    else{
                      for(var value in activity.bids){
                         console.log(activity.bids);
                         console.log(value);//0
                         console.log(activity.bids[value].JJ_list);
                        if( _(activity.bids[value].JJ_list).findWhere({phone:json_message.messages[0].phone}) == undefined){
                            send_message = '恭喜！您已出价成功' ;
                        }
                        else{
                            send_message ='您已成功出价，请勿重复出价！'
                        }
                      }
                    }
               }

              if( send_message == '恭喜！您已出价成功'){
                var jj_person = new JJ();////
                    jj_person.name  = _(activity.sign_up).findWhere({phone:json_message.messages[0].phone}).name ;
                    jj_person.phone = json_message.messages[0].phone ;
                    jj_person.price = Bidding.exact_price(json_message.messages[0]);

                  _(activity.bids).findWhere({bid_state:1}).JJ_list.push(jj_person);
                  localStorage.setItem('activity_object',JSON.stringify(activity_object));
                  location.reload(true);
              }

            native_accessor.send_sms(json_message.messages[0].phone, send_message);
        }

    }
};


function notify_message_received(message_json){
    native_accessor.receive_message(message_json);
}


