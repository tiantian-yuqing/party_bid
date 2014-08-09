/**
 * Created by tiantian on 14-8-7.
 */
function Message(name,phone){
    this.name = name;
    this.phone = phone;
}

Message.click_start = function(){                                //点击开始按钮
    return("结束");

};

Message.click_end = function(){                                 //点击结束按钮
    return(confirm("是否结束本次报名?"));
};

Message.judge_count = function() {                             //判断点击次数的奇偶数
    var count = Message.get_count();
    return((count == 0)? "zero" :(count % 2 == 0) ? "even" : "odd");
};

Message.start_or_end = function (){                                //开始按钮的显示
    var count = Message.get_count();
    var zero_odd_even = Message.judge_count(count);
    if (zero_odd_even == "odd") {
          return( "结束");
    }
    if (zero_odd_even == "even") {
       return(Message.count_is_even (count));
    }
};

Message.count_is_even = function (count){                          //点击次数是偶数时怎么处理
    if (Message.click_end()) {
        return( "开始");
    }
    else {
        count--;
        Message.localStorage_count();
        return( "结束");
    }
};

Message.localStorage_count = function(){                              //把count存进localstorage
    localStorage.setItem('count', count);
};

Message.get_count = function(){                                       //从localstorage取出count
    return(localStorage.getItem('count'));
};

Message.delete_space = function(message){                            //删除报名信息的空格
    return (message.replace(/[ ]/g," "));
};

Message.extract_name = function(message){                             //提取报名信息里的名字
    Message.delete_space(message);
    return(message.slice(2));
};

Message.extract_bm = function(message){                              //提取报名信息里的字母
    return(message.slice(0,2));
};

Message.bm_to_BM = function(message){                                 //把字母全部转换为大写
    return(message.toUpperCase);
};

Message.judge_phone_duplicate=function(phone, people_list_arr) {             //判断电话重复
    for (var i = 0 ; i < (people_list_arr.length) ; i++){
        return (phone == people_list_arr[i].name);
    }
};

Message.judge_name_duplicate = function(name, people_list_arr) {             //判断名字重复
    for (var i = 0 ; i < (people_list_arr.length) ; i++){
        return (name == people_list_arr[i].name);
    }
};

Message.message_is_valuable = function(message,person) {             //判断报名信息是否有效
    if (Message.bm_to_BM(Message.extract_bm(message)) == "BM") {
        var people_list_arr = Message.get_all_people_json();
        if(!Message.judge_name_duplicate( person.name, people_list_arr)){
           return true
       }
       else {
           return(!Message.judge_phone_duplicate(person.phone, people_list_arr));
       }
    }
};

Message.get_all_people_json = function(){                                   //取出存储在localstorage中的数组 并json
    return JSON.parse(localStorage.getItem('people_list_arr'))
};

Message.localStorage_person = function(people_list_arr,person){              //存储实例到localstorage
    if (native_accessor.process_received_message) {
        people_list_arr.unshift(person);
        localStorage.setItem('people_list_arr', JSON.stringify(people_list_arr));
    }
};

Message.localStorage_json_message = function() {                            //把发过来的信息json_message存进localstorage
    localStorage.setItem('json_message', JSON.stringify(json_message));
};

Message.get_json_message = function() {                                     //取出存在localstorage里的信息json_message
    JSON.parse(localStorage.getItem('json_message'));
};