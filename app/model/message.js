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

Message.click_end = function(count){
        return(confirm("是否结束本次报名?"));
};

Message.judge_count=function(count) {
    return((count == 0)?"zero" :(count % 2 == 0) ? "even" : "odd");
};

