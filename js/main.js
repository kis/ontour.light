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
		angular		    : 'lib/angular.min',
		mapbox 		    : 'https://api.tiles.mapbox.com/mapbox.js/v1.6.2/mapbox',
		cluster 	    : 'https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster',
		scrollbar       : 'lib/scrollbar.min',
		mousewheel      : 'lib/jquery.mousewheel'
	}
});

require(['App', 
		 'controllers/MapController', 
		 'controllers/MenuController', 
		 'controllers/EventController'], 
	function(App, 
			 MapController, 
			 MenuController, 
			 EventController) {
	
});