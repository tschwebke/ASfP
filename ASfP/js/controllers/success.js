(function () {
    'use strict';

    asfpApp.controller('successController',
        ['$scope', '$location', '$rootScope', success,
        function ($scope, $location, $rootScope, orderService) {
            $scope.message = "Success!!!";
            $scope.name = $rootScope.name;
            var test = orderService.get();

            $scope.myVal = orderService.get();
        }]);

    success.$inject = ['$scope'];

    function success($scope) {
        $scope.title = 'success';

        activate();

        function activate() {
        }
    }
})();