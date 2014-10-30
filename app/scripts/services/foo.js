'use strict';

/**
 * @ngdoc service
 * @name angularStudyApp.foo
 * @description
 * # foo
 * Service in the angularStudyApp.
 */
angular.module('angularStudyApp')
  .service('foo', function foo() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.name = 'JT';

  });
