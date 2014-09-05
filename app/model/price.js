/**
 * Created by tiantian on 14-8-26.
 */
function Price(){
}

Price.get_price_and_number = function(bid_list){
    var price_and_number = _.chain(bid_list)
        .sortBy(function(value){return value.price})
        .pluck('price')
        .countBy()
        .pairs()
        .value();
    return price_and_number  ;  // {6: 1, 8: 2}

};

Price.get_bid_result = function(bid_list){
    var lowest_price = _.chain(bid_list)
        .sortBy(function(value){return value.price})
        .groupBy(function(value){return value.price})
        .find(function(value){return value.length ==1 })
        .value();

    if(lowest_price != undefined){
       return  lowest_price[0]
    }
    else {
        return undefined
    }

};