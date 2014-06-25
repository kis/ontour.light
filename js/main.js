'use strict';

require.config({
	shim: {
		angular: {
			exports: 'angular'
		},
		cluster: {
			deps: [
				'mapbox'
			]
		}
	},

	paths: {
		angular		: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.13/angular.min',
		mapbox 		: 'https://api.tiles.mapbox.com/mapbox.js/v1.6.2/mapbox',
		cluster 	: 'https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster',
		scrollbar   : 'lib/scrollbar.min',
		mousewheel  : 'lib/jquery.mousewheel'
	}
});

require(['App', 
		 'controllers/MapController', 
		 'controllers/MenuController', 
		 'controllers/AutocompleteController',
		 'controllers/EventController',
		 'services/AutocompleteService',
		 'services/SearchService'], 
	function(App, 
			 MapController, 
			 MenuController, 
			 AutocompleteController,
			 EventController,
			 AutocompleteService,
			 SearchService) {
	
});