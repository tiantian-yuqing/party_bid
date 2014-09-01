/**
 * Created by tiantian on 14-8-26.
 */

get_price_and_number = function(jj_list){
    var price_arr =  (_.pluck(jj_list, 'price')).sort(function(a,b){return a-b});
    console.log(price_arr)
    var price_object = {};
    for(var value in price_arr){
        price_object[price_arr[value]] =  price_object[price_arr[value]] || new PriceList(price_arr[value],0);
        price_object[price_arr[value]].number++;
    }
//    console.log(_.values(price_object))
    return  _.values(price_object) ;
};

get_bid_result = function(jj_list){
    var price_arr =  (_.pluck(jj_list, 'price')).sort(function(a,b){return a-b});
    var price_object = {};
    for(var value in price_arr){
        price_object[price_arr[value]] =  price_object[price_arr[value]] || new PriceList(price_arr[value],0);
        price_object[price_arr[value]].number++;
    }
 //   console.log(price_object)
//    console.log((_.values(price_object)).where({number:1}));

    var number_sort =_(_.values(price_object)).where({number:1}).sort(function(a,b){return a-b});
//    console.log(number_sort)
//    console.log(number_sort[0])

    return number_sort[0];

};