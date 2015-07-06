'use strict';

describe('myApp.spicy module', function() {
  
  beforeEach(module('myApp.spicy'));  

  describe('spicy controller', function() {
    
    var $scope, spicyCtrl;
    
    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      spicyCtrl = $controller('SpicyController', {$scope: $scope});
    }));      

    it('should change isCustom when custom spice', inject(function($controller) {
      //spec body
      
      $scope.changeSpice('Pepper');
      expect($scope.spice).toBe('Pepper');
      expect($scope.isCustom).toBe(false);
      
      $scope.changeSpice('Mo');
      expect($scope.spice).toBe('Mo');
      expect($scope.isCustom).toBe(true);      
    }));

  });
});