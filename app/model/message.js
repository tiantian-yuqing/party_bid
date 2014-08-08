/**
 * Created by tiantian on 14-8-7.
 */
function Message(name,phone){
    this.name = name;
    this.phone = phone;
}

/*Message.click_start = function(start){
    start = "结束"

};

Message.click_end = function(end){
    var confirm_end = confrim("是否结束本次报名");
    if (confirm_end){
        count-- ;
        end = "开始" ;
    }
};
*/

Message.judge_count=function(count) {
    return((count == 0)?"zero" :(count % 2 == 0) ? "even" : "odd");
};
