'use strict';

/**
 * @ngdoc directive
 * @name angularStudyApp.directive:namecard
 * @description
 * # namecard
 */
angular.module('angularStudyApp')
  .directive('namecard', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var name = attrs.name;
        element.text('this is the namecard directive, ' + name);
      }
    };
  });
