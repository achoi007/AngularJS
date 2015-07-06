'use strict';

(function() {
	
	var myApp = angular.module('myApp.invoice', ['ngRoute']);
	
	myApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/invoice1', {
			templateUrl: 'invoice/invoice1.html',
			controller: 'Invoice1Ctrl',
		})
		.when('/invoice_ccy1', {
			templateUrl: 'invoice/invoice_ccy.html',
			controller: 'InvoiceHardcodeCcyCtrl as invoice',
		})
		.when('/invoice_ccy2', {
			templateUrl: 'invoice/invoice_ccy.html',
			controller: 'InvoiceFakeCcyServiceCtrl as invoice',
		})		
		.when('/invoice', {
			templateUrl: 'invoice/invoice.html',
		});
	}]);
	
	myApp.controller('Invoice1Ctrl', function() {
		
	});
	
	
	// Using hardcoded currencies and exchange rates
	myApp.controller('InvoiceHardcodeCcyCtrl', function() {
		var self = this;
		
		this.qty = 0;
		this.costs = 0;
		this.inCurrency = "USD";
		
		this.pay = function() {
			window.alert("Thanks!");
			this.qty = 0;
			this.costs = 0;
		};
		
		this.canPay = function() {
			return self.qty > 0 && self.costs > 0;
		};
		
		this.currencies = [ "EUR", "USD", "CYD" ];
		
		this.total = function(ccy) {
			var xrate = self.xrates[ccy] / self.xrates[self.inCurrency];
			return self.qty * self.costs * xrate;
		};
		
		this.xrates = {
			"USD": 1.0,
			"EUR": 0.91,
			"CYD": 6.25,
		};
	});
	
	// Fake currency service
	myApp.service('FakeCcyService', function() {
		
		var self = this;
		
		this.xrates = {
			"USD": 1.0,
			"EUR": 0.91,
			"CYD": 6.25,
		};		
		
		this.currencies = function() {
			return [ "EUR", "USD", "CYD" ];	
		};
		
		this.convert = function(inCcy, outCcy) {
			return self.xrates[outCcy] / self.xrates[inCcy];
		};
	});
	
	// Using fake currency service
	myApp.controller('InvoiceFakeCcyServiceCtrl', ['FakeCcyService', '$log', function(FakeCcyService) {
		
		var self = this;
		
		this.qty = 0;
		this.costs = 0;
		this.inCurrency = "USD";
		
		this.pay = function() {
			window.alert("Thanks!");
			this.qty = 0;
			this.costs = 0;
		};
		
		this.canPay = function() {
			return self.qty > 0 && self.costs > 0;
		};
		
		this.currencies = FakeCcyService.currencies();
		
		this.total = function(ccy) {
			return self.qty * self.costs * FakeCcyService.convert(self.inCurrency, ccy);	
		};

	}]);
})();