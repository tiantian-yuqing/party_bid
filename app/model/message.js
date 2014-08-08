/**
 * Created by tiantian on 14-8-7.
 */
function Message(name,phone){
    this.name = name;
    this.phone = phone;
}

Message.click_start = function(){
    return("结束");

};

Message.click_end = function(){
        return(confirm("是否结束本次报名?"));
};

Message.judge_count = function(count) {
    return((count == 0)?"zero" :(count % 2 == 0) ? "even" : "odd");
};

Message.button = function (count){
    var zero_odd_even = Message.judge_count(count);
    if (zero_odd_even == "odd") {
       return(Message.click_start());
    }
    if (zero_odd_even == "even") {
        if (Message.click_end()) {
            //alert(count);
           return( "开始");
        }
        else {
            count--;
            //alert(count);
            return( "结束");
        }
    }
};