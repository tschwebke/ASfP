asfpApp.controller('orderController', ['$scope', '$location', '$route', '$rootScope', '$http',
    function ($scope, $location, $route, $rootScope, $http, $element) {
        $scope.reload = function () {
            $route.reolad();
        }
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
        var plangId = navigator.language || navigator.userLanguage;
        var formLCID;
        if (plangId.startsWith('ja')) {
            formLCID = '1041';
        }
        else {
            formLCID = '9';
        }

        $scope.order = function () {
            var date = new Date();
            var createdtime = date.toLocaleString('en-US', { timeZone: 'UTC' });
            var rowKey = date.valueOf();
            rowKey = rowKey.toString();
            var initials = $scope.name;
            var initials2 = $scope.email;
            initials = initials.substring(0, 1);
            initials = initials + initials2.substring(0, 1);
            rowKey = rowKey + initials;

            var sub1;
            var sub2;
            var ced;
            var inc5;
            var samh;
            if (formLCID == "1041") {
                sub1 = "W6N-00001 Advanced Support for Partners 年間契約 - 1,600,500 円 (税別)";
                sub2 = "W6M-00001 新興成長市場向け Advanced Support for Partners 年間契約 - USD 10,000 (税別)";
                ced = "W74-00001 Cloud Consults 1 回 - 220,000 円 (税別)";
                inc5 = "W69-00001 5 インシデント パック - 199,900 円 (税別)";
                samh = "W73-00001 サービス アカウント マネジメント 20 時間 - 440,000 円 (税別)";
            }
            else {
                sub1 = "W6N-00001 Advanced Support for Partners Annual Subscription - USD 15,000 (local taxes apply)";
                sub2 = "W6N-00002 Advanced Support for Partners Annual Subscription in Emerging Markets - USD 10,000 (local taxes apply)";
                ced = "W69-00001 5-Pack On Premises Support Incidents - USD 1,999 (local taxes apply)";
                inc5 = "W67-00001 1-Pack On Premises Support Incident - USD 499 (local taxes apply)";
                samh = "W73-00001 20 Hours of Services Account Management - USD 4,000 (local taxes apply)";
            }
            if ($scope.fivepack) { $scope.fivepack = inc5; }
            else { $scope.fivepack = ""; }
            if ($scope.samhours) { $scope.samhours = samh; }
            else { $scope.samhours = ""; }
            if ($scope.cloudconsult) { $scope.cloudconsult = ced; }
            else { $scope.cloudconsult = ""; }
            if ($scope.subscription == 'Annual') { $scope.subscription = sub1; }
            else { $scope.subscription = sub2; }

            if (!$scope.domain) { $scope.domain = ""; }

            var entity = {
                PartitionKey: $scope.samlist,
                RowKey: rowKey, // valueOf() created date + first 2 characters of name
                CreatedDateTime: createdtime, //created date
                IPAdress: "127.1.1.1", //Not used
                IsAuthenticated: "No", //Not used
                IsEmailVerified: "NA", //Not used
                WizardID: "8d076345-5e8c-4e3f-9d7a-1fc3c9be69fd", //Not used
                Lcid: formLCID, //Form LCID
                QID123ab46f5e564a659705617853dc3436: $scope.name, //name
                QIDa20cad709cdf49f692f7227c117d59e2: $scope.email, //email
                phone: $scope.phone, //phone
                QID529fc10c5afe45e2ae815efcc029877d: $scope.mpnid, //mpnid
                QID5f48d693c4d34c149aa0398c477c6e13: $scope.domain, //domain - not required
                QID698043afcfc848d99adf30019088d7bc: $scope.subscription, //subscription
                QIDc7aa2740c3cf45db98deef24bb3f8838: $scope.samhours, //sku for sam hours - not required
                QIDb6bef45f8bb74610a054e56923f0654b: $scope.cloudconsult, //sku for cloudconsult - not required
                QIDca96efe55b8c4b27bee10d50846e1efa: $scope.fivepack, //sku for 5 pack
                QID88a590c2da254c39847af73da3be7b94: "Privacy Policy Agreement Completed"
            };

            $scope.orderSubmission = JSON.stringify(entity);
            var purchase = $scope.orderSubmission;
            $http({
                url: 'http://asfpfunc.azurewebsites.net/api/pFunc',
                method: 'POST',
                headers: "{ 'Content-Type': 'application/json;charset=UTF-8' }",
                data: purchase
            }).
                then(function mySuccess(response) {
                    $scope.content = response.data;
                    $scope.statuscode = response.status;
                    $scope.statustext = response.statusText;
                }, function myError(response) {
                    $scope.statustext = response.statusText;
                });

            var intlNumber = $('#phone').intlTelInput('getnumber');
            for (var entry in $scope.orderSubmission) {
                (function (entry) {
                    $rootScope.phone = $scope.orderSubmission[entry];
                });
            }
            $location.path('/success');
        };
    }]);