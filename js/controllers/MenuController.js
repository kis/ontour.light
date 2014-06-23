'use strict';

define(['App'], function(App) {

	App.controller('MenuController', ['$scope', 'AutocompleteService', function($scope, AutocompleteService) {

		$scope.menu = {
			activeTab: 'artist',
			searchValue: '',
			param: 'artist',
			activeTag: '',
			festivalsOnly: false
		};

		$scope.menu.tabs = ["artist", "city"];

		$scope.switchTab = function(tab) {
			$scope.menu.activeTab = tab;
		};

		$scope.menu.tags = ["rock", "pop", "alternative", "indie", "electronic", "classic rock", "hip-hop", "dance", "jazz"];

		$scope.switchTag = function(tag) {
			$scope.menu.activeTag = $scope.menu.activeTag == tag ? '' : tag;
		};

		$scope.menu.autocompleteItems = [];

		$scope.getAutocompleteData = function(searchValue) {
			$scope.menu.autocompleteItems = [];

			if ($scope.menu.activeTab == 'artist') {
				$scope.getAutocompleteArtists(searchValue);
			} else if ($scope.menu.activeTab == 'city') {
				$scope.getAutocompleteCities(searchValue);
			}
		};

		$scope.getAutocompleteArtists = function(artist) {
			AutocompleteService.getArtistsData(artist).success(function(data) {
				if (typeof data.results != 'undefined') {
					var res = data.results.artistmatches.artist;

					if (typeof res != 'undefined' && res.length) {
						$scope.menu.autocompleteItems = res;
					}
				}
			});
		};

		$scope.getAutocompleteCities = function(city) {
			AutocompleteService.getCitiesData(city).success(function(data) {
				if (data.length) {
					$scope.menu.autocompleteItems = [];
					data.length = 5;

					data.forEach(function(value) {
						var res = value.split(', ');
						
						$scope.menu.autocompleteItems.push({
							name: res[0], 
							meta: res[2]
						});
					});
				}
			});
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