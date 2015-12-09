'use strict';

describe('Controller: ContentwordcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('balderSiteApp'));

  var ContentwordcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContentwordcontrollerCtrl = $controller('ContentwordcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContentwordcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
