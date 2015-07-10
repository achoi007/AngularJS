/// <reference path="dtypes/angularjs/angular.d.ts" />
/// <reference path="dtypes/pusher/pusher.d.ts" />

var myApp = angular.module('AnimateApp', ['PusherMod']);

myApp.controller('AnimateCtrl', ['PusherService', '$log', '$scope',
    function (pusherServ, $log: angular.ILogService, $scope: angular.IScope) {
        var self = this;
        this.data = [];

        var channel: pusher.IChannel = pusherServ.testChannel;
        channel.bind('my_event', function (data) {
            $log.info('Got data', data);
            $scope.$apply(function () {
                self.data.push(data);
            });
        });
    }
]);