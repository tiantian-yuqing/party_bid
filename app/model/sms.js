//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        //console.log(phone, message);
    },
    receive_message: function (message_json) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(message_json);
        }
    },
    process_received_message: function (json_message) {
        var recent = JSON.parse(localStorage.getItem('recent'));
        var activity = Activity.find_by_name(recent);
            if (activity.state == 0) {
                native_accessor.send_sms(json_message.messages[0].phone, '活动尚未开始，请稍候');
            }

            if (activity.state == 1) {
                if (Message.message_is_valuable(json_message.messages[0])) {
                native_accessor.send_sms(json_message.messages[0].phone, '恭喜，报名成功');
                Message.localStorage_json_message_name_phone(json_message.messages[0]);
                location.reload(true);
            }
        }
            if (activity.state == 2) {
                native_accessor.send_sms(json_message.messages[0].phone, 'sorry，报名结束');
            }
        }
};


function notify_message_received(message_json){
    native_accessor.receive_message(message_json);
}


