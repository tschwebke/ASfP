
asfpApp.controller('successController',
        ['$scope', '$location', '$rootScope', 
        function ($scope, $location, $rootScope) {
            $scope.message = "Success!!!";
            $scope.name = $rootScope.name;
            $scope.name = $rootScope.name;
            $scope.email = $rootScope.email;
            $scope.phone = $rootScope.phone;
            $scope.mpnid = $rootScope.mpnid;
            $scope.domain = $rootScope.domain;
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