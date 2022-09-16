var productModule = angular.module('DAGStore.product', ['DAGStore.common']);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('product', {
        url: "/product",
        templateUrl: "/app/components/product/productListView.html",
        controller: "productListController"
    })
    .state('product_add', {
        url: "/product_add",
        templateUrl: "/app/components/product/productAddView.html",
        controller: "productAddController"
    });
}