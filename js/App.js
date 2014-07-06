'use strict';

define(['angular', 
		'./controllers/index', 
		'./services/index'], function(angular) {

	return angular.module('App', [
		'ontour.controllers', 
		'ontour.services'
	]);

});