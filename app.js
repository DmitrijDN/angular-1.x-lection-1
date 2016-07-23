(function() {
	'use strict';

	var module = angular.module('angularExample', ['ngRoute']);
	// var module = angular.module('angularExample', []);

	module
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
				.when('/main', {
					templateUrl: './main.html',
					controller: 'FirstController',
					controllerAs: 'first',
				})
				.when('/some', {
					templateUrl: './some.html',
					controller: 'SecondController',
					controllerAs: 'second'
				})
				.otherwise({
					redirectTo: '/main'
				});
		}]);
})();