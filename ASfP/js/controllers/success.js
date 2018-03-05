asfpApp.controller('successController',
        ['$scope', '$location', '$rootScope', '$cookie',
        function ($scope, $location, $rootScope, $cookies) {
            $('#hideTitle').addClass('titleFill');

            //$scope.langEID = $rootScope.langID;
            //if ($scope.langEID.startsWith('ja')) {
            $scope.thankyou = $rootScope.thankyou;
            //= 'お申し込みありがとうございます。';
            $scope.offeringspecialist = $rootScope.offeringspecialist;
            //= '担当者よりご連絡いたしますので、お待ちください。';
            $scope.returnpage = $rootScope.returntopage;
            //= '前のページに戻る';
            //}
            //else {
            //    $scope.thankyou = $rootScope.thankyou;
            //    //= 'Thank you!';
            //    $rootScope.offeringspecialist = 'A support offerings specialist will be in touch with you shortly.';
            //    $rootScope.returntopage = 'Return to page';
            //}

            $scope.name = $rootScope.name;
            $scope.email = $rootScope.email;
            $scope.tel = $rootScope.tel;
            $scope.mpnid = $rootScope.mpnid;
            $scope.domain = $rootScope.domain;
            $scope.subscription = $rootScope.subscription;
            $scope.samlist = $rootScope.samlist;
            $scope.samhours = $rootScope.samhours;
            $scope.cloudconsult = $rootScope.cloudconsult;
            $scope.singlepack = $rootScope.singlepack;
            $scope.fivepack = $rootScope.fivepack;
            $scope.privacy = $rootScope.privacy;
            //var test = orderService.get();
            //$scope.myVal = orderService.get();
        }]);

//success.$inject = ['$scope'];

//function success($scope) {
//    $scope.title = 'success';

//    activate();

//    function activate() {
//    }
//}