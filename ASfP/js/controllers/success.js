﻿asfpApp.controller('successController',
        ['$scope', '$location', '$rootScope', '$cookies',
        function ($scope, $location, $rootScope, $cookies) {
            $('#hideTitle').addClass('titleFill');
            $scope.name = $rootScope.name;
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