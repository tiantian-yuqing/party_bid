function Message(name,phone){
    this.name = name;
    this.phone = phone;
}

Message.delete_space = function(message){                             //删除报名信息的空格
    return (message.replace(/[ ]/g," "));
};
Message.extract_name = function(message){                            //提取报名信息里的名字
    return(Message.delete_space(message).slice(2,8));
};
Message.extract_bm = function(message){                                 //提取报名信息里的字母
    return( Message.delete_space(message).slice(0,2));
};
Message.bm_to_BM = function(message){                                    //把字母全部转换为大写
    return(Message.extract_bm(message).toUpperCase());
};
Message.judge_phone_duplicate = function(BM_message) {                    //判断电话重复
    var people_list_arr = Message.get_all_people_json()||[];
    for (var i = 0 ; i < (people_list_arr.length) ; i++){
        if (BM_message.phone == people_list_arr[i].phone){
            break;
        }
    }
    return (! (i == people_list_arr.length) );
};
Message.message_is_valuable = function(BM_message) {                       //判断报名信息是否有效
    if (Message.bm_to_BM(Message.extract_bm(BM_message.message)) == "BM") { //alert("u");
        return (!Message.judge_phone_duplicate(BM_message));
    }
};




Message.localStorage_json_message_name_phone = function(json_message) {   //把发过来的信息的名字和电话号码存进localstorage
    localStorage.setItem('json_message.name',  JSON.stringify( Message.extract_name(json_message.message)));
    localStorage.setItem('json_message.phone', JSON.stringify( (json_message.phone)));
};

Message.get_json_message_name = function() {                              //取出存在localstorage里的信息json_message的名字
    return (JSON.parse(localStorage.getItem('json_message.name')));
};

Message.get_json_message_phone = function(){
    return (JSON.parse(localStorage.getItem('json_message.phone')));
};


