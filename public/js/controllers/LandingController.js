var ontour = angular.module('ontour', []);

ontour.controller('LandingController', ['$scope', '$http', function ($scope, $http) {
	
	$scope.user = {};

	$scope.submitRegistration = function() {
		console.log($scope.user);

		$http.post('/register', $scope.user).success(function(data) {
			console.log('yeee');
		});
	};

	$scope.submitLogin = function() {
		console.log($scope.user);
	};

	$scope.signup = function() {
		$scope.regform.email.submitted = true;
		$scope.regform.password.submitted = true;
		$scope.regform.password_repeat.submitted = true;
	};

	$scope.signin = function() {
		$scope.loginform.login.submitted = true;
		$scope.loginform.password.submitted = true;
	};

}]);
