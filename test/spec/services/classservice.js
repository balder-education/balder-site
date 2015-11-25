'use strict';

describe('Service: ClassService', function () {

  // load the service's module
  beforeEach(module('balderSiteApp'));

  // instantiate service
  var ClassService;
  beforeEach(inject(function (_ClassService_) {
    ClassService = _ClassService_;
  }));

  it('should do something', function () {
    expect(!!ClassService).toBe(true);
  });

});
