requirejs.config({
	shim: {
		jquery: {
			exports: '$',
		},
		cluster: {
			deps: [
				'mapbox'
			]
		}
	},

	paths: {
		angular		: 'lib/angular',
		jquery 		: 'lib/jquery.min', //'http://code.jquery.com/jquery-latest.min',
		mapbox 		: 'lib/mapbox', //'https://api.tiles.mapbox.com/mapbox.js/v1.6.2/mapbox',
		cluster 	: 'https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster',
		scrollbar   : 'lib/scrollbar.min',
		mousewheel  : 'lib/jquery.mousewheel'
	}
});

requirejs(['App'], function(App) {
	'use strict';

	return angular.module('App', []);
});