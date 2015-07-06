/// <reference path="js/angular.min.js" />

// Create module named 'myApp' with dependency on angular-messages
var myApp = angular.module('myApp', [ 'ngMessages', 'ngResource' ]);

// Create a new controller named mainController
myApp.controller('mainController', [ '$scope', '$log', '$filter', '$resource',
    function ($scope, $log, $filter, $resource) {

    // Play with logging
    $log.log("Hello.");
    $log.info("This is some information.");
    $log.warn("Warning!!!");
    $log.debug("Debugging is good.");
    $log.error("Stop Dave.")

    // Using filter service
    $scope.name = 'John';
    $scope.formattedName = $filter('uppercase')($scope.name);
    $log.info("Formatted name is " + $scope.formattedName);

    // From ngResource
    
}]);



