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
      { name: 'Share', icon: 'share' },
      { name: 'Upload', icon: 'upload' },
      { name: 'Copy', icon: 'copy' },
      { name: 'Print this page', icon: 'print' },
    ];

    $scope.listItemClick = function($index) {
      var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };
  });
