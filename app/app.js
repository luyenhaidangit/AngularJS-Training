var app = angular.module('DAGStore', ['DAGStore.common','DAGStore.menurecord']);

// app.js
app.config(function($stateProvider, $urlRouterProvider){
  var states = [
  {
    name: 'home',
    url: '/home',
    templateUrl: '/app/components/home/homeView.html',
    controller: "homeController",
  },
  {
    name: 'menurecord',
    url: '/menurecord',
    templateUrl: '/app/components/menurecord/menuRecordListView.html',
    // controller: "menuRecordListController"
  },
  {
    name: 'menurecord_add',
    url: '/menurecord_add',
    templateUrl: '/app/components/menurecord/menuRecordAddView.html',
    // controller: "productAddController"
  },
  {
    name: 'error',
    url: '/error',
    templateUrl: '/app/components/error/errorView.html'
  }
  ];
  states.forEach((state) => $stateProvider.state(state));
  $urlRouterProvider.otherwise('/');
  });