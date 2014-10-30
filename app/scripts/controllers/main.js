'use strict';

/**
 * @ngdoc function
 * @name angularStudyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularStudyApp
 */
angular.module('angularStudyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
