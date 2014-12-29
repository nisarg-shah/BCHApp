/**
 * Created by ADK on 10-12-2014.
 */

angular
    .module('BCHapp', [
        'ui.router', 'UserValidation'
    ])
    .config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('overview',{
                url: '/',
                templateUrl: 'views/overview.html'
            })

            .state('client',{
                url: '/client',
                templateUrl: 'views/client/client.html'
            }).state('client_add',{
                url: '/create_add',
                templateUrl: 'views/client/client_add.html'
            })
            .state('client_history',{
                url: '/client_history',
                templateUrl: 'views/client/client_history.html'
            })

            .state('order',{
                url: '/order',
                templateUrl: 'views/order/order.html'
            })

            .state('inventory',{
                url: '/inventory',
                templateUrl: 'views/inventory/inventory.html'
            }).state('inventory_add',{
                url: '/inventory_add',
                templateUrl: 'views/inventory/inventory_add.html'
            })
            .state('to_buy',{
                url: '/to_buy',
                templateUrl: 'views/inventory/to_buy.html'
            })


    }])
.controller('ClientAddFormCtrl', ['$scope', function($scope) {
        $scope.formAllGood = function () {
            return ($scope.usernameGood && $scope.passwordGood && $scope.passwordCGood)
        }
}]);

angular.module('UserValidation', [])
    .directive('validUsername', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                // Any way to read the results of a "required" angular validator here?
                var isBlank = viewValue === ''
                var invalidChars = !isBlank && !/^[A-z0-9]+$/.test(viewValue)
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 5 || viewValue.length > 20)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.usernameGood = !isBlank && !invalidChars && !invalidLen

            })
        }
    }
}).directive('validPassword', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                var isBlank = viewValue === ''
                var invalidLen = !isBlank && (viewValue.length < 8 || viewValue.length > 20)
                var isWeak = !isBlank && !invalidLen && !/(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])/.test(viewValue)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('isWeak', !isWeak)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.passwordGood = !isBlank && !isWeak && !invalidLen

            })
        }
    }
}).directive('validPasswordC', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue, $scope) {
                var isBlank = viewValue === ''
                var noMatch = viewValue != scope.clientAddForm.password.$viewValue
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('noMatch', !noMatch)
                scope.passwordCGood = !isBlank && !noMatch
            })
        }
    }
})