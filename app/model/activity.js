function Activity(name) {
    this.name = name ;
    this.state = 0 ;
    this.sign_up = [];
    this.bids = [];
    this.jjnumber = 1 ;

}

function Bid(i){
    this.bid_name  = "竞价"+i ;
    this.bid_state = 1 ;
    this.JJ_list = [] ;
    this.show_result = false ;
}

function JJ(name,phone,price){
    this.name = name;
    this.phone = phone ;
    this.price = price ;
}

function PriceList(price,number){
    this.price = price ;
    this.number = number ;
}

Activity.get_object_length = function (object) {
     var count = 0;
     for (var i in object) {
            count++;
     }
        return count;
};

//Activity.sign_up_phone_not_existed = function (phone) {
//    var recent = JSON.parse(localStorage['recent']);
//    var activity_object = JSON.parse( localStorage['activity_object']) || {};
//    var activity =  _(activity_object).findWhere({name : recent});
//    return _(activity.sign_up).findWhere({phone:phone}) == undefined
//};

