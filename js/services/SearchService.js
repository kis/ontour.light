'use strict';

define(['./module'], function(services) {

	services.factory('SearchService', ['$http', function($http) {

		function search(param, location, artist, festivalsOnly, tag, page) {
			return 	$http({
				url: 'http://ws.audioscrobbler.com/2.0/',
				method: 'GET',
				params: {
					method        : param + '.getevents',
					location      : location,
					artist        : artist,
					autocorrect   : 1,
					festivalsonly : festivalsOnly,
					tag           : tag,
					page 		  : page,
					limit	      : 10,
					api_key  	  : 'dd349d2176d3b97b8162bb0c0e583b1c',
					format 		  : 'json'
				}
			});
		}

		return {
			search: search
		};

	}]);

});