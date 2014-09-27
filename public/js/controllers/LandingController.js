var ontour = angular.module('ontour', []);

ontour.controller('LandingController', ['$scope', function ($scope) {
	
	$scope.submitRegistration = function() {
		if ($scope.regform.email.$dirty || $scope.regform.email.$error.required) {
			console.log($scope.regform.email);
		}
	};

	$scope.submitForm = function() {
		$scope.regform.email.submitted = true;
		$scope.regform.login.submitted = true;
		$scope.regform.password.submitted = true;
		$scope.regform.password_repeat.submitted = true;
	};

}]);