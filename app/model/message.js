/**
 * Created by tiantian on 14-8-7.
 */
function Message(name,phone){
    this.name = name;
    this.phone = phone;
}

Message.click_start = function(){                                     //点击开始按钮
    return("结束");

};

Message.click_end = function(){                                       //点击结束按钮
    return(confirm("是否结束本次报名?"));
};

Message.judge_count = function() {      //alert("a");                 //判断点击次数的奇偶数
    var count = Message.get_count()|| 0;
    return((count == 0)? "zero" :(count % 2 == 0) ? "even" : "odd");
};

Message.start_or_end = function (){                                    //开始按钮的显示
    var count = Message.get_count()|| 0;
    var zero_odd_even = Message.judge_count();
    if (zero_odd_even == "zero"){
          return( "开始");
    }
    if (zero_odd_even == "odd") {
          return( "结束");
    }
    if (zero_odd_even == "even") {
          return(Message.count_is_even (count));
    }
};

Message.count_is_even = function (count){                             //点击次数是偶数时怎么处理
    if (Message.click_end()) {
        return( "开始");
    }
    else {
        count--;
        Message.localStorage_count(count);
        return( "结束");
    }
};

Message.localStorage_count = function(count){                         //把count存进localstorage
    localStorage.setItem('count', count);
};

Message.get_count = function(){                                       //从localstorage取出count
    return(localStorage.getItem('count'));
};

Message.delete_space = function(message){
   // alert (message.replace(/[ ]/g," "));                           //删除报名信息的空格
    return (message.replace(/[ ]/g," "));
};

Message.extract_name = function(message){  //alert("s") ;              //提取报名信息里的名字
    //alert(Message.delete_space(message));
    return(Message.delete_space(message).slice(2,8));
};

Message.extract_bm = function(message){      //alert("u");             //提取报名信息里的字母
   // alert( Message.delete_space(message).slice(0,2));
    return( Message.delete_space(message).slice(0,2));
};

Message.bm_to_BM = function(message){           //alert("u");            //把字母全部转换为大写
     //alert(Message.extract_bm(message).toUpperCase());
    return(Message.extract_bm(message).toUpperCase());
};

Message.judge_phone_duplicate = function(BM_message) {                    //判断电话重复
    var people_list_arr = Message.get_all_people_json();
    for (var i = 0 ; i < (people_list_arr.length) ; i++){
        if (BM_message.phone == people_list_arr[i].phone){
            break;
        }
    }
    //alert  (! (i == people_list_arr.length) );
    return (! (i == people_list_arr.length) );
};

Message.judge_name_duplicate = function(message) {                      //判断名字重复
    var people_list_arr = Message.get_all_people_json()|| [];
    for (var i = 0 ; i < ( people_list_arr.length ) ; i++){
        if(Message.extract_name(message) == people_list_arr[i].name){
            break;
        }
    }
    //alert  (! (i == people_list_arr.length ));
    return (! (i == people_list_arr.length ));
};

Message.message_is_valuable = function(BM_message) {                       //判断报名信息是否有效
    if (Message.bm_to_BM(Message.extract_bm(BM_message.message)) == "BM") { //alert("u");
        if(!Message.judge_name_duplicate(BM_message.message)){        //alert("u")
           //alert(!Message.judge_name_duplicate(message));
           return true
       }
       else { //alert("u") ;
           //alert(!Message.judge_phone_duplicate(message));//alert("uu")
           return(!Message.judge_phone_duplicate(BM_message));
       }
    }
};

Message.get_all_people_json = function(){   // alert("kk")                  //取出存储在localstorage中的数组 并json
    return JSON.parse(localStorage.getItem('people_list_arr'))
};

Message.localStorage_person = function (people_list_arr,person){             //把实例存进localstorage
    people_list_arr.unshift(person);
    localStorage.setItem('people_list_arr', JSON.stringify(people_list_arr));
};

Message.localStorage_json_message_name_phone = function(json_message) {  //alert("b");     //把发过来的信息的名字和电话号码存进localstorage
    localStorage.setItem('json_message.name',  JSON.stringify( Message.extract_name(json_message.message)));
    localStorage.setItem('json_message.phone', JSON.stringify( (json_message.phone)));
};

Message.get_json_message_name = function() {  //alert(JSON.parse(localStorage.getItem('json_message.name')));                       //取出存在localstorage里的信息json_message的名字
    return (JSON.parse(localStorage.getItem('json_message.name')));
};

Message.get_json_message_phone = function(){
  return (JSON.parse(localStorage.getItem('json_message.phone')));
};
