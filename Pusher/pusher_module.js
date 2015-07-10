/// <reference path="js/pusher.min.js" />
/// <reference path="js/angular.js" />

angular.module('PusherMod', [])
.service('PusherService', function () {
    this.key = 'YOUR KEY HERE';
    this.pusher = new Pusher(this.key);
    this.testChannel = this.pusher.subscribe('test_channel');
});
