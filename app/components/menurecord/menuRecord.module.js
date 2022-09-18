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

menuRecordModule.controller('menuRecordListController', menuRecordListController);

function menuRecordListController($scope,apiService){

    // $scope.menuRecords = [];
    $scope.menuRecords = [];

    $scope.menuRecords1 = [
      {
          "ID": 1,
          "Name": "Main Navigation",
          "Template": "Navbar",
          "WidgetZone": null,
          "Published": true,
          "DisplayOrder": 1,
          "MenuItemRecords": []
      },
      {
          "ID": 2,
          "Name": "Footer Infomation",
          "Template": "LinkList",
          "WidgetZone": null,
          "Published": true,
          "DisplayOrder": 1,
          "MenuItemRecords": []
      },
      {
          "ID": 3,
          "Name": "Footer Service",
          "Template": "LinkList",
          "WidgetZone": null,
          "Published": true,
          "DisplayOrder": 1,
          "MenuItemRecords": []
      },
      {
          "ID": 4,
          "Name": "Footer Company",
          "Template": "LinkList",
          "WidgetZone": null,
          "Published": true,
          "DisplayOrder": 1,
          "MenuItemRecords": []
      },
      {
          "ID": 5,
          "Name": "Help And Service",
          "Template": "Dropdown",
          "WidgetZone": null,
          "Published": true,
          "DisplayOrder": 1,
          "MenuItemRecords": []
      }
  ];
    $scope.getItems = function getItems(){
        apiService.get("/data/menurecord.data.json",null,function(result){
        
          
        
        $scope.menuRecords = result.data;

        

        
        console.log($scope.menuRecords)
 
      },function(error){
        console.log("Get data fail");
      })
    };

   

    $scope.getItems();

    
}


  
