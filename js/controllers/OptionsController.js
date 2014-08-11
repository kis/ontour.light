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

		$scope.years = [2014, 2015, 2016, 2017];
		        
		$scope.months = ['January', 'February', 'March',
						 'April', 'May', 'June', 
						 'July', 'August', 'September',
						 'October', 'November', 'December'];

		$scope.days = [];
		
		for (var i = 1; i < 32; i++) {
		    $scope.days.push(i);
		}

	}]);

});