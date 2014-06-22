'use strict';

define(['App'], function(App) {

	App.factory('AutocompleteService', ['$http', function($http) {

		var getArtistsData = function(artist) {

			return $http({
			 	method: 'GET', 
			 	url: 'http://ws.audioscrobbler.com/2.0/',
			 	params: {
			 		method: 'artist.search',
			 		artist: artist,
			 		limit: 5,
			 		api_key: 'dd349d2176d3b97b8162bb0c0e583b1c',
			 		format: 'json'
			 	}
			 });

		};

		var getCitiesData = function(city) {

			return $http.jsonp("http://gd.geobytes.com/AutoCompleteCity?callback=cities&q="+city);

		};

		return {
			getArtistsData: getArtistsData,
			getCitiesData: getCitiesData
		};

	}]);

});