var productModule = angular.module('DAGStore.menurecord', ['DAGStore.common']);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('menurecord', {
        url: "/menurecord",
        templateUrl: "/app/components/product/menuRecordListView.html",
        controller: "menuRecordListController"
    }).state('menurecordadd', {
        url: "/menurecordadd",
        templateUrl: "/app/components/product/menuRecordAddView.html",
        controller: "menuRecordAddController"
    });
}