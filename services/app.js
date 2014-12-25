/**
 * Created by ADK on 10-12-2014.
 */

angular
    .module('BCHapp', [
        'ui.router'
    ])
    .config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider, $stateProvider){
       $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('overview',{
                url: '/',
                templateUrl: 'partials/overview.html'
            })
    }])

