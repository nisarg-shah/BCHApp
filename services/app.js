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
                templateUrl: 'views/overview.html'
            }).state('create_new_client',{
                url: '/create_new_client',
                templateUrl: 'views/client/create_new_client.html'
            })
            .state('history_client',{
                url: '/history_client',
                templateUrl: 'views/client/history_client.html'
            })
    }]);
