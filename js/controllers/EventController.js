'use strict';

define(['./module'], function(controllers) {

	controllers.controller('EventController', ['$scope', function($scope) {

		$scope.activeEvent = '';

		$scope.$watchCollection('lastEvents', function() {
			angular.forEach($scope.lastEvents, function(event) {
				$scope.addIcon(event);
				$scope.addMarker(event);
				$scope.addPopup(event);
			});

			$scope.events = $scope.events.concat($scope.lastEvents);
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
			.setContent();

			var actions = {
				mouseover: $scope.showPopup,
				mouseout: $scope.hidePopup,
				click: $scope.selectEvent
			};

			event.marker.on(actions);
		};

		$scope.selectEvent = function() {
			if (event.popup != null) {
				if (event.selected) {
					$scope.hidePopup();
					event.selected = false;
				} else {
					$scope.showPopup();
					event.selected = true;
					$scope.map.panTo(event.marker.getLatLng());
				}
			}
			return false;
		};

		$scope.showPopup = function() {
			if (event.popup != null && event.selected == false) {
				$scope.map.addLayer(event.popup);
				return false;
			}
		};

		$scope.hidePopup = function() {
			if (event.popup != null && event.selected == false) {
				$scope.map.removeLayer(event.popup);
				return false;
			}
		};

	}]);

});