'use strict';

/**
 * @ngdoc function
 * @name angularStudyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularStudyApp
 */
angular.module('angularStudyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
