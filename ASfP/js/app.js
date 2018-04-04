var asfpApp = angular.module('asfpApp',
    ['ngRoute']);

asfpApp.run(['$rootScope', '$location', '$locale', function ($rootScope, $location, $locale) {
    $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
        $location.path('/purchase');
    });
}]);

asfpApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/purchase', {
                templateUrl: 'views/purchase.html',
                controller: 'orderController'
            }).
            when('/success', {
                templateUrl: 'views/success.html',
                controller: 'successController'
            }).
            otherwise({
                redirectTo: '/purchase'
            });
    }]);