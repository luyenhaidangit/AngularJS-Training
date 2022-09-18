// Register App
var app = angular.module('DAGStore', ['DAGStore.menurecord','DAGStore.common']);

// Config app
app.config(function($stateProvider, $urlRouterProvider){
    // Config Router
    var states = [
    {
      name: 'home',
      url: '/home',
      templateUrl: '/app/components/home/homeView.html',
      controller: "homeController",
    },
    {
      name: 'error',
      url: '/error',
      templateUrl: '/app/components/error/errorView.html'
    }];
    states.forEach((state) => $stateProvider.state(state));
    $urlRouterProvider.otherwise('/home');
    });


