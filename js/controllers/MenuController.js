'use strict';

define(['App'], function(App) {

	App.controller('MenuController', ['$scope', function($scope) {

		$scope.tags = ["rock", "pop", "alternative", "indie", "electronic", "classic rock", "hip-hop", "dance", "jazz"];

		$scope.years = ['2014', '2015', '2016', '2017'];

		$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		$scope.days = [];

		for (var i = 1; i < 32; i++) {
	        days.push(i);
	    }

	}]);

});