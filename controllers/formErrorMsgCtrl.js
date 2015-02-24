	angular.module('BCHapp')
		.controller('clientAddFormCtrl', ['$scope', function($scope) {
				$scope.master = {};

				$scope.null = function(user) {
					if (user == '' || user == null || user == undefined) {
						// null means that there is no value which is fine
						return true;
					}
				}
				$scope.update = function(user){
					$scope.master = angular.copy(user);
				};
				$scope.reset = function() {
					$scope.user = angular.copy($scope.master);
				};
				$scope.reset();
			}])
		.controller('login', ['$scope', function($scope){
			$scope.login = {status: 'true'};
		}]);