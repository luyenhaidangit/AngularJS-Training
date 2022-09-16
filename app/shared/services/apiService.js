// var apiService = angular.module('DAGStore.common', [])
//   .service('apiService', apiService);

// function productListController($http){
//     return {
//         get: get
//     }

//     function get(url,params,successed,failed){
//         $http.get(url,params).then(function(result){
//             successed(result);
//         },function(error){
//             failed(error);
//         })
//     }
// }

(function (app) {
    app.factory('apiService', apiService);

    apiService.$inject = ['$http'];

    function apiService($http) {
        return {
            get: get
        }

        function get(url, params, success, failure) {
            $http.get(url, params).then(function (result) {
                success(result);
            }, function (error) {
                failure(error);
            });
        }
    }
})(angular.module('DAGStore.common'));