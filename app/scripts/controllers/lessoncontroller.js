'use strict';

/**
 * @ngdoc function
 * @name balderSiteApp.controller:LessoncontrollerCtrl
 * @description
 * # LessoncontrollerCtrl
 * Controller of the balderSiteApp
 */
balderSiteApp.controller('LessonController', function ($scope) {
    $scope.lessons = [
      {
        id:1,
        name: 'name1',
        description: 'description1',
        classId:1
      },
      {
        id:2,
        name: 'name2',
        description: 'description2',
        classId:1
      },
      {
        id:3,
        name: 'name3',
        description: 'description3',
        classId:1
      }
    ];
  });
