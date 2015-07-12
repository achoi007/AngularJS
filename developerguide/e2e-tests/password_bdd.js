'use strict';

describe('BDD for password module', function () {

    it('should switch to password view', function () {
        browser.get('index.html#/password');
        expect(browser.getLocationAbsUrl()).toMatch("/password");
    });
});

describe('password check strength', function () {

    beforeEach(function () {
        browser.get('index.html#/password');
    });

    it('should check password strength', function () {
        var pwd = element(by.model('pwd.password'));
        var btn = element(by.id('btnCheck'));
        var spnStrength = element(by.id('spnStrength'));

        pwd.clear();
        pwd.sendKeys('abc');
        btn.click();
        expect(spnStrength.getText()).toEqual('weak');

        pwd.clear();
        pwd.sendKeys('abcdef');
        btn.click();
        expect(spnStrength.getText()).toEqual('medium');

        pwd.clear();
        pwd.sendKeys('abcdefghi');
        btn.click();
        expect(spnStrength.getText()).toEqual('strong');
    });
});