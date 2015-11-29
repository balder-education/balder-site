'use strict';

/**
 * @ngdoc function
 * @name balderSiteApp.controller:LessoncontrollerCtrl
 * @description
 * # LessoncontrollerCtrl
 * Controller of the balderSiteApp
 */
balderSiteApp.controller('LessonController', function ($scope, LessonService) {
    $scope.lessons = LessonService.query();
});
