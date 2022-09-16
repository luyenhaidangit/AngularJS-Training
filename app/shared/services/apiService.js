var apiService = angular.module('DAGStore.common', [])
  .service('apiService', apiService);

function productListController($http){
    return{
        get: get,
    }

    function get(url,params,successed,failed){
        $http.get(url,params).then(function(result){
            successed(result);
        },function(error){
            failed(error);
        })
    }
}