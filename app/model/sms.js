//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
        //native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        console.log(phone, message);
        //console.log('flag');
       // alert("hhh");
    },
    receive_message: function (message_json) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(message_json);
        }
    },
    process_received_message: function (json_message,person) {
        // if (!Message.check_apply_status() && Message.check_apply_detail_status()) {
        // native_accessor.send_sms(json_message.messages[0].phone,'活动尚未开始，请稍候。');
        //console.log('活动尚未开始，请稍候。');
        // return;
        var people_list_arr = Message.get_all_people_json();
        if (Message.message_is_valuable(json_message, person, people_list_arr)) {
            var count = Message.get_count();
            if (count == "zero") {
                native_accessor.send_sms(json_message.messages[0].phone, '活动尚未开始，请稍候');
                return false;
            }
            if (count == "odd") {
                native_accessor.send_sms(json_message.messages[0].phone, '恭喜，报名成功');
                return true;
            }
            if (count == "even") {
                native_accessor.send_sms(json_message.messages[0].phone, 'sorry,报名已结束');
                return false;
            }
        }
    }
};

function notify_message_received(message_json) {
    //console.log(JSON.stringify(message_json));
    //console.log(message_json.messages[0].message);
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;
}


