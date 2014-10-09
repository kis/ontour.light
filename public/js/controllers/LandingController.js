var ontour = angular.module('ontour', []);

ontour.controller('LandingController', ['$scope', '$http', function ($scope, $http) {
	
	$scope.user = {};

	$scope.submitRegistration = function() {
		if (!$scope.regform.$invalid) {
			console.log($scope.user);
			
			$http.post('/register', $scope.user).success(function(data) {
				// console.log(data);
			});
		}
	};

	$scope.submitLogin = function() {
		if (!$scope.loginform.$invalid) {
			console.log($scope.user);

			$http.post('/login', $scope.user).success(function(data) {
				// console.log(data);
			});
		}
	};

}]);
