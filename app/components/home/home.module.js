var app = angular.module('DAGStore.home', ['DAGStore.common','DAGStore.menurecord']);

// app.js
app.config(function($stateProvider, $urlRouterProvider){
  var states = [
  {
    name: 'home',
    url: '/home',
    templateUrl: '/app/components/home/homeView.html',
    controller: "homeController",
  },
  ];
  states.forEach((state) => $stateProvider.state(state));
  $urlRouterProvider.otherwise('/');
  });

  console.log("ok")