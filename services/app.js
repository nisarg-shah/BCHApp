/**
 * Created by ADK on 10-12-2014.
 */

angular
    .module('BCHapp', ['ui.router', 'ui.bootstrap'])
	
    .config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
			.state('login',{
                url: '/',
                templateUrl: 'views/login.html',
				controller: 'login'
            })
            .state('overview',{
                url: '/overview',
                templateUrl: 'views/overview.html',
				
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
    }]);
    
