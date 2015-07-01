'use strict';

describe('Directive: dbheader', function () {

  // load the directive's module
  beforeEach(module('durbeenApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dbheader></dbheader>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dbheader directive');
  }));
});
