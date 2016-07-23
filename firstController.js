(function() {
	'use strict';

	var module = angular.module('angularExample');

	module.controller('FirstController', FirstController);

	FirstController.$inject = [
		'$scope'
	];

	function FirstController($scope) {
		var vm = this,
			counter = 0,
			msg = ['first', 'second', 'third'];

		vm.test = "IT IS FIRST CONTROLLER";
		vm.some = '';

		vm.clickHandler = clickHandler;

		function clickHandler(value) {
			console.log(value);
		}
	}

})();