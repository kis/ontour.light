'use strict';

define(['angular', 
		'./controllers/index', 
		'./services/index'
		// 'ngScroll'
		], function(angular) {

	return angular.module('App', [
		'ontour.controllers', 
		'ontour.services'
		// 'infinite-scroll'
	]);

});