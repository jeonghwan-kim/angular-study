'use strict';

describe('Directive: namecard', function () {

  // load the directive's module
  beforeEach(module('angularStudyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<namecard></namecard>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the namecard directive');
  }));
});
