var productModule = angular.module('DAGStore.menurecord', ['DAGStore.common']);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('menurecord', {
        url: "/menurecord",
        templateUrl: "/app/components/product/menuRecordListView.html",
        controller: "menuRecordListController"
    })
    .state('menunecord_add', {
        url: "/menunecord_add",
        templateUrl: "/app/components/menurecord/menuRecordAddView.html",
        controller: "menuRecordAddController"
    });
}