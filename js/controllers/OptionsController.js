'use strict';

define(['./module'], function(controllers) {

	controllers.controller('OptionsController', ['$scope', function($scope) {

		$scope.options = {
			show_date: false
		};

		$scope.toggleDate = function() {
			$scope.options.show_date = 
				$scope.options.show_date ? 
				false : true;
		};

	}]);

});