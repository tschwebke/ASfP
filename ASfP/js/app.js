
    var asfpApp = angular.module('asfpApp',
        ['ngRoute']);

    asfpApp.run(['$rootScope', '$location', function ($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
            $location.path('/order');
        });
    }]);

    asfpApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/order', {
                templateUrl: 'views/order.html',
                controller: 'orderController'
            }).
            when('/success', {
                templateUrl: 'views/success.html',
                controller: 'successController'
            }).
            otherwise({
                redirectTo: '/order'
            });
    }]);