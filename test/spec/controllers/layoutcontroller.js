'use strict';

describe('Controller: LayoutcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('balderSiteApp'));

  var LayoutcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LayoutcontrollerCtrl = $controller('LayoutcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LayoutcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
