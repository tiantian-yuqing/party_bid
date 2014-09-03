/**
 * Created by tiantian on 14-9-1.
 */
function Message() {
    this.recent = JSON.parse(localStorage['recent']);
    this.activity_object = JSON.parse( localStorage['activity_object']) || {};
    this.activity =  _( this.activity_object).findWhere({name :  this.recent});
}

Message.exact_letter = function(json_message){
    return  json_message.messages[0].message.replace(/[ ]/g,"").slice(0,2).toUpperCase()
};

Message.exact_message_name = function(json_message){
    return json_message.messages[0].message.replace(/[ ]/g,"").slice(2,8);
};

Message_is_valuable = function(json_message) {                     //判断报名信息是否有效
    var message_BM = json_message.messages[0].message.replace(/[ ]/g,"").slice(0,2).toUpperCase();
    var phone_duplicate =( _(_(this.activity_object).findWhere({name:this.recent}).sign_up).where({phone:json_message.messages[0].phone}) != "" );
    return  message_BM == "BM" && !phone_duplicate
};

Message.process = function (json_message){
    var send_message = "" ;
    if( Message.exact_letter(json_message) == 'BM'){
        switch (this.activity.state){
            case 0 : send_message =  '活动尚未开始，请稍候' ; break ;
            case 2 : send_message = 'sorry，报名结束'; break ;
            case 1 : if ( Message_is_valuable(json_message) ) {
                          send_message = '恭喜，报名成功';
                          SignUP.create_save_new_sign_up_person(json_message);
                          refresh_sign_up();
                     }
        }
    }

    if( Message.exact_letter(json_message) == 'JJ'){
        if( SignUP.sign_up_phone_not_existed(json_message.messages[0].phone) ){
            send_message = '对不起，您没有报名此次活动！'
        }
        else {
            if ( Bidding.no_bids_on_going()){
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


