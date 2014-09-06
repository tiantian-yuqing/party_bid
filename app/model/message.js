/**
 * Created by tiantian on 14-9-1.
 */
function Message() {

}

Message.exact_letter = function(json_message){
    return  json_message.messages[0].message.replace(/[ ]/g,"").slice(0,2).toUpperCase()
};

Message.exact_message_name = function(json_message){
    return  json_message.messages[0].message.replace(/[ ]/g,"").slice(2,8);
};

Message.is_valuable = function(json_message) {
    var message_BM = json_message.messages[0].message.replace(/[ ]/g,"").slice(0,2).toUpperCase();
    return  message_BM == "BM"  &&  SignUP.sign_up_phone_not_existed(json_message.messages[0].phone);
};

Message.JJ_send_message = function(json_message){
    var send_message = "" ;
    if( SignUP.sign_up_phone_not_existed(json_message.messages[0].phone) ){
        send_message = '对不起，您没有报名此次活动！';
        return send_message
    }
    if ( !Bid.activity_or_recent_exist_bid_on_going()){
        send_message = Bid.no_bids_ended() ? '对不起，竞价尚未开始！':'对不起，竞价已结束！';
        return send_message
    }
    send_message = Bid.bid_phone_not_existed(json_message.messages[0].phone)?
        '恭喜！您已出价成功' :'您已成功出价，请勿重复出价！'

        return send_message
};

Message.BM_send_message = function(json_message){
    var activity = Activity.find_activity_by_name();
    var send_message = "" ;
    switch (activity.state ) {
        case 0 : send_message =  '活动尚未开始，请稍候' ;break ;
        case 2 : send_message = 'sorry，报名结束'; break ;
        case 1 : if ( Message.is_valuable(json_message) ) {
                       send_message = '恭喜，报名成功';
                      }
    }
    return send_message
};


Message.process = function (json_message){
    var send_message = "" ;
    if( Message.exact_letter(json_message) == 'BM'){
        send_message = Message.BM_send_message(json_message);
    }
    if( Message.exact_letter(json_message) == 'JJ'){
        send_message = Message.JJ_send_message(json_message);
    }
    if(send_message == '恭喜，报名成功') {
        SignUP.create_save_new_sign_up_person(json_message);
        refresh_sign_up();
    }
    if(send_message == '恭喜！您已出价成功') {
        Bid.create_save_new_bid_person(json_message);
        refresh_price_list();
    }
    return send_message
};