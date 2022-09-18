// Register controller
var menuRecord = angular.module('DAGStore.menurecord');
menuRecord.controller('menuRecordAddController', menuRecordAddController);

// Controller
function menuRecordAddController($scope,apiService,notificationService,$state){
    $scope.menuRecord = {
        ID:6,
        Name:"Footer VIP",
        Templates: [
            {id: '1', name: 'Navbar'},
            {id: '2', name: 'LinkList'},
            {id: '3', name: 'Dropdown'}
        ],
        Template : {id: '3', name: 'Dropdown'},
        WidgetZones:[
            {id: '1', name: null},
            {id: '2', name: 'head'},
            {id: '3', name: 'body'},
            {id: '4', name: 'footer'}
        ],
        WidgetZone: {id: '2', name: "head"},
        Published:false,
        DisplayOrder: 1,
    }

    $scope.AddMenuRecord = AddMenuRecord;
    function AddMenuRecord(){
        apiService.post("/data/menurecord.data.json",$scope.menuRecord,function(result){
                notificationService.displaySuccess(result.data.Name + "thêm thành công!");
                console.log("ok")
                $state.go("menurecord");
        },function(error){
            notificationService.displaySuccess("Thêm mới không thành công!");
            console.log("ok hh")
        });
    }
}