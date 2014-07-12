'use strict';

define(['./module'], function(controllers) {

	controllers.controller('MenuController', ['$scope', function($scope) {

		$scope.menu = {
			activeTab: {
				title: 'artist',
				param: 'artist'
			},
			searchValue: '',
			activeTag: '',
			festivalsOnly: 0
		};

		$scope.tabs = [
			{
				title: 'artist',
				param: 'artist'
			},
			{
				title: 'location',
				param: 'geo'
			}
		];

		$scope.switchTab = function(tab) {
			$scope.menu.activeTab = tab;
			$scope.menu.searchValue = '';
		};

		$scope.tags = ['rock', 'pop', 'alternative', 'indie', 'electronic', 
			'classic rock', 'hip-hop', 'dance', 'jazz'];

		$scope.switchTag = function(tag) {
			$scope.menu.activeTag = $scope.menu.activeTag == tag ? '' : tag;
		};

		$scope.setFestivalsOnly = function() {
			$scope.menu.festivalsOnly = $scope.menu.festivalsOnly == 0 ? 1 : 0;
		};

		$scope.date = {
			years: ['2014', '2015', '2016', '2017'],
			months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
				'August', 'September', 'October', 'November', 'December'],
			days: []
		};

		for (var i = 1; i < 32; i++) {
	        $scope.date.days.push(i);
	    }

	}]);

});