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

Message.judge_count = function(count) {                         //判断点击次数的奇偶数
    return((count == 0)?"zero" :(count % 2 == 0) ? "even" : "odd");
};

Message.button = function (count){                              //开始按钮的显示
    var zero_odd_even = Message.judge_count(count);
    if (zero_odd_even == "odd") {
          return( "结束");
    }
    if (zero_odd_even == "even") {
       return(Message.count_is_even (count));
    }
        /*if (Message.click_end()) {
            //alert(count);
           return( "开始");
        }
        else {
            count--;
            //alert(count);
            return( "结束");
        }
    }*/
};

Message.count_is_even = function (count){
    if (Message.click_end()) {
        //alert(count);
        return( "开始");
    }
    else {
        //count--;
        //alert(count);
        return( "结束");
    }
};

Message.ddd = function(count){
     count = Message.sss(count);
     return(count);
};

Message.sss = function(count){                                           //强制把count转为奇数
    if( Message.judge_count(count)=="even"){
        count--;
    }
    return (count);
};

Message.delete_space = function(message){
  return (message.replace(/[ ]/g," "));
};

Message.extract_name = function(message){
    return(message.slice(2));
};

Message.extract_bm = function(message){
    return(message.slice(0,2));
};

Message.bm_to_BM = function(message){
  return(message.toUpperCase);
};

Message.message_is_valuble = function(message,name,phone, people_list_arr) {
    if (Message.bm_to_BM(Message.extract_bm(message)) == "BM") {
       if(!Activity.judge_name_duplicate(name, people_list_arr)){
           return true
       }
       else {
           return(!Activity.judge_phone_duplicate(phone, people_list_arr));
       }
    }
};

Activity.judge_phone_duplicate=function(phone, people_list_arr) {             //判断重复
    for (var i = 0 ; i < (people_list_arr.length) ; i++){
        return (phone == people_list_arr[i].name);
    }
};

Activity.judge_name_duplicate=function(name, people_list_arr) {             //判断重复
    for (var i = 0 ; i < (people_list_arr.length) ; i++){
        return (name == people_list_arr[i].name);
    }
};

Message.get_all_people_json=function(){                                  //取出存储在localstorage中的数组 并json
    return JSON.parse(localStorage.getItem('people_list_arr'))
};

Message.localStorage_person=function(people_list_arr,person){             //存储实例到localstorage
    people_list_arr.unshift(person);
    localStorage.setItem('people_list_arr', JSON.stringify(people_list_arr));
};

