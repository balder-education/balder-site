'use strict';

describe('Controller: StatisticscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('balderSiteApp'));

  var StatisticscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StatisticscontrollerCtrl = $controller('StatisticscontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StatisticscontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
