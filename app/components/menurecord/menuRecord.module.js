// Register module
var menuRecordModule = angular.module('DAGStore.menurecord', ['DAGStore.common']);

// Config module
menuRecordModule.config(function($stateProvider, $urlRouterProvider){
    // Config Router
    var states = [
    {
      name: 'menurecord',
      url: '/menurecord',
      templateUrl: '/app/components/menurecord/menuRecordListView.html',
      // controller: "menuRecordListController"
    },
    {
      name: 'menurecord-add',
      url: '/menurecord-add',
      templateUrl: '/app/components/menurecord/menuRecordAddView.html',
      // controller: "productAddController"
    }];
    states.forEach((state) => $stateProvider.state(state));
    });
