(function() {
	'use strict';

	var module = angular.module('angularExample');

	module.factory('MyService', MyService);

	MyService.$inject = [

	];


	function MyService() {
		var service = {
			someVar: 'TEST VARIABLE'
		}

		return service;
	}

})();