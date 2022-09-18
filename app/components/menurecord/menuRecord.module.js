// Register module
var menuRecord = angular.module('DAGStore.menurecord', ['DAGStore.common']);
 
// Config module
menuRecord.config(function($stateProvider, $urlRouterProvider){
    // Config Router
    var states = [
    {
      name: 'menurecord',
      url: '/menurecord',
      templateUrl: '/app/components/menurecord/menuRecordListView.html',
      controller: "menuRecordListController",
    },
    {
      name: 'menurecord-add',
      url: '/menurecord-add',
      templateUrl: '/app/components/menurecord/menuRecordAddView.html',
      // controller: "productAddController"
    }];
    states.forEach((state) => $stateProvider.state(state));
    });

// menuRecord.controller('menuRecordListController', menuRecordListController);

// function menuRecordListController($scope,apiService,dataTableService){

//     // $scope.menuRecords = [];
//     $scope.menuRecords = "";


//     $scope.getItems = function getItems(){
//         apiService.get("/data/menurecord.data.json",null,function(result){
        

        
//         $scope.menuRecords = result.data;


        
//         dataTableService.createDefaultTable();
        
        
        
//         console.log($scope.menuRecords)
 
//       },function(error){
//         console.log("Get data fail");
//       })
//     };

   

//     $scope.getItems();

    
// }


  
