'use strict';

/**
 * @ngdoc function
 * @name balderSiteApp.controller:ContentcontrollerCtrl
 * @description
 * # ContentcontrollerCtrl
 * Controller of the balderSiteApp
 */
balderSiteApp.controller('ContentController', function ($scope, $routeParams, ContentService) {
    $scope.contents = ContentService.query({id: $routeParams.id});

    //Hangman
    
});
