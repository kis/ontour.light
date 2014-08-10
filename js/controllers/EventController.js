'use strict';

define(['./module'], function(controllers) {

	controllers.controller('EventController', ['$scope', function($scope) {

		$scope.$watchCollection('lastEvents', function() {
			if ($scope.lastEvents.length) {
				angular.forEach($scope.lastEvents, function(event) {
					$scope.addIcon(event);
					$scope.addMarker(event);
					$scope.addPopup(event);
				});

				$scope.events = $scope.events.concat($scope.lastEvents);
			} else {
				$scope.events = [];
				$scope.resetCluster();
			}
		});

		$scope.addIcon = function(event) {
			if (event.image[1]['#text']) {
				event.icon = L.icon({
					iconUrl: event.image[1]['#text'],
					iconSize: $scope.menu.activeTab.param == 'geo' ? [75, 75] : [25, 25],
					className: "dot"
				});
			}
		};

		$scope.addMarker = function(event) {
			if (event.venue.location['geo:point']['geo:lat'] && 
				event.venue.location['geo:point']['geo:long'] &&
				event.icon) {

				event.marker = L.marker([event.venue.location['geo:point']['geo:lat'], 
							  	 event.venue.location['geo:point']['geo:long']],
						{icon: event.icon});

				$scope.cluster.addLayer(event.marker);
			}
		};

		$scope.addPopup = function(event) {

			if (event.marker == null) {
				return false;
			}

			event.selected = false;

			event.popup = L.popup({
				autoPan: false,
				closeButton: false,
				offset: L.point(0, $scope.menu.activeTab.param == 'geo' ? -30 : -5),
				closeOnClick: false
			})
			.setLatLng(event.marker.getLatLng())
			.setContent('<div id="event-item">' +
						'<img src="' + event.image[1]['#text'] + '" class="artist-pic" />' +
						'<div class="artist-data">' +
						event.startDate + '<br/>' + 
						event.artists.headliner + '<br/><br/>' +
						event.venue.name + '<br/>' +
						event.venue.location.city + ' ' + event.venue.location.country + 
						'</div></div>');

			event.marker.on('mouseover', function() {
				$scope.showPopup(event);
			}, event);

			event.marker.on('mouseout', function() {
				$scope.hidePopup(event);
			}, event);

			event.marker.on('click', function() {
				$scope.selectEvent(event);
			}, event);
		};

		$scope.selectEvent = function(event) {
			if (event.popup != null) {
				if (event.selected) {
					$scope.hidePopup(event);
					event.selected = false;
				} else {
					$scope.showPopup(event);
					event.selected = true;
					$scope.map.panTo(event.marker.getLatLng());
					if(!$scope.$$phase) {
						$scope.$apply();
					}
				}
			}
		};

		$scope.showPopup = function(event) {
			if (event.popup != null && event.selected == false) {
				$scope.map.addLayer(event.popup);
				event.focused = true;
				if(!$scope.$$phase) {
					$scope.$apply();
				}
			}
		};

		$scope.hidePopup = function(event) {
			if (event.popup != null && event.selected == false) {
				$scope.map.removeLayer(event.popup);
				event.focused = false;
				if(!$scope.$$phase) {
					$scope.$apply();
				}
			}
		};

	}]);

});