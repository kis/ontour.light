'use strict';

define(['./module'], function(controllers) {

	controllers.controller('SearchController', ['$scope', 'SearchService', function($scope, SearchService) {

		$scope.events = [];

		$scope.pages = {
			page: 0,
			total: 1,
			totalPages: 1
		};

		$scope.pages_orig = angular.copy($scope.pages);

		$scope.search = function(item) {
			$scope.reset();
			$scope.menu.searchValue = item;
			$scope.nextPage();
		};

		$scope.nextPage = function() {
			if ($scope.pages.page < $scope.pages.totalPages && $scope.menu.searchValue) {
				$scope.pages.page++;

				SearchService.search({
					param         : $scope.menu.activeTab.param, 
					location      : $scope.menu.searchValue, 
					artist        : $scope.menu.searchValue, 
					festivalsonly : $scope.menu.festivalsOnly, 
					tag 		  : $scope.menu.activeTag, 
					page 		  : $scope.pages.page
				})
				.success(function(response) {
					$scope.getEvents(response, $scope.menu.activeTab.param);
				});
			}
		};

		$scope.getEvents = function(data, param) {
			if (data.error == 8 || typeof data.events == 'undefined' || data.events.total == 0) {
				$scope.pages.totalPages = 0;
				return false;
			}

			$scope.pages.totalPages = data.events["@attr"].totalPages;
			$scope.pages.total = data.events["@attr"].total;

			if ($scope.pages.page == $scope.pages.totalPages && /1$/.test($scope.pages.total)) {
				// App.vent.trigger('addEvent', data.events.event);
			} else {
				$scope.events = $scope.events.concat(data.events.event);
			}
		};

		$scope.reset = function() {
			$scope.events = [];
			$scope.pages = angular.copy($scope.pages_orig);
			$scope.$broadcast('resetAutocomplete');
		};

	}]);

});