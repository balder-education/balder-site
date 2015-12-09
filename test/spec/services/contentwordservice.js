'use strict';

describe('Service: ContentWordService', function () {

  // load the service's module
  beforeEach(module('balderSiteApp'));

  // instantiate service
  var ContentWordService;
  beforeEach(inject(function (_ContentWordService_) {
    ContentWordService = _ContentWordService_;
  }));

  it('should do something', function () {
    expect(!!ContentWordService).toBe(true);
  });

});
