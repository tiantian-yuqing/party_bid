/**
 * Created by tiantian on 14-9-3.
 */

save_recent = function(activity_name){
    localStorage.setItem('recent', JSON.stringify(activity_name));
};

get_recent = function(){
    return  JSON.parse( localStorage.getItem('recent')) ;
};

save_activity_object = function(activity_object){
    localStorage.setItem('activity_object', JSON.stringify(activity_object));
};

get_activity_object = function(){
   return  JSON.parse( localStorage.getItem('activity_object')) || {};
};


