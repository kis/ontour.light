var ontour = angular.module('ontour', []);

ontour.controller('LandingController', ['$scope', function ($scope) {
	
	$scope.user = {};

	$scope.submitRegistration = function() {
		console.log($scope.user);
	};

	$scope.submitLogin = function() {
		console.log($scope.user);
	};

	$scope.signup = function() {
		$scope.regform.email.submitted = true;
		$scope.regform.login.submitted = true;
		$scope.regform.password.submitted = true;
		$scope.regform.password_repeat.submitted = true;
	};

	$scope.signin = function() {
		$scope.loginform.login.submitted = true;
		$scope.loginform.password.submitted = true;
	};

}]);