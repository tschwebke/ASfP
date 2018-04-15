asfpApp.controller('successController',
    ['$scope', '$route',
        function ($scope, $route) {
            $('#hideTitle').addClass('titleFill');
            $scope.reload = function () {
                $route.reolad();
            }
        }
    ]);