/**
 * Created by tiantian on 14-8-26.
 */
function PriceList(price,number){
    this.price = price ;
    this.number = number ;
}

get_price_and_number = function(jj_list){
    var price_arr =  (_.pluck(jj_list, 'price')).sort(function(a,b){return a-b});
    var price_object = {};
    for(var value in price_arr){
        price_object[price_arr[value]] =  price_object[price_arr[value]] || new PriceList(price_arr[value],0);
        price_object[price_arr[value]].number++;
    }
    return  _.values(price_object) ;
};

get_bid_result = function(jj_list){
    var price_arr =  (_.pluck(jj_list, 'price')).sort(function(a,b){return a-b});
    var price_object = {};
    for(var value in price_arr){
        price_object[price_arr[value]] =  price_object[price_arr[value]] || new PriceList(price_arr[value],0);
        price_object[price_arr[value]].number++;
    }
    var number_sort =_(_.values(price_object)).where({number:1}).sort(function(a,b){return a-b});
    return number_sort[0];
};