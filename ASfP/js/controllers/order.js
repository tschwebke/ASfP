asfpApp.controller('orderController', ['$scope', '$location', '$rootScope',
    function ($scope, $location, $rootScope, $element) {
        $(function ($scope, $element) {
            $('[data-toggle="tooltip"]').tooltip();
            //$scope.specialValue = {
            //    "id": "12345",
            //    "value": "Annual"
            //};
            $('#sub1').click(function () {
                $(this).addClass('active');
                $('#sub2').removeClass('active');
                $("#subAnnual").prop("checked", true);
                $("#subAnnual").click();
            })
            $('#sub2').click(function () {
                $(this).addClass('active');
                $('#sub1').removeClass('active');
                $("#subEmerging").prop("checked", true);
                $("#subEmerging").click();
            })
            //$('should change state', function () {
            //    var subscription = element(by.binding('subscription'));
            //    expect(subscription.getText()).toContain('Annual');
            //    element.all(by.model('subscription')).get(0).click();
            //    expect(subscription.getText()).toContain('Emerging');
            //});
        })

        $scope.orderSubmission = [
            { name: $scope.name },
            { email: $scope.email },
            { phone: $scope.phone },
            { mpnid: $scope.mpnid },
            { domain: $scope.domain },
            { subscription: $scope.subscription },
            { samlist: $scope.samlist },
            { samhours: $scope.samhours },
            { cloudconsult: $scope.cloudconsult },
            { singlepack: $scope.singlepack },
            { fivepack: $scope.fivepack },
            { privacy: $scope.privacy }
        ];
        //https://docs.microsoft.com/en-us/azure/cosmos-db/table-storage-cloud-service-nodejs
        $scope.order = function () {
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

            var intlNumber = $('#phone').intlTelInput('getNumber');
            for (var entry in $scope.orderSubmission) {
                (function (entry) {
                    $rootScope.phone = $scope.orderSubmission[entry];
                })
            };

            $rootScope.name = $scope.name;
            $rootScope.email = $scope.email;
            $rootScope.phone = $scope.phone;
            $rootScope.mpnid = $scope.mpnid;
            $rootScope.domain = $scope.domain;
            $rootScope.subscription = $scope.subscription;
            $rootScope.samlist = $scope.samlist;
            $rootScope.samhours = $scope.samhours;
            $rootScope.cloudconsult = $scope.cloudconsult;
            $rootScope.singlepack = $scope.singlepack;
            $rootScope.fivepack = $scope.fivepack;
            $rootScope.privacy = $scope.privacy;
            //orderService.set(myName);
            $location.path('/success');
        }
    }]);

//order.$inject = ['$scope'];

//function order($scope) {
//    $scope.title = 'order';

//    activate();

//    function activate() {
//    }
//}