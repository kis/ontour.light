'use strict';

angular.module('App', []).config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	},
	.when('/search', {
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	});
}]);