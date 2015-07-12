'use strict';

(function () {

    var myApp = angular.module('myApp.password', ['ngRoute']);

    myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/password', {
                templateUrl: 'password/password.html',
                controller: 'PasswordChecker as pwd',
            });
    }]);
    
    function computeStrength(password) {
        var pwdLen = password.length;
        if (pwdLen < 4) {
            return 'weak';
        }
        else if (pwdLen < 8) {
            return 'medium';
        }
        else {
            return 'strong';
        }
    }

    myApp.controller('PasswordChecker', ['$log', function ($log) {
        var self = this;
        this.password = '';
        this.strength = '';
        this.checkPassword = function () {
            self.strength = computeStrength(self.password);
        };
    }]);

    myApp.filter('strength', function () {
        return computeStrength;
    });

    myApp.directive('checkStrength', ['$log', function ($log) {
        return {
            restrict: 'E',
            scope: {
                password: '@',
            },
            link: function (scope, elem, attrs) {
                $log.info("Password is ", scope.password);
                elem.text(computeStrength(scope.password));
            },
        };
    }]);

})();