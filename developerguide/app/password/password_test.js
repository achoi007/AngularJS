'use strict';

describe('myApp.password module', function () {

    beforeEach(module('myApp.password'));
    var $controller;
    var $filter;
    var $compile;
    var $rootScope;

    beforeEach(inject(function (_$controller_, _$filter_, _$compile_, _$rootScope_) {
        $controller = _$controller_;
        $filter = _$filter_;
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('checks password strength', function () {
        var ctrl = $controller('PasswordChecker', {});
        
        ctrl.password = 'abc';
        ctrl.checkPassword();
        expect(ctrl.strength).toEqual('weak');

        ctrl.password = 'abcdef';
        ctrl.checkPassword();
        expect(ctrl.strength).toEqual('medium');

        ctrl.password = 'abcdefghi';
        ctrl.checkPassword();
        expect(ctrl.strength).toEqual('strong');
    });

    it('checks strength via filter', function () {
        var filter = $filter('strength');
        expect(filter('abc')).toEqual('weak');
        expect(filter('abcdef')).toEqual('medium');
        expect(filter('abcdefghi')).toEqual('strong');
    });

    it('checks strength via directive', function () {
        var elem = $compile("<check-strength password='abcdef'></check-strength>")($rootScope);
        expect(elem.text()).toContain("medium");
    });
});