/**
 * Created by tiantian on 14-8-26.
 */

get_price_and_number = function(jj_list){
    var price_arr =  _.pluck(jj_list, 'price').sort();
    var price_object = {};
    for(var value in price_arr){
        price_object[price_arr[value]] =  price_object[price_arr[value]] || new PriceList(price_arr[value],0);
        price_object[price_arr[value]].number++;
    }
    return  _.values(price_object) ;
};

get_bid_result = function(jj_list){
    var price_arr =  _.pluck(jj_list, 'price').sort();
    var price_object = {};
    for(var value in price_arr){
        price_object[price_arr[value]] =  price_object[price_arr[value]] || new PriceList(price_arr[value],0);
        price_object[price_arr[value]].number++;
    }
    var number_sort =_(_.values(price_object)).where({number:1}).sort() ;
    return number_sort[0];

};