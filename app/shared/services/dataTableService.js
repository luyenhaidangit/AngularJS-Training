

(function (app) {
    app.factory('dataTableService', dataTableService);

    // apiService.$inject = ['$http'];

    function dataTableService() {
        return {
            createDefaultTable: createDefaultTable,
            // get: get
        }

        function createDefaultTable() {
            

            angular.element(document).ready(function() { 
                $.fn.dataTable.ext.errMode = 'none';
                
                $('#DAGStoreDatatable').DataTable({
                  language: {
                    paginate: {
                        previous: "<i class='mdi mdi-chevron-left'>"
                        , next: "<i class='mdi mdi-chevron-right'>"
                    },
                    info: "Hiển thị từ _START_ đến _END_ trong _TOTAL_ trang bản ghi",
                    search : "Tìm kiếm",
                    infoEmpty : "Không tìm thấy bản ghi",
                    infoFiltered:"(Trong tổng số _MAX_ trang)",
                    lengthMenu:"Hiển thị _MENU_ bản ghi",
                    
                }
                , drawCallback: function () {
                    $(".dataTables_paginate > .pagination")
                        .addClass("pagination-rounded")
                }
                });
              });
        }
    }
})(angular.module('DAGStore.common'));