'use strict';

describe('Service: ContentService', function () {

  // load the service's module
  beforeEach(module('balderSiteApp'));

  // instantiate service
  var ContentService;
  beforeEach(inject(function (_ContentService_) {
    ContentService = _ContentService_;
  }));

  it('should do something', function () {
    expect(!!ContentService).toBe(true);
  });

});
