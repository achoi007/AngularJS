'use strict';

(function() {
	
	var myApp = angular.module('myApp.spicy', ['ngRoute']);
	
	myApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/spicy', {
			templateUrl: 'spicy/spicy.html',
			controller: 'SpicyController as spicy',
		});
	}]);
	
	myApp.controller('SpicyController', ['$scope', function($scope) {
		
		$scope.spices = [ 'Chili', 'Pepper', 'Jalapeno' ];
		$scope.spice = $scope.spices[0];
		$scope.isCustom = false;
		$scope.customSpice = "";
		
		$scope.changeSpice = function(spice) {
			$scope.spice = spice;
			var spices = $scope.spices;
			for (var i = 0; i < spices.length; ++i) {
				if (spices[i] === spice) {
					$scope.isCustom = false;
					return;
				}
			}
			$scope.isCustom = true;
		};
	}]);

})();