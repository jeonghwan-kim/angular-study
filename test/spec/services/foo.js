'use strict';

describe('Service: foo', function () {

  // load the service's module
  beforeEach(module('angularStudyApp'));

  // instantiate service
  var foo;
  beforeEach(inject(function (_foo_) {
    foo = _foo_;
  }));

  it('should do something', function () {
    expect(!!foo).toBe(true);
  });

});
