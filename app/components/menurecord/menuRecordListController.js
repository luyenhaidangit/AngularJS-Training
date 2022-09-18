// Register controller
var menuRecord = angular.module('DAGStore.menurecord');
menuRecord.controller('menuRecordListController', menuRecordListController);

// Controller
function menuRecordListController($scope,apiService,dataTableService){

    // $scope.menuRecords = [];
    $scope.menuRecords = "";


    $scope.getItems = function getItems(){
        apiService.get("/data/menurecord.data.json",null,function(result){
        

        
        $scope.menuRecords = result.data;


        
        dataTableService.createDefaultTable();
        
        
        
        console.log($scope.menuRecords)
 
      },function(error){
        console.log("Get data fail");
      })
    };

   

    $scope.getItems();

    
}