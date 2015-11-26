var balderSiteApp = angular.module('balderSiteApp', ['ngRoute', 'ngResource', 'ngMaterial', 'ngMdIcons']);

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
};

balderSiteApp.constant("API_BASE_URL", "http://localhost:7777/");

balderSiteApp.config(function($routeProvider, $mdThemingProvider) {
  $routeProvider.when('/', {
             templateUrl: 'views/main.html',
             controller: 'MainController'
  })
  .when('/lesson', {
            templateUrl: 'views/lesson.html',
          	controller: 'LessonController'
  })
  .when('/class', {
            templateUrl: 'views/class.html',
          	controller: 'ClassController'
  })
  .when('/class/:id', {
            templateUrl: 'views/class.html',
            controller: 'ClassController'
  });

  var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('default')
    .primaryPalette('customBlue', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('pink');
  $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
  });
