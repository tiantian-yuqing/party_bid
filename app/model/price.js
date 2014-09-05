/**
 * Created by tiantian on 14-8-26.
 */
//function PriceList(price,number){
//    this.price = price ;
//    this.number = number ;
//}

get_price_and_number = function(bid_list){
//    [{"name":"王五","phone":"189900971077","price":"6","$$hashKey":"004"},
//     {"name":"李四","phone":"189900971078","price":"6","$$hashKey":"005"},
//     {"name":"张三","phone":"189900971079","price":"8","$$hashKey":"006"}],
    var price_and_number = _.chain(bid_list)
        .sortBy(function(value){return value.price})
        .pluck('price')
        .countBy()
        .value();
    return price_and_number  ;  // {6: 1, 8: 2}

//    var stooges = [{name: 'curly', age: 25}, {name: 'moe', age: 21}, {name: 'larry', age: 23}];
//    var youngest = _.chain(stooges)
//        .sortBy(function(stooge){ return stooge.age; })
//        .map(function(stooge){ return stooge.name + ' is ' + stooge.age; })
//        .first()
//        .value();
//    console.log(youngest)
};

get_bid_result = function(bid_list){
//    [{"name":"王五","phone":"189900971077","price":"6","$$hashKey":"004"},
//     {"name":"李四","phone":"189900971078","price":"6","$$hashKey":"005"},
//     {"name":"张三","phone":"189900971079","price":"8","$$hashKey":"006"}],

  var lowest_price = _.chain(bid_list)
     .sortBy(function(value){return value.price})
     .groupBy(function(value){return value.price})
     .find(function(value){return value.length ==1 })
     .value();
    console.log(lowest_price); // {"name":"张三","phone":"189900971079","price":"8","$$hashKey":"006"}],
    return  lowest_price
};