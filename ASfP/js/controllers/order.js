(function () {
    'use strict';

    asfpApp.controller('orderController', ['$scope', '$location', '$rootScope', order,
        function ($scope, $location, $rootScope, orderService) {
            $scope.skuListOptions = {
                'bug': 'Report a Bug',
                'account': 'Account Problems',
                'mobile': 'Mobile',
                'user': 'Report a Malicious User',
                'other': 'Other'
            };

            myName = [{ name: $scope.name }, { email: $scope.email }, { skuList: $scope.skuList }, { url: $scope.url }, { comments: $scope.comments }];
            //https://docs.microsoft.com/en-us/azure/cosmos-db/table-storage-cloud-service-nodejs
            //$scope.order = function () {
            //    var tableUri = 'https://asfpsample.table.core.windows.net/';
            //    var tableService = AzureStorage.createTableServiceWithSas(tableUri, '?sv=2017-07-29&ss=bfqt&srt=sco&sp=rwdlacup&se=2019-04-01T05:15:35Z&st=2018-02-26T22:15:35Z&spr=https&sig=iiXWqq8tvpFt4vI8liZBWR%2B5ElUgOhpMx55Pr7BWk0w%3D');
            //    var partitionKey = "PartitionKey";
            //    var table = "asfpTest";
            //    var rowKey = "RowKey";
            //    var customProperty1 = "Prop1";
            //    var customProperty2 = "Prop2";
            //    var insertEntity = {
            //        PartitionKey: { '_': partitionKey },
            //        RowKey: { '_': rowKey },
            //        CustomProperty1: { '_': customProperty1 },
            //        CustomProperty2: { '_': customProperty2 }
            //    };

            //    tableService.insertOrMergeEntity(table, insertEntity, function (error, result, response) {
            //        if (error) {
            //            alert('Insert table entity error, please open browser console to view detailed error');
            //            console.log(error);
            //        } else {
            //            alert('Insert table entity successfully!');
            //        }
            //    });
            $rootScope.name = $scope.name;
            orderService.set(myName);
            $location.path('/success');
        }]);

    order.$inject = ['$scope'];

    function order($scope) {
        $scope.title = 'order';

        activate();

        function activate() {
        }
    }
})();