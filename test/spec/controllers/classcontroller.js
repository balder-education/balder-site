'use strict';

describe('Controller: ClasscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('balderSiteApp'));

  var ClasscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClasscontrollerCtrl = $controller('ClasscontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClasscontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
