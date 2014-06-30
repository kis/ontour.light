'use strict';

define(['./module'], function(controllers) {

	controllers.controller('AutocompleteController', ['$scope', 'AutocompleteService', function($scope, AutocompleteService) {

		$scope.menu.autocompleteItems = [];

		$scope.selectItem = function(item) {
			$scope.menu.activeItem = item;
		};

		$scope.getAutocompleteData = function(searchValue) {
			$scope.menu.autocompleteItems = [];

			if ($scope.menu.activeTab.title == 'artist') {
				$scope.getArtists(searchValue);
			} else if ($scope.menu.activeTab.title == 'location') {
				$scope.getCities(searchValue);
			}
		};

		$scope.getArtists = function(artist) {
			AutocompleteService.getArtistsData(artist).success(function(data) {
				if (typeof data.results != 'undefined') {
					var res = data.results.artistmatches.artist;

					if (typeof res != 'undefined' && res.length) {
						$scope.menu.autocompleteItems = res;
					}
				}
			});
		};

		$scope.getCities = function(city) {
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

	}]);

});