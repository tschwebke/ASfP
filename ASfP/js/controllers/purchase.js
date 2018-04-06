asfpApp.controller('orderController', ['$scope', '$location', '$rootScope',
    function ($scope, $location, $rootScope, $element) {
        $(function ($scope, $element) {
            $('[data-toggle="tooltip"]').tooltip();

            $('#sub1').click(function () {
                $(this).addClass('active');
                $('#sub2').removeClass('active');
                $("#subAnnual").prop("checked", true);
                $("#subAnnual").click();
            });
            $('#sub2').click(function () {
                $(this).addClass('active');
                $('#sub1').removeClass('active');
                $("#subEmerging").prop("checked", true);
                $("#subEmerging").click();
            });
        });
        $rootScope.langID = navigator.language || navigator.userLanguage;
        if ($rootScope.langID.startsWith('ja')) {
            $scope.formLCID = '1041';
        }
        else {
            $scope.formLCID = '9';
        }

        $scope.order = function () {
            var date = new Date();
            $scope.createdtime = date.toLocaleString('en-US', { timeZone: 'UTC' });
            var rowKey = date.valueOf();
            rowKey = rowKey.toString();
            var initials = $scope.name;
            var initials2 = $scope.email;
            initials = initials.substring(0, 1);
            initials = initials + initials2.substring(0, 1);
            rowKey = rowKey + initials;
            if ($scope.formLCID == '1041') {
                var sub1 = 'W6N-00001 Advanced Support for Partners 年間契約 – 1,600,500 円 (税別)';
                var sub2 = 'W6M-00001 新興成長市場向け Advanced Support for Partners 年間契約 – 137,500 円 (税別)';
                var ced = 'W74-00001 1 回あたり – 220,000 円 (税別)';
                var inc5 = 'W69-00001 5 インシデント パック – 199,900 円 (税別)';
                var samh = 'W73-00001 サービス アカウント マネジメント 20 時間 – 440,000 円 (税別)';
            }
            else {
                var sub1 = 'W6N-00001 Advanced Support for Partners Annual Subscription – USD 15,000 (local taxes apply)';
                var sub2 = 'W6N-00002 Advanced Support for Partners Annual Subscription in Emerging Markets – USD 10,000 (local taxes apply)';
                var ced = 'W74-00001 1 Cloud Consult Engagement – USD 2,000 (local taxes apply)';
                var samh = 'W67-00001 1-Pack On Premises Support Incident – USD 499 (local taxes apply)';
                //var inc1 = 'W69-00001 5-Pack On Premises Support Incidents – USD 1, 999 (local taxes apply)'
                var inc5 = 'W73-00001 20 Hours of Services Account Management – USD 4,000 (local taxes apply)';
            }
            if ($scope.fivepack) { $scope.fivepack = inc5; }
            if ($scope.samhours) { $scope.samhours = samh; }
            if ($scope.cloudconsult) { $scope.cloudconsult = ced; }
            if ($scope.subscription == 'Annual') { $scope.subscription = sub1; }
            else { $scope.subscription = sub2; }

            //https://docs.microsoft.com/en-us/azure/cosmos-db/table-storage-cloud-service-nodejs
            $scope.orderSubmission;
            var entity = {
                PartitionKey: $scope.samlist,
                RowKey: rowKey, // valueOf() created date + first 2 characters of name
                CreatedDateTime: $scope.createdtime, //created date
                IPAdress: '127.1.1.1', //Not used
                IsAuthenticated: 'No', //Not used
                IsEmailVerified: 'NA', //Not used
                WizardID: '8d076345-5e8c-4e3f-9d7a-1fc3c9be69fd', //Not used
                Lcid: $scope.formLCID, //Form LCID
                QID123ab46f5e564a659705617853dc3436: $scope.name, //name
                QIDa20cad709cdf49f692f7227c117d59e2: $scope.email, //email
                phone: $scope.phone, //TODO phone, not in TFS yet
                QID529fc10c5afe45e2ae815efcc029877d: $scope.mpnid, //mpnid
                QID5f48d693c4d34c149aa0398c477c6e13: $scope.domain, //domain - not required
                QID698043afcfc848d99adf30019088d7bc: $scope.subscription, //subscription
                QIDc7aa2740c3cf45db98deef24bb3f8838: $scope.samhours, //sku for sam hours - not required
                QIDb6bef45f8bb74610a054e56923f0654b: $scope.cloudconsult, //sku for cloudconsult - not required
                QIDca96efe55b8c4b27bee10d50846e1efa: $scope.fivepack, //sku for 1 and 5 pack TODO:Handle empty strings
                QID88a590c2da254c39847af73da3be7b94: 'Privacy Policy Agreement Completed' //privay agreement
                //QIDb6bef45f8bb74610a054e56923f0654b: '', //not sure but its an empty field
                //QIDe05f0c99ad6b4ad1ab027f199f09ce06: '', //was billing contact name
                //QID90a12ec1b9f94cb6886fd54c42eb7adc: '', //was billing contact email
                //QID2b75a947864e41f3970f078dd099974a: '', //was promo code
                //QIDea3cdc0d3de94fe39c638fe226fc8583: '', //was other email
                //QIDcc9d6f8bf1e647dfbce07b88daafa817: $scope.samlist, //samlocation
            };

            var tableUri = 'https://asfpsample.table.core.windows.net/';
            var tableService = AzureStorage.createTableService('asfptbl', 'h4bDfcQ/NJAH2CiyN2ruqBBfbQgb2/1LHVsT8rpDJ0v2ybDEiWLw/wWNxyKkZUVRc6S5Z/VJGObDV5hQLOnOsA==');
            var table = "asfpTable";
            $scope.orderSubmission = JSON.stringify(entity);

            tableService.insertOrMergeEntity(table, entity, function (error, result, response) {  //TODO: Add error handling
                if (error) {
                    console.log('Insert table entity error, please open browser console to view detailed error');
                    console.log(error);
                } else {
                    console.log('Insert table entity successfully!');
                }
            });

            var intlNumber = $('#phone').intlTelInput('getnumber');
            for (var entry in $scope.orderSubmission) {
                (function (entry) {
                    $rootScope.phone = $scope.orderSubmission[entry];
                });
            }

            $rootScope.json = entity;
            $location.path('/success');
        };
    }]);

//order.$inject = ['$scope'];

//function order($scope) {
//    $scope.title = 'order';

//    activate();

//    function activate() {
//    }
//}