(function() {
	'use strict';

	var module = angular.module('angularExample');

	module.controller('SecondController', SecondController);

	SecondController.$inject = [
		'$scope',
		'Constants',
		'MyService'
	];

	function SecondController($scope, constants, myService) {
		var vm = this;

		console.log(myService.someVar);
		console.log(constants.CONFIG_VAR);

		constants.CONFIG_VAR = 1232222;

		console.log(constants.CONFIG_VAR);

		vm.link = '';

		vm.show = false;

		vm.test = "IT IS SECOND CONTROLLER";

		vm.inputHandler = inputHandler;

		vm.arr = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3];

		setTimeout(function() {
			vm.show = true;
			vm.secondBold = true;
			$scope.$apply();
		}, 4000);

		function inputHandler(text) {
			console.log(text);
		}
	}
})();