'use strict';

describe('Service: prototype', function () {

  // load the service's module
  beforeEach(module('durbeenApp'));

  // instantiate service
  var prototype;
  beforeEach(inject(function (_prototype_) {
    prototype = _prototype_;
  }));

  it('should do something', function () {
    expect(!!prototype).toBe(true);
  });

});
