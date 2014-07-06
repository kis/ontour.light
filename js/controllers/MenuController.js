'use strict';

define(['./module', '../services/index', '../services/module'], function(controllers) {

	controllers.controller('MenuController', ['$scope', 'SearchService', function($scope, SearchService) {

		$scope.menu = {
			activeTab: {
				title: 'artist',
				param: 'artist'
			},
			searchValue: '',
			activeTag: '',
			festivalsOnly: false,
			activeItem: ''
		};

		$scope.menu.tabs = [
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
		};

		$scope.menu.tags = ['rock', 'pop', 'alternative', 'indie', 'electronic', 'classic rock', 'hip-hop', 'dance', 'jazz'];

		$scope.switchTag = function(tag) {
			$scope.menu.activeTag = $scope.menu.activeTag == tag ? '' : tag;
		};

		$scope.pages = {
			page: 1,
			total: 1,
			totalPages: 1
		};

		$scope.search = function(item) {
			$scope.menu.autocompleteItems = [];
			$scope.menu.searchValue = item;

			SearchService.search(
				$scope.menu.activeTab.param, 
				$scope.menu.searchValue, 
				$scope.menu.searchValue, 
				$scope.menu.festivalsOnly, 
				$scope.menu.activeTag, 
				$scope.pages.page)
			.success(function(response) {
				$scope.getEvents(response, $scope.menu.activeTab.param);
			});
		};

		$scope.events = [];

		$scope.getEvents = function(data, param) {
			if (data.error == 8 || typeof data.events == 'undefined' || data.events.total == 0) {
				$scope.pages.totalPages = 0;
				return false;
			}

			$scope.pages.totalPages = data.events["@attr"].totalPages;
			$scope.pages.total = data.events["@attr"].total;

			if ($scope.pages.page == $scope.pages.totalPages && /1$/.test($scope.pages.total)) {
				// App.vent.trigger('addEvent', data.events.event);
			} else {
				$scope.events = $scope.events.concat(data.events.event);
			}
		};

		$scope.nextPage = function() {
			if ($scope.pages.page < $scope.pages.totalPages && $scope.menu.searchValue) {
				$scope.pages.page++;
				$scope.search($scope.menu.searchValue);
			}
		};

		$scope.setFestivalsOnly = function() {
			$scope.menu.festivalsOnly = $scope.menu.festivalsOnly == false ? true : false;
		};

		$scope.years = ['2014', '2015', '2016', '2017'];

		$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		$scope.days = [];

		for (var i = 1; i < 32; i++) {
	        $scope.days.push(i);
	    }

	}]);

});