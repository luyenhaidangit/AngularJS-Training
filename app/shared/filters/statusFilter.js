

(function (app) {
    app.filter("statusFilter",function(){
        return function(input){
            if(input===true){
                return "Hoạt động";
            }else{
                return "Ngừng hoạt động";
            }
        }
    })

    app.filter("existDataFilter",function(){
        return function(input){
            if(input===null){
                return "---";
            }else{
                return input;
            }
        }
    })
})(angular.module('DAGStore.common'));