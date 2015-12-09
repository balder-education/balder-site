'use strict';

/**
 * @ngdoc function
 * @name balderSiteApp.controller:ClasscontrollerCtrl
 * @description
 * # ClasscontrollerCtrl
 * Controller of the balderSiteApp
 */
balderSiteApp.controller('ClassController', function ($scope, ClassService) {
    $scope.classes = ClassService.query();
});
