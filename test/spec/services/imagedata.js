'use strict';

describe('Service: imagedata', function () {

  // load the service's module
  beforeEach(module('durbeenApp'));

  // instantiate service
  var imagedata;
  beforeEach(inject(function (_imagedata_) {
    imagedata = _imagedata_;
  }));

  it('should do something', function () {
    expect(!!imagedata).toBe(true);
  });

});
