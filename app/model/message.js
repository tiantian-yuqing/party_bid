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

Message.process = function (json_message){
    var activity = Activity.find_activity_by_recent();
    var send_message = "" ;
    if( Message.exact_letter(json_message) == 'BM'){
        switch (activity.state ) {
            case 0 : send_message =  '活动尚未开始，请稍候' ;break ;
            case 2 : send_message = 'sorry，报名结束'; break ;
            case 1 : if ( Message.is_valuable(json_message) ) {
                          send_message = '恭喜，报名成功';
                          SignUP.create_save_new_sign_up_person(json_message);
                          refresh_sign_up();
                     }
        }
    }

//    if( Message.exact_letter(json_message) == 'JJ'){
//
//        var a = String( SignUP.sign_up_phone_not_existed(json_message.messages[0].phone)) ;
//        var b = String( Bidding.bid_on_going());
//        var c = String( Bidding.bid_phone_not_existed(json_message.messages[0].phone));
//        var t = a+b+c;console(t);
//
//        switch(a+b+c){
//           case 0 : send_message = '对不起，您没有报名此次活动！';break;
//           case 1 : send_message =  Bidding.no_bids_ended() ? '对不起，竞价尚未开始！':'对不起，竞价已结束！';break;
//           case 2 : send_message ='您已成功出价，请勿重复出价！';break;
//           case 3 : send_message = '恭喜！您已出价成功' ;
//                    Bidding.create_save_new_bid_person(json_message);
//                    refresh_price_list();
//        }
//    }
    if( Message.exact_letter(json_message) == 'JJ'){
        if( SignUP.sign_up_phone_not_existed(json_message.messages[0].phone) ){
            send_message = '对不起，您没有报名此次活动！'
        }
        else {
            if ( !Bidding.bid_on_going()){
                send_message = Bidding.no_bids_ended() ? '对不起，竞价尚未开始！':'对不起，竞价已结束！';
            }
            else{
                if( Bidding.bid_phone_not_existed(json_message.messages[0].phone) ){
                    send_message = '恭喜！您已出价成功' ;
                    Bidding.create_save_new_bid_person(json_message);
                    refresh_price_list();
                }
                else{
                    send_message ='您已成功出价，请勿重复出价！'
                }
            }
        }
    }

    return send_message
};

