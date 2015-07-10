/// <reference path="dtypes/angularjs/angular.d.ts" />
/// <reference path="dtypes/pusher/pusher.d.ts" />
var myApp = angular.module('AnimateApp', ['PusherMod']);
myApp.controller('AnimateCtrl', ['PusherService', '$log', '$scope',
    function (pusherServ, $log, $scope) {
        var self = this;
        this.data = [];
        var channel = pusherServ.testChannel;
        channel.bind('my_event', function (data) {
            $log.info('Got data', data);
            $scope.$apply(function () {
                self.data.push(data);
            });
        });
    }
]);
//# sourceMappingURL=app.js.map