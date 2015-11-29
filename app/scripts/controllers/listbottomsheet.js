'use strict';

/**
 * @ngdoc function
 * @name balderSiteApp.controller:ListbottomsheetCtrl
 * @description
 * # ListbottomsheetCtrl
 * Controller of the balderSiteApp
 */

balderSiteApp.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
    $scope.items = [
      { name: 'Sobre', icon: 'share' },
      { name: 'Logout', icon: 'upload' },
    ];

    $scope.listItemClick = function($index) {
      var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };
  });
