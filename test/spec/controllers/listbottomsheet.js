'use strict';

describe('Controller: ListbottomsheetCtrl', function () {

  // load the controller's module
  beforeEach(module('balderSiteApp'));

  var ListbottomsheetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListbottomsheetCtrl = $controller('ListbottomsheetCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListbottomsheetCtrl.awesomeThings.length).toBe(3);
  });
});
