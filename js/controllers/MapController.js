'use strict';

define(['./module', 'mapbox'], function(controllers) {

	controllers.controller('MapController', ['$scope', function($scope) {

		/*kirillstyopkin.h29f88g0
		zr0njcqy
		4l7djmvo*/

		$scope.init = function() {
			L.mapbox.map('map', 'examples.map-i87786ca', {
				minZoom: 2,
			    maxZoom: 14
			}).setView([0, 0], 2).zoomControl.setPosition('bottomright');
		};

		$scope.cluster = function() {

		};

	}]);

});