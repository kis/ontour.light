'use strict';

define(['./module'], function(controllers) {

	controllers.controller('EventController', ['$scope', function($scope) {

		$scope.activeEvent = '';

		/*$scope.event = {
			id: 'id',
			title: 'title',
			artists: 'artists',
			date: 'date',
			venue: 'venue',
			image: null,
			icon: null,
			marker: null,
			popup: null,
			path: null,
			url: null,
			selected: false,
			filtered: true
		};*/

		// $scope.events = [];

	}]);

});