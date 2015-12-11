'use strict';

/**
 * @ngdoc function
 * @name balderSiteApp.controller:LessoncontrollerCtrl
 * @description
 * # LessoncontrollerCtrl
 * Controller of the balderSiteApp
 */
balderSiteApp.controller('LessonController', function ($scope, $routeParams, LessonService, LessonByClassService) {
  $scope.lessonsByClass = LessonByClassService.query({id: $routeParams.id});

  $scope.lessons = LessonService.query();
});
