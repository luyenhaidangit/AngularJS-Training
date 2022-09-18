// Register controller
var menuRecord = angular.module('DAGStore.menurecord');
menuRecord.controller('menuRecordListController', menuRecordListController);

// Controller
function menuRecordListController($scope,apiService,dataTableService,notificationService){

    // $scope.menuRecords = [];
    $scope.menuRecords = [];


    $scope.getItems = function getItems(){
        apiService.get("/data/menurecord.data.json",null,function(result){
        
          if(result.data.length===5){
            notificationService.displayInfo("Có 5 bản ghi nha!");
          }
        
        $scope.menuRecords = result.data;

        dataTableService.createDefaultTable();
    
        console.log($scope.menuRecords)
 
      },function(error){
        console.log("Get data fail");
      })
    };

    $scope.getItems();    
}