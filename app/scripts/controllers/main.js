'use strict';

/**
 * @ngdoc function
 * @name angularStudyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularStudyApp
 */
angular.module('angularStudyApp')
  .controller('MainCtrl', function ($scope, foo) {

      $scope.name = foo.name;

  });
